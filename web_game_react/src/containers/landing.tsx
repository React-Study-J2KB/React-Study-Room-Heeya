import React from 'react';

import { LandingNavbarComponent } from '../components/landing/navbar';
import { LandingHeaderComponent } from '../components/landing/header';
import { LandingTextLayerComponent } from '../components/landing/textlayer'
import { LandingFeatureComponent } from '../components/landing/feature'
import { LandingRightSectionComponent } from '../components/landing/rightsection' 
import { LandingFooterComponent } from '../components/landing/footer';


export class LandingContainer extends React.Component<{}, {}> {

    public render(): React.ReactNode {
        return(
            <div>
                <LandingNavbarComponent/>
                <LandingHeaderComponent/>
                <LandingTextLayerComponent/>
                <LandingFeatureComponent/>
                <LandingRightSectionComponent/>
                <LandingFooterComponent/>
            </div>
        );
    }
}
