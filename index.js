// ELEMENTS FOR USE:
// #current-temperature-value
// #current-city



function displayTemperature(response) {

    let tempElement = document.querySelector(".current-temperature-value");
    let temperature = Math.round(response.data["daily"][0]["temperature"]["day"]);
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = response.data.city;
    // console.log(temperature);
    // let temperature = Math.round(
    //   response.data["daily"][0]["temperature"]["day"]
    // );
    tempElement.innerHTML = temperature;
 
}


function search(event) {
    event.preventDefault();

    let searchInputElement = document.querySelector("#search-input");
    let city = searchInputElement.value.trim();

  
    let key = "d43cbfbdb54f0ta69db39f9bfdoa56be";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);

    
    
  
}


let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
