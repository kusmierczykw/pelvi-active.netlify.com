import React from 'react';
import PropTypes from 'prop-types';
import Footer from './footer/footer';
import styled from 'styled-components';
import CookiesPolicy from '../components/cookies/cookies-policy';
import {CookiesProvider} from 'react-cookie';

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
`;

const NotFoundLayout = ({children}) => {
    return (
        <>
            <CookiesProvider>
                <PageWrapper>
                    <div className="container-fluid px-0">
                        <div className="row no-gutters">
                            <div className="col-lg-12">
                                <main>{children}</main>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                    <CookiesPolicy/>
                </PageWrapper>
            </CookiesProvider>
        </>
    );
};

NotFoundLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default NotFoundLayout;
