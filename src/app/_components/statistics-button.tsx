'use client'

import { useEffect, useState } from 'react'
import { ChartBarIcon } from '@heroicons/react/24/solid'

import Modal from '@/components/modal'
import useLocalStorage from '@/utils/useLocalStorage'

const statisticsLabels = {
  total: 'total',
  streak: 'current streak',
  maxStreak: 'max streak',
}

type StasticsType = Record<string, number>

export default function StatisticsButton(props: { today: string }) {
  const { today } = props
  const [streak] = useLocalStorage('swordle-streak', 0)
  const [maxStreak] = useLocalStorage('swordle-maxStreak', 0)
  const [total] = useLocalStorage('swordle-total', 0)
  const [lastRead] = useLocalStorage<string | null>('swordle-lastRead', null)

  const readToday = lastRead === today
  const [isOpen, setIsOpen] = useState(readToday || false)
  useEffect(() => {
    setIsOpen(readToday)
  }, [readToday])

  const statistics: StasticsType = {
    streak,
    maxStreak,
    total,
  }
  return (
    <>
      <button type='button' onClick={() => setIsOpen(true)}>
        <ChartBarIcon className='h-6 w-6' />
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='statistics'>
        <div className='grid grid-cols-3'>
          {Object.entries(statisticsLabels).map(([key, label]) => (
            <div key={key}>
              <div className='text-cb-pink text-center text-4xl'>
                {statistics[key]}
              </div>
              <div className='text-cb-light-blue text-center'>{label}</div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  )
}
