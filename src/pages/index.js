import useSwr from 'swr'

import Page from '@/components/page'
import Main from '@/components/main'
import Title from '@/components/title'
import { bookIndex } from '@/lib/books'

const fetcher = url => fetch(url).then(res => res.json())

const Button = ({ scripture }) => {
  const [bookAndChapter] = scripture.split(':')
  const [book, chapter] = bookAndChapter.split(' ')
  const bookNumber = bookIndex(book)
  const bibleText = `${bookNumber}${chapter.padStart(3, '0')}001`

  const chapterLink = `https://www.jw.org/finder?srcid=jwlshare&wtlocale=E&prefer=lang&bible=${bibleText}&pub=nwtsty`
  return (
    <a
      className='hover:text-cb-pink'
      href={chapterLink}
      target='_blank'
      rel='noopener noreferrer'
    >
      read chapter: {bookAndChapter}
    </a>
  )
}

const Home = () => {
  const { data } = useSwr('/api/sword', fetcher)
  return (
    <Page>
      <Main className='flex flex-col items-center justify-center space-y-4'>
        <Title>swordle</Title>
        {data && <Button {...data} />}
      </Main>
    </Page>
  )
}

export default Home
