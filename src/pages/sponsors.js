import React, { useState, useEffect } from "react";
import SubMenu from '../components/submenu/sponsors';
import Section_ComeBeaLion from '../components/section-come-be-a-lion';
import Section_BecomePartner from '../components/section-become-partner';
import HeaderLogo from "../components/headerlogo";
import SEO from "../components/seo";
import { getDescriptionPoint } from "../redux/action/description/description";
import { useDispatch, useSelector } from "react-redux";
import { getBannerInfo, getLionBannerInfo } from "../redux/action/banner/banner";
import Loader from "./Loader/Loader";
import { getTitleInfo } from "../redux/action/others/other";

const Sponsors = () => {

    const dispatch = useDispatch()

    const [section, setsection] = useState("sponser");
    const [subsection, setsubsection] = useState("overview");

    const { loading, description } = useSelector((state) => state.description)
    const { loading: loadBanner, banner, lionbanner } = useSelector((state) => state.banner)
    const { loading: loadTitle, title } = useSelector((state) => state.others)


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    useEffect(() => {
        dispatch(getDescriptionPoint(section, subsection))
        dispatch(getBannerInfo(section, subsection))
        dispatch(getLionBannerInfo())
        dispatch(getTitleInfo(section))
    }, [dispatch]);


    return (
        <>
            {loading || loadBanner ? (
                <Loader />
            ) : (
                <>
                    <SEO
                        title='Sponsors | Parsippany Lions Club'
                        description='The Parsippany Lions Club is proud to be a part of the global Lions Club International community and we are grateful for the support of our global sponsors. These global and local sponsors include businesses and organizations that share our commitment to making a difference in our community and around the world.'
                        keywords='Parsippany Lions Club, Volunteer, Help, events, sponsors, global partners, local partners, Humanity, Charity, Community service'
                    />
                    <main>
                        <section class="about__banner globalsponsor" style={{ backgroundImage: banner?.image ? `url(${process.env.REACT_APP_SERVER}/${banner?.image})` : `url('../images/banner-events.jpg')` }}>
                            <div class="about__banner__bg">

                                <HeaderLogo />
                                <h1> {banner?.heading ? banner?.heading : `Sponsors`}</h1>
                                <p>  Sponsors / <span>  Overview</span></p>
                            </div>
                        </section>

                        <SubMenu activelink="sponsors" />

                        <section class="pt-5">
                            <div class="container px-5">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="event-come-be-a-loin-heading">
                                            {title?.title1 ? title.title1 : 'Our Sponsors/ Partnerships'}
                                        </div>
                                        <div class="event-come-be-a-text">
                                            {/* <p>The Parsippany Lions Club is grateful for the support of our sponsors, who help us to make a difference in our community through our various initiatives and programs.</p>
                                            <p>Our sponsors are local businesses, organizations, and individuals who share our commitment to serving the needs of those in our community. They support our efforts through financial donations, in-kind donations, and volunteer support.</p>
                                            <p>Their support enables us to provide vital services such as vision screenings, eye exams, and eyeglasses to those in need; provide education and financial assistance for diabetes-related expenses; address hunger issues, protect and preserve the environment and support children and families affected by cancer.</p>
                                            <p>We would like to extend our sincere appreciation to our sponsors for their generosity and support. Without their contributions, we would not be able to make the positive impact we do in our community.</p> */}
                                            <p>{description?.description1}</p>
                                            <p>{description?.description2}</p>
                                            <p>{description?.description3}</p>
                                            <p>{description?.description4}</p>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 mt-5">
                                        <div class="event-next-line">

                                            {/* <p><b>If you are interested in becoming a sponsor of the Parsippany Lions Club, please contact us. We would be happy to provide more information on the benefits of sponsorship and discuss how your organization can make a difference in our community through a partnership with the Lions Club.</b></p> */}
                                            <p><b>{description?.description5}</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <Section_ComeBeaLion detail={lionbanner} />
                        <Section_BecomePartner />
                    </main>
                </>
            )}

        </>
    );
};

export default Sponsors;