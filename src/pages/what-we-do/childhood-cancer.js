import React,{ useState, useEffect } from "react";
import SubMenu from '../../components/submenu/what-we-do';
import Section_ComeBeaLion from '../../components/section-come-be-a-lion';
import Section_BecomePartner from '../../components/section-become-partner';
import HeaderLogo from "../../components/headerlogo";
import SEO from "../../components/seo";

const ChildhoodCancer = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <>
            <SEO
                title='Childhood Cancer | Parsippany Lions Club'
                description='Childhood cancer is a serious and life-altering illness, and The Parsippany Lions Club is dedicated to working to support and improve the lives of those affected by it through various initiatives and programs.'
                keywords='Parsippany Lions Club, Volunteer, Childhood Cancer, cancer treatment, Cancer support programs, cancer centers, Help, Humanity, Charity, Community service.'
            />
            <main>
                <section class="about__banner childhood">
                    <div class="about__banner__bg">
                        <HeaderLogo />
                        <h1>What we do</h1>
                        <p>      What we do/ <span>Childhood Cancer</span></p>
                    </div>
                </section>

                <SubMenu activelink="childhoodcancer"/>

                <section class="overview pt-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 px-5">

                                <div class="col-lg-9">
                                    <div class="overview-heading-uper">
                                        Childhood Cancer
                                    </div>

                                    <div class="overview-byline-uper">
                                        Childhood cancer is a serious and life-altering illness, and we are dedicated to working to support and improve the lives of those affected by it through various initiatives and programs.
                                    </div>
                                </div>


                                <div class="overview-card-box">
                                    <div class="image-overview">
                                        <img src="/images/card/aa.png" alt="" />
                                    </div>
                                    <div class="overview-content ">
                                        <div class="overview-content-heading">
                                            Financial Assistance
                                        </div>
                                        <div class="overview-content-parag">
                                            One of the key ways we support those affected by childhood cancer is through our financial assistance program. We provide financial assistance to families to help cover the cost of medical expenses, travel, and other costs associated with cancer treatment. We also support local hospitals and cancer treatment centers by providing donations of toys, books, and other essential items for children undergoing cancer treatment.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-12 px-5">
                                <div class="overview-card-box">
                                    <div class="image-overview">
                                        <img src="/images/card/c.png" alt="" />
                                    </div>
                                    <div class="overview-content overviewbg-1">
                                        <div class="overview-content-heading">
                                            Counseling Services
                                        </div>
                                        <div class="overview-content-parag">
                                            We also provide emotional support to families affected by childhood cancer through our support groups and counseling services. Our support groups provide a safe and supportive environment where families can come together to share their experiences, provide mutual support, and learn from each other.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 px-5">
                                <div class="overview-card-box">
                                    <div class="image-overview">
                                        <img src="/images/card/co.png" alt="" />
                                    </div>
                                    <div class="overview-content overviewbg-2">
                                        <div class="overview-content-heading">
                                            Community Events and Fundraisers
                                        </div>
                                        <div class="overview-content-parag">
                                            In addition to our financial assistance and emotional support programs, we also participate in various community events and fundraisers to raise awareness about childhood cancer and to raise funds to support research, treatment, and support services for children and families affected by cancer.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="mt-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="extra-content-allover">
                                    <p>
                                        <b>
                                            Wish to give these children a better life? please contact us via email or phone. We look forward to hearing from you and making a difference in our community together!
                                        </b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Section_ComeBeaLion />
                <Section_BecomePartner />
            </main>
        </>
    );
};

export default ChildhoodCancer;