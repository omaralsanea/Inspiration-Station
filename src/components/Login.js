import React from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const loginRequirements = {
  email: '',
  password: '',
};

function Login() {
  const Navigate = useNavigate();
  const [newLoginAttempt, setNewLoginAttempt] =
    React.useState(loginRequirements);

  function handleChange(e) {
    setNewLoginAttempt({ ...newLoginAttempt, [e.target.name]: e.target.value });
  }

  function userLogin(e) {
    e.preventDefault();

    const theLoginAttempt = {
      email: newLoginAttempt.email,
      password: newLoginAttempt.password,
    };

    axios
      .post('https://ga-cheesebored.herokuapp.com/login', theLoginAttempt)
      .then((data) => {
        console.log(data);
        localStorage.setItem('accessToken', data.token);
        Navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            className="box column is-half is-offset-one-quarter"
            onSubmit={userLogin}
          >
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={newLoginAttempt.email}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={newLoginAttempt.password}
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-warning">
                Log Me In!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
