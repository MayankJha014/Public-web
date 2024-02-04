import React, { useState, useEffect } from "react";
import SubMenu from '../components/submenu/resources';
import Section_ComeBeaLion from '../components/section-come-be-a-lion';
import Section_BecomePartner from '../components/section-become-partner';
import HeaderLogo from "../components/headerlogo";
import SEO from "../components/seo";
import { useDispatch, useSelector } from "react-redux";
import { getDescriptionPoint } from "../redux/action/description/description";
import { getResource } from "../redux/action/resources/resource";
import { getBannerInfo, getLionBannerInfo } from "../redux/action/banner/banner";
import Loader from "./Loader/Loader";
import { getTitleInfo } from "../redux/action/others/other";

const Resources = () => {
    const dispatch = useDispatch()

    const [Id, setId] = useState(1)
    const [section, setsection] = useState("resource");
    const [subsection, setsubsection] = useState("overview");

    const { loading, description } = useSelector((state) => state.description)
    const { loading: load, points } = useSelector((state) => state.resource)
    const { loading: loadBanner, banner, lionbanner } = useSelector((state) => state.banner)
    const { loading: loadTitle, title } = useSelector((state) => state.others)

    useEffect(() => {
        dispatch(getResource(Id))
        dispatch(getDescriptionPoint(section, subsection))
        dispatch(getLionBannerInfo())
        dispatch(getBannerInfo(section, subsection))
        dispatch(getTitleInfo(section))
    }, [dispatch]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            {loading || load || loadBanner ? (
                <Loader />
            ) : (
                <>
                    <SEO
                        title='Resources | Parsippany Lions Club'
                        description='The Parsippany Lions Club is a dedicated group of individuals who are committed to making a difference in local community. Our resources page is designed to provide our members and the community with valuable information and tools to assist them in their service work.'
                        keywords='Parsippany Lions Club, Volunteer, Help, events, healthcare information, local contacts, collaterals, flyers, brochures, leaflets, Humanity, Charity, Community service'
                    />
                    <main>
                        <section class="about__banner opresources" style={{ backgroundImage: banner?.image ? `url(${process.env.REACT_APP_SERVER}/${banner?.image})` : `url('../images/banner-events.jpg')` }}>
                            <div class="about__banner__bg">

                                <HeaderLogo />

                                <h1> {banner?.heading ? banner?.heading : `Resources`}</h1>
                                <p>  Resources / <span> Overview</span></p>
                            </div>
                        </section>

                        <SubMenu activelink="resources" />

                        <section class="pt-5">
                            <div class="container px-5">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="event-come-be-a-loin-heading">
                                            {title?.title1 ? title.title1 : 'Resources'}
                                        </div>
                                        <div class="event-come-be-a-text">
                                            {/* <p>Our Resources page is designed to provide our members and the community with valuable information and tools to assist them in their service work.</p> */}
                                            <p>{description?.description1}</p>
                                        </div>

                                        <div class="headline-for-sponros pt-3">
                                            {description?.description4 ? description.description4 : 'Our Resources page includes:'}
                                        </div>


                                        <div class="event-come-be-a-box">
                                            {points && points.map((point, index) => (
                                                <div class="event-come-a-box-main">

                                                    <div class="event-come-a-box-icon"><img src={`/images/icon/0${index + 1}.png`} alt="" /></div>
                                                    <div class="event-come-a-box-text">{point.point}</div>
                                                </div>
                                            ))}
                                            {/* <div class="event-come-a-box-main">
                                                <div class="event-come-a-box-icon"><img src="/images/icon/02.png" alt="" /></div>
                                                <div class="event-come-a-box-text">Information on upcoming events and volunteer opportunities</div>
                                            </div>
                                            <div class="event-come-a-box-main">
                                                <div class="event-come-a-box-icon"><img src="/images/icon/03.png" alt="" /></div>
                                                <div class="event-come-a-box-text">Downloads of forms and documents such as membership application forms and meeting agendas</div>
                                            </div>
                                            <div class="event-come-a-box-main">
                                                <div class="event-come-a-box-icon"><img src="/images/icon/04.png" alt="" /></div>
                                                <div class="event-come-a-box-text">A list of local healthcare professionals and organizations that provide services related to our causes.</div>
                                            </div>
                                            <div class="event-come-a-box-main">
                                                <div class="event-come-a-box-icon"><img src="/images/icon/05.png" alt="" /></div>
                                                <div class="event-come-a-box-text">Information on how to access our community services and assistance programs</div>
                                            </div> */}
                                        </div>
                                    </div>

                                    <div class="col-lg-12 mt-5">
                                        <div class="event-next-line">
                                            {/* <p>We also have a section dedicated to our members, with access to exclusive content such as meeting minutes, financial reports, and other important information</p> */}
                                            <p>{description?.description2}</p>
                                            <p><b>{description?.description3}</b></p>
                                            {/* <p><b>Our Resources page is continuously updated with new information and resources, so please check back frequently to see the latest updates</b></p> */}
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

export default Resources;