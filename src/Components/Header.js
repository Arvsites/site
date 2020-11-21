import React, { Component } from "react";
import { Navbar,Nav,FormControl, Container,Form, Button } from 'react-bootstrap';
import logo from './book.png';


export default class Header extends Component{
    render(){
        return(
        <dev>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="40"
                            width="40"
                            className="d-inline-bloch align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="respnsive-navbar-nav"/>
                    <Navbar.Collapse id="respnsive-navbar-nav"/>
                        <Nav className="mr-auto">
                        <Nav.Link href="/"> Главная </Nav.Link>
                        <Nav.Link href="/about"> О нас </Nav.Link>
                        <Nav.Link href="/video"> Видеосвязь </Nav.Link>
                        <Nav.Link href="/contacts"> Контакты </Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Поиск"
                            className="mr-sm-2"
                        />
                        <Button variant="outline-info">Искать</Button>
                    </Form>
                </Container>
            </Navbar>
          
        </dev>
        );
    }
}