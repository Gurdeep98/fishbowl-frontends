import React from 'react'
import {Box, TableContainer,Table, TableBody, TableCell,TableRow, Paper } from '@mui/material'
import { styled } from "@mui/system";

const useStyles = styled({
    table: {
      minWidth: 650,
    },
  });
export default function Dashbord1() {
    const classes = useStyles();
  return (
    <>
        <Box p={2}>
            <h2>Small Pack</h2>

        </Box>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="inventory table">
        <TableBody>
        <TableRow >
        <TableCell align="right">Counter Sale</TableCell>
        <TableCell align="right">Next Day Air</TableCell>
        <TableCell align="right">Ship Today</TableCell>

            </TableRow>
            <TableRow >
        <TableCell align="right">Pickable</TableCell>
        <TableCell align="right">Picking</TableCell>
        <TableCell align="right">Packable</TableCell>

            </TableRow>
            <TableRow >
        <TableCell align="right">Packed Today</TableCell>
        <TableCell align="right">Packed this Week</TableCell>
        <TableCell align="right">Packed this Month</TableCell>

            </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
    </>
  )
}
