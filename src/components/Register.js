import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const user = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

function Register() {
  const navigate = useNavigate();
  const [newUserDetails, setNewUserDetails] = React.useState(user);

  function handleChange(e) {
    setNewUserDetails({ ...newUserDetails, [e.target.name]: e.target.value });
  }

  function registerUser(e) {
    e.preventDefault();

    if (newUserDetails.password === newUserDetails.passwordConfirmation) {
      const newUser = {
        username: newUserDetails.username,
        email: newUserDetails.email,
        password: newUserDetails.password,
        passwordConfirmation: newUserDetails.passwordConfirmation,
      };

      axios
        .post('https://api.api-ninjas.com/v1/quotes?category=', newUser)
        .then((res) => {
          console.log(res);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      navigate('/login');

      console.log(newUser);
    } else {
      console.log('password and password confirmation does not match');
    }
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            className="column is-half is-offset-one-quarter box"
            onSubmit={registerUser}
          >
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                  value={newUserDetails.username}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={newUserDetails.email}
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
                  value={newUserDetails.password}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  placeholder="Password Confirmation"
                  name="passwordConfirmation"
                  onChange={handleChange}
                  value={newUserDetails.passwordConfirmation}
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-dark">
                Register Me!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
