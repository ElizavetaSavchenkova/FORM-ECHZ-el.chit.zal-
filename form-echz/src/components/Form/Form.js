import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Form.css';
import logoRgb from '../../images/rgb_logo.jpeg';
import { PartySuggestions } from 'react-dadata';
import { useState } from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';


import 'react-dadata/dist/react-dadata.css';
//import burgerIcon from '../../images/burger-icon.svg'
//import headerLogo from '../../images/logo-header.svg';

function Form({ }) {

  //const location = useLocation();
  //const url = location.pathname === '/signin';
  //const buttonText = url ? 'Войти' : 'Зарегистрироваться';

  //function handleSubmit(event) {
  // event.preventDefault();
  // onSubmit();
  //}



  //console.log(briefVInputDataName != '')
  //<input id="nameInputBriefV" type="input" />

  const [valueParty, setValueParty] = useState()
  const [valueAddress, setValueAddress] = useState()
  const [value3, setValue3] = useState()

  //function get() {
   // const dataInn = valueParty.data.inn
    //console.log(dataInn)
 // }




  //useEffect(() => {
  // console.log(value)
  // console.log(value2);
  // if (value2 !== ''){
  // setValue3(value2.data.inn)
  // console.log('Не пустая')
  // console.log(value3)
  //} else {
  //  setValue3(null)
  //useEffect(() => {
    //get = () => {
    //  if (dataInn === undefined) { return }

      //console.log('Ловушка')
    //}
 // }, [get])

  // }
  //console.log(value2.data.inn)
  //}, [value, value2, value3])


  //useEffect(()=> {
  //console.log(value)
  //console.log(value2);
  //if (value2 === null){
  // console.log('Не пустая')
  // console.log(value3)
  //} else {
  //  setValue3(null)
  //}
  //console.log(value2.data.inn)
  //}, [value, value2, value3])

  //const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";
  //const token = "41688797003f58447658efa9561167f4eb4b9693";
  //const query = value

  //const options = {
  // method: "POST",
  // mode: "cors",
  //headers: {
  // "Content-Type": "application/json",
  // "Accept": "application/json",
  // "Authorization": "Token " + token
  //},
  // body: JSON.stringify({ query: query })
  //}

  //fetch(url, options)
  // .then(response => response.text())
  //.then(result => console.log(result))
  //.catch(error => console.log("error", error));

  //useEffect(() => {
  //console.log(value)
  //console.log(value2);
  //console.log(value2.data.inn)
  //})

  //let briefVInputDataName = party.value
  // console.log(briefVInputDataName != null)

  return (

    <section className="auth" >
      <form className="auth__form" noValidate>
        <a href="https://www.rsl.ru" rel="noreferrer" target="_blank" className="auth__form-logo">
          <img className="auth__form-logo-pic" alt="Логотип" src={logoRgb} />
        </a>
        <h3 className="auth__form-description">Уважаемые пользователи!</h3>
        <p className="auth__form-description">Для заключения договора о подключении к НЭБ и о предоставлении доступа к объектам НЭБ необходимо заполнить форму.</p>
        <h2 className="auth__form-title">Форма для создания новой заявки</h2>

        <fieldset className="auth__form-fieldset">

          <label className="auth__form-label">
            <span className="auth__form-input-name">Электронная почта</span>
            <input className='auth__form-input'
              name="email"
              type="email"
              id='email'
              placeholder="Укажите Ваш электронный адрес"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="auth__form-input-error"></span>
          </label>


          <label className="auth__form-label">
            <span className="auth__form-input-name">Контактное лицо</span>
            <input className='auth__form-input'
              name="contact"
              type="text"
              placeholder="Укажите ФИО контактного лица"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="auth__form-input-error"></span>
          </label>



          <label className="auth__form-label">
            <span className="auth__form-input-name">Телефон</span>
            <input className='auth__form-input'
              id="emailReg"
              type="email"
              name="email"
              placeholder="
              Укажите контактный телефон (с кодом города) для уточнения информации"
              required
            />
            <span className="auth__form-input-error"></span>
          </label>

          <label className="auth__form-label">
            <span className="auth__form-input-name">Полное наименование организации</span>
            <PartySuggestions
              token="41688797003f58447658efa9561167f4eb4b9693"
              value={valueAddress}
              onChange={setValueAddress}
              inputProps={{
                'placeholder': 'Начните вводить',
                'className': 'auth__form-input',
                'id': "party",
                "type": "input"

              }}


            />;
            <span className="auth__form-input-error">Ошибка</span>
          </label>


          <label className="auth__form-label">
            <span className="auth__form-input-name">Организационно правовая форма</span>
            <input className='auth__form-input'
              id="text"
              type="text"
              name="text"
              placeholder="Укажите полное наименование организации"
              required
            />
            <span className="auth__form-input-error">Ошибка</span>
          </label>


          <label className="auth__form-label">
            <span className="auth__form-input-name">Адрес местонахождения</span>
            <AddressSuggestions
              token="41688797003f58447658efa9561167f4eb4b9693"
              value={valueParty}
              onChange={setValueParty}
              inputProps={{
                'placeholder': 'Начните вводить',
                'className': 'auth__form-input',
                'id': "address",

              }}

            />
            <span className="auth__form-input-error"></span>
          </label>

          <label className="auth__form-label">
            <span className="auth__form-input-name">Основной государственный регистрационный номер (ОГРН)</span>
            <input className='auth__form-input'
              id="emailReg"
              type="email"
              name="email"
              placeholder="
              13-значный номер без пробелов, дефисов"
              required
            />
            <span className="auth__form-input-error"></span>
          </label>

          <label className="auth__form-label">
            <span className="auth__form-input-name">Идентификационный номер налогоплательщика (ИНН)</span>
            <input className='auth__form-input'
              id="text"
              type="text"
              name="text"
              placeholder="ИНН"
              required
              value={''}
            />
            <span className="auth__form-input-error"></span>
          </label>

          <label className="auth__form-label">
            <span className="auth__form-input-name">Примечание</span>
            <input className='auth__form-input'
              id="emailReg"
              type="email"
              name="email"
              placeholder="Примечание"
              required
            />
            <span className="auth__form-input-error"></span>
          </label>








          <button
            className='auth__button'
            type="submit"
            disabled>
          </button>
        </fieldset>
        <p className="auth__form-text">{ }
          <p className="auth__form-text-link">{ }</p>
        </p>
      </form>
    </section>
  )
}

export default Form
