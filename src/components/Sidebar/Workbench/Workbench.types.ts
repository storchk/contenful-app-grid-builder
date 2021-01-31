import { GapType } from '../../../types'

export type WorkbenchProps = {
  defaultGap: GapType
  defaultAmountOfGridItems: number
  defaultAmountOfColumns: number
  maxAmountOfColumns: number
  handleGaps: (event) => void
  handleAmountOfGridItems: (amount: number) => void
  handleAmountOfColumns: (amount: number) => void
}
