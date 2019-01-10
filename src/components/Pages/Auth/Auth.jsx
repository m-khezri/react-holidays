import React from 'react';
// import PropTypes from 'prop-types';
import './Auth.scss';
import authRequests from '../../../helpers/data/authRequests';

import googleButton from './images/googlebutton.png';

class Auth extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then(() => {
      this.props.history.push('/home');
    }).catch(err => console.error('error in auth', err));
  }

  render() {
    return (
      <div className='Auth'>
        <a href="#" onClick={this.authenticateUser}>
          <img src={googleButton} alt="google login button" />
        </a>
      </div>
    );
  }
}

export default Auth;