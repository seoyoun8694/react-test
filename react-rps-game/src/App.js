import { useState } from 'react';
import './App.css';
import styles from './App.module.css';

function Title() {
    return (
        <div className='title'>
            <h1>가위 바위 보 게임</h1>
        </div>
    );
}

function Scissors(props) {
    return (
        <div className={styles.control} onClick={() => props.send(0)}>
            <img src='http://ggoreb.com/images/react/scissors.png' alt="가위" />
        </div>
    );
}

function Rock(props) {
    return (
        <div className={styles.control} onClick={() => props.send(1)}>
            <img src='http://ggoreb.com/images/react/rock.png' alt="바위" />
        </div>
    );
}

function Paper(props) {
    return (
        <div className={styles.control} onClick={() => props.send(2)}>
            <img src='http://ggoreb.com/images/react/paper.png' alt="보" />
        </div>
    );
}

function Result(props) {
    const choices = ['가위', '바위', '보'];
    const comChoice = props.result.com !== null ? choices[props.result.com] : '-';
    const playerChoice = props.result.player !== null ? choices[props.result.player] : '-';

    return (
        <div className='result'>
            <h1>Com: {comChoice}</h1>
            <h1>Player: {playerChoice}</h1>
            <h1>Result: {props.result.result}</h1>
        </div>
    );
}

function App() {
    const [result, setResult] = useState({
        com: null,
        player: null,
        result: "",
    });

    const send = (what) => {
        const com = Math.floor(Math.random() * 3);

        if ((what + 1) % 3 === com) {
            setResult({
                com: com,
                player: what,
                result: "Com 승리"
            });
        } else if (what === com) {
            setResult({
                com: com,
                player: what,
                result: "비겼음"
            });
        } else {
            setResult({
                com: com,
                player: what,
                result: "Player 승리"
            });
        }
    };

    return (
        <div className="App">
            <Title />
            <div className={styles.controls}>
                <Scissors send={send} />
                <Rock send={send} />
                <Paper send={send} />
            </div>
            <Result result={result} />
        </div>
    );
}

export default App;