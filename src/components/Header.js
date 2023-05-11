import React from 'react';
import '../styles/header.scss';
import img_1 from '../images/img_1.png'


export default function Header() {
    return (
        <div>
            <div className='header'>
                <div className='text'>
                    <h1 className="title">Blog Afrianska</h1>
                    <p className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <img className="vector" src={img_1} alt="background" />
            </div>
        </div>
    )
}
