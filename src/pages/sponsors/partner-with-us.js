import React, { useState, useEffect } from "react";
import SubMenu from '../../components/submenu/sponsors';
import Section_ComeBeaLion from '../../components/section-come-be-a-lion';
import Section_BecomePartner from '../../components/section-become-partner';
import HeaderLogo from "../../components/headerlogo";
import SEO from "../../components/seo";
import { useDispatch, useSelector } from "react-redux";
import { getPartnerWithBenefitInfo, getPartnerWithOppurtunityInfo } from "../../redux/action/sponsers/sponser";
import { getDescriptionPoint } from "../../redux/action/description/description";
import { getBannerInfo, getLionBannerInfo } from "../../redux/action/banner/banner";
import Loader from "../Loader/Loader";
import { getTitleInfo } from "../../redux/action/others/other";

const Partnerwithus = () => {

    const dispatch = useDispatch()


    const [section, setsection] = useState("sponser");
    const [subsection, setsubsection] = useState("partnerwithus");

    const { Oppourtunity, benefits, loading } = useSelector((state) => state.sponser)
    const { loading: load, description } = useSelector((state) => state.description)
    const { loading: loadBanner, banner, lionbanner } = useSelector((state) => state.banner)
    const { loading: loadTitle, title } = useSelector((state) => state.others)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    useEffect(() => {
        dispatch(getPartnerWithOppurtunityInfo());
        dispatch(getPartnerWithBenefitInfo())
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
                        title='Partner with us | Parsippany Lions Club'
                        description='The Parsippany Lions Club is always looking for new partners to join us in our mission to make a difference in our community. '
                        keywords='Parsippany Lions Club, Volunteer, partner with us, partners, partnerships, become a sponsor, partner program, network, sponsors, financial support, fund raiser, donation camps, donations, Help, Humanity, Charity, Community service.'
                    />
                    <main>
                        <section class="about__banner partner" style={{ backgroundImage: banner?.image ? `url(${process.env.REACT_APP_SERVER}/${banner?.image})` : `url('../images/banner-events.jpg')` }}>
                            <div class="about__banner__bg">

                                <HeaderLogo />

                                <h1> {banner?.heading ? banner?.heading : `Sponsors`}</h1>
                                <p>  Sponsors/ <span> Partner with us</span></p>
                            </div>

                        </section>

                        <SubMenu activelink="partnerwithus" />

                        <section class="pt-5">
                            <div class="container px-5">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="event-come-be-a-loin-heading">
                                            Partner with us
                                        </div>
                                        <div class="event-come-be-a-text">
                                            {/* The Parsippany Lions Club is always looking for new partners to join us in our mission to make a difference in our community. We believe that by working together with other organizations, businesses, and individuals, we can have a greater impact on the lives of those in need in our community. */}
                                            {description?.description1}
                                        </div>

                                        <div class="headline-for-sponros mt-5">
                                            {description?.description4 ? description.description4 : 'As a partner of the Parsippany Lions Club, you will have the opportunity to:'}
                                        </div>


                                        <div class="event-come-be-a-box">
                                            {Oppourtunity && Oppourtunity.map((value, index) => (
                                                <div class="event-come-a-box-main">
                                                    <div class="event-come-a-box-icon"><img src={`/images/icon/0${index + 1}.png`} alt="" /></div>
                                                    <div class="event-come-a-box-text">{value.oppourtunity}</div>
                                                </div>
                                            ))}
                                            {/* <div class="event-come-a-box-main">
                                                <div class="event-come-a-box-icon"><img src="/images/icon/02.png" alt="" /></div>
                                                <div class="event-come-a-box-text">Raise awareness about the causes you care about</div>
                                            </div>
                                            <div class="event-come-a-box-main">
                                                <div class="event-come-a-box-icon"><img src="/images/icon/03.png" alt="" /></div>
                                                <div class="event-come-a-box-text">Expand your network and build new relationships with like-minded individuals and organizations</div>
                                            </div>
                                            <div class="event-come-a-box-main">
                                                <div class="event-come-a-box-icon"><img src="/images/icon/04.png" alt="" /></div>
                                                <div class="event-come-a-box-text">Enhance your organization's reputation and credibility by aligning with a reputable community-based organization</div>
                                            </div> */}

                                        </div>
                                    </div>


                                    <div class="col-lg-12 mt-5">
                                        <div class="global-sponsors-take">
                                            {description?.description5 ? description.description5 : 'We offer a variety of partnership opportunities, including:'}
                                        </div>
                                        <div class="event-come-be-a-box">
                                            {benefits && benefits.map((value, index) => (
                                                <div class="event-come-a-box-main">
                                                    <div class="event-come-a-box-icon"><img src={`/images/icon/0${index + 1}.png`} alt="" /></div>
                                                    <div class="event-come-a-box-text">{value.benefit}</div>
                                                </div>
                                            ))}
                                            {/* <div class="event-come-a-box-main">
                                                <div class="event-come-a-box-icon"><img src="/images/icon/02.png" alt="" /></div>
                                                <div class="event-come-a-box-text">In-kind donations</div>
                                            </div>
                                            <div class="event-come-a-box-main">
                                                <div class="event-come-a-box-icon"><img src="/images/icon/03.png" alt="" /></div>
                                                <div class="event-come-a-box-text">Volunteer support</div>
                                            </div>
                                            <div class="event-come-a-box-main">
                                                <div class="event-come-a-box-icon"><img src="/images/icon/04.png" alt="" /></div>
                                                <div class="event-come-a-box-text">Joint fundraising and awareness-raising events</div>
                                            </div> */}

                                        </div>
                                    </div>

                                    <div class="col-lg-12 mt-5">
                                        <div class="event-next-line">
                                            {/* <p><b>If you're interested in becoming a partner of the Parsippany Lions Club, please contact us. We would be happy to discuss the various partnership opportunities available and how we can work together to make a difference in our community.</b></p>
                                            <p><b>Don't wait, come join us today and make a real impact in our community. Together, we can make a real and lasting difference in the lives of those in need.</b></p> */}
                                            <p><b>{description?.description2}</b></p>
                                            <p><b>{description?.description3}</b></p>
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

export default Partnerwithus;