import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons/faPhoneSquareAlt';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons/faGlobeEurope';
import IconWrapper from '../../components/icon-wrapper';
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";

const Footer = () => {
    return (
        <footer className="bg-secondary pt-4" id="kontakt">
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
                        <a
                            href="tel:512358893"
                            className="d-flex align-items-center text-white mt-2">
                            <IconWrapper>
                                <FontAwesomeIcon
                                    icon={faPhoneSquareAlt}
                                    size={'lg'}
                                    color={'white'}
                                />
                            </IconWrapper>
                            512 358 893
                        </a>
                        <a
                            href={process.env.GATSBY_HOST_ADDRESS}
                            target={'_blank'}
                            className="d-flex align-items-center text-white mt-2">
                            <IconWrapper>
                                <FontAwesomeIcon
                                    icon={faGlobeEurope}
                                    size={'lg'}
                                    color={'white'}
                                />
                            </IconWrapper>
                            {process.env.GATSBY_HOST_NAME}
                        </a>
                        <a
                            className="d-flex align-items-center text-white mt-2">
                            <IconWrapper>
                                <FontAwesomeIcon
                                    icon={faMapMarkerAlt}
                                    size={'lg'}
                                    color={'white'}
                                />
                            </IconWrapper>
                            Lublin, ul. Nowy Świat 23a (wejście w prześwicie)
                        </a>
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
