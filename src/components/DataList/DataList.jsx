import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./dataList.css"

const columns = [
  { field: 'timeStamp', headerName: 'Time Stamp', width: 150 },
  {
    field: 'resistance',
    headerName: 'Resistance',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  
];

const rows = [
  { id: 1, lastName: 'Snow', resistance: '2.45', age: 35 },
  { id: 2, lastName: 'Lannister', resistance: '5.25', age: 42 },
  { id: 3, lastName: 'Lannister', resistance: '6', age: 45 },
  { id: 4, lastName: 'Stark', resistance: '7.5', age: 16 },
  { id: 5, lastName: 'Targaryen', resistance: '10.25', age: null },
  { id: 6, lastName: 'Melisandre', resistance: null, age: 150 },
  { id: 7, lastName: 'Clifford', resistance: '9.25', age: 44 },
  { id: 8, lastName: 'Frances', resistance: '3.64', age: 36 },
  { id: 9, lastName: 'Roxie', resistance: '4.12', age: 65 },
];

export default function DataList() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
