import styles from './App.module.css';
import './App.css';

// function Header(props) {
//     return (
//         <header>
//             <h1>{props.title}</h1>
//             {props.content}
//         </header>
//     );
// }

// function Nav(props) {
//     return (
//         <nav>
//             <ul className={styles.border}>
//                 <li><a href='1.html'>{props.list1}</a></li>
//                 <li><a href='2.html'>{props.list2}</a></li>
//                 <li><a href='3.html'>{props.list3}</a></li>
//             </ul>
//         </nav>
//     );
// }

function Comment({ author, text, date }) {
    return (
        <div className="comment">
            <UserInfo user={author} />
            <div className="comment-text">{text}</div>
            <div className="comment-date">{date.toString()}</div>
        </div>
    );
}

function UserInfo({ user }) {
    return (
        <div className="user-info">
            <Avatar user={user} />
            <div className="user-info-name">{user.name}</div>
        </div>
    );
}

function Avatar({ user }) {
    return (
        <img className="avatar" src={user.avatarUrl} alt={user.name} />
    );
}

function App() {
    const commentData = {
        author: {
            avatarUrl: '링크',
            name: '서윤'
        },
        text: '설명',
        date: '2025-04-01'
    };

    return (
        <div className="App">
            <Comment {...commentData} />
        </div>
    );
}

export default App;
