import React, { useState, useEffect } from "react";
import SubMenu from '../../components/submenu/sponsors';
import Section_ComeBeaLion from '../../components/section-come-be-a-lion';
import Section_BecomePartner from '../../components/section-become-partner';
import HeaderLogo from "../../components/headerlogo";
import SEO from "../../components/seo";
import { useDispatch, useSelector } from "react-redux";
import { getGlobalSponserPoint } from "../../redux/action/sponsers/sponser";
import { getDescriptionPoint } from "../../redux/action/description/description";
import { getBannerInfo, getLionBannerInfo } from "../../redux/action/banner/banner";
import Loader from "../Loader/Loader";
import { getTitleInfo } from "../../redux/action/others/other";

const GlobalSponsors = () => {
    const dispatch = useDispatch()
    const [section, setsection] = useState("sponser");
    const [subsection, setsubsection] = useState("globalsponser");

    const { loading, sponser } = useSelector((state) => state.sponser)
    const { loading: load, description } = useSelector((state) => state.description)
    const { loading: loadBanner, banner, lionbanner } = useSelector((state) => state.banner)
    const { loading: loadTitle, title } = useSelector((state) => state.others)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    useEffect(() => {
        dispatch(getGlobalSponserPoint())
        dispatch(getBannerInfo(section, subsection))
        dispatch(getDescriptionPoint(section, subsection))
        dispatch(getLionBannerInfo())
        dispatch(getTitleInfo(section))
    }, [dispatch]);

    return (
        <>
            {loading || load || loadBanner ? (
                <Loader />
            ) : (
                <>
                    <SEO
                        title='Global Sponsors | Parsippany Lions Club'
                        description='The Parsippany Lions Club, Our global sponsors provide vital support through financial contributions, in-kind donations, and volunteer support.'
                        keywords='Parsippany Lions Club, Volunteer, global sponsors, financial support, fund raiser, donation camps, donations, Help, Humanity, Charity, Community service.'
                    />
                    <main>
                        <section class="about__banner globalsponsor" style={{ backgroundImage: banner?.image ? `url(${process.env.REACT_APP_SERVER}/${banner?.image})` : `url('../images/banner-events.jpg')` }}>
                            <div class="about__banner__bg">

                                <HeaderLogo />
                                <h1>{banner?.heading ? banner?.heading : `Sponsors`}</h1>
                                <p>  Sponsors / <span>  Global Sponsors</span></p>
                            </div>
                        </section>

                        <SubMenu activelink="globalsponsors" />

                        <section class="pt-5">
                            <div class="container px-5">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="event-come-be-a-loin-heading">
                                            {title?.title2 ? title.title2 : 'Global Sponsors'}
                                        </div>
                                        <div class="event-come-be-a-text">
                                            {/* <p>The Parsippany Lions Club is proud to be a part of the global Lions Club International community and we are grateful for the support of our global sponsors. These sponsors include businesses and organizations that share our commitment to making a difference in our community and around the world.</p>
                                            <p>Our global sponsors provide vital support through financial contributions, in-kind donations, and volunteer support. Their support enables us to provide vital services such as vision screenings, eye exams, and eyeglasses to those in need; provide education and financial assistance for diabetes-related expenses; address hunger issues, protect and preserve the environment and support children and families affected by cancer, and many more.</p> */}
                                            <p>{description?.description1}</p>
                                            <p>{description?.description2}</p>
                                        </div>

                                        <div class="headline-for-sponros pt-3">
                                            {description?.description5 ? description.description5 : 'Some of our global sponsors include:'}
                                        </div>


                                        <div class="event-come-be-a-box">
                                            {sponser && sponser.map((points, index) => (
                                                <div class="event-come-a-box-main">
                                                    <div class="event-come-a-box-icon"><img src={`/images/icon/0${index + 1}.png`} alt="" /></div>
                                                    <div class="event-come-a-box-text">{points.point}</div>
                                                </div>
                                            ))}
                                            {/* <div class="event-come-a-box-main">
                                                <div class="event-come-a-box-icon"><img src="/images/icon/02.png" alt="" /></div>
                                                <div class="event-come-a-box-text">Lions Sight and Hearing Foundation which supports our vision and hearing-related programs</div>
                                            </div>
                                            <div class="event-come-a-box-main">
                                                <div class="event-come-a-box-icon"><img src="/images/icon/03.png" alt="" /></div>
                                                <div class="event-come-a-box-text">Lions Diabetes Awareness Campaign which supports our diabetes education and support programs.</div>
                                            </div>
                                            <div class="event-come-a-box-main">
                                                <div class="event-come-a-box-icon"><img src="/images/icon/04.png" alt="" /></div>
                                                <div class="event-come-a-box-text">Lions Environmental Action and Conservation Trust which supports our environmental initiatives and projects</div>
                                            </div> */}

                                        </div>
                                    </div>

                                    <div class="col-lg-12 mt-5">
                                        <div class="event-next-line">
                                            {/* <p>We extend our sincere appreciation to our global sponsors for their generosity and support. Without their contributions, we would not be able to make the positive impact we do in our community and around the world.</p> */}
                                            <p>{description?.description3}</p>
                                            <p><b>{description?.description4}</b></p>
                                            {/* <p><b>If you're interested in becoming a global sponsor of the Parsippany Lions Club, please contact us. We would be happy to provide more information on the benefits of sponsorship and discuss how your organization can make a difference in our community and the world through a partnership with the Lions Club.</b></p> */}
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

export default GlobalSponsors;