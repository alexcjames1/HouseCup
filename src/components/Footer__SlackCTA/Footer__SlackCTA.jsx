import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Footer__SlackCTA.module.scss';
import botLogo from './images/bot-logo.png';
import {MediaComponent} from '../';
import appStore from './images/app-store.png';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class Footer__SlackCTA extends Component {
    render() {
        return(
            <Row>

                <Col xs="12" sm="6">
                    <div className={style.media}>
                        <div className={style.mediaFigure}>
                            <img src={botLogo} alt="#" />
                        </div>
                    </div>
                </Col>

                <Col xs="12" sm="5" className={style.teamInfo}>
                    <div className={style.header}>
                        <div className={style.title}>
                            <h3>Start winning house points</h3>
                        </div>
                    </div>
                    <div className={style.content}>
                        <p>
                            Aliquam sed nulla sollicitudin, cursus ante et, dictum lacus. Cras ut magna quis tortor.
                        </p>
                    </div>
                    <div className={style.footer}>
                        <a href="#">
                            <img src={appStore} />
                        </a>
                        <a href="#">
                            <img src={appStore} />
                        </a>
                        <p className={style.subTitle}>
                            Free to use · Easy setup · Open source
                        </p>
                    </div>
                </Col>

            </Row>
        );
    }
}
