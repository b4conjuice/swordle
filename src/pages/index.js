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
}) => {
  const [lastRead, setLastRead] = useLocalStorage('swordle-lastRead', null)
  const readToday = lastRead === today
  const [bookAndChapter] = scripture.split(':')
  const [book, chapter] = bookAndChapter.split(' ')
  const bookNumber = bookIndex(book)
  const bibleText = `${bookNumber}${chapter.padStart(3, '0')}001`

  const chapterLink = `https://www.jw.org/finder?srcid=jwlshare&wtlocale=E&prefer=lang&bible=${bibleText}&pub=nwtsty`
  return (
    <a
      className={`text-lg font-bold hover:text-cb-pink ${
        readToday ? 'text-cb-light-blue' : ''
      }`}
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
      read chapter: {bookAndChapter}
      {readToday ? ' again' : ''}
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
  return (
    <Page>
      <Main className='flex flex-col items-center justify-center space-y-4'>
        <Title>swordle</Title>
        {data && (
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
