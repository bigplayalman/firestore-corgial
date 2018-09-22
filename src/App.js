import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import auth from './firebase-redux/actions/auth';
import database from './firebase-redux/actions/database';
import SimpleInput from './components/simpleInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.profile.username || ''
    }
  };

	updateUsername = (username) => {
    this.setState(username);
  };

  render () {
    return (
      <div>
        <h1>React-Redux-Firestore-Boilerplate</h1>
        <h2>
          {(this.props.user && `${this.props.profile.username}, you are logged in`) ||
            'Please log in.'}
        </h2>
        <SimpleInput name="username" value={this.state.username} updateInput={this.updateUsername}/>
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
  }

};

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
  })
};

export default connect(
	state => ({
		user: state.user,
		profile: state.profile
	}),
	null
)(App);
