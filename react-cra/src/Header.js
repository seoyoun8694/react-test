import { useEffect, useState } from "react";

function Header(props) {
    console.log('header');
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('처음에만 실행!');
        return () => {
            console.log('header 소멸');
        }
    }, []);

    useEffect(() => {
        console.log('count가 바뀔때 실행!');
    }, [count]);

    function click(e) {
        alert(e.target.innerText);
    }

    return (
        <header>
            <h1 onClick={click}>{props.title}</h1>
            <p onClick={() => {
                //setCount(prev => prev + 1);
                setCount(count + 1);
            }}>{props.desc} {count}</p>
        </header>
    );
}

export default Header;