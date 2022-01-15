import React, { Component } from 'react';
import { ModalConsumer } from '../Context/Modal';

export const ModalRoot = () => (
    <ModalConsumer>
        {({component: Component, props, hideModal}) =>
            Component ? <Component {...props} onRequestClose={hideModal} /> : null
        }
    </ModalConsumer>
)