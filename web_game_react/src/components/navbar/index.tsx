import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { EmptyProps } from '../../types/props'

import './index.css';

export const NavbarComponent: FunctionComponent<EmptyProps> = ({}) =>
<nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
    <div className="container px-5">
        <a className="navbar-brand fw-bold" href="/"><img className="header-logo" src="../images/image-logo.png" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                <li className="nav-item"><a className="nav-link me-lg-3" href="/login">Log in</a></li>
            </ul>
            <a className="nav-link me-lg-3" href="/regist">
                <button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0">
                        <span className="d-flex align-items-center">
                            <i className="bi-chat-text-fill me-2"></i>
                            <span className="small">Sign Up</span>
                        </span>
                </button>
            </a>
        </div>
    </div>
</nav>