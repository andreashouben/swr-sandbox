import React from 'react';
import './App.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Route, Routes, useLocation} from 'react-router-dom';
import {SimpleDemo} from './SimpleDemo';

const Home = () => <h1>You're home</h1>
const MoreComplexDemo = () => <h1>More Complex Demo</h1>

const App = () => {
    const location = useLocation();
    return (
        <div className="App">
            <Navbar bg='light' variant={'light'}>
                <Container>
                    <Navbar.Brand href={'/'}>SWR-Sandbox</Navbar.Brand>
                    <Nav className={"me-auto"} activeKey={location.pathname}>
                        <Nav.Link href='/simpledemo'>Simple Demo</Nav.Link>
                        <Nav.Link href='/morecomplexdemo'>More Complex Demo</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/simpledemo" element={<SimpleDemo/>}/>
                    <Route path="/morecomplexdemo" element={<MoreComplexDemo/>}/>
                </Routes>
            </Container>
        </div>
    );
};

export default App;
