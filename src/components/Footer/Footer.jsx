import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Footer.module.scss';
import {flexboxgrid} from '../../';
import Logo from '../Logo/Logo';
import appStore from './images/app-store.png';
import botLogo from './images/bot-logo.png';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';
import { Footer__legal, Footer__SlackCTA } from '../../components';

export default class Footer extends Component {
    render() {
        return(
            <footer className={style.footer}>
                <Section className={style.section} kind="dark" size="special">
                    <Row>
                        <Footer__SlackCTA />
                        <Footer__legal />
                    </Row>
                </Section>
            </footer>
        );
    }
}
