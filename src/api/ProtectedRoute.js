import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ isAuth, component, ...rest }) {
  return (
      <Route {...rest} render={props => {
          if (isAuth) {
              return <component/>
          } else {
              return <Redirect to={{pathname: '/login', state: {from: props.location}}} />
          }
      }} />
  );
}

export default ProtectedRoute;
