import { GapType } from '../../../types'

export type GridProps = {
  columnGap: GapType
  rowGap: GapType
  columns: number
  children: React.ReactNode
}
