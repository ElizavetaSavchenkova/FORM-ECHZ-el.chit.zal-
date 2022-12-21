//class MoviesApi {
 // constructor(config) {
    //this._url = config.url;
   // this._headers = config.headers;
  //}

  //_checkResponse(res) {
    //if (res.ok) {
    //  return res.json();
   // }
    //return Promise.reject(`Ошибка: ${res.status}`);
  //}

 // getMovies() {
    //return fetch(`${this._url}`, {
     // method: 'POST',
      //headers: {
        //"Content-Type": "application/json",
        //"Accept": "application/json",
      //  "Authorization": "Token" + token
     // },
   // })
     // .then(this._checkResponse);
  //}

 // get({ query }) {
   // return fetch(`${this._url}`, {
     // method: "POST",
    //  headers: {
       // "Content-Type": "application/json",
      //  "Accept": "application/json",
       // "Authorization": "Token" + token
      //},
     // body: JSON.stringify({ query: query })
   // }).then((res) => this._checkResponse(res));
  //}
//}

//var token = "41688797003f58447658efa9561167f4eb4b9693";
//const moviesApi = new MoviesApi({
  //url: "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party",
 // mode: "cors",
  ////headers: {
  //  "Content-Type": "application/json",
  //  "Accept": "application/json",
  //  "Authorization": "Token" + token
 // },
//});

//export default moviesApi


//var token = "41688797003f58447658efa9561167f4eb4b9693";
//var query = "сбербанк";

//var options = {
//method: "POST",
//mode: "cors",
//headers: {
///"Content-Type": "application/json",
  //"Accept": "application/json",
  //  "Authorization": "Token " + token
// },
//body: JSON.stringify({ query: query })
//}

//fetch(url, options)
// .then(response => response.text())
//.then(result => console.log(result))
//.catch(error => console.log("error", error));


var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";
var token = "41688797003f58447658efa9561167f4eb4b9693";
var query = "сбербанк";

var options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
    body: JSON.stringify({query: query})
}

fetch(url, options)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log("error", error));

console.log(query.data.inn)
