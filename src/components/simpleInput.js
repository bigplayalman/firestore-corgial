import React from 'react';
import PropTypes from 'prop-types';

const SimpleInput = props => {
  SimpleInput.defaultProps = {
    updateInput: null,
    name: '',
  }

  SimpleInput.propTypes = {
    updateInput: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string.isRequired
  };

  const onChange = (event) => {
    props.updateInput({[event.target.name]: event.target.value});
  }

  return (
    <input
      name={props.name}
      value={props.value}
      onChange={(event) => onChange(event)} />
  );
}
export default SimpleInput;
