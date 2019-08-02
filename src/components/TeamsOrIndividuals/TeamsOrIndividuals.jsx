import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './TeamsOrIndividuals.module.scss';
import houseTeams from './images/house-teams.png';
import {MediaComponent} from '../';
import appIcon from './images/snowminer-driver-app-icon.png';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class LowRiskHighReturn extends Component {
    render() {
        return(
                <Section className={style.section} kind="dark" size="normal">
                    <Row>

                        <Col xs="12" sm="6">
                            <div className={style.media}>
                                <div className={style.mediaFigure}>
                                    <img src={houseTeams} alt="#" />
                                </div>
                            </div>
                        </Col>

                        <Col xs="12" sm="5" className={style.teamInfo}>
                            <div className={style.header}>
                                <h5 className={style.subTitle}>
                                    Join together, Win together
                                </h5>
                                <div className={style.title}>
                                    <h3>Teams or individuals can join houses.</h3>
                                </div>
                            </div>
                            <div className={style.content}>
                                <p>
                                    Ut dui felis, elementum quis urna et, porttitor consequat nisl. Sed libero lorem, hendrerit a egestas auctor, posuere sit amet ex. Praesent facilisis finibus cursus.                                </p>
                            </div>
                        </Col>

                    </Row>
                </Section>
        );
    }
}
