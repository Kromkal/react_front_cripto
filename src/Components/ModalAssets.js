import React from "react";
import { Button, Container } from "react-bootstrap";
import Img from './images/min.png';

export const ModalAssets = ({ onRequestClose, ...otherProps }) => {
    return (
        <div className="modal__wrapper" onRequestClose={onRequestClose} {...otherProps}>

            <div className='modal__body'>
                
                    <div className="position-relative">
                        
                        <button type="button" class="btn-close position-absolute top-0 end-0" aria-label="Close" onClick={onRequestClose}></button>
                    </div>
                
                <Container>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Amount</th>
                                <th>Price</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td>
                                    <Button variant="danger">
                                        <img className="img" src={Img} height="18" width="18" alt="" />
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Container>

            </div>
        </div>
    )
}