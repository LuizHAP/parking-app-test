import { NextApiRequest, NextApiResponse } from 'next'
import HttpStatus from 'http-status-codes'
import { AxiosError } from 'axios'
import { parkingApi } from '@/services/parkingApi'

type QueryParams = {
  plate: string
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { plate } = req.query as QueryParams

  switch (req.method) {
    case 'POST':
      return out()
    default:
      return res.status(HttpStatus.METHOD_NOT_ALLOWED).json({
        message: `Method ${req.method} Not Allowed`
      })
  }

  async function out() {
    try {
      if (plate) {
        await parkingApi.post(`/parking/${plate}/out`)

        return res.status(HttpStatus.NO_CONTENT).json({})
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
