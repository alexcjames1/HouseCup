import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Header__nav.module.scss';
import {Link} from 'react-router-dom';
import appStore from './images/app-store.png';
import {  Button  } from '../../components';
// import script from './script.js';


export default class Header__nav extends Component {
    render() {
        return(
            <nav className={style.nav}>
                <a href="#" className={style.button}>
                    <img src={appStore} />
                </a>
            </nav>
        );
    }
}
