import React, { Component } from 'react';
import Logo from '../../asset/image/logo.png'
import './_header.scss'

export default class header extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
};