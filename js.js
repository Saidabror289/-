const apiKey = 'a6987b03ee6fb4955b3774b363d4a7e7'; // Замените на ваш API-ключ

    function getWeather() {
        const city = document.getElementById('cityInput').value;
        if (city === '') {
            alert('Пожалуйста, введите название города.');
            return;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Город не найден');
                }
                return response.json();
            })
            .then(data => {
                const cityName = data.name;
                const temperature = data.main.temp;
                const weatherDescription = data.weather[0].description;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;

                const weatherHTML = `
                    <h2>Погода в ${cityName}</h2>
                    <p>Температура: ${temperature}°C</p>
                    <p>Описание: ${weatherDescription}</p>
                    <p>Влажность: ${humidity}%</p>
                    <p>Скорость ветра: ${windSpeed} м/с</p>
                `;

                document.getElementById('weatherInfo').innerHTML = weatherHTML;
            })
            .catch(error => {
                document.getElementById('weatherInfo').innerHTML = `<p>Ошибка: ${error.message}</p>`;
            });
    }