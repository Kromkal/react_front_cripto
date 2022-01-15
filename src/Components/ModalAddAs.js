import React from "react";
import { Button } from "react-bootstrap";

export const ModalAddAs = ({ onRequestClose, additionalValue, ...otherProps }) => {
    return(
    <div className="modal__wrapper" onRequestClose={onRequestClose} {...otherProps}>

        <div className='modal__body'>
        <div className="pr">
            <b className="fs-5 pb">Add a new currency in your wallet</b><button type="button" className="btn-close" aria-label="Close" onClick={onRequestClose}></button>
        </div>
            <hr />
            <div className="input-group mb-3">
            <span className="input-group-text">{additionalValue}</span>
            <input type="number" className="form-control" defaultValue={0}/>
            <Button variant="success">Add</Button>
            </div>

        </div>
    </div>
    )
}