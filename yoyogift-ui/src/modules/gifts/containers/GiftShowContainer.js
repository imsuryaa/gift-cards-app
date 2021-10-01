import React, { Component } from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  userDetails,
  updateUserBalance,
  updateTransact
} from "../../user/state/actions/index";
import { fetchCard, updateCardCount } from "../state/actions";
import GiftShow from "../components/GiftShow";
import Snackbar from "../../common/components/Snackbar";
import * as emailjs from 'emailjs-com';
class GiftShowContainer extends Component {
  state = {
    showErrorSnackBar: false,
    showSuccessSnackBar: false,
    balance_points: null,
    cardPoints: null,
    email: ""
  };
  componentDidMount() {
    // this.sendMail()
    const id = this.props.match.params.id;
    this.props.fetchCard(id);
    if (this.props.login) {
      this.props
        .userDetails(this.props.login.id)
        .then(() => {
          this.setState({
            balance_points: this.props.user.balance_points,
            cardPoints: this.props.gift.cardPoints
          });
        })
        .catch(err => {
          // Handles any error that occurred in any of the previous
          // promises in the chain.
          console.log(err);
        });
    }
  }
  componentDidCatch(error, info) {
    console.log(error)
  }
  validateSend = async sendTo => {
    if (
      this.state.cardPoints &&
      this.state.balance_points &&
      this.props.gift.cardPoints <= this.props.user.balance_points
    ) {
      const UpdatedTransactObj = {
        id: Math.floor(Math.random() * 100 + 1),
        senderEmail: this.props.login.email,
        receiverEmail: sendTo,
        cardId: this.props.gift.id,
        cardName: this.props.gift.cardName,
        cardPoints: this.props.gift.cardPoints,
        cardShortDesc: this.props.gift.cardShortDesc,
        cardImage: this.props.gift.cardImage,
        cardIssueDate: this.props.gift.cardIssueDate,
        cardExpiryDate: this.props.gift.cardExpiryDate,
        isRedeemed: false
      };

      const currentBalance = this.props.user.balance_points;
      const cardPrice = this.props.gift.cardPoints;
      const newBalance = currentBalance - cardPrice;
      this.props.updateUserBalance(this.props.login.id, newBalance).then(() => {
        this.props.updateTransact(UpdatedTransactObj).then(() => {
          this.props.updateCardCount(
            this.props.gift.id,
            this.props.gift.cardCount - 1
          ).then(() => {
            this.sendMail(this.state.email, this.props.login.email)
            console.log(this.props.login)
            this.setState({
              showSuccessSnackBar: true
            });
            setTimeout(() => {
              this.setState({
                showSuccessSnackBar: false
              });
            }, 6000);
          })
        });
      });
      //send email
    } else {
      this.setState({
        showErrorSnackBar: true
      });
      setTimeout(() => {
        this.setState({
          showErrorSnackBar: false
        });
      }, 6000);
    }
  };
  
  sendMail = (email, name) => {
    let payload = {
        to_email: email,
        from_name: name
    }
    // Your email service name if you just have one, you can use this one.
    var service_id = "sendgrid";
    // Template you will use
    var template_id = "template1";
    // Send message using your client       
    emailjs.send(service_id, template_id, payload, "user_PpATvNmFAn9KTbfZPyCC6")
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
    });
};
  render() {
    const { showErrorSnackBar, showSuccessSnackBar, email } = this.state;
    const balance_points = Number(this.state.balance_points);
    const cardPoints = Number(this.state.cardPoints);
    if (Object.keys(this.props.gift).length === 0) {
      return (
        <CircularProgress style={{ marginLeft: "50%", marginTop: "10%" }} />
      );
    }
    console.log(typeof(cardPoints - balance_points))
    let points = isNaN(cardPoints - balance_points) ?
     'You need more points to gift this card' : 
     'You need '+(cardPoints - balance_points)+' more points to gift this card'
    return (
      <div>
        {showErrorSnackBar ? (
          <Snackbar
            message={
              !this.props.isLoggedIn 
                ? `Error! You need to log in first`
                : points
            }
            color="red"
          />
        ) : null}
        {showSuccessSnackBar ? (
          <Snackbar message={"Successfully sent to " + email} color="green" />
        ) : null}
        <GiftShow
          data={this.props.gift}
          getEmail={email => {
            this.setState({
              email: email
            });
            this.validateSend(email);
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    gift: state.gifts.giftCard,
    user: state.users.UserDetails,
    login: state.login.detailsObject,
    isLoggedIn: state.login.loginStatus,
  };
};

export default connect(
  mapStateToProps,
  { fetchCard, userDetails, updateUserBalance, updateTransact, updateCardCount }
)(GiftShowContainer);
