import React, { FunctionComponent } from 'react';
import { EmptyProps } from '../../types/props'

import './index.css'

export const LandingFooterComponent: FunctionComponent<EmptyProps> = ({}) =>
<footer className="bg-black text-center py-5">
    <div className="container px-5">
        <div className="text-white-50 small">
            <div className="mb-2">&copy; 모냉고 2021. All Rights Reserved.</div>
            <a href="/">Service</a>
            <span className="mx-1">&middot;</span>
            <a href="/">Teams</a>
            <span className="mx-1">&middot;</span>
            <a href="/">Contant Us</a>
        </div>
    </div>
</footer>