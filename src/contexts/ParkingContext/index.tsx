import { createContext, ReactNode, useMemo, useState, useCallback } from 'react'

type ParkingContextType = {
  updateParkingOption: (parkingOption: ParkingOptionsType) => void
  parkingOption: ParkingOptionsType
}

type ParkingContextProps = {
  children: ReactNode
}

type ParkingOptionsType = 'entrance' | 'exit'

export const ParkingContext = createContext({} as ParkingContextType)

export function ParkingProvider({ children }: ParkingContextProps) {
  const [parkingOption, setParking] = useState<ParkingOptionsType>('entrance')

  const updateParkingOption = useCallback(
    (parkingOption: ParkingOptionsType) => {
      setParking(parkingOption)
    },
    []
  )

  const parkingContextValue: ParkingContextType = useMemo(
    () => ({
      updateParkingOption,
      parkingOption
    }),
    [updateParkingOption, parkingOption]
  )

  return (
    <ParkingContext.Provider value={parkingContextValue}>
      {children}
    </ParkingContext.Provider>
  )
}
