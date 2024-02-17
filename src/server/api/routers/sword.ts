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

export const swordRouter = createTRPCRouter({
  dt: publicProcedure
    .input(z.object({ date: z.string() }))
    .query(async ({ input }) => {
      const data: SwordData = await fetcher(
        `https://api.dlopez.app/api/sword/dt/${input.date}`
      )
      return data
    }),
})
