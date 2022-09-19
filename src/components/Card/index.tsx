import { InputMask } from '@/components/InputMask'
import { useState } from 'react'
import * as S from './styles'

export function Card() {
  const [isEntranceOption, setIsEntranceOption] = useState(true)

  return (
    <S.Container>
      <S.Card>
        <S.ButtonsWrapper>
          <S.HeaderButton
            active={isEntranceOption}
            onClick={() => setIsEntranceOption(true)}
          >
            Entrada
          </S.HeaderButton>
          <S.HeaderButton
            active={!isEntranceOption}
            onClick={() => setIsEntranceOption(false)}
          >
            Saída
          </S.HeaderButton>
        </S.ButtonsWrapper>
        {isEntranceOption ? (
          <S.CardBodyEntrance>
            <InputMask
              mask="aaa-9999"
              defaultValue="AAA-0000"
              label="Número da placa: "
            />
            <S.Button>Confirmar Entrada</S.Button>
          </S.CardBodyEntrance>
        ) : (
          <S.CardBodyExit>
            <InputMask
              mask="aaa-9999"
              defaultValue="AAA-0000"
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
