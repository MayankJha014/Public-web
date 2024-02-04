import React, { useState, useEffect } from "react";
import SubMenu from '../components/submenu/about';
import Section_ComeBeaLion from '../components/section-come-be-a-lion';
import Section_BecomePartner from '../components/section-become-partner';
import HeaderLogo from "../components/headerlogo";
import SEO from "../components/seo";
import { getOverviewPoint, } from "../redux/action/about/about";
import { useDispatch, useSelector } from "react-redux";
import { getDescriptionPoint } from "../redux/action/description/description";
import { getBannerInfo, getLionBannerInfo } from "../redux/action/banner/banner";
import Loader from "./Loader/Loader";
import { getTitleInfo } from "../redux/action/others/other";

const About = () => {

    const dispatch = useDispatch()
    const { loading, overview } = useSelector((state) => state.about)
    const { loading: load, description } = useSelector((state) => state.description)
    const { loading: bannerLoad, banner, lionbanner } = useSelector((state) => state.banner)
    const { loading:loadTitle, title, error:errTitle, message:msgTitle } = useSelector((state) => state.others)
    const [section, setsection] = useState("about");
    const [subsection, setsubsection] = useState("overview");




    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        dispatch(getOverviewPoint());
        dispatch(getBannerInfo(section, subsection))
        dispatch(getLionBannerInfo())
        dispatch(getDescriptionPoint(section, subsection))
        dispatch(getTitleInfo(section));
    }, [dispatch]);



    return (
        <>
            {loading || load || bannerLoad ? (
                <Loader />
            ) : (

                <>
                    <SEO
                        title='About | Parsippany Lions Club'
                        description='The Parsippany Lions Club is a dedicated group of individuals who are committed to making a difference in local community. Our goal is to empower volunteers to serve their communities, meet humanitarian needs, encourage peace, and promote international understanding through Lions clubs.'
                        keywords='Parsippany Lions Club, Volunteer, Help, Dream, Mission, our team, Humanity, Charity, Community service'
                    />
                    <main>
                        <section class="about__banner" style={{ backgroundImage: banner?.image ? `url(${process.env.REACT_APP_SERVER}/${banner?.image})` : `url('../images/banner-events.jpg')` }}>
                            {/* <section class="about__banner" > */}
                            <div class="about__banner__bg">
                                <HeaderLogo />
                                <h1>{banner?.heading ? banner?.heading : `About`}</h1>
                                <p> About/ <span>Overview</span></p>
                            </div>

                        </section>

                        <SubMenu activelink='about' />

                        <section class="overview pt-5">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12 px-5">

                                        <div class="col-lg-9">
                                            <div class="overview-heading-uper">
                                               {title?.title1 ? title.title1 : "Overview"}
                                            </div>

                                            <div class="overview-byline-uper">
                                                {/* The Parsippany Lions Club is a dedicated group of individuals who are committed to making a difference in our community. We are part of an international organization that has been serving communities around the world for over 100 years. */}
                                                {description?.description1}
                                            </div>
                                        </div>
                                    </div>

                                    {overview && overview.map((point, index) => (
                                        <div key={point.id} class="col-lg-12 px-5">
                                            <div class="overview-card-box">
                                                <div class="image-overview">
                                                    <img src={`${process.env.REACT_APP_SERVER}/${point.image}`} alt="" />
                                                </div>
                                                <div class={`overview-content overviewbg-${index}`}>
                                                    <div class="overview-content-heading">
                                                        {point.heading}
                                                    </div>
                                                    <div class="overview-content-parag">
                                                        {point.comment}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}


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
                                                    {/* We welcome Parsippany residents who share our passion for improving our community to join our club and actively contribute to local programs. With our diverse strengths and abilities, we can work together to make Parsippany a shining example for other townships. */}
                                                    {description?.description2}
                                                </b>


                                            </p>

                                            <p>
                                                <b>{description?.description3}</b>
                                                {/* <b>   If you're interested in joining the Parsippany Lions Club or would like more information about our organization, please contact us via email or phone. We look forward to hearing from you and making a difference in our community together!</b> */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <Section_ComeBeaLion detail={lionbanner} />
                        <Section_BecomePartner />
                    </main>
                </>
            )
            }

        </>
    );
};

export default About;