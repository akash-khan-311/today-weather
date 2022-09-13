// Variable Decleration
const GetCity = document.getElementById('city-name');
// API Key 
const API_KEY = `ea37c57f8f4e06eabc23bda955d95137`;






//Get Data
const getTemperature = () => {
    if (GetCity.value === '') {
        alert('Write A City Name')
    }
    else if (!temp == 0) {
        alert('Write A Valid City Name')
        GetCity.value = '';
    }
    else {
        const city = GetCity.value;
        GetCity.value = '';

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayTemp(data))
    }

}



const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}


// Show Temperature On UI
const displayTemp = temp => {
    setInnerText('city', temp.name)
    setInnerText('temp', temp.main.temp)
    setInnerText('condition', temp.weather[0].main)
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    const TempImg = document.getElementById('temp-icon')
    TempImg.setAttribute('src', url)

}