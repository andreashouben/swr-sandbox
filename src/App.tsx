import React from 'react';
import './App.css';
import {Container, Nav, Navbar} from 'react-bootstrap';

function App() {
    return (
        <div className="App">
            <Navbar bg='light' variant={'light'}>
                <Container>
                    <Navbar.Brand>SWR-Sandbox</Navbar.Brand>
                    <Nav className={"me-auto"}>
                        <Nav.Link href='/'>Simple Demo</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default App;
