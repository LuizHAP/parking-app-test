import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset
} = createStitches({
  prefix: 'parking-app-theme',
  theme: {
    colors: {
      // Base colors
      base_slot_1: '#4DD0E1',
      base_slot_2: '#F1B147',
      base_slot_3: '#A769B2',
      base_slot_4: '#35E4BD',
      base_slot_5: '#28DD91',

      // Support colors
      support_slot1: '#FFCE00',
      support_slot2: '#FF253A',
      support_slot3: '#59C00B',
      support_slot4: '#1992FF',
      yellow_bg: '#FFFBE6',

      // Gray Scale
      white: '#FFFFFF',
      grey_scale_slot2: '#F2F2F2',
      grey_scale_slot3: '#C6C6C6',
      grey_scale_slot4: '#AEAEAE',
      grey_scale_slot5: '#9B9B9B',
      grey_scale_slot6: '#515151',
      disabled: '#DADADA'
    },
    fonts: {
      openSans: 'Open Sans'
    }
  },
  utils: {
    paddingX: (value: number) => ({
      paddingLeft: value,
      paddingRight: value
    }),

    paddingY: (value: number) => ({
      paddingTop: value,
      paddingBottom: value
    }),

    marginX: (value: number) => ({
      marginLeft: value,
      marginRight: value
    }),

    marginY: (value: number) => ({
      marginTop: value,
      marginBottom: value
    })
  }
})
