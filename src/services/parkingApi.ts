import axios from 'axios'

export const parkingApi = axios.create({
  baseURL: process.env.PARKING_LOT_API_URL,
  headers: {
    ContentType: 'application/json'
  }
})
