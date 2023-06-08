import * as React from 'react';
import { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { storedb } from '../../firebase-config';
import { collection,  getDocs,} from "firebase/firestore";


export default function DataList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [rows,setRows] = useState([]);
  const empCollectionRef = collection(storedb, "TestCycle");

  useEffect(() => {
    getList();
  },[]);

  const getList = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 750 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell align='left' style={{ minWidth:"100px" }}>
                  Time Stamp
                </TableCell>
                <TableCell align='left' style={{ minWidth:"100px" }}>
                  Temparature
                </TableCell>
                <TableCell align='left' style={{ minWidth:"100px" }}>
                  Humidity
                </TableCell>
                <TableCell align='left' style={{ minWidth:"100px" }}>
                  Surface Temparature
                </TableCell>
                <TableCell align='left' style={{ minWidth:"100px" }}>
                  Pressure
                </TableCell>
                <TableCell align='left' style={{ minWidth:"100px" }}>
                 Resistance
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow key={row.id} hover role="checkbox" tabIndex={-1}>
                    
                        <TableCell align="left">
                          {row.TimeStamp}
                        </TableCell>
                        <TableCell align="left">
                          {row.Temperature}
                        </TableCell>
                        <TableCell align="left">
                          {row.Humidity}
                        </TableCell>
                        <TableCell align="left">
                          {row.ObjectTemparature}
                        </TableCell>
                        <TableCell align="left">
                          {row.Pressure}
                        </TableCell>
                        <TableCell align="left">
                          {row.Resistance}
                        </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}