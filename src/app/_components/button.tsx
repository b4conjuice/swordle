'use client'

import { useEffect } from 'react'

import books, { bookIndex, booksAndChaptersMap } from '@/utils/books'
import useLocalStorage from '@/utils/useLocalStorage'
import { SwordData } from '@/utils/types'

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
}: {
  scripture: string
  today: string
  yesterday: string
  streak: number
  setStreak: (streak: number) => void
  maxStreak: number
  setMaxStreak: (maxStreak: number) => void
  total: number
  setTotal: (total: number) => void
  lastRead: string | null
  setLastRead: (lastRead: string) => void
  bookAndChapter: string | undefined
  readToday: boolean
}) => {
  const [bookAndChapter] = scripture
    ? scripture.split(':')
    : [savedBookAndChapter]
  const [book, chapter] = (bookAndChapter ?? '').split(' ')
  const bookNumber = bookIndex(book ?? '')
  const bibleText = `${bookNumber}${chapter ?? ''.padStart(3, '0')}001`

  const chapterLink = `https://www.jw.org/finder?srcid=jwlshare&wtlocale=E&prefer=lang&bible=${bibleText}&pub=nwtsty`
  return (
    <a
      className='bg-cb-dark-blue group w-full cursor-pointer rounded-lg border-none text-center text-lg'
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

const getNextSequence = (sequence: string) => {
  const [bookNumberAsString, chapterAsString] = sequence.split(':')
  const bookNumber = Number(bookNumberAsString)
  const chapter = Number(chapterAsString)
  const bookNumberIndex = bookNumber - 1
  const bookName = books[bookNumberIndex]
  const chapters = bookName ? booksAndChaptersMap[bookName] : 1
  const nextChapter = chapters && chapter >= chapters ? 1 : chapter + 1
  const nextBookNumber =
    chapters && chapter >= chapters
      ? (bookNumber + 1) % books.length
      : bookNumber
  const next = `${nextBookNumber}:${nextChapter}`
  return next
}
const getPrevSequence = (sequence: string) => {
  const [bookNumberAsString, chapterAsString] = sequence.split(':')
  const bookNumber = Number(bookNumberAsString)
  const chapter = Number(chapterAsString)
  const prevBookNumberIndex = bookNumber - 2
  const prevBookName = books[prevBookNumberIndex]
  const prevChapters = prevBookName ? booksAndChaptersMap[prevBookName] : 1
  const prevChapter = chapter === 1 ? prevChapters : chapter - 1
  const prevBookNumber = chapter === 1 ? bookNumber - 1 : bookNumber
  const prev =
    prevBookNumber === 0 ? `66:22` : `${prevBookNumber}:${prevChapter}`
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
}: {
  today: string
  yesterday: string
  streak: number
  setStreak: (streak: number) => void
  maxStreak: number
  setMaxStreak: (maxStreak: number) => void
  total: number
  setTotal: (total: number) => void
  lastRead: string | null
  setLastRead: (lastRead: string) => void
  readToday: boolean
  sequence: string
  setSequence: (sequence: string) => void
}) => {
  const prevSequence = getPrevSequence(sequence)
  const [bookNumber, chapter] = (readToday ? prevSequence : sequence).split(':')
  const bibleText = `${bookNumber}${(chapter ?? '').padStart(3, '0')}001`
  const bookAndChapter = `${books[Number(bookNumber) - 1]} ${chapter}`

  const chapterLink = `https://www.jw.org/finder?srcid=jwlshare&wtlocale=E&prefer=lang&bible=${bibleText}&pub=nwtsty`
  return (
    <a
      className='bg-cb-dark-blue group w-full cursor-pointer rounded-lg border-none text-center text-lg'
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

export default function Button(props: {
  today: string
  yesterday: string
  data: SwordData
}) {
  const { today, yesterday, data } = props
  const [streak, setStreak] = useLocalStorage('swordle-streak', 0)
  const [maxStreak, setMaxStreak] = useLocalStorage('swordle-maxStreak', 0)
  const [total, setTotal] = useLocalStorage('swordle-total', 0)
  const [lastRead, setLastRead] = useLocalStorage<string | null>(
    'swordle-lastRead',
    null
  )
  const [bookAndChapter, setBookAndChapter] = useLocalStorage<
    string | undefined
  >('swordle-bookAndChapter')
  const [buttonType, setButtonType] = useLocalStorage(
    'swordle-buttonType',
    'sequential'
  )
  const [sequence, setSequence] = useLocalStorage('swordle-sequence', '1:1')

  useEffect(() => {
    if (data?.scripture) {
      const [latestBookAndChapter] = data.scripture.split(':')
      if (latestBookAndChapter !== bookAndChapter) {
        setBookAndChapter(latestBookAndChapter)
      }
    }
  }, [data, bookAndChapter, setBookAndChapter])
  const readToday = lastRead === today

  if ((data ?? bookAndChapter) && buttonType === 'dailyText') {
    return (
      <DailyTextButton
        scripture={data?.scripture ?? ''}
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
    )
  }
  if (sequence) {
    return (
      <SequentialButton
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
        readToday={readToday}
        sequence={sequence}
        setSequence={setSequence}
      />
    )
  }
  return null
}
