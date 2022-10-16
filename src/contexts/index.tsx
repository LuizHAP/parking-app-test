import { ReactNode } from 'react'

import { ParkingProvider } from './ParkingContext'

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <ParkingProvider>{children}</ParkingProvider>
)
