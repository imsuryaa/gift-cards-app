import React from "react";
import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  FormHelperText,
  IconButton
} from "@material-ui/core";

const InputTypeComponent = props => {
  return (
    <React.Fragment>
      <FormControl
        fullWidth={props.fieldFullWidth}
        error={props.inputError}
        style={props.styles}
        disabled={props.inputDisabled}
      >
        <InputLabel htmlFor={props.inputId}>{props.inputName}</InputLabel>
        <Input
          type={props.inputType}
          id={props.inputId}
          value={props.inputValue}
          onChange={event => props.handleInputChange(event)}
          placeholder={props.inputPlaceholder}
          endAdornment={
            props.endAdornment ? (
              <InputAdornment position="end">
                {" "}
                {props.endAdornmentIcon ? (
                  <IconButton onClick={props.handleEndAdornmentButtonClick}>
                    {props.endAdornmentIcon}
                  </IconButton>
                ) : (
                  props.endAdornmentText
                )}{" "}
              </InputAdornment>
            ) : (
              <React.Fragment />
            )
          }
          startAdornment={
            props.startAdornment ? (
              <InputAdornment position="start">
                {" "}
                {props.startAdornmentText}{" "}
              </InputAdornment>
            ) : (
              <React.Fragment />
            )
          }
        />
        <FormHelperText> {props.inputHelperText} </FormHelperText>
      </FormControl>
    </React.Fragment>
  );
};

export default InputTypeComponent;
