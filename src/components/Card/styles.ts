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
  marginTop: '3rem',
  borderRadius: '0px 0px 4px 4px'
})

export const ButtonsWrapper = styled('div', {
  display: 'flex'
})

export const CardBodyEntrance = styled('form', {
  width: '100%',
  padding: '40px 16px 64px'
})

export const HeaderButton = styled('button', {
  width: '100%',
  backgroundColor: '$grey_scale_slot2',
  height: '50px',
  border: 'none',
  color: '$grey_scale_slot5',
  fontSize: '16px',
  lineHeight: '18.75px',
  cursor: 'pointer',

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
  outline: 0,
  whiteSpace: 'nowrap',
  border: 0,
  cursor: 'pointer',
  borderRadius: 4,

  variants: {
    disabled: {
      true: {
        backgroundColor: '$disabled',
        color: '$grey_scale_slot5',
        cursor: 'not-allowed'
      }
    }
  }
})

export const CardBodyExit = styled('form', {
  width: '100%',
  padding: '40px 16px 0'
})

export const ButtonExit = styled('button', {
  marginTop: 13,
  width: '100%',
  fontSize: 15,
  textTransform: 'uppercase',
  lineHeight: '18px',
  height: 67,
  backgroundColor: '$base_slot_3',
  color: '$white',
  outline: 0,
  whiteSpace: 'nowrap',
  border: 0,
  cursor: 'pointer',
  borderRadius: 4,

  variants: {
    variant: {
      outlined: {
        backgroundColor: 'transparent',
        color: '$base_slot_3',
        borderWidth: '2px',
        borderColor: '$base_slot_3',
        borderStyle: 'solid'
      },

      ghost: {
        color: '$base_slot_1',
        marginTop: 0,
        backgroundColor: 'transparent'
      }
    }
  }
})

export const ButtonExitOutlined = styled('button', {
  marginTop: 13,
  width: '100%',
  fontSize: 15,
  textTransform: 'uppercase',
  lineHeight: '18px',
  height: 67,
  backgroundColor: '$base_slot_3',
  color: '$white',
  outline: 0,
  whiteSpace: 'nowrap',
  border: 0,
  cursor: 'pointer',
  borderRadius: 4
})
