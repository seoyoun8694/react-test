import styles from './App.module.css';

function Nav(props) {
    return (
        <nav>
            <ul className={styles.border}>
                <li><a href='1.html'>{props.list1}</a></li>
                <li><a href='2.html'>{props.list2}</a></li>
                <li><a href='3.html'>{props.list3}</a></li>
            </ul>
        </nav>
    );
}
export default Nav;
