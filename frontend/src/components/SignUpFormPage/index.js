import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import pupprIcon from '../../images/puppr-icon.png';
import './SignUpForm.css';

function SignUpFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ firstName, lastName, password, email, username }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const navLogin = e => {
    e.preventDefault();
    history.push('/login');
  }

  const FloatLabel = (() => {
    // add active class
    const handleFocus = (e) => {
      const target = e.target;
      target.parentNode.classList.add('active');
    };
    // remove active class
    const handleBlur = (e) => {
      const target = e.target;
      if (!target.value) {
        target.parentNode.classList.remove('active');
      }
      target.removeAttribute('placeholder');
    };
    // register events
    const bindEvents = (element) => {
      const floatField = element.querySelector('input');
      floatField.addEventListener('focus', handleFocus);
      floatField.addEventListener('blur', handleBlur);
    };
    // get DOM elements
    const init = () => {
      const floatContainers = document.querySelectorAll('.float-container');
      floatContainers.forEach((element) => {
        if (element.querySelector('input').value) {
          element.classList.add('active');
        }
        bindEvents(element);
      });
    };

    return {
      init: init
    };
  })();

  FloatLabel.init();

  return (
    <div className='signup-page-container'>
      <form onSubmit={handleSubmit} className='signup-container'>
        <div className='signup-form'>
          <img src={pupprIcon} alt="Puppr Icon" height='28px' weight='28px' />
          <p>Sign up for Puppr</p>
          <ul id='errors-list'>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <div id='floatContainer' className='float-container'>
            <label>First Name</label>
            <input
              className='floatField'
              type='text'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div id='floatContainer' className='float-container'>
            <label>Last Name</label>
            <input
              className='floatField'
              type='text'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div id='floatContainer' className='float-container'>
            <label>Username</label>
            <input
              className='floatField'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div id='floatContainer' className='float-container'>
            <label>Email</label>
            <input
              className='floatField'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div id='floatContainer' className='float-container'>
            <label>Password</label>
            <input
              className='floatField'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div id='floatContainer' className='float-container'>
            <label>Confirm Password</label>
            <input
              className='floatField'
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit' id='signup-btn'>Sign Up</button>
          <div className='nav-login'>
            <p>
              Already a Puppr member?
              <a href="/login" onClick={navLogin}> Log in here.</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpFormPage;