import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/header';
import Footer from './footer/footer';
import styled from 'styled-components';
import CookiesPolicy from '../components/cookies/cookies-policy';
import {CookiesProvider} from 'react-cookie';
import {graphql, useStaticQuery} from "gatsby";

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
`;

const NotFoundLayout = ({children}) => {
    let {
        site: {
            siteMetadata: {
                menuLinks
            },
        }
    } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        menuLinks {
                            link
                            name
                        }
                    }
                }
            }
        `
    );

    menuLinks = menuLinks.map(({name, link}) => {
        link = `/${link}`;
        return {name, link}
    });

    return (
        <>
            <CookiesProvider>
                <PageWrapper style={{marginTop: 78}}>
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
