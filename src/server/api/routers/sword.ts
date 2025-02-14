import { z } from 'zod'

import fetcher from '@/utils/fetcher'

import { createTRPCRouter, publicProcedure } from '../trpc'

interface SwordData {
  comment: string
  dailyText: string
  date: string
  scripture: string
  success: boolean
  text: string
}

interface SciptureData {
  success: boolean
  scripture: string
  text: string
  reference: string
}
export const swordRouter = createTRPCRouter({
  dt: publicProcedure
    .input(z.object({ date: z.string() }))
    .query(async ({ input }) => {
      const data: SwordData = await fetcher(
        `https://api.dlopez.app/api/sword/dt/${input.date}`
      )
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
