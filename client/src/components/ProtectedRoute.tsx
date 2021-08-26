import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/useAuthContext';
const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const { loggedInUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        // logic for authenticated user to access /app part goes here.
        // e.g. check if user is logged-in logic.

        const isLoggedIn = loggedInUser;

        return loggedInUser ? <Component {...props} /> : <Redirect to={'/login'} />;
      }}
    />
  );
};
export default ProtectedRoute;
