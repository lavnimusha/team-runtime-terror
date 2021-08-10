import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/useAuthContext';

const ProtectedRoute = ({ path, component: Component, ...rest }: { path: string; component: any }) => {
  const loggedInUser = useAuth();
  return (
    <Route
      render={(props) => {
        if (loggedInUser) {
          <Component />;
        } else {
          return <Redirect to={{ pathname: path, state: { from: props.location } }} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
