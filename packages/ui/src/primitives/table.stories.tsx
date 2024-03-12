import type { Story, StoryDefault } from '@ladle/react'
import { Table, TableBody, TableHead, TableHeader, TableRow } from './table'
import { TableBodyCell } from './table-body-cell'
import { TableHeaderCell } from './table-header-cell'

const columns = 5
const rows = 20

const items = (count: number) => Array.from(Array(count).keys())

export const DefaultVariant: Story = () => (
  <Table>
    <TableHeader>
      <TableRow>
        {items(columns).map((item, index) => (
          <TableHeaderCell key={index}>Column {index}</TableHeaderCell>
        ))}
      </TableRow>
    </TableHeader>
    <TableBody className="divide-y">
      {items(rows).map((item, rowIndex) => (
        <TableRow key={rowIndex}>
          {items(columns).map((colitem, colIndex) => (
            <TableBodyCell key={colIndex}>
              Cell {rowIndex}, {colIndex}
            </TableBodyCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
)
