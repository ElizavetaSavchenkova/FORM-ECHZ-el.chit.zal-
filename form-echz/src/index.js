import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from '../src/components/App/App';
import reportWebVitals from './reportWebVitals';

//header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
//header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
//const allowedCors = [
//  'http://localhost:3000',
 // 'https://localhost:3000',
 // 'http://localhost:3001',
//  'https://localhost:3001',

//];

//module.exports = (req, res, next) => {
  //const { origin } = req.headers;
  //const { method } = req;
  ///const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

  //const requestHeaders = req.headers['access-control-request-headers'];
  //if (allowedCors.includes(origin)) {
   // res.header('Access-Control-Allow-Origin', origin);
  //}
 // if (method === 'OPTIONS') {
  //  res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
  //  res.header('Access-Control-Allow-Headers', requestHeaders);
 //   return res.end();
 // }
 // return next();
///};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
