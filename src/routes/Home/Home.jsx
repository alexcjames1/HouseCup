import React, { Component } from 'react';
import {Heading, Header, AppWrapper, Dashboard, DownloadModal, HouseCupHero, HouseCupFeatures, TeamsOrIndividuals, FinalThingsToClick, JoinTogether, Footer} from '../../components';
import {Helmet} from "react-helmet";

export default class Home extends Component {
    render() {
        return (
          <AppWrapper>
              <Helmet>
                <title>Join Together</title>
              </Helmet>
            <HouseCupHero />
            <JoinTogether />
            <HouseCupFeatures />
            <TeamsOrIndividuals />
            <FinalThingsToClick />
            <DownloadModal />
          </AppWrapper>
        );
    }
}
