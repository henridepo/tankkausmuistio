import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import Startup from './components/startup';


const firebaseConfig = {

  apiKey: "AIzaSyDJUlrJnm4yGCdzyNct5hlxas4Rn2st9B0",

  authDomain: "tankkausmuistio.firebaseapp.com",

  projectId: "tankkausmuistio",

  storageBucket: "tankkausmuistio.appspot.com",

  messagingSenderId: "210431346029",

  appId: "1:210431346029:web:2cfcf4f94d6a7bb7dc8664"

};


const root = document.getElementById('root');
ReactDOM.render(
<React.StrictMode>
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <AuthCheck fallback={<Startup />}>
    <App />
    </AuthCheck>
  </FirebaseAppProvider>
</React.StrictMode>, root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
