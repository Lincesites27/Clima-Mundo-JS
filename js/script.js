const clicar = () => {
    const error404 = document.querySelector(".not-found");
    const container = document.querySelector(".container");
    const apiKey = 'e98e83929a5d2dfc73381ffc9cde9e6f';
    const city = document.querySelector('#search-input').value;
    const image = document.querySelector('weather-box img');


    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=${apiKey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                container.classList.remove("sucess")
                container.classList.add("height");
                error404.classList.add("show")
            } else {
                container.classList.remove("height");
                container.classList.add("sucess")
                error404.classList.remove("show")

               

                const temperature = document.querySelector(".temperature");
                temperature.innerHTML = `${parseInt(json.main.temp)-273 .toFixed(0) } <span>°C</span>`;

                const humidity = document.querySelector(".humidity .text")
                humidity.innerHTML = `${parseInt(json.main.humidity)}% <p>Umidade</p>`;

                const wind = document.querySelector(".wind .text")
                wind.innerHTML = `${parseInt(json.wind.speed)} Km/h <p>Velocidade do vento</p>`;

                const description = document.querySelector(".description");
                description.innerHTML = `${json.weather[0].description}`

                const icon = document.querySelector("#icon-api")
                icon.innerHTML = `'<img src="https://openweathermap.org/img/w/${json.weather[0].icon}.png"></img>'`;

                        
            }

        });
}