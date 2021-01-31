import React from 'react'
import { WorkbenchProps } from './Workbench.types'
import { Workbench as Forma36Workbench } from '@contentful/forma-36-react-components'
import {
  Workbench,
  SelectField,
  Option,
  FormLabel,
  TextInput,
} from '@contentful/forma-36-react-components'
export const WorkbenchSidebar: React.FC<WorkbenchProps> = ({
  defaultGap,
  defaultAmountOfGridItems,
  defaultAmountOfColumns,
  maxAmountOfColumns,
  handleAmountOfGridItems,
  handleAmountOfColumns,
  handleGaps,
}) => (
  <Forma36Workbench.Sidebar position="right">
    <div
      style={{
        height: '2000px',
      }}>
      <>
        <FormLabel htmlFor="someInput" requiredText="requiredText" testId="cf-ui-form-label">
          Number of Grid Items
        </FormLabel>
        <TextInput
          type="number"
          value={`${defaultAmountOfGridItems}`}
          onChange={e => handleAmountOfGridItems(Number(e.target.value))}
        />
      </>
      <>
        <FormLabel htmlFor="someInput" requiredText="requiredText" testId="cf-ui-form-label">
          Number of Columns
        </FormLabel>
        <TextInput
          type="number"
          value={`${defaultAmountOfColumns}`}
          onChange={e =>
            handleAmountOfColumns(
              Number(e.target.value) > maxAmountOfColumns
                ? maxAmountOfColumns
                : Number(e.target.value)
            )
          }
        />
      </>
      <SelectField
        id="Grid Size"
        formLabelProps={{
          requiredText: 'Required Text',
        }}
        labelText="Grid Size"
        name="optionSelect"
        selectProps={{
          width: 'full',
        }}
        testId="cf-ui-select-field"
        value="optionOne"
        onChange={e => handleGaps(e)}>
        <Option value={`${defaultGap}`}>{defaultGap}</Option>
        <Option value="none">none</Option>
        <Option value="spacingXs">spacingXs</Option>
        <Option value="spacingS">spacingS</Option>
        <Option value="spacingM">spacingM</Option>
        <Option value="spacingL">spacingL</Option>
        <Option value="spacingXl">spacingXl</Option>
        <Option value="spacing2Xl">spacing2Xl</Option>
        <Option value="spacing3Xl">spacing3Xl</Option>
        <Option value="spacing4Xl">spacing4Xl</Option>
      </SelectField>
    </div>
  </Forma36Workbench.Sidebar>
)
