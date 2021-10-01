import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import history from "../../common/components/history";
import axiosWrapper from "../../../apis/axiosCreate";
import { GoogleLogin } from 'react-google-login';

import { login, createUser } from "../state/actions";

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    login,
    createUser
  },
  dispatch
  );
}

export const LoginUser = ({
  login,
  createUser
}) => {
  const [ loginSuccessful, setLoginSuccessful ] = useState(false);
  const [ checkUserExist, setCheckUserExist ] = useState(false);
  const [ userObject, setUserObject ] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    balance_points: 0
  });
  useEffect(()=> {
    if(loginSuccessful) {
      if(!checkUserExist) createUser(userObject);
      login(userObject);
      window.sessionStorage.setItem("user", JSON.stringify(userObject));
      history.push("/");
    }
  }, [loginSuccessful]);
  const handleLoginSuccess = async (response) => {
    const { profileObj: { googleId, email, familyName, givenName } } = response;
    
    const userInMemory = await axiosWrapper.get(`/users/?email=${email}`);
    const { data } = userInMemory;

    if(data.length === 0) {
      setCheckUserExist(false);
      setUserObject({
        ...userObject,
        id: googleId,
        first_name: givenName,
        last_name: familyName,
        email: email,
        balance_points: 1000
      });
    }
    else { 
      setCheckUserExist(true);
      var userData = data[0];
      setUserObject({
        ...userObject,
        id: userData.id,
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        balance_points: userData.balance_points
      });
    }
    setLoginSuccessful(true);
  };
  return(
    <>
      <GoogleLogin
        clientId="228935478905-lrnl1u77c007jhtnevha0a6jl1vctsm4.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginSuccess}
        cookiePolicy={'single_host_origin'}
      />
    </>
    );
};

LoginUser.propTypes = {
  login: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(LoginUser);
