import { NextApiRequest, NextApiResponse } from 'next'
import HttpStatus from 'http-status-codes'
import { AxiosError } from 'axios'
import { parkingApi } from '@/services/parkingApi'

type QueryParams = {
  plate: string
}

type HistoryResponse = Array<{
  time: string
  paid: boolean
  left: boolean
  plate: string
  reservation: string
}>

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { plate } = req.query as QueryParams

  switch (req.method) {
    case 'GET':
      return getHistory()
    default:
      return res.status(HttpStatus.METHOD_NOT_ALLOWED).json({
        message: `Method ${req.method} Not Allowed`
      })
  }

  async function getHistory() {
    try {
      if (plate) {
        const { data } = await parkingApi.get<HistoryResponse>(
          `/parking/${plate}`
        )

        return res.status(HttpStatus.OK).json(data)
      }

      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Plate is required'
      })
    } catch (error) {
      const err = error as AxiosError
      const statusCode = err.response?.status ?? 404
      const data = err.response?.data ?? {}

      return res.status(statusCode).json(data)
    }
  }
}

export default handler
