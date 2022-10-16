import { InputMask } from '@/components/InputMask'
import { useParking } from '@/hooks/useParking'

import * as S from './styles'

export function Card() {
  const { parkingOption, updateParkingOption } = useParking()

  const isEntrance = parkingOption === 'entrance'

  const isExit = parkingOption === 'exit'

  return (
    <S.Container>
      <S.Card>
        <S.ButtonsWrapper>
          <S.HeaderButton
            active={isEntrance}
            onClick={() => updateParkingOption('entrance')}
          >
            Entrada
          </S.HeaderButton>
          <S.HeaderButton
            active={isExit}
            onClick={() => updateParkingOption('exit')}
          >
            Saída
          </S.HeaderButton>
        </S.ButtonsWrapper>
        {isEntrance ? (
          <S.CardBodyEntrance>
            <InputMask
              format="###-####"
              value="AAA-0000"
              label="Número da placa: "
            />
            <S.Button>Confirmar Entrada</S.Button>
          </S.CardBodyEntrance>
        ) : (
          <S.CardBodyExit>
            <InputMask
              format="###-####"
              value="AAA-0000"
              label="Número da placa: "
            />
            <S.ButtonExit>Pagamento</S.ButtonExit>
            <S.ButtonExit variant="outlined">Saída</S.ButtonExit>
            <S.ButtonExit variant="ghost">Ver histórico</S.ButtonExit>
          </S.CardBodyExit>
        )}
      </S.Card>
    </S.Container>
  )
}
