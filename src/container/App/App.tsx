import React from 'react'
import { Workbench, Button, Icon, Modal } from '@contentful/forma-36-react-components'
import ReactJson from 'react-json-view'
import { WorkbenchContent } from '../../components/Main/Workbench/Workbench'
import { WorkbenchSidebar } from '../../components/Sidebar/Workbench/Workbench'
import { GapType } from '../../types'
import { OutputType } from './App.types'
export const App = () => {
  const defaultGapState: GapType = 'spacingXs'
  const defaultColumns = 5
  const defaultGridItems = 24
  const maxColumns = 5
  const [columnGapState, setColumnGapState] = React.useState<GapType>(defaultGapState)
  const [rowGapState, setRowGapState] = React.useState<GapType>(defaultGapState)
  const [amountOfColumnsState, setAmountOfColumnsState] = React.useState<number>(defaultColumns)
  const [amountOfGridItemsState, setAmountOfGridItemsState] = React.useState<number>(
    defaultGridItems
  )
  const [isShownModal, setShownModal] = React.useState<boolean>(false)

  const [output, setOutput] = React.useState<OutputType>({
    columns: amountOfColumnsState,
    gridItems: amountOfGridItemsState,
    rowGap: rowGapState,
    columnGap: columnGapState,
  })

  React.useEffect(() => {
    setOutput(state => ({
      ...state,
      columns: amountOfColumnsState,
      gridItems: amountOfGridItemsState,
      rowGap: rowGapState,
      columnGap: columnGapState,
    }))
  }, [amountOfColumnsState, amountOfGridItemsState, rowGapState, columnGapState])

  const handleGaps = event => {
    const size: GapType = event.target.value
    setColumnGapState(size)
    setRowGapState(size)
  }

  const handleAmountOfGridItems = (amount: number) => {
    setAmountOfGridItemsState(amount)
  }

  const handleAmountOfColumns = (amount: number) => {
    setAmountOfColumnsState(amount)
  }

  return (
    <Workbench>
      <Workbench.Header
        actions={
          <Button
            buttonType="positive"
            onClick={() => {
              setShownModal(true)
            }}>
            Output
          </Button>
        }
        icon={<Icon icon="ArrowDown" />}
        title="Contentful Grid Builder App"
      />
      <WorkbenchContent
        columnGap={columnGapState}
        rowGap={rowGapState}
        columns={amountOfColumnsState}
        amountOfGridItems={amountOfGridItemsState}
      />
      <WorkbenchSidebar
        defaultGap={defaultGapState}
        defaultAmountOfGridItems={defaultGridItems}
        defaultAmountOfColumns={defaultColumns}
        maxAmountOfColumns={maxColumns}
        handleGaps={handleGaps}
        handleAmountOfGridItems={handleAmountOfGridItems}
        handleAmountOfColumns={handleAmountOfColumns}
      />
      <Modal
        isShown={isShownModal}
        onClose={() => {
          setShownModal(false)
        }}>
        <ReactJson src={output} />
      </Modal>
    </Workbench>
  )
}
