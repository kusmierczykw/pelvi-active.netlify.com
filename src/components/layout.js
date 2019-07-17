/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

import("../styles/style.scss");

const Layout = ({children}) => {
    return (
        <>
            <Header siteTitle={'Pelvi-Active'}/>

            <div className='container-fluid px-0'>
                <div className='row no-gutters'>
                    <div className='col-lg-12'>
                        <main>{children}</main>
                    </div>
                </div>
            </div>
            <footer className="bg-secondary py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <h2 className="display-4 text-uppercase text-left text-primary mb-3">Kontakt</h2>
                        </div>
                    </div>

                    <div className="row align-content-center">
                        <div className="col-lg-6 text-white">
                            <p>
                                Zapraszam do skorzystania
                                z kompleksowej fizjoterapii dolegliwości kobiecych:
                                nietrzymanie moczu, obniżenie narządów,
                                rozejście mięśnia prostego brzucha, blizna po cesarskim cięciu
                                i wiele innych.
                            </p>
                        </div>
                        <div className="col-lg-6 text-white">
                            <h4>Małgorzata Leleń</h4>
                            <p>00-000-000</p>
                            <p>www.pelvi-active.pl</p>
                        </div>
                    </div>
                </div>

                <div className="container bg-primary text-white text-center py-4">
                    © {new Date().getFullYear()} Wojciech Kuśmierczyk
                </div>
            </footer>
            {/*<footer>*/}
            {/*    © {new Date().getFullYear()}, Built with*/}
            {/*    {` `}*/}
            {/*    <a href="https://www.gatsbyjs.org">Gatsby</a>*/}
            {/*</footer>*/}
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout
