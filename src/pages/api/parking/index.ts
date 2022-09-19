import { NextApiRequest, NextApiResponse } from 'next'
import HttpStatus from 'http-status-codes'
import { AxiosError } from 'axios'
import { parkingApi } from '@/services/parkingApi'

type ParkingResponse = {
  reservation: string
  plate: string
  entered_at: Date
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return parking()
    default:
      return res.status(HttpStatus.METHOD_NOT_ALLOWED).json({
        message: `Method ${req.method} Not Allowed`
      })
  }

  async function parking() {
    const { plate } = req.body

    try {
      const { data } = await parkingApi.post<ParkingResponse>('/parking', {
        plate
      })

      return res.status(HttpStatus.CREATED).json({
        reservation: data.reservation,
        plate: data.plate,
        entered_at: data.entered_at
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
