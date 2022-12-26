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
//import moviesApi from '../../api';
import api from '../PF';
import './App.css';

function App() {
  const [keyword, setKeyword] = useState('')

  function addContact(name, midname, lastname) {
    api.addNewContact(name, midname, lastname)
      .then((newContact) => {
        console.log('создался контакт')
        console.log(newContact)
        console.log(newContact.id)
        //setCards([newCard.card, ...cards]);
        //closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }



  function addTask(task) {
    api.addReq(task)
      .then((newTask) => {
        console.log('создалась задача')
        //let newTasking  = {
        // email: email
        //}
        console.log(newTask)
        console.log(task)
        console.log(newTask.id)
        //console.log(name)


        //setCards([newCard.card, ...cards]);
        //closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleChangeInputKeyword(event) {
    setKeyword(event.target.value);
    console.log(keyword)
    console.log(event.target.value);
  }

  return (
    <div className="page">
      <Form
        // onSubmit= {() => {addTask();addContact();}}
        onSubmit={addTask}
        handleChange={handleChangeInputKeyword}
        keyword={keyword}

      />
    </div >

  );
}

export default App

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

 //name=document.getElementById("name_id").value; //получаем значение из поля в html

//1


//Вот так:

//HTML:

//<form action="form.php" onsubmit="return onSubmit(this)">
  //  <input type="text" name="name1">
   // <input type="submit" value="Отправить">
//</form>
//JavaScript:

//function onSubmit(obj)
//////{
 //   setCookie('name1', obj.name1.value);
    //если форму после setCookie надо отправлять на сервер, то замените ниже false на true:
  //  return false;
//</input>}
