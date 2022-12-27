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

  function addContact(newContact) {
    console.log(newContact)
    api.addNewContact(newContact)

      .then((newwwContact) => {
        console.log('создался контакт')
        console.log(newwwContact)
        console.log(newwwContact.id)
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
        console.log(newTask)
        //console.log(obj)
        console.log(newTask.id)
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


  //function rew(){
  /// Promise.all([api.addReq(), api.addNewContact()])
  // .then(([task, newContact]) => {
  //  console.log(task)
  // console.log(newContact)
  //
  // })
  ///.catch((err) => {
  //  console.log(err);
  // });
  //}


  function getContact() {
    api.getAllContacts()
      .then((contact) => {
        console.log('создалась задача')
        console.log(contact)
        //console.log(obj)
        //console.log(newTask.id)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const arrayInn = ['7777777777', '5555555555'];
  const containsAdmin = arrayInn.some(element => element === '5555555555');
  console.log(containsAdmin)
  // в containsAdmin будет записано true




  return (
    <div className="page">
      <Form
        //onSubmit= {() => {addTask();addContact();}}
        //onSubmit={addTask}
        //onSubmit={addContact}
        //onSubmit={rew}


        onSubmit={getContact}

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
