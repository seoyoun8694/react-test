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

    const factorial = (n) => {
        if (n == 0) {
            return 0;
        } else if (n == 1) {
            return 1;
        } else {
            return factorial(n - 1) * n
        }
    }
    const no_memo = () => {
        console.log("factorial 연산");
        let result = factorial(5);
        return result;
    };

    return (
        <header>
            <h1 onClick={click}>{props.title}</h1>
            <h1>팩토리얼 연산 결과: {no_memo()}</h1>
            <p onClick={() => {
                //setCount(prev => prev + 1);
                setCount(count + 1);
            }}>{props.desc} {count}</p>
        </header>
    );
}

export default Header;