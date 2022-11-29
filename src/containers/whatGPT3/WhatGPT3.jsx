import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';
const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__padding'>
            <div className='gpt3__whatsgpt3-feature'>
                <Feature />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">Possibilities are beyond your imaginations.</h1>
                <p>Explore the library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature />
                <Feature />
                <Feature />
                <Feature />

            </div>
        </div>

    )
}

export default WhatGPT3;