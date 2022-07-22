import React from 'react'
import { rem } from 'polished'
import { Box } from 'components/Box'

export const Layout = ({ children }) => (
  <Box px={{ _: rem(10) }} display="flex" justifyContent="center">
    <Box width="10%" maxWidth={rem(1300)}>
      {children}
    </Box>
  </Box>
)
