import { useContext } from 'react'

import { ParkingContext } from '@/contexts/ParkingContext'

export const useParking = () => useContext(ParkingContext)
