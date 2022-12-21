import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { PartySuggestions } from 'react-dadata';
import logoRgb from '../../images/rgb_logo.jpeg';
import Form from '../Form/Form';
//import moviesApi from '../../api'

import './App.css'

function App() {




  //useEffect(()=> {
  //console.log(data.inn)
  // moviesApi.getMovies()
  //})

  // useEffect(() => {
  //moviesApi.getMovies([])
  //.then(() => {
  // console.log('работает')
  // })
  // .catch((err) => {
  //console.log(err);

  // });
  //}, []);

  //useEffect(() => {
  //moviesApi.get([])
  // .then(() => {
  //  console.log('работает')
  //})
  //.catch((err) => {
  // console.log(err);

  // });
  //}, []);

  return (
    <div className="page">
      <Form></Form>
    </div >

  );
}

export default App
