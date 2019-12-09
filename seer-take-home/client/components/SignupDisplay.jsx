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
  verifyInput: () => {
    dispatch(actions.verifyInput())
  },

  updateFirstName: (e) => {
    dispatch(actions.updateFirstName(e.target.value))
  },

  updateLastName: (e) => {
    dispatch(actions.updateLastName(e.target.value))
  },

  updateUsername: (e) => {
    dispatch(actions.updateUsername(e.target.value))
  },

  updateEmail: (e) => {
    dispatch(actions.updateEmail(e.target.value))
  },

  updatePassword: (e) => {
    dispatch(actions.updatePassword(e.target.value))
  },

  confirmPassword: (e) => {
    dispatch(actions.confirmPassword(e.target.value))
  }
});


const SignupDisplay = props => {
  if (props.hasSubmitted) return <Redirect to='/verification' />

  return (

    <div className='modal' id='signup'>
    <div className='signup-header'>
      <div className='image-frame'>
        <img className='logo' src={require('../assets/seer-mark.png')} />
      </div>
      <h4>SIGN UP FOR SEER</h4>
    </div>
    <form onSubmit={props.verifyInput}>
      <div>
        <label>First Name:</label>
        <input type='text' name='firstName' id='firstName' value={props.firstName} required={true} onChange={props.updateFirstName}/>
      </div>
      <div>
        <label>Last Name:</label>
        <input type='text' name='lastName' id='lastName' value={props.lastName} required={true} onChange={props.updateLastName}/>
      </div>
      <div>
        <label>Username:</label>
        <input type='text' name='username' id='username' value={props.username} required={true} onChange={props.updateUsername}/>
      </div>
      <div>
        <label>Email:</label>
        <input type='text' name='email' id='email' value={props.email} required={true} onChange={props.updateEmail}/>
      </div>
      <div>
        <label>Password:</label>
        <input type='password' name='password' id='password' required={true} onChange={props.updatePassword}/>
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type='password' name='confirmPassword' id='confirmPassword' required={true} onChange={props.confirmPassword}/>
      </div>
      <button className='sign-in' name='button' id='button' type='submit'>
        Submit
      </button>
    </form>
  </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupDisplay);