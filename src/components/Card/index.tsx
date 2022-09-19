import { InputMask } from '@/components/InputMask'
import * as S from './styles'

export function Card() {
  return (
    <S.Container>
      <S.Card>
        <S.ButtonsWrapper>
          <S.HeaderButton active>Entrada</S.HeaderButton>
          <S.HeaderButton>Saída</S.HeaderButton>
        </S.ButtonsWrapper>
        <S.CardBody>
          <InputMask
            mask="aaa-9999"
            defaultValue="AAA-0000"
            label="Número da placa: "
          />
          <S.Button>Confirmar Entrada</S.Button>
        </S.CardBody>
      </S.Card>
    </S.Container>
  )
}
