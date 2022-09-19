import React, { ComponentProps, InputHTMLAttributes } from 'react'

import ReactInputMask, { Props as ReactInputMaskProps } from 'react-input-mask'

import * as S from './styles'

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'css'> & {
  placeholder: string
  label: string
  hasError?: boolean
  errorMessage?: string
}

type InputMaskProps = ReactInputMaskProps &
  ComponentProps<typeof ReactInputMask> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'css'> & {
    label: string
    hasError?: boolean
    errorMessage?: string
  }

export const InputMask = React.forwardRef<HTMLInputElement, InputMaskProps>(
  ({ hasError = false, errorMessage, label, ...rest }, ref) => (
    <ReactInputMask {...rest} alwaysShowMask data-testid="input-mask">
      {(inputProps: InputProps) => (
        <S.Container {...inputProps}>
          <S.InputLegend>{label}</S.InputLegend>
          <S.InputField ref={ref} {...rest} />

          {errorMessage && hasError && (
            <S.ErrorMessage>
              <p>{errorMessage}</p>
            </S.ErrorMessage>
          )}
        </S.Container>
      )}
    </ReactInputMask>
  )
)
