import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Footer__SlackCTA.module.scss';
import {flexboxgrid} from '../../';
import Logo from '../Logo/Logo';
import appStore from './images/app-store.png';
import botLogo from './images/bot-logo.png';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class Footer__SlackCTA extends Component {
    render() {
        return(
            <Section className={style.section}>
                <Row>
                    <div class={style.slackCTA}>
                        <Col xs="12" sm="5" className={style.col}>
                            <div className={style.media}>
                                <div className={style.mediaFigure}>
                                    <img src={botLogo} alt="#" />
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="7" className={style.col}>
                            <div className={style.header}>
                                <div className={style.title}>
                                    <h3>Start Winning House Points</h3>
                                </div>
                            </div>
                            <div className={style.content}>
                                <p>
                                    Aliquam sed nulla sollicitudin, cursus ante et, dictum lacus. Cras ut magna quis tortor.
                                </p>
                            </div>
                            <div className={style.footer}>
                                <a className={style.button} href="#">
                                    <img src={appStore} />
                                </a>
                                <h4 className={style.subTitle}>
                                    Free to use · Easy setup · Open source
                                </h4>
                            </div>
                        </Col>
                    </div>

                </Row>
            </Section>
        );
    }
}
