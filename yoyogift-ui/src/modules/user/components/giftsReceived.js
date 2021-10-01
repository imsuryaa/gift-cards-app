import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import {DateFormatter} from '../../common/components/DateFormatter';

const styles = theme => ({
  root: {
    minHeight: '100vh',
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function GiftsReceived(props) {
  const { classes, data } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>CARD NAME</TableCell>
            <TableCell>POINTS</TableCell>
            <TableCell>RECEIVED FROM</TableCell>
            <TableCell>CARD DESC</TableCell>
            <TableCell>ISSUE DATE</TableCell>
            <TableCell>EXPIRY DATE</TableCell>
            <TableCell>REDEEM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.cardName}
              </TableCell>
              <TableCell>{row.cardPoints}</TableCell>
              <TableCell>{row.senderEmail}</TableCell>
              <TableCell>{row.cardShortDesc}</TableCell>
              <TableCell>{DateFormatter(row.cardIssueDate)}</TableCell>
              <TableCell>{DateFormatter(row.cardExpiryDate)}</TableCell>
              <TableCell>{row.isRedeemed ? 'Redeemed' : <Button variant="contained" color="primary" onClick={()=>props.redeemCard(row)}>Redeem</Button>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

GiftsReceived.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GiftsReceived);