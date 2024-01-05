import { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  XMarkIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/solid'
import useSwr from 'swr'
import format from 'date-fns/format'
import subDays from 'date-fns/subDays'

import Page from '@/components/page'
import Main from '@/components/main'
import Title from '@/components/title'
import books, { bookIndex, booksAndChaptersMap } from '@/lib/books'
import useLocalStorage from '@/lib/useLocalStorage'
import fetcher from '@/lib/fetcher'

const DailyTextButton = ({
  scripture,
  today,
  yesterday,
  streak,
  setStreak,
  maxStreak,
  setMaxStreak,
  total,
  setTotal,
  lastRead,
  setLastRead,
  bookAndChapter: savedBookAndChapter,
  readToday,
}) => {
  const [bookAndChapter] = scripture
    ? scripture.split(':')
    : [savedBookAndChapter]
  const [book, chapter] = bookAndChapter.split(' ')
  const bookNumber = bookIndex(book)
  const bibleText = `${bookNumber}${chapter.padStart(3, '0')}001`

  const chapterLink = `https://www.jw.org/finder?srcid=jwlshare&wtlocale=E&prefer=lang&bible=${bibleText}&pub=nwtsty`
  return (
    <a
      className='group w-full cursor-pointer rounded-lg border-none bg-cb-dark-blue text-center text-lg'
      href={chapterLink}
      target='_blank'
      rel='noopener noreferrer'
      onClick={() => {
        if (!readToday) {
          setTotal(total + 1)
          const readYesterday = lastRead === yesterday
          setLastRead(today)

          if (readYesterday) {
            const currentStreak = streak + 1
            setStreak(currentStreak)
            if (currentStreak > maxStreak) {
              setMaxStreak(currentStreak)
            }
          } else {
            setStreak(1)
          }
        }
      }}
    >
      <span
        className={`block translate-y-[-4px] transform rounded-lg bg-[#5a3e84] p-3 text-lg duration-[600ms] ease-[cubic-bezier(.3,.7,.4,1)] hover:ease-[cubic-bezier(.3,.7,.4,1.5)] group-hover:translate-y-[-6px] group-hover:duration-[250ms] group-active:translate-y-[-2px] group-active:duration-[34ms] ${
          readToday ? 'text-cb-yellow' : 'text-gray-100'
        }`}
      >
        read chapter: {bookAndChapter}
        {readToday ? ' again' : ''}
      </span>
    </a>
  )
}

const getNextSequence = sequence => {
  const [bookNumberAsString, chapterAsString] = sequence.split(':')
  const bookNumber = Number(bookNumberAsString)
  const chapter = Number(chapterAsString)
  const bookName = books[bookNumber-1]
  const chapters = booksAndChaptersMap[bookName]
  const nextChapter = chapter >= chapters ? 1 : chapter + 1
  const nextBookNumber = chapter >= chapters ? (bookNumber + 1) % books.length : bookNumber
  const next = `${nextBookNumber}:${nextChapter}`
  return next
}
const getPrevSequence = sequence => {
  const [bookNumberAsString, chapterAsString] = sequence.split(':')
  const bookNumber = Number(bookNumberAsString)
  const chapter = Number(chapterAsString)
  const prevBookName = books[bookNumber-2]
  const prevChapters = booksAndChaptersMap[prevBookName]
  const prevChapter = chapter === 1 ? prevChapters : chapter - 1
  const prevBookNumber = chapter === 1 ? bookNumber - 1 : bookNumber
  const prev = prevBookNumber === 0 ? `66:22` :`${prevBookNumber}:${prevChapter}`
  return prev
}

const SequentialButton = ({
  today,
  yesterday,
  streak,
  setStreak,
  maxStreak,
  setMaxStreak,
  total,
  setTotal,
  lastRead,
  setLastRead,
  readToday,
  sequence,
  setSequence,
}) => {
  const prevSequence = getPrevSequence(sequence)
  const [bookNumber, chapter] = (readToday ? prevSequence : sequence).split(':')
  const bibleText = `${bookNumber}${chapter.padStart(3, '0')}001`
  const bookAndChapter = `${books[bookNumber-1]} ${chapter}`

  const chapterLink = `https://www.jw.org/finder?srcid=jwlshare&wtlocale=E&prefer=lang&bible=${bibleText}&pub=nwtsty`
  return (
    <a
      className='group w-full cursor-pointer rounded-lg border-none bg-cb-dark-blue text-center text-lg'
      href={chapterLink}
      target='_blank'
      rel='noopener noreferrer'
      onClick={() => {
        if (!readToday) {
          setSequence(getNextSequence(sequence))
          setTotal(total + 1)
          const readYesterday = lastRead === yesterday
          setLastRead(today)

          if (readYesterday) {
            const currentStreak = streak + 1
            setStreak(currentStreak)
            if (currentStreak > maxStreak) {
              setMaxStreak(currentStreak)
            }
          } else {
            setStreak(1)
          }
        }
      }}
    >
      <span
        className={`block translate-y-[-4px] transform rounded-lg bg-[#4a6da7] p-3 text-lg duration-[600ms] ease-[cubic-bezier(.3,.7,.4,1)] hover:ease-[cubic-bezier(.3,.7,.4,1.5)] group-hover:translate-y-[-6px] group-hover:duration-[250ms] group-active:translate-y-[-2px] group-active:duration-[34ms] ${
          readToday ? 'text-cb-yellow' : 'text-gray-100'
        }`}
      >
        read chapter: {bookAndChapter}
        {readToday ? ' again' : ''}
      </span>
    </a>
  )
}

const statisticsLabels = {
  total: 'total',
  streak: 'current streak',
  maxStreak: 'max streak',
}

const Statistics = ({ statistics, isOpen, setIsOpen }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        onClose={setIsOpen}
        className='fixed inset-0 flex flex-col justify-end overflow-y-auto p-4'
      >
        <Transition.Child
          enter='duration-300 ease-out'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='duration-200 ease-in'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-cobalt/90' />
        </Transition.Child>
        <Transition.Child
          enter='duration-300 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-200 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Dialog.Panel className='relative z-10 rounded-lg p-4 dark:bg-cb-dusty-blue dark:text-gray-100'>
            <button
              type='button'
              onClick={() => setIsOpen(false)}
              className='absolute right-4 top-4'
            >
              <XMarkIcon className='h-6 w-6' />
            </button>
            <div className='space-y-3'>
              <Dialog.Title className='mt-4 text-center text-xl'>
                statistics
              </Dialog.Title>
              <div className='grid grid-cols-3'>
                {Object.entries(statisticsLabels).map(([key, label]) => (
                  <div key={key}>
                    <div className='text-center text-4xl text-cb-pink'>
                      {statistics[key]}
                    </div>
                    <div className='text-center text-cb-light-blue'>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}

const buttonTypes = [
  { id: 'dailyText', text: 'Daily Text' },
  { id: 'sequential', text: 'Gen-Rev' },
]

const Home = () => {
  const now = new Date()
  const today = format(now, 'yyyy-MM-dd')
  const yesterday = format(subDays(now, 1), 'yyyy-MM-dd')
  const { data } = useSwr(() => `/api/sword/${today}`, fetcher)
  const [streak, setStreak] = useLocalStorage('swordle-streak', 0)
  const [maxStreak, setMaxStreak] = useLocalStorage('swordle-maxStreak', 0)
  const [total, setTotal] = useLocalStorage('swordle-total', 0)
  const [lastRead, setLastRead] = useLocalStorage('swordle-lastRead', null)
  const [bookAndChapter, setBookAndChapter] = useLocalStorage(
    'swordle-bookAndChapter'
  )
  const [buttonType, setButtonType] = useLocalStorage(
    'swordle-buttonType',
    'dailyText'
  )
  const [sequence, setSequence] = useLocalStorage(
    'swordle-sequence',
    '1:1'
  )

  useEffect(() => {
    if (data?.scripture) {
      const [latestBookAndChapter] = data.scripture.split(':')
      if (latestBookAndChapter !== bookAndChapter) {
        setBookAndChapter(latestBookAndChapter)
      }
    }
  }, [data, bookAndChapter, setBookAndChapter])
  const readToday = lastRead === today
  const [isOpen, setIsOpen] = useState(readToday || false)
  const [isSettingsDialogOpen, setIsSettingsDialogOpen] = useState(false)
  useEffect(() => {
    setIsOpen(readToday)
  }, [readToday])
  return (
    <Page>
      <Main className='flex flex-col p-4'>
        <div className='flex justify-end space-x-4'>
          <button type='button' onClick={() => setIsSettingsDialogOpen(true)}>
            <Cog6ToothIcon className='h-6 w-6' />
          </button>
          <button type='button' onClick={() => setIsOpen(true)}>
            <ChartBarIcon className='h-6 w-6' />
          </button>
        </div>
        <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
          <Title>swordle</Title>
          {(data || (bookAndChapter)) && ( buttonType === 'dailyText' ?
            <DailyTextButton
              {...data}
              today={today}
              yesterday={yesterday}
              streak={streak}
              setStreak={setStreak}
              maxStreak={maxStreak}
              setMaxStreak={setMaxStreak}
              total={total}
              setTotal={setTotal}
              lastRead={lastRead}
              setLastRead={setLastRead}
              bookAndChapter={bookAndChapter}
              readToday={readToday}
            />: <SequentialButton
              {...data}
              today={today}
              yesterday={yesterday}
              streak={streak}
              setStreak={setStreak}
              maxStreak={maxStreak}
              setMaxStreak={setMaxStreak}
              total={total}
              setTotal={setTotal}
              lastRead={lastRead}
              setLastRead={setLastRead}
              bookAndChapter={bookAndChapter}
              readToday={readToday}
              sequence={sequence}
              setSequence={setSequence}
            />
          ) }
          <Statistics
            statistics={{
              streak,
              maxStreak,
              total,
            }}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <Transition.Root show={isSettingsDialogOpen} as={Fragment}>
            <Dialog
              onClose={setIsOpen}
              className='fixed inset-0 flex flex-col justify-end overflow-y-auto p-4'
            >
              <Transition.Child
                enter='duration-300 ease-out'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='duration-200 ease-in'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='fixed inset-0 bg-cobalt/90' />
              </Transition.Child>
              <Transition.Child
                enter='duration-300 ease-out'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='duration-200 ease-in'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='relative z-10 rounded-lg p-4 dark:bg-cb-dusty-blue dark:text-gray-100'>
                  <button
                    type='button'
                    onClick={() => setIsSettingsDialogOpen(false)}
                    className='absolute right-4 top-4'
                  >
                    <XMarkIcon className='h-6 w-6' />
                  </button>
                  <div className='space-y-3'>
                    <Dialog.Title className='mt-4 text-center text-xl'>
                      settings
                    </Dialog.Title>
                    <select className='w-full bg-cobalt p-4' value={buttonType} onChange={e=>{
                      setButtonType(e.target.value)
                    }}>
                      {buttonTypes.map(bType => (
                        <option key={bType.id} value={bType.id}>
                          {bType.text}
                        </option>
                      ))}
                    </select>
                    {
                      buttonType==='sequential' && (
                        <div className='flex'>
                        <select className='w-full bg-cobalt p-4' value={sequence?.split(':')[0]} onChange={e=>{
                      const [, chapter] = sequence.split(':')
                      const newSequence = `${e.target.value}:${chapter}`
                      setSequence(newSequence)
                    }}>
                      {books.map((book, idx) => (
                        <option key={idx+1} value={idx+1}>
                          {book}
                        </option>
                      ))}
                    </select>
                    <select className='w-full bg-cobalt p-4' value={sequence?.split(':')[1]} onChange={e=>{
                      const [bookNumber, ] = sequence.split(':')
                      const newSequence = `${bookNumber}:${e.target.value}`
                      setSequence(newSequence)
                    }}>
                      {Array.from({length: booksAndChaptersMap[books[Number(sequence.split(':')[0])-1]]}, (_, i) => i + 1).map(ch => (
                        <option key={ch} value={ch}>
                          {ch}
                        </option>
                      ))}
                    </select>
                      </div>
                      )
                    }
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </Dialog>
          </Transition.Root>
        </div>
      </Main>
    </Page>
  )
}

export default Home
