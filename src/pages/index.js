import useSwr from 'swr'

import Page from '@/components/page'
import Main from '@/components/main'
import Title from '@/components/title'
import { bookIndex } from '@/lib/books'
import useLocalStorage from '@/lib/useLocalStorage'

const fetcher = url => fetch(url).then(res => res.json())

const Button = ({
  scripture,
  streak,
  setStreak,
  maxStreak,
  setMaxStreak,
  total,
  setTotal,
}) => {
  const [lastRead, setLastRead] = useLocalStorage('swordle-lastRead', null)
  const readToday = lastRead === scripture
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
        if (lastRead !== scripture) {
          const currentStreak = streak + 1
          setStreak(currentStreak)
          setLastRead(scripture)
          if (currentStreak > maxStreak) {
            setMaxStreak(currentStreak)
          }
          setTotal(total + 1)
        }
      }}
    >
      read chapter: {bookAndChapter}
      {readToday ? ' again' : ''}
    </a>
  )
}

const Home = () => {
  const { data } = useSwr('/api/sword', fetcher)
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
