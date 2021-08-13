import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/useAuthContext';

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const { loggedInUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedInUser) {
          <Component />;
        } else {
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
