import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Random_rgba } from "../utility/Random_rgba";
import EditIcon from "@material-ui/icons/BorderColor";
import { Link } from "react-router-dom";
import { adminEmail } from "../../../config/constants";

const styles = theme => ({
  card: {
    maxWidth: 400,
    minWidth: 100,
    textAlign: "center"
  },
  media: {
    height: 0,
    flexShrink: 1,
    flexGrow: 1,
    paddingTop: "56.25%"
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: Random_rgba()
  },
  fab: {
    height: "35px",
    width: "35px"
  }
});

class GiftCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  // handleClickCard = () => {
  //   this.props.fetchCard(this.props.giftCard.id);
  // }

  render() {
    const { classes, giftCard, userEmail } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Gift Card" className={classes.avatar}>
              {giftCard.cardName.substring(0, 1)}
            </Avatar>
          }
          action={
            adminEmail.includes(userEmail) ? (
              <>
                <Link to={`/AddUpdateForm/${giftCard.id}`}>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Link>
              </>
            ) : null
          }
          title={
            <Link
              to={`/giftCards/${giftCard.id}`}
              style={{ textDecoration: "none " }}
            >
              {/* <Button onClick={this.handleClickCard}> */}
              {giftCard.cardName}
              {/* </Button> */}
            </Link>
          }
          subheader={giftCard.cardPoints + " points"}
        />
        <Link
          to={`/giftCards/${giftCard.id}`}
          style={{ textDecoration: "none " }}
        >
          <CardMedia
            className={classes.media}
            image={giftCard.cardImage}
            title={"Hurry! Only " + giftCard.cardCount + " remaining"}
            // alt={'http://dap.optiononemiami.com/Recuiting_6/gift.jpg'}
          />
        </Link>
        <CardContent>
          <Typography component="p">{giftCard.cardShortDesc}</Typography>
        </CardContent>
      </Card>
    );
  }
}

GiftCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GiftCard);
