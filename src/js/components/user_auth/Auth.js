import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

function Auth ({children}) {
  const userFetched = useSelector((state) => state.userReducer.fetched);
  if (!userFetched) {
    return <></>
  } else {
    return children
  }
};

export default Auth;