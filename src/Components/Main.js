import React, { Component, Fragment } from 'react';
import { Button, Container, From } from 'react-bootstrap';
import { ModalConsumer } from '../Context/Modal';
import Img from './images/plus.png';
import {ModalAddAs} from './ModalAddAs';


export default class Main extends Component {
    render() {
        return (
            <Container>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Market Cap</th>
                            <th>Add assets </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>
                                <ModalConsumer>
                                    {({ showModal }) => (
                                        <Fragment>
                                            <Button variant="success" onClick={() => showModal(ModalAddAs, {additionalValue: 'BTC'})}>
                                                <img className="img" src={Img} height="16" width="16" alt="" />
                                            </Button>
                                        </Fragment>
                                    )}
                                </ModalConsumer>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="btn-group me-2" role="group" aria-label="Первая группа">
                    <button type="button" className="btn btn-outline-secondary">1</button>
                    <button type="button" className="btn btn-outline-secondary">2</button>
                    <button type="button" className="btn btn-outline-secondary">3</button>
                    <button type="button" className="btn btn-outline-secondary">4</button>
                </div>
            </Container>
        );
    }
}