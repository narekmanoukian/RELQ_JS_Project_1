
const cityName = document.querySelector('.cityName');
var button = document.querySelector('.button');
const Data = document.querySelector('.Data');


const API_Key = "0e4e4c8687177d9f03f1f90f3cd107d7";


button.addEventListener('click', () => {

   
    const city = cityName.value;
    

   
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_Key}`)
        .then(res => res.json())
        .then(data => {
          

           
            cityName.value = " ";

            Data.innerHTML = `
                                <ul>
                                    <li class="desc">${data.weather[0].description}</li>
                                    <li class="city">${data.name}</li>
                                    <li class="temp">${data.main.temp}°c</li>
                                </ul>
                                `; 

        });

});

