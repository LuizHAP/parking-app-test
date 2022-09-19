import React, { InputHTMLAttributes } from 'react'

import { Error } from '@/assets/icons'

import * as S from './styles'

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'css'> & {
  placeholder: string
  label: string
  hasError?: boolean
  errorMessage?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ hasError = false, errorMessage, label, ...rest }, ref) => (
    <S.Container hasError={hasError} data-testid="input-test">
      <S.InputLegend>{label}</S.InputLegend>
      <S.InputField ref={ref} {...rest} />

      {errorMessage && hasError && (
        <S.ErrorMessage>
          <p>
            <Error />
            {errorMessage}
          </p>
        </S.ErrorMessage>
      )}
    </S.Container>
  )
)
