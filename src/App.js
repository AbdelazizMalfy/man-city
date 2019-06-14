import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';


import Layout from './components/HOC/Layout';
import Home from './components/home';
import './firebase';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
      </Layout> 
    </BrowserRouter>
  );
}

export default App;
