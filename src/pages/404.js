import React from 'react';
import SEO from '../components/seo';
import { ButtonPrimary } from '../components/button';
import { Link } from 'gatsby';
import NotFoundLayout from "../layout/not-found-layout";

const NotFoundPage = () => (
    <NotFoundLayout>
        <SEO title="404 - Strona nie została znaleziona" />
        <div className="container">
            <section className="py-5">
                <h1 className="display-1 text-center text-primary text-uppercase">
                    404
                </h1>
                <h2 className="text-center text-primary">
                    nie znaleziono strony o podanym adresie
                </h2>
                <p className="text-center">
                    Strona prawdopodobnie została usunięta lub nigdy wcześniej
                    nie powstała.
                </p>

                <div className="text-lg-right text-center">
                    <ButtonPrimary className="my-4" as={Link} to={'/'}>
                        Przejdź na stronę główną
                    </ButtonPrimary>
                </div>
            </section>
        </div>
    </NotFoundLayout>
);

export default NotFoundPage;
