import React from 'react';
import { render } from 'react-dom';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css'
import {GlobalStyles} from './global-styles'
import { firebase } from './lib/firebase.prod'
import { FirebaseContext } from './context/firebase'
import './global.css'


render( <>
        <FirebaseContext.Provider value={{firebase}}>
        <GlobalStyles />
        <App />
        </FirebaseContext.Provider>
    </>,
 document.getElementById('root'));
