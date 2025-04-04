import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';

function App() {
    const [list, setList] = useState(['HTML', 'CSS', 'JavaScript']);
    const [hide, setHide] = useState(false);
    const [toc, setToc] = useState([]);

    const getData = async () => {
        const url = 'http://ggoreb.com/api/toc.jsp';
        const res = await fetch(url);
        const data = await res.json();
        setToc(data);
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="App">
            {
                toc.map((v) => {
                    return <h3>{v.title}</h3>
                })
            }
            <button onClick={() => {
                setHide(!hide);
            }}>숨기기</button>
            {
                hide ?
                null : 
                <Header title="WEB"
                desc="World Wide Web!"></Header>
            }
            <Nav list={list}></Nav>
        </div>
    );
}

export default App;