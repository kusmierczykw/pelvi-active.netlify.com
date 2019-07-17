import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import malgorzata_lelen from '../images/malgorzata_lelen.png';
import fizjoterapia_w_ciazy from '../images/fizjoterapia_w_ciazy.jpg';
import fizjoterapia_po_porodzie from '../images/fizjoterapia_po_porodzie.jpg';
import fizjoterapia_uroginekologiczna from '../images/fizjoterapia_uroginekologiczna.jpg';
import profilaktyka_zaburzen_dnia_miednicy from '../images/profilaktyka_zaburzen_dnia_miednicy.jpg';

const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>
        <section className="pelvi-hero-section d-flex align-items-center">
            <div className="container-fluid">
                <div className="row align-content-center">
                    <div className="col-lg-6 offset-lg-1">
                        <h1 className="display-3 text-white text-uppercase mb-4"
                            style={{fontWeight: 300}}>Fizjoterapia
                            uroginekologiczna</h1>
                        <a href="/" className="btn btn-primary px-5" role="button">oferta</a>
                    </div>
                </div>
            </div>
        </section>

        <section className="pt-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 text-center">
                        <img src={malgorzata_lelen} alt="Małgorzata Leleń" className="img-fluid"/>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <h2 className="display-4 text-primary text-uppercase mb-3">O mnie</h2>
                        <p className="text-justify font-size-20 mb-4">
                            Nazywam się Małgorzata Leleń. Ukończyłam studia magisterskie na Uniwersytecie Medycznym
                            w Lublinie na kierunku Fizjoterapia. Zajmuję się profilaktyką oraz leczeniem dolegliwości
                            ginekologicznych i urologicznych u kobiet na każdym etapie ich życia, a w szczególności
                            usprawnianiem kobiet w okresie okołoporodowym. Doświadczenie z zakresu uroginekologii i
                            rehabilitacji ogólnej zdobyłam na wielu szkoleniach kursach.
                        </p>
                        <a href="/" className="btn btn-primary px-5" role="button">kursy i szkolenia</a>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-primary py-5">
            <div className="container">
                <div className="row align-content-center">
                    <div className="col-lg-12">
                        <h2 className="display-4 text-uppercase text-center text-white mb-3">Kursy i szkolenia</h2>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container p-0">
                <div className="row align-items-center no-gutters">
                    <div className="col-lg-6 text-center">
                        <img src={fizjoterapia_w_ciazy} alt="Fizjoterapia w ciąży"
                             className="img-fluid"/>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-3">
                            <h3 className="text-primary text-uppercase font-weight-lighter">Fizjoterapia w
                                ciąży</h3>
                            <ul>
                                <li>łagodzenie bólu w obrębie kręgosłupa i miednicy</li>
                                <li>ból spojenia łonowego</li>
                                <li>nauka świadomej aktywacji dna miednicy</li>
                                <li>bezpieczna aktywność fizyczna</li>
                                <li>masaż kobiet w ciąży</li>
                                <li>terapia obrzęków</li>
                                <li>terapia rozstępu mięśni prostych brzucha</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center no-gutters">
                    <div className="col-lg-6">
                        <div className="p-3">
                            <h3 className="text-primary text-uppercase font-weight-lighter">Fizjoterapia po
                                porodzie</h3>
                            <ul>
                                <li>rozejście mięśnia prostego brzucha</li>
                                <li>praca z blizną po cesarskiem cięciu lub nacięciu krocza</li>
                                <li>reedukacja mięśni dna miednicy</li>
                                <li>dobór ćwiczeń ułatwiających bezpieczny powrót do sprawności</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img src={fizjoterapia_po_porodzie} alt="Fizjoterapia po porodzie"
                             className="img-fluid"/>
                    </div>
                </div>
                <div className="row align-items-center no-gutters">
                    <div className="col-lg-6 text-center">
                        <img src={fizjoterapia_uroginekologiczna}
                             alt="Fizjoterapia uroginekologiczna"
                             className="img-fluid"/>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-3">
                            <h3 className="text-primary text-uppercase font-weight-lighter">Fizjoterapia
                                uroginekologiczna</h3>
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
                        <div className="p-3">
                            <h3 className="text-primary text-uppercase font-weight-lighter">Profilaktyka zaburzeń
                                dnia
                                miednicy</h3>
                            <ul>
                                <li>nauka prawidłowej aktywacji mięśni dna miednicy</li>
                                <li>praca nad świadomością własnego ciała</li>
                                <li>praca z oddechem</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img src={profilaktyka_zaburzen_dnia_miednicy}
                             alt="Profilaktyka zaburzeń dnia miednicy"
                             className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-primary py-5">
            <div className="container">
                <div className="row align-content-center">
                    <div className="col-lg-12">
                        <h2 className="display-4 text-uppercase text-center text-white mb-3">Cennik</h2>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
);

export default IndexPage
