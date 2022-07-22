import styled from 'styled-components'
import {
  background,
  border,
  boxShadow,
  compose,
  display,
  flexbox,
  grid,
  layout,
  position,
  space,
  typography
} from 'styled-system'

export const Box = styled.div`
  ${compose(
    display,
    space,
    position,
    flexbox,
    background,
    border,
    layout,
    boxShadow,
    typography,
    grid
  )}
`
