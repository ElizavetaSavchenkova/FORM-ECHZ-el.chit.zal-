class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }


  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //addReq() {
  // return fetch(`${this._url}/task/:id701589`, {
  //  method: 'GET',
  //  mode: 'no-cors',
  //  headers: {
  //    "Content-Type": "application/json",
  //  },
  //}).then((res) => this._checkResponse(res));
  //}
  addNewContact() {
    return fetch(`${this._url}/contact/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer 5c4454b83761f4a0e4265c9a907346de'
      }, body: JSON.stringify({
        "templateId": 1,
        name: "TEST",
        midname: "TESTOVICH",
        lastname: "Ivanov",
        "customFieldData": [
          {
            "field": {
              "id": 160
            },
            "value": {
              "id": 111
            }
          }
        ],
      })
    }).then((res) => this._checkResponse(res));
  }

  addReq(task) {
    return fetch(`${this._url}/task/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer 5c4454b83761f4a0e4265c9a907346de'
      }, body: JSON.stringify({
        name: "Заявка на создание ЭЧЗ_тестАпи",
        description: "Задача ЭЧЗ",
        "template": {
          "id": 702773
        },
        "customFieldData": [
          {
            "field": {
              "id": 163080
            },
            "value": task
          }
        ]
      })
    }).then((res) => this._checkResponse(res));
  }
}

const api = new Api({
  url: 'https://rsl.planfix.ru/rest/',
  headers: {
    "content-type": "application/json",
    'Authorization': 'Bearer 5c4454b83761f4a0e4265c9a907346de'
  }
});

export default api;

//5c4454b83761f4a0e4265c9a907346de,

//country: movie.country,
//director: movie.director,
//duration: movie.duration,
//year: movie.year,
//description: movie.description,
//image: movie.image,
//trailerLink: movie.trailerLink,
//nameRU: movie.nameRU,
//nameEN: movie.nameEN,
//thumbnail: movie.thumbnail,
//movieId: movie.movieId,

//var token = "5c4454b83761f4a0e4265c9a907346de";
