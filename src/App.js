import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';


import Layout from './components/HOC/Layout';
import Home from './components/home';
import SignIn from './components/sign-in';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path="/sign_in" component={SignIn} />
            <Route exact path="/" component={Home} />
        </Switch>
      </Layout> 
    </BrowserRouter>
  );
}

export default App;
