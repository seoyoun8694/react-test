import styles from './App.module.css';
import './App.css';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function BasicExample() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

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
            avatarUrl: 'https://dynamic-assets.gather.town/v2/sprite-profile/avatar-Owh3rJLGGrWnafZevZoC.ZQ4DcK9PT2-stmXKVLvZ.lcJ74Jl6INXyPVTbRoKT.vdnti6Tz8SG2FOgpRHEe.KFOXd8cXRQiL4ErRJIGf.nwdH0ijelAkDv8UDRpfF.DAo9kwUIS6yeWO7ihtpw.png?d=.',
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
