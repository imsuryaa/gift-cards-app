import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = {
  root: {
    position: "relative",
    bottom: 0,
    top: "auto",
    width: "100%",
    border: "1px solid #ccc",
    borderTopWidth: "1px"
  }
};

function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <p style={{ float: "right" }}>
            ©2019 YoYo, Inc. All Rights Reserved.
          </p>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
