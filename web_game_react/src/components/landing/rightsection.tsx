import React, { FunctionComponent } from 'react';
import { EmptyProps } from '../../types/props'

import './index.css'

export const LandingRightSectionComponent: FunctionComponent<EmptyProps> = ({}) =>
<section className="bg-light">
    <div className="container px-5">
        <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
            <div className="col-12 col-lg-5">
                <h2 className="display-4 lh-1 mb-4">피쳐의 특징</h2>
                <p className="lead fw-normal text-muted mb-5 mb-lg-0">퇴근하고 만들려니까 힘드네유</p>
            </div>
            <div className="col-sm-8 col-md-6">
                <div className="px-5 px-sm-0"><img className="img-fluid rounded-circle" src="https://source.unsplash.com/u8Jn2rzYIps/900x900" alt="..." /></div>
            </div>
        </div>
    </div>
</section>