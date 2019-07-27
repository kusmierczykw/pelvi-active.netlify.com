import React, { Component } from 'react';
import cookies from '../../images/cookies.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons/faWindowClose';
import styled from 'styled-components';
import colors from '../utils/colors';
import { ButtonBasic } from '../button';
import { instanceOf } from 'prop-types';
import { Cookies, withCookies } from 'react-cookie';

const CookiesWrapper = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: ${colors.secondaryLight};
    z-index: 101;
    box-shadow: 0 0 5px -2px rgba(0, 0, 0, 1);
    font-size: 12px;
    padding-top: 4px;
    padding-bottom: 4px;

    .cookie__close-button {
        background: none;
        border: none;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }

    img {
        height: 40px;
    }
`;

class CookiesPolicy extends Component {
    COOKIES_POLICY_KEY = 'cookies-policy';

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired,
    };

    constructor(props) {
        super(props);

        const { cookies } = props;
        this.state = {
            isBarClosed: !!cookies.get(this.COOKIES_POLICY_KEY),
        };
    }

    onClick = () => {
        const { cookies } = this.props;

        cookies.set(this.COOKIES_POLICY_KEY, true, {
            path: '/',
            maxAge: 2 * 24 * 60 * 60,
        });
        this.setState({
            isBarClosed: true,
        })
    };

    renderBar = () => (
        <CookiesWrapper>
            <div className="container-fluid">
                <div className="row align-items-center pt-2 pb-2">
                    <div className="col-md text-white d-flex align-items-center order-2 order-md-1">
                        <img
                            src={cookies}
                            className="img-fluid mr-3"
                            alt="Cookies"
                        />
                        <span>
                            Wykorzystuję pliki cookies w celu prawidłowego
                            działania strony, korzystania z narzędzi
                            marketingowych i analitycznych, zapewniania funkcji
                            społecznościowych oraz systemu komentarzy.
                            <br /> Czy zgadzasz się na wykorzystywanie plików
                            cookies?
                            <a
                                href="http://wszystkoociasteczkach.pl/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white font-weight-bold ml-2">
                                Czytaj więcej.
                            </a>
                        </span>
                    </div>
                    <div className="col-md-auto text-right order-1 order-md-2">
                        <ButtonBasic
                            onClick={this.onClick}
                            className="cookie__close-button">
                            <FontAwesomeIcon
                                icon={faWindowClose}
                                className="mr-2"
                            />
                            Zamknij
                        </ButtonBasic>
                    </div>
                </div>
            </div>
        </CookiesWrapper>
    );

    render() {
        if (!this.state.isBarClosed) {
            return this.renderBar();
        } else {
            return null;
        }
    }
}

export default withCookies(CookiesPolicy);
