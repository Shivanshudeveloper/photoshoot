import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Settings from '../../../components/settings';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Customer() {
  const classes = useStyles();

  return (
    <>
    <Settings />
    <h2 className="forheadingscolors">
        Customer
    </h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell align="right">Customer Photo Gallery Title</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
    </>
  );
}
