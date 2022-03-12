import React, { FunctionComponent } from 'react';
import { EmptyProps } from '../../types/props'

import './index.css'

export const LandingHeaderComponent: FunctionComponent<EmptyProps> = ({}) =>
<header className="masthead">
    <div className="container px-5">
        <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
                <div className="mb-5 mb-lg-0 text-center text-lg-start">
                    <h1 className="display-1 lh-1 mb-3">모두의 냉장고(베타)</h1>
                    <p className="lead fw-normal text-muted mb-5">냉장고를 더 편리하게. 냉장고 속 식재료 관리가 어려운 사람들 모두를 위한 냉장고 관리 서비스 입니다.</p>
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                        <a className="me-lg-3 mb-4 mb-lg-0" href="/"><img className="app-badge" src="../images/google-play-badge.svg" alt="..." /></a>
                        <a href="/"><img className="app-badge" src="../images/app-store-badge.svg" alt="..." /></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="masthead-device-mockup">
                    <div className="screen bg-black">
                        <img className="image-header" src="../images/landing_header.png"></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>