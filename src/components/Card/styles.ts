import { styled } from '@/styles/stitches.config'

export const Container = styled('main', {
  backgroundColor: '$grey_scale_slot2',
  width: '100%',
  height: 'min(100vh - 82px)',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  paddingX: 8
})

export const Card = styled('div', {
  backgroundColor: '$white',
  width: '100%',
  marginTop: '3rem'
})

export const ButtonsWrapper = styled('div', {
  display: 'flex'
})

export const CardBody = styled('div', {
  width: '100%',
  padding: '40px 16px 2rem'
})

export const HeaderButton = styled('button', {
  width: '100%',
  backgroundColor: '$grey_scale_slot2',
  height: '50px',
  border: 'none',
  color: '$grey_scale_slot5',
  fontSize: '16px',
  lineHeight: '18.75px',

  variants: {
    active: {
      true: {
        backgroundColor: '$white',
        color: '$base_slot_1',
        borderBlockEnd: '$base_slot_1 3px solid'
      }
    }
  }
})

export const Button = styled('button', {
  marginTop: 13,
  width: '100%',
  fontSize: 15,
  textTransform: 'uppercase',
  lineHeight: '18px',
  height: 67,
  backgroundColor: '$base_slot_5',
  color: '$white',

  variants: {
    disabled: {
      true: {
        backgroundColor: '$disabled',
        color: '$grey_scale_slot5'
      }
    }
  }
})
