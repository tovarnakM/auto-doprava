import { math, rem } from 'polished'
import { createGlobalStyle, css } from 'styled-components'
import 'sanitize.css'

export const BORDER_WIDTH = {
  PX_1: '1px',
  PX_2: '2px',
  PX_3: '3px',
  PX_4: '4px'
}

export const COLOR = {
  WHITE: '#FFF',
  BLACK: '#000'
}

export const SPACE = {
  PX_5: rem(5),
  PX_10: rem(10),
  PX_12: rem(12),
  PX_15: rem(15),
  PX_20: rem(20),
  PX_24: rem(24),
  PX_30: rem(30),
  PX_40: rem(40),
  PX_60: rem(60),
  PX_100: rem(100),
  PX_200: rem(200)
}

export const FONT_SIZE = {
  PX_12: rem(12),
  PX_13: rem(13),
  PX_14: rem(14),
  PX_16: rem(16),
  PX_18: rem(18),
  PX_20: rem(20),
  PX_24: rem(24),
  PX_32: rem(32),
  PX_36: rem(36),
  PX_40: rem(40),
  PX_48: rem(48),
  PX_56: rem(56)
}

export const FONT_WEIGHT = {
  W_100: '100',
  W_200: '200',
  W_400: '400',
  W_500: '500',
  W_600: '600',
  W_700: '700'
}

export const FONT_FAMILY = 'Inter'

export const RADIUS = {
  PX_1: rem(1),
  PX_2: rem(2),
  PX_3: rem(3),
  PX_4: rem(4),
  PX_6: rem(6),
  PX_8: rem(8),
  PX_10: rem(10),
  PX_14: rem(14),
  CIRCLE: '50%'
}

export const LINE_HEIGHT = {
  S: 1.3,
  M: 1.4,
  XL: 1.75
}

export const DEVICE = {
  MOBILE: '0',
  TABLET: '768px',
  DESKTOP: '1024px',
  TV: '1920px'
}

const mediaQuery = ({ mobileFirst = true }) =>
  Object.entries(DEVICE).reduce(
    (deviceMediaQueries, [label, breakpoint]) => ({
      ...deviceMediaQueries,
      [label]: (...args) => css`
        @media screen and (${mobileFirst ? 'min-width' : 'max-width'}: ${math(
            `${breakpoint} - 0.1px`
          )}) {
          ${args}
        }
      `
    }),
    {}
  )

export const mq = {
  to: mediaQuery({ mobileFirst: false }),
  from: mediaQuery({ mobileFirst: true })
}

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    min-width: 320px;
    margin: 0;
    height: 100%;
  }
  #__next {
    min-height: 100vh;
  }
  html {
    cursor: initial;
  }
  body {
    color: ${COLOR.BLACK};
    font-family: ${FONT_FAMILY};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: ${LINE_HEIGHT.M};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: ${FONT_WEIGHT.W_400};
    line-height: ${LINE_HEIGHT.S};
    letter-spacing: 0;
  }
  p {
    margin: 0;
  }

  ul, ol {
    margin-top: 20px;
    padding-left: 40px;
  }

  ol ul {
    list-style-type: disc;
  }

  ol ::marker {
    font-weight: ${FONT_WEIGHT.W_400};
  }

  input,
  textarea,
  button {
    padding: 0;
    font-family: inherit;
    letter-spacing: inherit;
  }

  input::placeholder {
    font-size: inherit;
  }

  button {
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    font-size: ${FONT_SIZE.PX_16};
  }

  input[type="number"] {
    appearance: textfield;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  a,
  input,
  select,
  textarea {
    font-size: ${FONT_SIZE.PX_16};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  &:focus {
    outline: none;
  }
`
