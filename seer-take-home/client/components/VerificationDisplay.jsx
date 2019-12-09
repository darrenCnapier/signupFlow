import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Redirect } from "react-router-dom";

const mapStateToProps = store => {

  return {
    firstName: store.users.firstName,
    lastName: store.users.lastName,
    username: store.users.username,
    email: store.users.email,
    password: store.users.password,
    confirmedPass: store.users.confirmPass,
    hasSubmitted: store.users.hasSubmitted,
    hasConfirmed: store.users.hasConfirmed
  };
};

const mapDispatchToProps = dispatch => ({
  createUser: () => {
    dispatch(actions.createUser())
  },

  correctInfo: () => {
    dispatch(actions.correctInfo())
  }
});

const VerificationDisplay = props => {
  if (props.hasConfirmed === true) return <Redirect to="/confirmation" />;
  if (props.hasSubmitted === false) return <Redirect to='/' />;

  return (

    <div className='modal' id='signup'>
      <div id='user-input'>
      <p id='verify-text'>Please verify that your information is correct.</p>
      <div className='user-input'>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Username: {props.username}</p>
      <p>Email: {props.email}</p>
      </div>
      <div className='verifyButtons'>
      <button className='confirm' name='button' id='button' type='submit' onClick={props.correctInfo}>
        Correct Information
      </button>
      <button className='sign-in' name='button' id='button' type='submit' onClick={props.createUser}>
        Confirm
      </button>
      </div>
      </div>
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(VerificationDisplay);