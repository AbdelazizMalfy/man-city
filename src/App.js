import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/authRoutes/PrivateRoutes';
import PublicRoute from './components/authRoutes/PublicRoutes';

import Layout from './components/HOC/Layout';
import Home from './components/home';
import SignIn from './components/sign-in';

import Dashboard from './components/admin/Dashboard';

function App(props) {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <PrivateRoute {...props} path='/dashboard' exact component={Dashboard} />
            <PublicRoute {...props} restricted={true} exact path="/sign_in" component={SignIn} />
            <PublicRoute {...props} restricted={false} exact path="/" component={Home} />
        </Switch>
      </Layout> 
    </BrowserRouter>
  );
}

export default App;
