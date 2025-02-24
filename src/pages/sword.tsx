import Main from '@/components/main'
import Page from '@/components/page'
import CommandPalette from '@/components/commandPalette'
import Button from '@/components/button'
import books, { booksAndChaptersMap } from '@/utils/books'
import useLocalStorage from '@/utils/useLocalStorage'

type HistoryEntry = {
  chapterLink: string
  bookChapter: string
}

export default function SwordPage() {
  const [swordText, setSwordText] = useLocalStorage('sword-text', '1:1')
  const [history, setHistory] = useLocalStorage<HistoryEntry[]>(
    'sword-history',
    []
  )

  const bookNumber = swordText?.split(':')[0]
  const bookChapter = swordText?.split(':')[1]
  const bookName = swordText
    ? books[Number(swordText.split(':')[0]) - 1]
    : undefined
  const bookChapters = bookName ? booksAndChaptersMap[bookName] ?? 1 : 1
  const verse = '001'
  const bibleText = `${bookNumber}${(bookChapter ?? '').padStart(3, '0')}${verse}`

  const chapterLink = `https://www.jw.org/finder?srcid=jwlshare&wtlocale=E&prefer=lang&bible=${bibleText}&pub=nwtsty`
  const bookWithChapter = `${bookName} ${bookChapter}`
  return (
    <Page>
      <Main className='flex flex-col p-4'>
        <div className='flex flex-grow flex-col space-y-4'>
          <h1>sword</h1>
          <ul className='flex-grow space-y-4 overflow-y-scroll'>
            {[].map(({ chapterLink, bookChapter }) => (
              <li key={chapterLink}>
                <Button
                  onClick={() => {
                    window.open(chapterLink)
                  }}
                >
                  {bookChapter}
                </Button>
              </li>
            ))}
          </ul>
          <Button
            onClick={() => {
              setHistory([
                ...history,
                {
                  chapterLink,
                  bookChapter: bookWithChapter,
                },
              ])
              window.open(chapterLink)
            }}
          >
            {bookWithChapter}
          </Button>
          <div className='flex'>
            <select
              className='bg-cobalt w-full p-4'
              value={swordText?.split(':')[0]}
              onChange={e => {
                const newLookupText = `${e.target.value}:1`
                setSwordText(newLookupText)
              }}
            >
              {books.map((book, idx) => (
                <option key={idx + 1} value={idx + 1}>
                  {book}
                </option>
              ))}
            </select>
            <select
              className='bg-cobalt w-full p-4'
              value={swordText?.split(':')[1]}
              onChange={e => {
                const [bookNumber] = swordText.split(':')
                const newSequence = `${bookNumber}:${e.target.value}`
                setSwordText(newSequence)
              }}
            >
              {Array.from(
                {
                  length: bookChapters,
                },
                (_, i) => i + 1
              ).map(ch => (
                <option key={ch} value={ch}>
                  {ch}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Main>
      <CommandPalette
        commands={[
          {
            id: `go-text`,
            title: `go text`,
            action: () => {
              window.open(chapterLink, '_blank')
            },
          },
          ...books.map((book, index) => ({
            id: `lookup-${book}`,
            title: `lookup ${book}`,
            action: () => {
              setSwordText(`${index + 1}:1`)
            },
          })),
          ...Array.from(
            {
              length: bookChapters,
            },
            (_, i) => i + 1
          ).map(bookChapter => {
            return {
              id: `lookup-${bookName}-${bookChapter}`,
              title: `lookup ${bookName} ${bookChapter}`,
              action: () => {
                setSwordText(`${bookNumber}:${bookChapter}`)
              },
            }
          }),
        ]}
      />
    </Page>
  )
}
