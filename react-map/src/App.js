import './App.css';
import { useEffect, useRef } from 'react';

const { kakao } = window;
let ref = null;

const MapContainer = () => {
    ref = useRef();
    useEffect(() => {
        const container = document.getElementById('myMap');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
        ref.current = map;

        async function getData() {
            const url = 'http://ggoreb.pythonanywhere.com/location/data/?page=1&count=50';
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            const list = data.data;
            list.map((v) => {
                const lat = v.latitude;
                const lng = v.longitude;
                var markerPosition = new kakao.maps.LatLng(lat, lng);
                var marker = new kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(ref.current);
            });
        }
        getData();
    }, []);

    return (
        <div id='myMap' style={{
            width: '800px',
            height: '800px'
        }}></div>
    );
}

function App() {
    return (
        <>
            <h1>Kakao Map</h1>
            <MapContainer />
            <button onClick={() => {
                var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);
                ref.current.setCenter(moveLatLon);
            }}>이동</button>
        </>
    );
}

export default App;
