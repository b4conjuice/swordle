'use client'

import { useState } from 'react'
import { Cog6ToothIcon } from '@heroicons/react/24/solid'

import Modal from '@/components/modal'
import useLocalStorage from '@/utils/useLocalStorage'
import books, { booksAndChaptersMap } from '@/utils/books'

const buttonTypes = [
  { id: 'dailyText', text: 'Daily Text' },
  { id: 'sequential', text: 'Gen-Rev' },
]

export default function SettingsButton() {
  const [buttonType, setButtonType] = useLocalStorage(
    'swordle-buttonType',
    'sequential'
  )
  const [sequence, setSequence] = useLocalStorage('swordle-sequence', '1:1')
  const [isOpen, setIsOpen] = useState(false)

  const sequenceBookName = sequence
    ? books[Number(sequence.split(':')[0]) - 1]
    : undefined
  const sequenceChapters = sequenceBookName
    ? booksAndChaptersMap[sequenceBookName] ?? 1
    : 1
  return (
    <>
      <button type='button' onClick={() => setIsOpen(true)}>
        <Cog6ToothIcon className='h-6 w-6' />
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='settings'>
        <select
          className='bg-cobalt w-full p-4'
          value={buttonType}
          onChange={e => {
            setButtonType(e.target.value)
          }}
        >
          {buttonTypes.map(bType => (
            <option key={bType.id} value={bType.id}>
              {bType.text}
            </option>
          ))}
        </select>

        {buttonType === 'sequential' && (
          <div className='flex'>
            <select
              className='bg-cobalt w-full p-4'
              value={sequence?.split(':')[0]}
              onChange={e => {
                const [, chapter] = sequence.split(':')
                const newSequence = `${e.target.value}:${chapter}`
                setSequence(newSequence)
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
              value={sequence?.split(':')[1]}
              onChange={e => {
                const [bookNumber] = sequence.split(':')
                const newSequence = `${bookNumber}:${e.target.value}`
                setSequence(newSequence)
              }}
            >
              {Array.from(
                {
                  length: sequenceChapters,
                },
                (_, i) => i + 1
              ).map(ch => (
                <option key={ch} value={ch}>
                  {ch}
                </option>
              ))}
            </select>
          </div>
        )}
      </Modal>
    </>
  )
}
