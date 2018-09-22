import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SimpleInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      value: props.value
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.value !== this.state.value) {
      this.setState({value: nextProps.value});
    }
  }

  render() {
    const { updateUsername } = this.props;
    return (
      <input
        name={this.state.name}
        value={this.state.value}
        onChange={(event) => updateUsername(event.target.value)} />
    );
  }

}
SimpleInput.defaultProps = {
  name: '',
  value: ''
}

SimpleInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  updateUsername: PropTypes.func.isRequired
};
export default SimpleInput;
