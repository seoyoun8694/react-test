import { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';

function App() {
    const [list, setList] = useState(['HTML', 'CSS', 'JavaScript']);

    return (
        <div className="App">
            <Header title="WEB"
                desc="World Wide Web!"></Header>
            <Nav list={list}></Nav>
        </div>
    );
}

export default App;