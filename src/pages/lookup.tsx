import { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useHotkeys } from 'react-hotkeys-hook'

import Main from '@/components/main'
import Page from '@/components/page'
import CommandPalette from '@/components/commandPalette'
import { api } from '@/utils/api'
import copyToClipboard from '@/utils/copyToClipboard'
import { booksAndChaptersMap } from '@/utils/books'

type Inputs = {
  scripture: string
}

const isValidScripture = (scripture: string) => scripture.includes(':')

export default function SwordPage() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)
  const [scripture, setScripture] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => {
    setScripture(data.scripture)
    reset()
  }

  const scripturesQuery = api.sword.scriptures.useQuery({
    scripture,
  })
  const { data: scriptureData, isLoading } = scripturesQuery
  const text = scriptureData
    ? `${scriptureData.reference}\n${scriptureData.text}`
    : ''
  const error = scriptureData && !scriptureData?.success

  useHotkeys(
    'meta+k',
    () => {
      setIsCommandPaletteOpen(!isCommandPaletteOpen)
    },
    [isCommandPaletteOpen]
  )
  useHotkeys(
    'ctrl+f',
    () => {
      // focus search input
      searchInputRef.current?.focus()
    },
    [isCommandPaletteOpen]
  )

  // create ref for search input
  const searchInputRef = useRef<HTMLInputElement>(null) // TODO: not compatible with react-hook-form (register)
  return (
    <Page>
      <Main className='flex flex-col p-4'>
        <div className='flex flex-grow flex-col space-y-4'>
          <h1>sword</h1>
          <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
            <input
              className='bg-cobalt block w-full'
              placeholder='gen1:1'
              {...register('scripture', {
                validate: scripture => isValidScripture(scripture),
              })}
              list='datalist-books'
            />
            <button
              className='block w-full translate-y-[-4px] transform rounded-lg bg-[#5a3e84] p-3 text-lg duration-[600ms] ease-[cubic-bezier(.3,.7,.4,1)] hover:ease-[cubic-bezier(.3,.7,.4,1.5)] disabled:pointer-events-none disabled:opacity-25 group-hover:translate-y-[-6px] group-hover:duration-[250ms] group-active:translate-y-[-2px] group-active:duration-[34ms]'
              type='submit'
              disabled={!isDirty}
            >
              search
            </button>
          </form>
          {scripture ? (
            error ? (
              <p>something went wrong</p>
            ) : isLoading ? (
              <p>searching for {scripture}</p>
            ) : text ? (
              <>
                <textarea className='bg-cobalt' value={text} />
                <button
                  className='block w-full translate-y-[-4px] transform rounded-lg bg-[#5a3e84] p-3 text-lg duration-[600ms] ease-[cubic-bezier(.3,.7,.4,1)] hover:ease-[cubic-bezier(.3,.7,.4,1.5)] disabled:pointer-events-none disabled:opacity-25 group-hover:translate-y-[-6px] group-hover:duration-[250ms] group-active:translate-y-[-2px] group-active:duration-[34ms]'
                  type='button'
                  onClick={() => {
                    copyToClipboard(text)
                    toast.success('copied text')
                  }}
                >
                  copy
                </button>
              </>
            ) : (
              <p>no results</p>
            )
          ) : null}
        </div>
      </Main>
      <CommandPalette
        commands={[
          {
            id: 'search-scriptures',
            title: 'search scriptures',
            action: (args?: unknown) => {
              // setIsScriptureSearchOpen(true)
            },
          },
        ]}
        isOpen={isCommandPaletteOpen}
        setIsOpen={setIsCommandPaletteOpen}
      />
      <datalist id='datalist-books'>
        {Object.entries(booksAndChaptersMap)
          .map(([book, chapter]) =>
            Array.from(
              {
                length: chapter,
              },
              (_, i) => i + 1
            ).map(ch => `${book.replace('.', '')} ${ch}:`)
          )
          .flat()
          .map(bookch => (
            <option key={bookch} value={bookch}>
              {bookch}
            </option>
          ))}
      </datalist>
    </Page>
  )
}
