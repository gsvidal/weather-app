import React from 'react';
import PropTypes from 'prop-types';

const Error = ({message, component}) => {
  return(
    <p className={`${component === "App" ? "blue" : "red"} darken-1 error`}>{message}</p>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired
}

export default Error;