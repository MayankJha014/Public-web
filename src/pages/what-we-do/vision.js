import React,{ useState, useEffect } from "react";
import SubMenu from '../../components/submenu/what-we-do';
import Section_ComeBeaLion from '../../components/section-come-be-a-lion';
import Section_BecomePartner from '../../components/section-become-partner';
import HeaderLogo  from "../../components/headerlogo";
import SEO from "../../components/seo";

const Vision = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <>
            <SEO
                title='Vision | Parsippany Lions Club'
                description='The Parsippany Lions Club is committed to improving the lives of those in need through our focus on vision health.'
                keywords='Parsippany Lions Club, Volunteer, Vision, Eye health, Vision screening, Eye checkups, Eyeglasses, specs, Help, Humanity, Charity, Community service.'
            />
            <main>
                <section class="about__banner vision">
                    <div class="about__banner__bg">
                        <HeaderLogo/>
                        <h1>What we do</h1>
                        <p>      What we do/ <span>Vision</span></p>
                    </div>
                </section>

                <SubMenu activelink="vision"/>

                <section class="overview pt-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 px-5">

                                <div class="col-lg-9">
                                    <div class="overview-heading-uper">
                                        Vision
                                    </div>
                                    <div class="overview-byline-uper">
                                        The Parsippany Lions Club is committed to improving the lives of those in need through our focus on vision health. We understand that the gift of sight is essential for leading a healthy and fulfilling life, and we are dedicated to making sure that everyone in our community has access to the vision care they need.
                                    </div>
                                </div>


                                <div class="overview-card-box">
                                    <div class="image-overview">
                                        <img src="/images/card/ourvission.png" alt=""/>
                                    </div>
                                    <div class="overview-content ">
                                        <div class="overview-content-heading">
                                            Our vision
                                        </div>
                                        <div class="overview-content-parag">
                                            Our vision is to ensure that every person in our community has access to the gift of sight, regardless of their financial circumstances. We strive to provide free vision screenings, eye exams, and eyeglasses to those in need. We work with local optometrists, ophthalmologists, and other vision professionals to provide these services to children and adults in our community. By detecting vision problems early, we can prevent blindness and other serious vision-related conditions.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-12 px-5">
                                <div class="overview-card-box">
                                    <div class="image-overview">
                                        <img src="/images/card/global initiatives.png" alt=""/>
                                    </div>
                                    <div class="overview-content overviewbg-1">
                                        <div class="overview-content-heading">
                                            Global Initiatives
                                        </div>
                                        <div class="overview-content-parag">
                                            We also support global initiatives to prevent and treat blindness, including Vision 2020: The Right to Sight, a global initiative led by the World Health Organization (WHO) and the International Agency for the Prevention of Blindness (IAPB) to eliminate avoidable blindness by 2020.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 px-5">
                                <div class="overview-card-box">
                                    <div class="image-overview">
                                        <img src="/images/card/raise awareness.png" alt=""/>
                                    </div>
                                    <div class="overview-content overviewbg-2">
                                        <div class="overview-content-heading">
                                            Raise Awareness
                                        </div>
                                        <div class="overview-content-parag">
                                            Our vision efforts are not limited to just providing vision care services, we also strive to raise awareness about the importance of vision health and the impact that preventable blindness has on individuals, families, and communities. We also work to educate people on how to maintain healthy vision, and how to identify and seek help for vision problems.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-12 px-5">
                                <div class="overview-card-box">
                                    <div class="image-overview">
                                        <img src="/images/card/We are committed.png" alt=""/>
                                    </div>
                                    <div class="overview-content ">
                                        <div class="overview-content-heading">
                                            We are committed
                                        </div>
                                        <div class="overview-content-parag">
                                            We are committed to making a difference in the lives of those in need through our vision health efforts, and we welcome anyone who is interested in helping to make a difference in the lives of those in need through our vision health efforts.
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
                                            If you're particularly interested in supporting this cause, please contact us via email or phone. We look forward to hearing from you and making a difference in our community together!
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

export default Vision;