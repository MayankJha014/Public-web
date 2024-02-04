import React, { useState, useEffect } from "react";
import SubMenu from '../../components/submenu/about';
import Section_ComeBeaLion from '../../components/section-come-be-a-lion';
import Section_BecomePartner from '../../components/section-become-partner';
import HeaderLogo from "../../components/headerlogo";
import SEO from "../../components/seo";
import { Link } from 'react-router-dom';
import { getDreamsPoint, getMissionandDream, } from "../../redux/action/about/about";
import { useDispatch, useSelector } from "react-redux";
import { getDescriptionPoint } from "../../redux/action/description/description";
import { getOverview } from "../../redux/action/whatwedo/whatwedo";
import { getBannerInfo, getLionBannerInfo } from "../../redux/action/banner/banner";
import Loader from "../Loader/Loader";
import { getOthersInfo, getTitleInfo } from "../../redux/action/others/other";
import Header from "../../components/header";

const Mission = () => {

    const dispatch = useDispatch()
    const { loading, mission, dreamsPoint } = useSelector((state) => state.about)
    const { loading: load, description } = useSelector((state) => state.description)
    const { loading: loadWHatwedo, overview } = useSelector((state) => state.whatwedo)
    const { loading: loadBanner, banner, lionbanner } = useSelector((state) => state.banner)
    const { loading: loadTitle, title, error: errTitle, message: msgTitle, detail } = useSelector((state) => state.others)
    const [section, setsection] = useState("about");
    const [subsection, setsubsection] = useState("mission");
    const [other, setOther] = useState('belion')


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        dispatch(getMissionandDream());
        dispatch(getDreamsPoint())
        dispatch(getOverview())
        dispatch(getLionBannerInfo())
        dispatch(getBannerInfo(section, subsection))
        dispatch(getDescriptionPoint(section, subsection))
        dispatch(getTitleInfo(section));
        dispatch(getOthersInfo(other))
    }, [dispatch]);
    return (
        <>
            {loading || load || loadWHatwedo || loadBanner ? (
                <Loader />
            ) : (

                <>
                    {/* <Header activelink='about' /> */}
                    <main>
                        {/* <section class="about__banner visionmission" style={{ backgroundImage: banner?.image ? `url(../${banner?.image})` : `url('../images/banner-events.jpg')` }}> */}
                        <section class="about__banner visionmission" style={{ backgroundImage: banner?.image ? `url(${process.env.REACT_APP_SERVER}/${banner?.image})` : `url('../images/banner-events.jpg')` }}>
                            {/* <section class="about__banner visionmission" > */}
                            <div class="about__banner__bg" >
                                <HeaderLogo />
                                <h1>{banner?.heading}</h1>
                                <p> About/ <span> Vision & Mission</span></p>
                            </div>
                        </section>
                        <SubMenu activelink='mission' />

                        <section class="mission">
                            <div class="container px-5">
                                <div class="row">


                                    <div class="col-lg-12 pt-5">
                                        <div class="dream-box">
                                            <div class="dream-box-ab-icon">
                                                <img src="/images/dream.png" alt="" />
                                            </div>
                                            <div class="dream-heading">
                                                {title?.title4}
                                            </div>
                                            <div class="mission-pragraph">
                                                {/* “To become a role model in the community and humanitarian service” */}
                                                {mission?.mission}
                                            </div>

                                            <div class="dream-suppport pt-5">
                                                {description?.description4}
                                            </div>

                                            <div class="dream-card">

                                                {overview && overview.map((data) => (
                                                    <Link to={`/what-we-do/${data?.category}`}>
                                                        <div class="dream-card-image">
                                                            <img src={`${process.env.REACT_APP_SERVER}/${data?.image}`} alt="" />
                                                            <div class="dream-card-image-heading">
                                                                {data?.category}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}

                                                {/* <Link to="/what-we-do/diabetes">
                                                    <div class="dream-card-image">
                                                        <img src="/images/card/Group 29.png" alt="" />
                                                        <div class="dream-card-image-heading">
                                                            Diabetes
                                                        </div>
                                                    </div>
                                                </Link> */}
                                                {/* <Link to="/what-we-do/environment">
                                                    <div class="dream-card-image">
                                                        <img src="/images/card/Group 36.png" alt="" />
                                                        <div class="dream-card-image-heading">
                                                            Environment
                                                        </div>
                                                    </div>
                                                </Link> */}



                                            </div>
                                            <div className='pt-4'>
                                                <p>{description?.description2}  </p>
                                            </div>

                                            <div class="dream-suporrt-line">
                                                {description?.description5}
                                            </div>

                                            <div class="dream-support-byline">
                                                <ul>
                                                    {dreamsPoint && dreamsPoint.map((points) => (
                                                        // <li>Supporting our local Law Enforcement and Fire Fighters</li>
                                                        <li>{points.point}</li>
                                                    ))}
                                                    {/* <li>Facilitating support for children with special needs</li>
                                                    <li>Animal rescue helpline in line with the philosophy of SPCA</li>
                                                    <li>Alzheimer's awareness programs to sensitize people toward better geriatric care</li>
                                                    <li>Any other programs that YOU think are priority for the community</li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 pt-5">
                                        <div class="mission-box">
                                            <div class="mission-box-ab-icon">
                                                <img src="/images/mission-icon.png" alt="" />
                                            </div>
                                            <div class="mission-heading">
                                                {title?.title5}
                                            </div>
                                            <div class="mission-pragraph">
                                                {/* “To empower Lions Clubs volunteers, and Partners to improve health and well-being, and support those in need through humanitarian services and grants that impact lives, encourage peace and promote diversity.” */}
                                                {mission?.dreams}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='extra-content-allover pt-5'>
                                        <p><b>{description?.description1}</b></p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <Section_ComeBeaLion detail={lionbanner} />
                        <Section_BecomePartner data={detail} />
                    </main>
                </>
            )}

        </>
    );
};

export default Mission;