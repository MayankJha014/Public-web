import React,{ useState, useEffect } from "react";
import SubMenu from '../../components/submenu/what-we-do';
import Section_ComeBeaLion from '../../components/section-come-be-a-lion';
import Section_BecomePartner from '../../components/section-become-partner';
import HeaderLogo from "../../components/headerlogo";
import SEO from "../../components/seo";

const Hunger = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <>
            <SEO
                title='Hunger | Parsippany Lions Club'
                description='Parsippany Lions Club understand that hunger is a critical problem that affects individuals, families, and communities in our area, and we are dedicated to working to alleviate this problem through various initiatives and programs.'
                keywords='Parsippany Lions Club, Volunteer, Hunger, Hunger management, Food supply, food donations, nutrition, Hunger programs, Help, Humanity, Charity, Community service.'
            />
            <main>
                <section class="about__banner hunger">
                    <div class="about__banner__bg">
                        <HeaderLogo />
                        <h1>What we do</h1>
                        <p>      What we do/ <span>Hunger</span></p>
                    </div>
                </section>

                <SubMenu activelink="hunger"/>

                <section class="overview pt-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 px-5">
                                <div class="col-lg-9">
                                    <div class="overview-heading-uper">
                                        Hunger
                                    </div>
                                    <div class="overview-byline-uper">
                                        We understand that hunger is a critical problem that affects individuals, families, and communities in our area, and we are dedicated to working to alleviate this problem through various initiatives and programs.
                                    </div>
                                </div>


                                <div class="overview-card-box">
                                    <div class="image-overview">
                                        <img src="/images/card/foodbank.png" alt="" />
                                    </div>
                                    <div class="overview-content ">
                                        <div class="overview-content-heading">
                                            Food Bank and Meal Distribution
                                        </div>
                                        <div class="overview-content-parag">
                                            One of the key ways we address hunger in our community is through our food bank and meal distribution program. We work with local food banks, shelters, and other organizations to collect and distribute food and other necessities to those in need. We also organize and participate in community food drives to collect non-perishable food items, and we distribute these items to local food banks and shelters.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-12 px-5">
                                <div class="overview-card-box">
                                    <div class="image-overview">
                                        <img src="/images/card/energy.png" alt="" />
                                    </div>
                                    <div class="overview-content overviewbg-1">
                                        <div class="overview-content-heading">
                                            Energy and Nutrition
                                        </div>
                                        <div class="overview-content-parag">
                                            We also support local schools by providing snacks and meals to students who may not have access to adequate nutrition at home. This helps ensure that children have the energy and nutrition they need to succeed in school.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 px-5">
                                <div class="overview-card-box">
                                    <div class="image-overview">
                                        <img src="/images/card/avernesss.png" alt="" />
                                    </div>
                                    <div class="overview-content overviewbg-2">
                                        <div class="overview-content-heading">
                                            Awareness about the issue of Hunger
                                        </div>
                                        <div class="overview-content-parag">
                                            In addition to our food distribution efforts, we also work to raise awareness about the issue of hunger and the impact it has on individuals, families, and communities. We participate in various community events and fundraisers to raise awareness and funds to support our hunger initiatives.
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
                                            Hungry to support this initiative? please contact us via email or phone. We look forward to hearing from you and making a difference in our community together!
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

export default Hunger;