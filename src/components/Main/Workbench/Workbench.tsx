import React from 'react'
import { WorkbenchProps } from './Workbench.types'
import { Workbench as Forma36Workbench } from '@contentful/forma-36-react-components'
import { StyledGrid, StyledGridItem } from './Workbench.styled'

export const WorkbenchContent: React.FC<WorkbenchProps> = ({
  columnGap,
  rowGap,
  columns,
  amountOfGridItems,
}) => {
  const renderGridItems = (amount: number) => {
    if (amount < 1) return null
    return new Array(amount)
      .fill(0)
      .map((item, index) => <StyledGridItem key={index}></StyledGridItem>)
  }
  return (
    <Forma36Workbench.Content type="default">
      <div
        style={{
          height: '2000px',
        }}>
        <StyledGrid columnGap={columnGap} rowGap={rowGap} columns={columns}>
          {renderGridItems(amountOfGridItems)}
        </StyledGrid>
      </div>
    </Forma36Workbench.Content>
  )
}
