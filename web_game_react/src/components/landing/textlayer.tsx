import React, { FunctionComponent } from 'react';
import { EmptyProps } from '../../types/props'

import './index.css'

export const LandingTextLayerComponent: FunctionComponent<EmptyProps> = ({}) =>
<aside className="text-center bg-gradient-primary-to-secondary">
    <div className="container px-5">
        <div className="row gx-5 justify-content-center">
            <div className="col-xl-8">
                <div className="h2 fs-1 text-white mb-4">Preview</div>
                <img className="header-mobile" src="../images/header-mobile.png" alt="..."/>
            </div>
        </div>
    </div>
</aside>