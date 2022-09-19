import { globalCss } from '@/styles/stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    pointerEvents: 'all'
  },
  ':root': {
    '--app-height': '100vh'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    height: 'var(--app-height)',

    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none'
  },
  '#__next': {
    flex: 1,
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  'body, input, textarea, select, legend, button': {
    fontFamily: '$openSans'
  }
})
