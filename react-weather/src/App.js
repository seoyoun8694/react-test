import { useEffect, useRef } from 'react';
import './App.css';

const Clock = () => {
    const clock = useRef();

    useEffect(() => {
        getClock();
        setInterval(getClock, 1000);
    }, []);

    function getClock() {
        //const clock = document.querySelector('#clock');
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        clock.innerText = `${hours}:${minutes}`;
    }

    return (
        <h2 id="clock" ref={clock}>00:00:00</h2>
    );
}

const Location = (props) => {
    return (
        <h2 id="location">
            {props.area} / {props.lat} / {props.lng}
        </h2>
    );
}

const Weather = () => {
    const getData = async () => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.1176&lon=129.0451&units=metric&appid=6edee3c2aa182bc44d18ccb204c98a31'
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        const lat = data.coord.lat;
        const lon = data.coord.lon;
        const name = data.name;
        document.querySelector('#location').innerHTML = `${name} / ${lat} / ${lon}`;

        const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        const temp = data.main.temp;
        const speed = data.wind.speed;
        const main = data.weather[0].main;

        document.querySelector('#weather > span:nth-child(1)').innerHTML = `${main}`;
        document.querySelector('#weather > span:nth-child(2)').innerHTML = `<img src='${icon}'>`;
        document.querySelector('#weather > span:nth-child(3)').innerHTML = `${temp.toFixed(1)}℃`;
        document.querySelector('#weather > span:nth-child(4)').innerHTML = `${speed}m/s`;

    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div id="weather">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Clock />
            <Location area="Busan" lat={35.1176} lng={129.0451} />
            <Weather />
        </div>
    );
}

export default App;