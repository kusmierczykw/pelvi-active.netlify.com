import React from 'react';

import Layout from '../layout/layout';
import SEO from '../components/seo';

import malgorzata_lelen from '../images/malgorzata_lelen.png';
import fizjoterapia_w_ciazy from '../images/fizjoterapia_w_ciazy.jpg';
import fizjoterapia_po_porodzie from '../images/fizjoterapia_po_porodzie.jpg';
import fizjoterapia_uroginekologiczna from '../images/fizjoterapia_uroginekologiczna.jpg';
import profilaktyka_zaburzen_dnia_miednicy from '../images/profilaktyka_zaburzen_dnia_miednicy.jpg';
import { ButtonPrimary } from '../components/button';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const IndexPage = () => (
    <Layout>
        <SEO title="Strona głowna" />
        <section
            className="pelvi-hero-section d-flex align-items-center"
            id="start">
            <div className="container-fluid">
                <div className="row align-content-center px-lg-4">
                    <div className="col-lg-6 offset-lg-1">
                        <h1
                            className="text-white text-uppercase mb-4"
                            style={{ fontWeight: 300 }}>
                            Fizjoterapia uroginekologiczna
                        </h1>
                        <ButtonPrimary
                            as={AnchorLink}
                            offset="78"
                            href="#o-mnie">
                            o mnie
                        </ButtonPrimary>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-5 pb-lg-0" id="o-mnie">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-xl-4 text-center">
                        <img
                            src={malgorzata_lelen}
                            alt="Małgorzata Leleń"
                            className="img-fluid d-none d-lg-block animate-image"
                        />
                    </div>
                    <div className="col-lg-7 col-xl-7 offset-xl-1">
                        <h2 className="display-4 text-primary text-uppercase mb-0 py-4">
                            O mnie
                        </h2>
                        <div className="text-justify">
                            Nazywam się Małgorzata Leleń. Ukończyłam studia
                            magisterskie na Uniwersytecie Medycznym w Lublinie
                            na kierunku Fizjoterapia. Zajmuję się profilaktyką
                            oraz leczeniem dolegliwości ginekologicznych i
                            urologicznych u kobiet na każdym etapie ich życia, a
                            w szczególności usprawnianiem kobiet w okresie
                            okołoporodowym. Doświadczenie z zakresu
                            uroginekologii i rehabilitacji ogólnej zdobyłam na
                            wielu szkoleniach kursach.
                        </div>
                        <ButtonPrimary
                            className="mt-4"
                            as={AnchorLink}
                            offset="78"
                            href="#kursy">
                            kursy i szkolenia
                        </ButtonPrimary>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-5 bg-primary" id="kursy">
            <div className="container">
                <div className="row align-content-center">
                    <div className="col-lg-12">
                        <h2 className="display-4 text-uppercase text-lg-center text-white py-4 mb-0">
                            Kursy i szkolenia
                        </h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <ul className="timeline text-white">
                            <li className="timeline-section">
                                <h3 className="timeline-section__title text-uppercase font-weight-lighter">
                                    Fizjoterapia w ginekologii i urologii
                                </h3>

                                <div className="timeline-section__body">
                                    <ul>
                                        <li>
                                            Fizjoterapia kobiet. Terapia
                                            uroginekologiczna, okresu ciąży i
                                            pooperacyjna
                                        </li>
                                        <li>
                                            Fizjoterapia w ginekologii i
                                            położnictwie
                                        </li>
                                        <li>
                                            Ultrasonografia w fizjoterapii
                                            dolnych dróg moczowych
                                        </li>
                                        <li>
                                            Techniczne aspekty w fizjoterapii
                                            ginekologicznej, urologicznej i
                                            proktologicznej
                                        </li>
                                        <li>Kompleksowa terapia blizny</li>
                                        <li>
                                            Rozstęp mięśnia prostego brzucha
                                            (DRA)
                                        </li>
                                        <li>
                                            Techniczne aspekty w fizjoterapii
                                            dna miednicy i dysfunkcjach narządu
                                            ruchu
                                        </li>
                                        <li>
                                            Techniki osteopatyczne w ginekologii
                                            i położnictwie
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="timeline-section">
                                <h3 className="timeline-section__title text-uppercase font-weight-lighter">
                                    Fizjoterapia ogólna
                                </h3>
                                <div className="timeline-section__body">
                                    <ul>
                                        <li>Kinesiology Taping</li>
                                        <li>
                                            Masaż klasyczny - profil rozszerzony
                                        </li>
                                        <li>
                                            Terapia powięziowo-mięśniowych
                                            punktów spustowych z funkcjonalną
                                            diagnostyką narządu ruchu
                                        </li>
                                        <li>
                                            Skoliozy - diagnostyka i
                                            postępowanie fizjoterapeutyczne
                                        </li>
                                        <li>
                                            Badanie i fizjoterapia funkcjonalna
                                            w uszkodzeniach stawu barkowego
                                        </li>
                                        <li>Kurs podstawowy PNF</li>
                                        <li>
                                            Fascial Distortion Model (FDM) -
                                            leczenie zaburzeń układu
                                            mięśniowo‑szkieletowego technikami
                                            powięziowym
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-5 py-lg-0" id="oferta">
            <div className="container p-lg-0">
                <div className="row align-content-center">
                    <div className="col-lg-12">
                        <h2 className="display-4 py-4 text-uppercase text-lg-center text-primary mb-0">
                            Oferta
                        </h2>
                    </div>
                </div>

                <div className="row align-items-center no-gutters">
                    <div className="col-lg-6 text-center">
                        <img
                            src={fizjoterapia_w_ciazy}
                            alt="Fizjoterapia w ciąży"
                            className="img-fluid d-none d-lg-block"
                        />
                    </div>
                    <div className="col-lg-6">
                        <div className="px-lg-4">
                            <h3 className="text-primary text-uppercase font-weight-lighter">
                                Fizjoterapia w ciąży
                            </h3>
                            <ul>
                                <li>
                                    łagodzenie bólu w obrębie kręgosłupa i
                                    miednicy
                                </li>
                                <li>ból spojenia łonowego</li>
                                <li>nauka świadomej aktywacji dna miednicy</li>
                                <li>bezpieczna aktywność fizyczna</li>
                                <li>masaż kobiet w ciąży</li>
                                <li>terapia obrzęków</li>
                                <li>
                                    terapia rozstępu mięśni prostych brzucha
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center no-gutters">
                    <div className="col-lg-6">
                        <div className="px-lg-4">
                            <h3 className="text-primary text-uppercase font-weight-lighter">
                                Fizjoterapia po porodzie
                            </h3>
                            <ul>
                                <li>rozejście mięśnia prostego brzucha</li>
                                <li>
                                    praca z blizną po cesarskiem cięciu lub
                                    nacięciu krocza
                                </li>
                                <li>reedukacja mięśni dna miednicy</li>
                                <li>
                                    dobór ćwiczeń ułatwiających bezpieczny
                                    powrót do sprawności
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img
                            src={fizjoterapia_po_porodzie}
                            alt="Fizjoterapia po porodzie"
                            className="img-fluid d-none d-lg-block"
                        />
                    </div>
                </div>
                <div className="row align-items-center no-gutters">
                    <div className="col-lg-6 text-center">
                        <img
                            src={fizjoterapia_uroginekologiczna}
                            alt="Fizjoterapia uroginekologiczna"
                            className="img-fluid d-none d-lg-block"
                        />
                    </div>
                    <div className="col-lg-6">
                        <div className="px-lg-4">
                            <h3 className="text-primary text-uppercase font-weight-lighter">
                                Fizjoterapia uroginekologiczna
                            </h3>
                            <ul>
                                <li>nietrzymanie moczu</li>
                                <li>parcia naglące</li>
                                <li>obniżenie narządu rodnego</li>
                                <li>bolesne współżycie</li>
                                <li>bolesne miesiączki</li>
                                <li>endometrioza</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center no-gutters">
                    <div className="col-lg-6">
                        <div className="px-lg-4">
                            <h3 className="text-primary text-uppercase font-weight-lighter">
                                Profilaktyka zaburzeń dnia miednicy
                            </h3>
                            <ul>
                                <li>
                                    nauka prawidłowej aktywacji mięśni dna
                                    miednicy
                                </li>
                                <li>praca nad świadomością własnego ciała</li>
                                <li>praca z oddechem</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img
                            src={profilaktyka_zaburzen_dnia_miednicy}
                            alt="Profilaktyka zaburzeń dnia miednicy"
                            className="img-fluid d-none d-lg-block"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section className="py-5 bg-primary">
            <div className="container">
                <div className="row align-content-center">
                    <div className="col-lg-12">
                        <h2 className="display-4 py-4 text-uppercase text-lg-center text-white mb-0">
                            Cennik
                        </h2>

                        <div>
                            <table className="table text-white">
                                <tbody>
                                    <tr>
                                        <td>
                                            <span className="font-weight-bold">
                                                Pierwsza wizyta (diagnostyczna)
                                            </span>
                                        </td>
                                        <td>
                                            <div className="font-weight-bold">
                                                150 zł
                                            </div>
                                            <small>
                                                (czas trwania ok. 90 min)
                                            </small>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="font-weight-bold">
                                                Wizyta terapeutyczna
                                            </span>
                                        </td>
                                        <td>
                                            <div className="font-weight-bold">
                                                80 - 100 zł
                                            </div>
                                            <small>
                                                (czas trwania 45 - 60 min)
                                            </small>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="font-weight-bold">
                                                Masaż leczniczy (częściowy,
                                                całościowy)
                                            </span>
                                        </td>
                                        <td>
                                            <div className="font-weight-bold">
                                                60 - 120 zł
                                            </div>
                                            <small>
                                                (czas trwania 30 - 60 min)
                                            </small>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="font-weight-bold">
                                                Elektrostymulacja /
                                                EMG-Biofeedback
                                            </span>
                                        </td>
                                        <td>
                                            <div className="font-weight-bold">
                                                50 zł
                                            </div>
                                            <small>
                                                (czas trwania ok. 30 min)
                                            </small>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="font-weight-bold">
                                                Taping medyczny
                                            </span>
                                        </td>
                                        <td>
                                            <div className="font-weight-bold">
                                                20 - 30 zł
                                            </div>
                                            <small>(aplikacja)</small>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="font-weight-bold">
                                                Wizyta domowa
                                            </span>
                                        </td>
                                        <td>
                                            <div className="font-weight-bold">
                                                cena ustalana indywidualnie
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
);
export default IndexPage;
