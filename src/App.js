import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';


import Layout from './components/HOC/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            
        </Switch>
      </Layout> 
    </BrowserRouter>
  );
}

export default App;
