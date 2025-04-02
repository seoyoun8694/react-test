import { useState } from 'react';

function Nav({ list }) {
    const [count, setCount] = useState(0);
    console.log('Nav 생성');

    return (
        <nav>
            <button onClick={() => { setCount(count + 1) }}>
                증가 {count}
            </button>
            <ul>
                {
                    list.map((v, i) => {
                        return (
                            <li key={i}>
                                <a href="">{v}</a>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}
export default Nav;