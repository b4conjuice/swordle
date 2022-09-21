import { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, ChartBarIcon } from '@heroicons/react/24/solid'
import useSwr from 'swr'
import format from 'date-fns/format'
import subDays from 'date-fns/subDays'

import Page from '@/components/page'
import Main from '@/components/main'
import Title from '@/components/title'
import { bookIndex } from '@/lib/books'
import useLocalStorage from '@/lib/useLocalStorage'
import fetcher from '@/lib/fetcher'

const Button = ({
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
  useEffect(() => {
    setIsOpen(readToday)
  }, [readToday])
  return (
    <Page>
      <Main className='flex flex-col p-4'>
        <div className='flex justify-end'>
          <button type='button' onClick={() => setIsOpen(true)}>
            <ChartBarIcon className='h-6 w-6' />
          </button>
        </div>
        <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
          <Title>swordle</Title>
          {(data || bookAndChapter) && (
            <Button
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
            />
          )}
          <Statistics
            statistics={{
              streak,
              maxStreak,
              total,
            }}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </Main>
    </Page>
  )
}

export default Home
