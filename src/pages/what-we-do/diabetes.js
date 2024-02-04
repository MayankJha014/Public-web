import React,{ useState, useEffect } from "react";
import SubMenu from '../../components/submenu/what-we-do';
import Section_ComeBeaLion from '../../components/section-come-be-a-lion';
import Section_BecomePartner from '../../components/section-become-partner';
import HeaderLogo  from "../../components/headerlogo";
import SEO from "../../components/seo";

const Diabetes = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <>
            <SEO
                title='Diabetes | Parsippany Lions Club'
                description='Diabetes is a serious health condition that affects millions of people around the world, and The Parsippany Lions Club understand the importance of providing education, support, and resources to those in our community who are affected by this condition.'
                keywords='Parsippany Lions Club, Volunteer, preventing diabetes, diabetes education, diabetes, sugar, medication for diabetes, Help, Humanity, Charity, Community service.'
            />
            <main>
                <section class="about__banner diabetes">
                    <div class="about__banner__bg">
                        <HeaderLogo/>
                        <h1>What we do</h1>
                        <p>      What we do/ <span>Diabetes</span></p>
                    </div>
                </section>

                <SubMenu activelink="diabetes"/>

                <section class="overview pt-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 px-5">

                                <div class="col-lg-9">
                                    <div class="overview-heading-uper">
                                        Diabetes
                                    </div>

                                    <div class="overview-byline-uper">
                                    Diabetes is a serious health condition that affects millions of people around the world, and we understand the importance of providing education, support, and resources to those in our community who are affected by this condition.
                                    </div>
                                </div>

                                <div class="overview-card-box">
                                    <div class="image-overview">
                                        <img src="/images/card/educationprogram.png" alt=""/>
                                    </div>
                                    <div class="overview-content ">
                                        <div class="overview-content-heading">
                                            Education Program
                                        </div>
                                        <div class="overview-content-parag">
                                            One of the key ways we support those living with diabetes is through our diabetes education program. We work with local healthcare professionals to provide information and resources about diabetes management, including information about healthy eating, physical activity, and medication management. We also provide education about the importance of regular screenings and check-ups to detect and prevent diabetes-related complications.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-12 px-5">
                                <div class="overview-card-box">
                                    <div class="image-overview">
                                        <img src="/images/card/diabetessuporrtede.png" alt=""/>
                                    </div>
                                    <div class="overview-content overviewbg-1">
                                        <div class="overview-content-heading">
                                            Diabetes Support Group
                                        </div>
                                        <div class="overview-content-parag">
                                            We also provide support to those living with diabetes through our diabetes support group. The group provides a safe and supportive environment where individuals living with diabetes can come together to share their experiences, provide mutual support, and learn from each other.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 px-5">
                                <div class="overview-card-box">
                                    <div class="image-overview">
                                        <img src="/images/card/finacial.png" alt=""/>
                                    </div>
                                    <div class="overview-content overviewbg-2">
                                        <div class="overview-content-heading">
                                            Financial Assistance
                                        </div>
                                        <div class="overview-content-parag">
                                            We also provide financial assistance to those in need, to help with the cost of diabetes-related expenses such as medication, supplies, and treatments.
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
                                    <p>In addition to our diabetes education and support programs, we also participate in various community events and fundraisers to raise awareness about diabetes and the importance of diabetes prevention and management.</p>
                                    <p>
                                        <b>
                                        Feeling a sense of affiliation towards this cause? please contact us via email or phone. We look forward to hearing from you and making a difference in our community together!
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

export default Diabetes;