import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Table, Column, InfiniteLoader } from "react-virtualized";
import 'react-virtualized/styles.css'

import { fetchFilteredSentCards } from "../state/actions";

const mapStateToProps = ({
  login: {
      detailsObject,
      loginStatus,
  }, users: { cards }
}) => {
  return {
      user: detailsObject,
      isLoggedIn: loginStatus,
      sentCards: cards
  }
};

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchFilteredSentCards
  },
  dispatch
  );
}

export const GiftsSendTableContainer = ({
  user,
  isLoggedIn,
  sentCards,
  fetchFilteredSentCards
}) => {
  const rowLimit = 100;

  const isRowLoaded = ({ index }) => index < sentCards.length;
  const loadMoreRows = () => {
     fetchFilteredSentCards(user.email, rowLimit, page);
     setPage(page + 1);
  }
  const rowGetter = ({ index }) => sentCards[index];
  const [ page, setPage ] = useState(1);
  useEffect(()=> {
    if(user) {
      fetchFilteredSentCards(user.email, rowLimit, page);
      setPage(page + 1); 
    }
  }, []);

  return(
    <>
      {!isLoggedIn && <Redirect to="/" />}
      {(!sentCards || sentCards.length < 0) && <CircularProgress style={{marginLeft: '50%', marginTop: '10%'}} /> } 
      {sentCards.length === 0 && 
        <h2 style={{
          height: '40px',
          background: '#b3d9f7',
          color: 'white',
          textAlign: 'center',
          verticalAlign: 'middle',
          paddingTop: '5px',
          fontSize: '20px',
          fontWeight: '500'
        }}>
        NO DATA
        </h2> }
      {sentCards.length > 0 &&
        <div>
          <InfiniteLoader
            isRowLoaded={isRowLoaded}
            rowCount={sentCards.length+1}
            loadMoreRows={loadMoreRows}
          >
            {({ onRowsRendered, registerChild }) => (
              <Table
                ref={registerChild}
                rowCount={sentCards.length}
                rowGetter={rowGetter}
                headerHeight={50}
                rowHeight={50}
                overscanRowCount={1}
                width={1350}
                height={495}
                onRowsRendered={onRowsRendered}
              >
                <Column dataKey="id" label="ID" width={100} />
                <Column dataKey="cardName" label="CARD NAME" width={200} />
                <Column dataKey="cardPoints" label="POINTS" width={200} />
                <Column dataKey="senderEmail" label="SENT TO" width={300} />
                <Column dataKey="cardIssueDate" label="ISSUE DATE" width={275} />
                <Column dataKey="cardExpiryDate" label="EXPIRY DATE" width={275} />
              </Table>
            )}
          </InfiniteLoader>
        </div>
      }
    </>
  );
};

GiftsSendTableContainer.propTypes = {
  user: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  sentCards: PropTypes.array.isRequired,
  fetchFilteredSentCards: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftsSendTableContainer);