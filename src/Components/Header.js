import React, { Component, Fragment } from 'react';
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap'
import { ModalConsumer } from '../Context/Modal';
import logo from './images/logo1.png';
import {ModalAssets} from './ModalAssets';

export default class Header extends Component {

    render() {
        return (
            <Navbar bg="dark" variant='dark'>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} height="40" width="40" className="d-inline-block align-top" alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                        <p className="text-white mb-auto">BTC  43,156.15$  ETH 3,314.81$  BNB 482.94$</p>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link> 134,32 USD +2,38 (1,80 %) </Nav.Link>
                        </Nav>
                        <ModalConsumer>
                            {({ showModal })=> (
                            <Fragment>
                                <Button className='mr-sm-2' variant="outline-info" onClick={() => showModal(ModalAssets)}> Assets </Button>
                            </Fragment>
                            )}
                        </ModalConsumer>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
