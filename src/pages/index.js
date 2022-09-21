import { useEffect } from 'react'
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
  bookAndChapter: savedBookAndChapter,
}) => {
  const [lastRead, setLastRead] = useLocalStorage('swordle-lastRead', null)
  const readToday = lastRead === today
  const [bookAndChapter] = scripture
    ? scripture.split(':')
    : [savedBookAndChapter]
  const [book, chapter] = bookAndChapter.split(' ')
  const bookNumber = bookIndex(book)
  const bibleText = `${bookNumber}${chapter.padStart(3, '0')}001`

  const chapterLink = `https://www.jw.org/finder?srcid=jwlshare&wtlocale=E&prefer=lang&bible=${bibleText}&pub=nwtsty`
  return (
    <a
      className='group cursor-pointer rounded-lg border-none bg-cb-dark-blue text-lg'
      href={chapterLink}
      target='_blank'
      rel='noopener noreferrer'
      onClick={() => {
        if (lastRead !== today) {
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
        className={`block translate-y-[-4px] transform rounded-lg bg-[#5a3e84] px-2 py-2 text-lg duration-[600ms] ease-[cubic-bezier(.3,.7,.4,1)] hover:ease-[cubic-bezier(.3,.7,.4,1.5)] group-hover:translate-y-[-6px] group-hover:duration-[250ms] group-active:translate-y-[-2px] group-active:duration-[34ms] ${
          readToday ? 'text-cb-yellow' : 'text-gray-100'
        }`}
      >
        read chapter: {bookAndChapter}
        {readToday ? ' again' : ''}
      </span>
    </a>
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
  return (
    <Page>
      <Main className='flex flex-col items-center justify-center space-y-4'>
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
            bookAndChapter={bookAndChapter}
          />
        )}
        <p>current streak: {streak}</p>
        <p>max streak: {maxStreak}</p>
        <p>total: {total}</p>
      </Main>
    </Page>
  )
}

export default Home
