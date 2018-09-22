import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import auth from './firebase-redux/actions/auth';
import database from './firebase-redux/actions/database';
import SimpleInput from './components/simpleInput';

const App = (props) => (
  <div>
    <h1>React-Redux-Firestore-Boilerplate</h1>
    <h2>
      {(props.user && `${props.profile.username}, you are logged in`) ||
        'Please log in.'}
    </h2>
    <SimpleInput name="username" value={props.profile.username} updateUsername={props.updateUsername} />
    <button onClick={() => auth.signUp()} type="button">
      Sign in
      </button>
    <button onClick={() => auth.signOut()} type="button">
      Sign out
      </button>
    <button
      onClick={() => database.set('profile.username', 'jest')}
      type="button"
    >
      Update Database
      </button>
  </div>
);

App.defaultProps = {
  user: null,
  profile: {
    username: ''
  }
}

App.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string
  }),
  profile: PropTypes.shape({
    username: PropTypes.string
  }),
  updateUsername: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  updateUsername: username => dispatch({ type: 'profile_FETCH', payload: { username } })
});

export default connect(
  state => ({
    user: state.user,
    profile: state.profile
  }),
  mapDispatchToProps
)(App);
