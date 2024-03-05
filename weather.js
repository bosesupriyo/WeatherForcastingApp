//  Create your own Weather App api key from https://openweathermap.org/

/* Step 1: Set up Api Key */
const apiKey = '6d055e39ee237af35ca066f35474e9df';

function getWeather(){
    const city = document.getElementById('searchCity').value;
    if(city === ''){
        alert("Please enter a valid city.");
        return;
    }

    /* Step 2: Set up apiUrl */
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    /* Step 3 : Fetch JSON Data */

    fetch(apiUrl)
    .then(response => response.json())
    .then(data =>{
        displayWeather(data);
    })
    .catch(error => {
        console.error('Error Occurred ', error);
    });
}

function displayWeather(data){
    const cityName = data.name;
    const cityName1 = data.name;
    const lat = data.coord.lat;
    const lon = data.coord.lon;
    const timezone = data.timezone;
    const visibility = data.visibility;
    const deg = data.wind.deg;
    const speed = data.wind.speed;
    const weather = data.weather[0].description;

    const apiUrl2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(apiUrl2)
    .then(response => response.json())
    .then(data =>{
        displayWeatherDetails(data);
    })
    .catch(error => {
        console.error('Error Occurred ', error);
    });

    document.getElementById('city').innerHTML = cityName;
    document.getElementById('city1').innerHTML = cityName1;
    document.getElementById('Latitude').innerHTML = lat;
    document.getElementById('Longitude').innerHTML = lon;
    document.getElementById('Timezone').innerHTML = timezone;
    document.getElementById('Visibility').innerHTML = visibility;
    document.getElementById('Wind_deg').innerHTML = deg;
    document.getElementById('Wind_speed').innerHTML = speed;
    document.getElementById('Weather').innerHTML = weather;
    
    console.log(data);
}

function displayWeatherDetails(data){
    // document.getElementById('Report').innerHTML += 
    // '<br>Dew Point : ' + data.current.dew_point + 
    // '<br>Pressure : ' + data.current.pressure + 
    // '<br>Humidity : ' + data.current.humidity;
    
    document.getElementById('DewPoint').innerHTML = data.current.dew_point;
    document.getElementById('feels_like').innerHTML = data.current.feels_like;
    document.getElementById('humidity').innerHTML = data.current.humidity;
    document.getElementById('Pressure').innerHTML = data.current.pressure;
    document.getElementById('Sunrise').innerHTML = data.current.sunrise;
    document.getElementById('Sunset').innerHTML = data.current.sunset;
    document.getElementById('Temparature').innerHTML = (data.current.temp - 273).toFixed(2);
    // document.getElementById('Weather').innerHTML = data.weather[0].description;
    // '<br>Dew Point : ' + data.current.dew_point + 
    // '<br>Pressure : ' + data.current.pressure + 
    // '<br>Humidity : ' + data.current.humidity + 
    // '<br>FeelsLike : ' + data.current.feels_like + 
    // '<br>Sunrise : ' + data.current.sunrise + 
    // '<br>Sunset : ' + data.current.sunset +s
    // '<br>Temparature : ' + (data.current.temp - 273); 
}




