import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

class MySnackBar extends Component {
  render() {
    const { message , color} = this.props
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          open={true}
        >
          <SnackbarContent
            message={message}
            style={{backgroundColor: color}}
          />
        </Snackbar>
      </div>
    );
  }
}

export default MySnackBar;
