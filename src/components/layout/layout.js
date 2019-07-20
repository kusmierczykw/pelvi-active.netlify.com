import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/header';
import Footer from './footer/footer';
import '../../styles/style.scss';

const Layout = ({ children }) => {
    return (
        <>
            <Header siteTitle={'Pelvi-Active'} />
            <div className="container-fluid px-0">
                <div className="row no-gutters">
                    <div className="col-lg-12">
                        <main>{children}</main>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
