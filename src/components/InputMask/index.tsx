import React, { ComponentProps, InputHTMLAttributes, ReactNode } from 'react'

import { PatternFormat, PatternFormatProps } from 'react-number-format'
import { Input } from '../Input'

import type { InputProps } from '../Input'

type InputMaskProps = PatternFormatProps &
  ComponentProps<typeof PatternFormat> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'css'> & {
    hasError?: boolean
    errorMessage?: string
    label: string
  }

export const InputMask = React.forwardRef<HTMLInputElement, InputMaskProps>(
  ({ hasError = false, label, errorMessage, ...rest }) => (
    <PatternFormat {...rest} customInput={Input} label={label} />
  )
)