var g = 0;
    function changeMode(){
        if(g==0){
            //body
            document.getElementById('content').style.background = 'black';
            document.getElementById('content').style.color = 'white';
            //footer
            document.querySelector('.sticky-footer').style.background='black';
            document.querySelector('.sticky-footer').style.color='white';



            // card 01
            document.querySelector('.card-body').style.background='black';
            // document.querySelector('.card-body').style.color='white';
            document.querySelector('.card.border-left-primary.shadow.h-100.py-2').style.background='black';
            // document.querySelector('.card.border-left-primary.shadow.h-100.py-2').style.color='white';



            //latitude
            document.querySelector('.card.border-left-primary.shadow.h-1001.py-2').style.background='black';
            document.querySelector('.card.border-left-primary.shadow.h-1001.py-2').style.background='black';
            //longitude
            document.querySelector('.card.border-left-primary.shadow.h-1002.py-2').style.background='black';
            document.querySelector('.card.border-left-primary.shadow.h-1002.py-2').style.background='black';
            //TimeZone
            document.querySelector('.card.border-left-primary.shadow.h-1003.py-2').style.background='black';
            document.querySelector('.card.border-left-primary.shadow.h-1003.py-2').style.background='black';

            //Feels Like
            document.querySelector('.card.border-left-warning.shadow.h-1004.py-2').style.background='black';
            document.querySelector('.card.border-left-warning.shadow.h-1004.py-2').style.background='black';
            //Humidity
            document.querySelector('.card.border-left-warning.shadow.h-1005.py-2').style.background='black';
            document.querySelector('.card.border-left-warning.shadow.h-1005.py-2').style.background='black';
            //Pressure
            document.querySelector('.card.border-left-warning.shadow.h-1006.py-2').style.background='black';
            document.querySelector('.card.border-left-warning.shadow.h-1006.py-2').style.background='black';

            //Sunset
            document.querySelector('.card.border-left-success.shadow.h-1007.py-2').style.background='black';
            document.querySelector('.card.border-left-success.shadow.h-1007.py-2').style.background='black';
            //temparature
            document.querySelector('.card.border-left-success.shadow.h-1008.py-2').style.background='black';
            document.querySelector('.card.border-left-success.shadow.h-1008.py-2').style.background='black';
            //visibility
            document.querySelector('.card.border-left-success.shadow.h-1009.py-2').style.background='black';
            document.querySelector('.card.border-left-success.shadow.h-1009.py-2').style.background='black';

            //Wind Deg
            document.querySelector('.card.border-left-info.shadow.h-1000.py-2').style.background='black';
            document.querySelector('.card.border-left-info.shadow.h-1000.py-2').style.background='black';
            //Wind Speed
            document.querySelector('.card.border-left-info.shadow.h-10001.py-2').style.background='black';
            document.querySelector('.card.border-left-info.shadow.h-10001.py-2').style.background='black';




            // card 02
            
            document.querySelector('.card-body').style.background='black';
            // document.querySelector('.card-body').style.color='white';
            document.querySelector('.card.border-left-warning.shadow.h-100.py-2').style.background='black';
            // document.querySelector('.card.border-left-primary.shadow.h-100.py-2').style.color='white';



            // card 03
            
            document.querySelector('.card-body').style.background='black';
            // document.querySelector('.card-body').style.color='white';
            document.querySelector('.card.border-left-success.shadow.h-100.py-2').style.background='black';
            // document.querySelector('.card.border-left-primary.shadow.h-100.py-2').style.color='white';




            // card 04
            
            document.querySelector('.card-body').style.background='black';
            // document.querySelector('.card-body').style.color='white';
            document.querySelector('.card.border-left-info.shadow.h-100.py-2').style.background='black';
            // document.querySelector('.card.border-left-primary.shadow.h-100.py-2').style.color='white';
           
            // --------------------------------
            document.getElementById('city').style.color = 'white';
            document.getElementById('Latitude').style.color = 'white';
            document.getElementById('Longitude').style.color = 'white';
            document.getElementById('Timezone').style.color = 'white';

            document.getElementById('DewPoint').style.color = 'white';
            document.getElementById('feels_like').style.color = 'white';
            document.getElementById('humidity').style.color = 'white';
            document.getElementById('Pressure').style.color = 'white';

            document.getElementById('Sunrise').style.color = 'white';
            document.getElementById('Sunset').style.color = 'white';
            document.getElementById('Temparature').style.color = 'white';
            document.getElementById('Visibility').style.color = 'white';

            document.getElementById('Weather').style.color = 'white';
            document.getElementById('Wind_deg').style.color = 'white';
            document.getElementById('Wind_speed').style.color = 'white';
            

            g=1;
        }else{
            //body
            document.getElementById('content').style.background = 'white';
            document.getElementById('content').style.color = 'black';
            //footer
            document.querySelector('.sticky-footer').style.background='white';
            document.querySelector('.sticky-footer').style.color='black';



            //card 01
            document.querySelector('.card-body').style.background='white';
            // document.querySelector('.card-body').style.color='white';
            document.querySelector('.card.border-left-primary.shadow.h-100.py-2').style.background='white';
            

            // latitude
            document.querySelector('.card.border-left-primary.shadow.h-1001.py-2').style.background='white';
            //longitude
            document.querySelector('.card.border-left-primary.shadow.h-1002.py-2').style.background='white';
            //TimeZone
            document.querySelector('.card.border-left-primary.shadow.h-1003.py-2').style.background='white';

            //FeelsLike
            document.querySelector('.card.border-left-warning.shadow.h-1004.py-2').style.background='white';
            //Humidity
            document.querySelector('.card.border-left-warning.shadow.h-1005.py-2').style.background='white';
            //Pressure
            document.querySelector('.card.border-left-warning.shadow.h-1006.py-2').style.background='white';

            //Sunset
            document.querySelector('.card.border-left-success.shadow.h-1007.py-2').style.background='white';
            //Temparature
            document.querySelector('.card.border-left-success.shadow.h-1008.py-2').style.background='white';
            //Visibility
            document.querySelector('.card.border-left-success.shadow.h-1009.py-2').style.background='white';


            //Wind Deg
            document.querySelector('.card.border-left-info.shadow.h-1000.py-2').style.background='white';
            //Wind Speed
            document.querySelector('.card.border-left-info.shadow.h-10001.py-2').style.background='white';



            // input-group



            // card 02


            document.querySelector('.card-body').style.background='white';
            // document.querySelector('.card-body').style.color='white';
            document.querySelector('.card.border-left-warning.shadow.h-100.py-2').style.background='white';
            
            // card 03

            document.querySelector('.card-body').style.background='white';
            // document.querySelector('.card-body').style.color='white';
            document.querySelector('.card.border-left-success.shadow.h-100.py-2').style.background='white';


            // card 04

            document.querySelector('.card-body').style.background='white';
            // document.querySelector('.card-body').style.color='white';
            document.querySelector('.card.border-left-info.shadow.h-100.py-2').style.background='white';

            // -------------------------------------
            document.getElementById('city').style.color = '#5a5c69';
            document.getElementById('Latitude').style.color = '#5a5c69';
            document.getElementById('Longitude').style.color = '#5a5c69';
            document.getElementById('Timezone').style.color = '#5a5c69';

            document.getElementById('DewPoint').style.color = '#5a5c69';
            document.getElementById('feels_like').style.color = '#5a5c69';
            document.getElementById('humidity').style.color = '#5a5c69';
            document.getElementById('Pressure').style.color = '#5a5c69';

            document.getElementById('Sunrise').style.color = '#5a5c69';
            document.getElementById('Sunset').style.color = '#5a5c69';
            document.getElementById('Temparature').style.color = '#5a5c69';
            document.getElementById('Visibility').style.color = '#5a5c69';

            document.getElementById('Weather').style.color = '#5a5c69';
            document.getElementById('Wind_deg').style.color = '#5a5c69';
            document.getElementById('Wind_speed').style.color = '#5a5c69';



            g=0;
        }
    }
    
