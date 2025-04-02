const handleClick = (e) => {
    e.target.style.backgroundColor = 'beige';
    e.target.style.textDecoration = 'underline';
};

function Footer(props) {
    return (
        <footer>
            {
                props.footers.map((v, i) => {
                    return <h5 key={i} onClick={handleClick}>{v}</h5>
                })
            }
        </footer>
    );
}
export default Footer;