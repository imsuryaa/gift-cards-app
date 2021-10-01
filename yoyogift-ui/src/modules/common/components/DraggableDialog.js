import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import { Typography } from '@material-ui/core';

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

class DraggableDialog extends React.Component {
  state = {
    open: false
  }
  handleOpenClose = () => {
    this.setState({
      open: !this.state.open
    })
  };
  handleSendAndClose = (email) => {
    //handle send
    this.props.getEmail(email)
    //close dialog
    this.setState({
      open: false
    })
  }
  render(){
  const { open } = this.state
  return (
    <div>
      <Button variant="contained" color="primary" onClick={this.handleOpenClose}>
        send this gift card
      </Button>
      <Dialog
        open={open}
        onClose={this.handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Send Gift card
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can send this gift card to anyone. Just fill-in the email address below
          </DialogContentText>
          <Formik
      initialValues={{ email: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required*';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values) => {
        this.handleSendAndClose(values.email)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <Typography variant="overline" color="error">
            {errors.email && touched.email && errors.email}
          </Typography>
          <DialogActions>
          <Button onClick={this.handleOpenClose} color="primary">
            Cancel
          </Button>
          <Button 
            type="submit" 
            //onClick={this.handleSendAndClose} 
            disabled={isSubmitting} 
            color="primary">
            Send
          </Button>
        </DialogActions>
        </form>
      )}
    </Formik>
        </DialogContent>
      </Dialog>
    </div>
  )}
}

export default DraggableDialog;