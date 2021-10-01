import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReceivedCards, redeemCard } from './../state/actions/index';
import GiftsReceived from '../components/giftsReceived';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Redirect } from 'react-router-dom';

export class GiftsReceivedContainer extends Component {

  componentDidMount() {
      if(this.props.user)
        this.props.fetchReceivedCards(this.props.user.email);
  }
  componentDidCatch(error, info) {
    console.log(error)
  }
  handleRedeemCard = (row) => {
    const rowId = row.id;
    const addObj = {
      id: row.id,
      senderEmail: row.senderEmail,
      receiverEmail: row.receiverEmail,
      cardName: row.cardName,
      cardPoints: row.cardPoints,
      cardShortDesc: row.cardShortDesc,
      cardImage: row.cardImage,
      cardIssueDate: row.cardIssueDate,
      cardExpiryDate: row.cardExpiryDate,
      isRedeemed: true
    }
    this.props.redeemCard(rowId, addObj);
  }

  render() {
    if (this.props.isLoggedIn) {
      if(!(this.props.receivedCards) || (this.props.receivedCards.length < 0)) {
        return <CircularProgress style={{marginLeft: '50%', marginTop: '10%'}} />            
      } else if (this.props.receivedCards.length === 0) {
        return <h2 style={{
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
        </h2>
        } else{
        return (
        <div>
          <GiftsReceived data={this.props.receivedCards} redeemCard={this.handleRedeemCard} />
        </div>
      )
    } 
  } else {
      return <Redirect to="/" />
  }   
  }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.login.loginStatus,
        receivedCards: state.users.cards,
        user:state.login.detailsObject
    }
}

export default connect(mapStateToProps, {fetchReceivedCards, redeemCard})(GiftsReceivedContainer);
