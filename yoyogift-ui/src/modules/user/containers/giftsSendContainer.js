import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSentCards } from './../state/actions/index';
import GiftsSent from '../components/giftsSend.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Redirect } from 'react-router-dom';

export class GiftsSendContainer extends Component {

  componentDidMount() {
    if(this.props.user)
    this.props.fetchSentCards(this.props.user.email);
  }
  componentDidCatch(error, info) {
    console.log(error)
  }
  render() {
    if (this.props.isLoggedIn) {
      if(!(this.props.sentCards) || (this.props.sentCards.length < 0)) {
        return <CircularProgress style={{marginLeft: '50%', marginTop: '10%'}} />
      } else if (this.props.sentCards.length === 0) {
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
        } else {
        return (
          <div>
            <GiftsSent data={this.props.sentCards} />
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
        user:state.login.detailsObject,
        isLoggedIn: state.login.loginStatus,
        sentCards: state.users.cards
    }
}

export default connect(mapStateToProps, {fetchSentCards})(GiftsSendContainer);
