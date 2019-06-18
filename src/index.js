import React from 'react';
import ReactDOM from 'react-dom';


import { firebase } from './firebase';

import './Resources/css/app.css';
import App from './App';

firebase.auth().onAuthStateChanged((user)=> {
    ReactDOM.render(<App user={user}  />, document.getElementById('root'));

})


