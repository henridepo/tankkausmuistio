import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import Startup from './components/startup';

const firebaseConfig = {

  apiKey: "AIzaSyD5FVm_icHi3EJRcTOfxOjrvMTq3ltzATM",

  authDomain: "kulukirjanpito-42e02.firebaseapp.com",

  projectId: "kulukirjanpito-42e02",

  storageBucket: "kulukirjanpito-42e02.appspot.com",

  messagingSenderId: "543783386182",

  appId: "1:543783386182:web:edf62403715afb5ac89e47",

  measurementId: "G-GKCCT8VBSJ"

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
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
