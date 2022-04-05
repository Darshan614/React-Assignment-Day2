import React, { useContext } from 'react';
import { AuthContext } from '../App';

function Random() {
  const { dispatch } = React.useContext(AuthContext);
  console.log(dispatch);
  return <h1>Random</h1>;
}

export default Random;
