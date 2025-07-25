import { z } from 'zod'

import fetcher from '@/utils/fetcher'

import requestDailyText from '@/utils/requestDailyText'
import { createTRPCRouter, publicProcedure } from '../trpc'
import { SwordData } from '@/utils/types'

type SciptureData = {
  success: boolean
  scripture: string
  text: string
  reference: string
}

export const swordRouter = createTRPCRouter({
  dt: publicProcedure
    .input(z.object({ date: z.string() }))
    .query(async ({ input }) => {
      const date = String(input.date).replace(/-/g, '/')
      const data: SwordData = await requestDailyText(date)
      return data
    }),
  scriptures: publicProcedure
    .input(z.object({ scripture: z.string() }))
    .query(async ({ input }) => {
      const { scripture } = input
      if (!scripture) {
        throw new Error('scripture is required')
      }
      const data: SciptureData = await fetcher(
        `https://api.dlopez.app/api/sword/scriptures/${input.scripture}`
      )
      return data
    }),
})
