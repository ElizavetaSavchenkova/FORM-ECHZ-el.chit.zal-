import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useCallback } from "react";
import './Form.css';
import logoRgb from '../../images/rgb_logo.jpeg';
import { PartySuggestions } from 'react-dadata';
import { useState } from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

function Form({ onSubmit, handleChange }) {

  const [valueParty, setValueParty] = useState("")
  const [valueAddress, setValueAddress] = useState("")
  const [valueInn, setValueInn] = useState("")

  const [value, setValue] = useState('')

  // function a() {
  //setValue(document.getElementById('email').value)

  // let task = {
  //   email: email.value || '',
  //  contact: 'dddddd'
  //}
  //}
  // const email = document.getElementById('email').value


  function handleSubmit(event) {
    event.preventDefault();
    // constants()
    //a()
    const email = document.getElementById('email').value
    console.log(email)
    const contact = document.getElementById('contact').value
    console.log(contact)

    let task = {
      email: email,
      contact: contact
    }
    console.log(task)
    onSubmit(task);

  }


  useEffect(() => {
    console.log(valueAddress)
    console.log(valueParty)
    console.log(valueParty.data)
    const dadata = valueParty.data
    console.log(dadata)
    if (dadata === undefined) {
      console.log('dadata')
    } else {
      const dadadata = valueParty.data.inn
      console.log(dadadata)
      setValueInn(dadadata)
      const ad = valueParty.data.address
      setValueAddress(ad)
      const input_val = document.getElementById('email').value;
      console.log(input_val)
    }

  }, [valueAddress, valueParty])



  return (
    <section className="auth" >
      <form className="auth__form" noValidate onSubmit={handleSubmit}>
        <a href="https://www.rsl.ru" rel="noreferrer" target="_blank" className="auth__form-logo">
          <img className="auth__form-logo-pic" alt="Логотип" src={logoRgb} />
        </a>
        <div className="form__info-container">
          <p className="auth__form-description">Уважаемые пользователи!</p>
          <p className="auth__form-description">Для заключения договора о подключении к НЭБ и о предоставлении доступа к объектам НЭБ необходимо заполнить форму.</p>
        </div>
        <h1 className="auth__form-title">Форма для создания новой заявки</h1>

        <fieldset className="auth__form-fieldset">
          <label className="auth__form-label">
            <span className="auth__form-input-name">Электронная почта</span>
            <input className='auth__form-input'
              name="email"
              type="email"
              id="email"
              placeholder="Укажите Ваш электронный адрес"
              minLength="2"
              maxLength="30"
              required
              onChange={handleChange}


            />
            <span className="auth__form-input-error"></span>
          </label>

          <label className="auth__form-label">
            <span className="auth__form-input-name">Контактное лицо</span>
            <input className='auth__form-input'
              name="contact"
              id="contact"
              type="text"
              placeholder="Укажите ФИО контактного лица"
              minLength="2"
              maxLength="50"
              required

            />
            <span className="auth__form-input-error"></span>
          </label>

          <label className="auth__form-label">
            <span className="auth__form-input-name">Телефон</span>
            <input className='auth__form-input'
              name="phonenumber"
              id="phonenumber"
              type="text"
              placeholder="Укажите контактный телефон (с кодом города) для уточнения информации"
              required

            />
            <span className="auth__form-input-error"></span>
          </label>

          <label className="auth__form-label">
            <span className="auth__form-input-name">Полное наименование организации</span>
            <PartySuggestions
              token="41688797003f58447658efa9561167f4eb4b9693"
              value={valueParty}
              onChange={setValueParty}
              inputProps={{
                'placeholder': 'Начните вводить',
                'className': 'auth__form-input',
                'id': "party",
                "type": "input"
              }}
            />
            <span className="auth__form-input-error"></span>
          </label>


          <label className="auth__form-label">
            <span className="auth__form-input-name">Организационно правовая форма</span>
            <input className='auth__form-input'
              id="organizationform"
              type="text"
              name="organizationform"
              placeholder="Укажите полное наименование организации"
              required
            />
            <span className="auth__form-input-error"></span>
          </label>


          <label className="auth__form-label">
            <span className="auth__form-input-name">Адрес местонахождения</span>
            <AddressSuggestions
              token="41688797003f58447658efa9561167f4eb4b9693"
              value={valueAddress}
              onChange={setValueAddress}
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
              id="ogrn"
              type="text"
              name="ogrn"
              placeholder="
              13-значный номер без пробелов, дефисов"
              required
            />
            <span className="auth__form-input-error"></span>
          </label>

          <label className="auth__form-label">
            <span className="auth__form-input-name">Идентификационный номер налогоплательщика (ИНН)</span>
            <input className='auth__form-input'
              id="inn"
              type="text"
              name="inn"
              placeholder="ИНН"
              required
              value={valueInn}
            />
            <span className="auth__form-input-error"></span>
          </label>

          <label className="auth__form-label">
            <span className="auth__form-input-name">Примечание</span>
            <p><textarea className="textarea" name="comment" id="comment"></textarea></p>
            <span className="auth__form-input-error"></span>
          </label>

          <button
            className='auth__button'
            type="submit"
          >Отправить заявку
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
