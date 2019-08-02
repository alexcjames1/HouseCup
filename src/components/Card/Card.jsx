import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Card.scss';
import {Heading} from '../';
import {Link} from 'react-router-dom';



export default class Card extends Component {
    render() {
        const {image, title, paragraph, column, textAlign, button } = this.props;

        return(
            <div className={ classy('card') }>
                <div class="media">
                    <div className="card__figure">
                        <img src={image}/>
                    </div>
                    <div className="card__content">
                        {title ? <Heading tag="h4" className='card__heading'>{title}</Heading> : ''}
                        {paragraph ? <p className='card__body'>{paragraph}</p> : ''}
                        {button ? <Link className="card__button">{button}</Link> : ''}
                    </div>
                </div>
            </div>

        );
    }
}
