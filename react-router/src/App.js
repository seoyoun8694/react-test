import './App.css';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';

function ComponentN() {
    const { number } = useParams();
    return <div>{number}번 화면</div>
}

function ComponentAZ() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const name = ServiceWorker.get('name');
    return <div>ID-{id}, NAME-{name}</div>
}

function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>React Router Dom</h1>
                <NavLink to='/1'>1번으로 이동</NavLink> /&nbsp;
                <NavLink to='/2'>2번으로 이동</NavLink> /&nbsp;
                <NavLink to='/3'>3번으로 이동</NavLink> /&nbsp;
                <NavLink to='/4'>4번으로 이동</NavLink> /&nbsp;
                <NavLink to='/5'>5번으로 이동</NavLink>
                <hr />

                <Link to='/a?id=10&name=abc'>이동 (Query String)</Link>

                <Routes>
                    <Route path='/:number' element={<ComponentN />} />
                    <Route path='/com/az' element={<ComponentAZ />} />
                </Routes>

                <footer style={{
                    marginTop: '50px',
                    background: 'lightblue'
                }}>꼬리말</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;