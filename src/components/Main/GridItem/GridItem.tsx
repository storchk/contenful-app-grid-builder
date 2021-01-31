import React from 'react'
import { GridItem as Forma36GridItem } from '@contentful/forma-36-react-components'
import { GridItemProps } from './GridItem.types'

export const GridItem: React.FC<GridItemProps> = ({ children }) => (
  <Forma36GridItem
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#5a5a5a',
    }}>
    {children}
  </Forma36GridItem>
)
