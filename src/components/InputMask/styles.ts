import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column'
})

export const InputLegend = styled('legend', {
  display: 'flex',
  marginBottom: '7px',
  fontSize: '16px',
  fontWeight: '400',
  color: '$grey_scale_slot5',
  lineHeight: '21.79px'
})

export const InputField = styled('input', {
  height: '67px',
  outlineWidth: '0',
  fontSize: '16px',
  border: '1px solid #cccccc',
  borderRadius: 4,
  backgroundColor: '$yellow_bg',
  textAlign: 'center',

  color: '$grey_scale_slot5'
})

export const ErrorMessage = styled('span', {
  fontSize: '12',

  '& p': {
    display: 'flex',
    flexBasis: '100%',
    height: '0'
  }
})
