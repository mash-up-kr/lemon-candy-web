import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';


const PrivateRoute = (props: RouteProps) => {
  const userToken = localStorage.getItem('MONNDAY_TOKEN');

  return (
    userToken
      // eslint-disable-next-line react/jsx-props-no-spreading
      ? <Route { ...props } />
      : <Redirect to="/login" />
  );
};

export default PrivateRoute;
