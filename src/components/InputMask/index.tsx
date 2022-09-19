import React, { ComponentProps, InputHTMLAttributes } from 'react'

import ReactInputMask, { Props as ReactInputMaskProps } from 'react-input-mask'
import { Input } from '../Input'

import type { InputProps } from '../Input'

type InputMaskProps = ReactInputMaskProps &
  ComponentProps<typeof ReactInputMask> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'css'> & {
    label: string
    hasError?: boolean
    errorMessage?: string
    maskChar?: string
    autoFocus?: boolean
  }

export const InputMask = React.forwardRef<HTMLInputElement, InputMaskProps>(
  ({ hasError = false, errorMessage, label, ...rest }, ref) => (
    <ReactInputMask {...rest} alwaysShowMask data-testid="input-mask">
      {(inputProps: InputProps) => (
        <Input
          {...inputProps}
          hasError={hasError}
          label={label}
          errorMessage={errorMessage}
          ref={ref}
        />
      )}
    </ReactInputMask>
  )
)
