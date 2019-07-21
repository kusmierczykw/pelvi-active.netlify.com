import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-secondary pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-6">
                        <h2 className="display-4 text-uppercase text-left text-primary mb-0">
                            Kontakt
                        </h2>
                    </div>
                </div>

                <div className="row align-content-center mt-4">
                    <div className="col-lg-6 text-white">
                        <h6>
                            Zapraszam do skorzystania z kompleksowej
                            fizjoterapii dolegliwości kobiecych:
                        </h6>
                        <ul>
                            <li>nietrzymanie moczu,</li>
                            <li>obniżenie narządów,</li>
                            <li>rozejście mięśnia prostego brzucha,</li>
                            <li>blizna po cesarskim cięciu i wiele innych.</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 text-white">
                        <h4>Małgorzata Leleń</h4>
                        <p>00-000-000</p>
                        <p>
                            <a
                                href={process.env.GATSBY_HOST_ADDRESS}
                                className={'text-white'}
                                target={'_blank'}>
                                www.pelvi-active.pl
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container bg-primary text-white text-center py-4">
                Copyright © {new Date().getFullYear()}
                <a
                    href="http://wojciech_kusmierczyk.pl"
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
