import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { Home, Browse, Signin, Signup } from './pages'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { useAuthListener } from './hooks';
import Course from './components/course';
import Articale from './components/articale';
import  {FooterContainer} from './containers/footer'

export default function App() {
  const { user } = useAuthListener();
  console.log(user)
  return (
    <Router>
      {/* <HeaderContainer /> */}
      <Switch>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}  >
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}  >
        <Signup />
      </IsUserRedirect>
      <ProtectedRoute user={user} path={ROUTES.BROWSE} exact >
        <Browse />
      </ProtectedRoute>
      <ProtectedRoute user={user} loggedInPath={ROUTES.COURSEID} path={ROUTES.COURSEID} >
        <Course />
      </ProtectedRoute>
      <ProtectedRoute user={user} loggedInPath={ROUTES.COURSE} path={ROUTES.COURSE} >
        <Course />
      </ProtectedRoute>
      <ProtectedRoute user={user} loggedInPath={ROUTES.ARTICALEID} path={ROUTES.ARTICALEID} >
        <Articale />
      </ProtectedRoute>
      <ProtectedRoute user={user} loggedInPath={ROUTES.ARTICALE} path={ROUTES.ARTICALE} >
        <Articale />
      </ProtectedRoute>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} >
        <Home />
      </IsUserRedirect>
      </Switch>
      <FooterContainer />
    </Router>
  );
}
