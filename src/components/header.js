import React from "react";
import PropTypes from "prop-types";
import logo from '../images/logo.png';

const Header = ({siteTitle}) => (
    <header>
        <nav className="navbar navbar-expand-lg pelvi-navbar fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} height={50}/> {siteTitle}
                </a>
                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="fa fa-bug"></span>
                </button>

                <div className="collapse navbar-collapse"
                     id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Start
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">O mnie</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Kursy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Oferta</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Kontakt</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header
