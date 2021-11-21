import React from 'react';

const Error = ({message, component}) => {
  return(
    <p className={`${component === "App" ? "blue" : "red"} darken-1 error`}>{message}</p>
  );
}

export default Error;