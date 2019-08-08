import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import "./header.scss";
import logo from '../../images/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = ({siteTitle, navigationLinks}) => {
    const closeNavbarMenu = (e) =>{
        document.querySelector('.navbar-collapse').classList.remove('show');
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg pelvi-navbar fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={logo} height={50} alt={'Logo Pelvi-Active'}/>{' '}
                        {siteTitle}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} color={'white'}/>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            {
                                navigationLinks.map(({link, name}) => {
                                    return (
                                        <li className="nav-item" key={link} onClick={closeNavbarMenu}>
                                            <AnchorLink offset='78' className="nav-link" href={link}>
                                                {name}
                                            </AnchorLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
