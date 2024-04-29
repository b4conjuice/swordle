import { format } from 'date-fns/format'
import { subDays } from 'date-fns/subDays'

import Main from '@/components/main'
import Title from '@/components/title'
import StatisticsButton from './_components/statistics-button'
import SettingsButton from './_components/settings-button'
import Button from './_components/button'
import fetcher from '@/utils/fetcher'
import { SwordData } from '@/utils/types'

async function fetchDT(date: string) {
  const data = await fetcher<SwordData>(
    `https://api.dlopez.app/api/sword/mwt/${date}`
  )
  return data
}

export default async function Home() {
  const now = new Date()
  const today = format(now, 'yyyy-MM-dd')
  const yesterday = format(subDays(now, 1), 'yyyy-MM-dd')

  const data = await fetchDT(today)

  return (
    <Main className='flex flex-col p-4'>
      <div className='flex justify-end space-x-4'>
        <SettingsButton />
        <StatisticsButton today={today} />
      </div>
      <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
        <Title>swordle</Title>
        <Button today={today} yesterday={yesterday} data={data} />
      </div>
    </Main>
  )
}
