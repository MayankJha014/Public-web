import React,{ useState, useEffect } from "react";
import SubMenu from '../../components/submenu/what-we-do';
import Section_ComeBeaLion from '../../components/section-come-be-a-lion';
import Section_BecomePartner from '../../components/section-become-partner';
import HeaderLogo from "../../components/headerlogo";
import SEO from "../../components/seo";

const Environment = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <>
            <SEO
                title='Environment | Parsippany Lions Club'
                description='The Parsippany Lions Club is committed to making a difference in our community by protecting and preserving the environment. We understand that the health of our environment is essential for the well-being of our community.'
                keywords='Parsippany Lions Club, Volunteer, environment, waste management, garbage collection, water treatments, plastic recycling, ocean clean up, Help, Humanity, Charity, Community service.'
            />
            <main>
                <section class="about__banner environment">
                    <div class="about__banner__bg">
                        <HeaderLogo />
                        <h1>What we do</h1>
                        <p>      What we do/ <span>Environment</span></p>
                    </div>
                </section>

                <SubMenu activelink="environment"/>

                <section class="overview pt-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 px-5">
                                <div class="col-lg-9">
                                    <div class="overview-heading-uper">
                                        Environment
                                    </div>
                                    <div class="overview-byline-uper">
                                        The Parsippany Lions Club is committed to making a difference in our community by protecting and preserving the environment. We understand that the health of our environment is essential for the well-being of our community, and we are dedicated to working to protect and preserve it through various initiatives and programs.
                                    </div>
                                </div>


                                <div class="overview-card-box">
                                    <div class="image-overview">
                                        <img src="/images/card/cleanup.png" alt="" />
                                    </div>
                                    <div class="overview-content ">
                                        <div class="overview-content-heading">
                                            Clean-up and Recycling Program
                                        </div>
                                        <div class="overview-content-parag">
                                            One of the key ways we address environmental issues in our community is through our community clean-up and recycling program. We organize and participate in clean-up events, such as litter pick-ups and river clean-ups, to keep our community looking its best. We also work with local recycling centers to promote recycling and reduce waste in our community.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-12 px-5">
                                <div class="overview-card-box">
                                    <div class="image-overview">
                                        <img src="/images/card/educa-and-conver.png" alt="" />
                                    </div>
                                    <div class="overview-content overviewbg-1">
                                        <div class="overview-content-heading">
                                            Education and Conservation
                                        </div>
                                        <div class="overview-content-parag">
                                            We also support environmental education and conservation by working with local schools and organizations to educate the public on the importance of preserving and protecting the environment. We provide educational materials, workshops, and events to help educate the public on how to take action to protect the environment.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 px-5">


                                <div class="overview-card-box">
                                    <div class="image-overview">
                                        <img src="/images/card/presever-educa.png" alt="" />
                                    </div>
                                    <div class="overview-content overviewbg-2">
                                        <div class="overview-content-heading">
                                            Preserve the Environment
                                        </div>
                                        <div class="overview-content-parag">
                                            In addition to our community clean-up and recycling program, we also support local and international projects that aim to protect and preserve the environment, such as tree planting, wildlife conservation, and the reduction of carbon footprint.
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
                                            Having this earnest desire to leave a better planet for the next generation? please contact us via email or phone. We look forward to hearing from you and making a difference in our community together!
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

export default Environment;