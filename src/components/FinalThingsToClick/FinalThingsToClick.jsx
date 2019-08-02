import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './FinalThingsToClick.module.scss';
import {flexboxgrid} from '../../';
import reset from '../../';
import {Card} from '../';
import orderSnowminerIcon from './images/order-snowminer-icon.png';
import driveSnowminerIcon from './images/drive-snowminer-icon.png';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class FinalThingsToClick extends Component {
    render() {
        return(
            <div>
                <Section className={style.section} kind="primary" size="normal">
                    <div className={style.title}>
                        <h4>How We Do Culture</h4>
                    </div>
                    <Row>
                        <Col xs="12" sm="6">
                            <Card image={orderSnowminerIcon} title="How We Do: Team Building" paragraph="Aliquam sed nulla sollicitudin, cursus ante et, dictum lacus. Cras ut magna quis tortor." button="Read More" className={style.card} />
                        </Col>
                        <Col xs="12" sm="6">
                            <Card image={orderSnowminerIcon} title="Focus on the Fun Stuff" paragraph="Aliquam sed nulla sollicitudin, cursus ante et, dictum lacus. Cras ut magna quis tortor." button="Read More" className={style.card} />
                        </Col>

                    </Row>
                </Section>
            </div>
        );
    }
}
