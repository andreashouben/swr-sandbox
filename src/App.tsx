import React from 'react';
import './App.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link, Route, Routes, useLocation} from 'react-router-dom';
import {SimpleDemo} from './demos/SimpleDemo';
import {ErrorDemo} from './demos/ErrorDemo';

const Home = () => <h1>You're home</h1>



const Outlet = () =>{


    return <Container>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/simpledemo" element={<SimpleDemo/>}/>
                <Route path="/morecomplexdemo" element={<ErrorDemo/>}/>
            </Routes>

    </Container>
}

const App = () => {
    const location = useLocation();
    return (
        <div className="App">
            <Navbar bg='light' variant={'light'}>
                <Container>
                    <Navbar.Brand href={'/'}>SWR-Sandbox</Navbar.Brand>
                    <Nav className={"me-auto"} activeKey={location.pathname}>
                        <Nav.Link as={Link} to='/simpledemo'>Simple Demo</Nav.Link>
                        <Nav.Link as={Link} to='/morecomplexdemo'>Error Demo</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
};

export default App;
