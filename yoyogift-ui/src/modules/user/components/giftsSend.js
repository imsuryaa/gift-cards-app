import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {DateFormatter} from '../../common/components/DateFormatter';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


function GiftsSend(props) {
  const { classes, data } = props;
  
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>CARD NAME</TableCell>
            <TableCell >POINTS</TableCell>
            <TableCell >SENT TO</TableCell>
            <TableCell >ISSUE DATE</TableCell>
            <TableCell >EXPIRY DATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.id}>
              
              <TableCell>{row.cardName}</TableCell>
              <TableCell >{row.cardPoints}</TableCell>
              <TableCell >{row.receiverEmail}</TableCell>
              <TableCell>{DateFormatter(row.cardIssueDate)}</TableCell>
              <TableCell>{DateFormatter(row.cardExpiryDate)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

GiftsSend.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GiftsSend);