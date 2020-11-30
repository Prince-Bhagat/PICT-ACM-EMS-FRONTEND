import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { withRouter} from 'react-router-dom';

import $ from 'jquery';
import { URL } from '../Common/Constants/Constants';


function AllEvent(props)
{

    const [data, setData ] = useState([]);
    const [count, setCount ] = useState(0);
    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
    
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);
    
  

    
      const useStyles = makeStyles({
        table: {
          minWidth: 700,
        },
      });
    
      const classes = useStyles();


      // ====================   Functions   ===============
      useEffect(()=>{
        setCount(1);
        $.get(
          URL.category.manage,
          (data, status )=>{
            setData(data)
          }
        )
        },count);

      return (
        <TableContainer component={Paper}>

        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Event Name</StyledTableCell>
              <StyledTableCell>Event Description</StyledTableCell>
              <StyledTableCell align="right">price</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row.category6Name}>
                <StyledTableCell component="th" scope="row">
                  {row.categoryName}
                </StyledTableCell>
                <StyledTableCell >{row.categoryDescription}</StyledTableCell>
                <StyledTableCell align="right">0</StyledTableCell>

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      );
}
export default withRouter(AllEvent);