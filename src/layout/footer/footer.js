import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons/faPhoneSquareAlt';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons/faGlobeEurope';
import colors from '../../components/utils/colors';
import styled from 'styled-components';

const IconWrapper = styled.span`
    width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary};
    margin-right: 16px;
    border-radius: 2px;
`;

const Footer = () => {
    return (
        <footer className="bg-secondary pt-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-6">
                        <h2 className="display-4 py-4 text-uppercase text-left text-primary mb-0">
                            Kontakt
                        </h2>
                    </div>
                </div>

                <div className="row align-content-center">
                    <div className="col-lg-6 text-white text-lg-left d-none d-lg-block">
                        <h5 className="mt-lg-0 mt-4">
                            Zapraszam do skorzystania z kompleksowej
                            fizjoterapii dolegliwości kobiecych:
                        </h5>
                        <ul>
                            <li>nietrzymanie moczu,</li>
                            <li>obniżenie narządów,</li>
                            <li>rozejście mięśnia prostego brzucha,</li>
                            <li>blizna po cesarskim cięciu i wiele innych.</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 text-white">
                        <h4 className="mb-4">Małgorzata Leleń</h4>
                        <div className="d-flex align-items-center mt-2">
                            <IconWrapper>
                                <FontAwesomeIcon
                                    icon={faPhoneSquareAlt}
                                    size={'lg'}
                                    color={'white'}
                                />
                            </IconWrapper>
                            <a href="tel:512358893" className="text-white">
                                512 358 893
                            </a>
                        </div>
                        <div className="d-flex align-items-center mt-2">
                            <IconWrapper>
                                <FontAwesomeIcon
                                    icon={faGlobeEurope}
                                    size={'lg'}
                                    color={'white'}
                                />
                            </IconWrapper>
                            <a
                                href={process.env.GATSBY_HOST_ADDRESS}
                                className={'text-white'}
                                target={'_blank'}>
                                www.pelvi-active.pl
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container bg-primary text-white text-center mt-4 py-4">
                Copyright © {new Date().getFullYear()}
                <a
                    href="http://wojciech-kusmierczyk.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white ml-1">
                    Wojciech Kuśmierczyk
                </a>
            </div>
        </footer>
    );
};

export default Footer;
