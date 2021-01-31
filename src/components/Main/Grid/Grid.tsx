import React from 'react'
import { Grid as Forma36Grid } from '@contentful/forma-36-react-components'
import { GridProps } from './Grid.types'

export const Grid: React.FC<GridProps> = ({ columnGap, columns, rowGap, children }) => (
  <Forma36Grid
    columnGap={columnGap}
    columns={columns}
    rowGap={rowGap}
    style={{
      height: '90vh',
    }}>
    {children}
  </Forma36Grid>
)
