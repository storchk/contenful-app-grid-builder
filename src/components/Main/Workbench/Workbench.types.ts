import { GridProps } from '../Grid/Grid.types'

export type WorkbenchProps = {
  amountOfGridItems: number
} & Pick<GridProps, 'columnGap' | 'rowGap' | 'columns'>
