import React, { useState, useEffect } from "react";
import SubMenu from '../../components/submenu/events';
import Section_ComeBeaLion from '../../components/section-come-be-a-lion';
import Section_BecomePartner from '../../components/section-become-partner';
import HeaderLogo from "../../components/headerlogo";
import SEO from "../../components/seo";
import { getComeBeLionPoint } from "../../redux/action/events/events";
import { useDispatch, useSelector } from "react-redux";
import { getDescriptionPoint } from "../../redux/action/description/description";
import { getBannerInfo, getLionBannerInfo } from "../../redux/action/banner/banner";
import Loader from "../Loader/Loader";
import { getTitleInfo } from "../../redux/action/others/other";

const ComebeaLion = () => {
    const dispatch = useDispatch()
    const [section, setsection] = useState("events");
    const [subsection, setsubsection] = useState("belion");

    const { loading, LionPoint } = useSelector((state) => state.event)
    const { loading: load, description } = useSelector((state) => state.description)
    const { loading: loadBanner, banner, lionbanner } = useSelector((state) => state.banner)
    const { loading: loadTitle, title } = useSelector((state) => state.others)



    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        dispatch(getComeBeLionPoint());
        dispatch(getBannerInfo(section, subsection))
        dispatch(getLionBannerInfo())
        dispatch(getDescriptionPoint(section, subsection))
        dispatch(getTitleInfo(section))
    }, [dispatch]);



    return (
        <>
            {loading || load || loadBanner ? (
                <Loader />
            ) : (

                <>
                    <SEO
                        title='Come Be a Lion | Parsippany Lions Club'
                        description='The Parsippany Lions Club, Photo Gallery page features pictures from our events and initiatives, including vision screenings, eye exams, community clean-ups, food drives, fundraisers, and other events.'
                        keywords='Parsippany Lions Club, Volunteer, Come be a lion, become a member, membership, partner, partnerships, Help, Humanity, Charity, Community service.'
                    />
                    <main>
                        <section class="about__banner comebealion" style={{ backgroundImage: banner?.image ? `url(${process.env.REACT_APP_SERVER}/${banner.image})` : `url('../images/banner-events.jpg')` }}>
                            <div class="about__banner__bg">
                                <HeaderLogo />
                                <h1>{banner?.heading ? banner?.heading : `Events`}</h1>
                                <p>   Events /<span>  Come be a Lion</span></p>
                            </div>
                        </section>

                        <SubMenu activelink="comebealion" />

                        <section class="pt-5">
                            <div class="container px-5">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="event-come-be-a-loin-heading">
                                            {title?.title3 ? title.title3 : 'Come be a lion'}
                                        </div>
                                        <div class="event-come-be-a-text">
                                            {description?.description1}
                                        </div>

                                        <div class="headline-for-sponros pt-3">
                                            {description?.description4 ? description.description4 : `As a member of the Parsippany Lions Club, you will have the opportunity to:`}
                                        </div>

                                        <div class="event-come-be-a-box">
                                            {LionPoint && LionPoint.map((points, index) => (
                                                <div key={points.id} class="event-come-a-box-main">
                                                    <div class="event-come-a-box-icon"><img src={`/images/icon/0${index + 1}.png`} alt="" /></div>
                                                    <div class="event-come-a-box-text">{points.point}</div>
                                                </div>
                                            ))}


                                        </div>
                                    </div>

                                    <div class="col-lg-12 mt-5">
                                        <div class="event-next-line">
                                            <p>{description?.description2}</p>
                                            <p>{description?.description5}</p>
                                            <p>{description?.description6}</p>
                                            {/* <p>The Parsippany Lions Club is always looking for new members to join our team. Whether you're a student, a retiree, a professional, or a stay-at-home parent, there's a place for you in our organization. All that's required is a willingness to serve and a desire to make a difference in your community.</p> */}
                                            {/* <p><b>So, what are you waiting for? Come be a Lion with us! Together, we can make a real and lasting impact on the lives of those in need in our community.</b></p> */}
                                            {/* <p><b>Contact us today to find out more about how you can become a member of the Parsippany Lions Club. We can't wait to welcome you to our team!</b></p> */}
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
                                                    {description?.description3}
                                                </b>
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
            )}

        </>
    );
};

export default ComebeaLion;