import { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';

function App() {
    const [list, setList] = useState(['HTML', 'CSS', 'JavaScript']);
    const [hide, setHide] = useState(false);

    return (
        <div className="App">
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