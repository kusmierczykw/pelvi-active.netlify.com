import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/header';
import Footer from './footer/footer';
import styled from 'styled-components';
import CookiesPolicy from '../components/cookies/cookies-policy';
import { CookiesProvider } from 'react-cookie';

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
`;

const Layout = ({ children, topOffsetInPx }) => {
    const marginTop = `${topOffsetInPx ? topOffsetInPx : 0}px`;

    return (
        <>
            <CookiesProvider>
                <PageWrapper style={{ marginTop: marginTop }}>
                    <Header siteTitle={'Pelvi-Active'} />
                    <div className="container-fluid px-0">
                        <div className="row no-gutters">
                            <div className="col-lg-12">
                                <main>{children}</main>
                            </div>
                        </div>
                    </div>
                    <Footer />
                    <CookiesPolicy />
                </PageWrapper>
            </CookiesProvider>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
