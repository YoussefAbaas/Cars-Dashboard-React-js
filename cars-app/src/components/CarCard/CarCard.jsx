import React, { useState } from 'react'
import spin from '../../img/arrow_spin.png'
import './CarCard.scss';

function CarCard(props) {
    return (
        <div className="car_card p-3 d-flex flex-column justify-content-center" style={{ background: "#E1DFA4" }}>
            <div className="d-flex">
                <i classNameName='mt-1 me-2'><img style={{ width: '20.2px', height: '20.1px' }} src={spin} /></i>
                <p className="ms-2">{props.percentage + '% Recommended'}</p>
            </div>
            <img className="ms-3" src={props.img} />
            <h3>{props.name}</h3>
            <div className="d-flex justify-content-between">
                <div>
                    <i className="bi bi-repeat me-3"></i>
                    <i className="me-3">{props.price + 'k'}</i>
                    <i className="bi bi-gear me-3"></i>
                    <i className="bi bi-lightning-charge me-3"></i>
                </div>
                <i className="me-4">{'$' + props.rent + '/h'}</i>
            </div>
        </div>
    )
}

export default CarCard