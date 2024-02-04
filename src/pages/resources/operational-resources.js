import React, { useState, useEffect } from "react";
import SubMenu from '../../components/submenu/resources';
import Section_ComeBeaLion from '../../components/section-come-be-a-lion';
import Section_BecomePartner from '../../components/section-become-partner';
import HeaderLogo from "../../components/headerlogo";
import SEO from "../../components/seo";
import { useDispatch, useSelector } from "react-redux";
import { getResource } from "../../redux/action/resources/resource";
import { getDescriptionPoint } from "../../redux/action/description/description";
import { getBannerInfo, getLionBannerInfo } from "../../redux/action/banner/banner";
import Loader from "../Loader/Loader";
import { getTitleInfo } from "../../redux/action/others/other";

const OperationalResources = () => {
    const dispatch = useDispatch()

    const [Id, setId] = useState(2)
    const [section, setsection] = useState("resource");
    const [subsection, setsubsection] = useState("operationalresource");

    const { loading, description } = useSelector((state) => state.description)
    const { loading: load, points } = useSelector((state) => state.resource)
    const { loading: loadBanner, banner, lionbanner } = useSelector((state) => state.banner)
    const { loading: loadTitle, title } = useSelector((state) => state.others)

    useEffect(() => {
        dispatch(getResource(Id))
        dispatch(getBannerInfo(section, subsection))
        dispatch(getLionBannerInfo())
        dispatch(getDescriptionPoint(section, subsection))
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
                        title='Operational Resources | Parsippany Lions Club'
                        description='The Parsippany Lions Club, Operational Resources page is designed to provide our members and volunteers with the tools and information they need to efficiently and effectively carry out our initiatives and programs.'
                        keywords='Parsippany Lions Club, Volunteer, templates, operational resources, training, membership manuals, Help, Humanity, Charity, Community service.'
                    />
                    <main>
                        <section class="about__banner opresources" style={{ backgroundImage: banner?.image ? `url(${process.env.REACT_APP_SERVER}/${banner?.image})` : `url('../images/banner-events.jpg')` }}>

                            <div class="about__banner__bg">

                                <HeaderLogo />

                                <h1>{banner?.heading ? banner?.heading : `Resources`}</h1>
                                <p>  Resources / <span> Operational Resources</span></p>
                            </div>
                        </section>

                        <SubMenu activelink="operationalresources" />

                        <section class="pt-5">
                            <div class="container px-5">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="event-come-be-a-loin-heading">
                                            {title?.title2 ? title.title2 : 'Operational Resources'}
                                        </div>
                                        <div class="event-come-be-a-text">
                                            {/* <p>The Parsippany Lions Club is committed to providing our members and volunteers with the resources they need to effectively serve our community. Our Operational Resources page is designed to provide our members and volunteers with the tools and information they need to efficiently and effectively carry out our initiatives and programs.</p> */}
                                            <p>{description?.description1}</p>
                                        </div>

                                        <div class="headline-for-sponros pt-3">
                                            {description?.description4 ? description?.description4 : 'Our Operational Resources page includes:'}
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
                                                <div class="event-come-a-box-text">Training materials and guides for volunteers and members on how to carry out various initiatives and programs</div>
                                            </div>
                                            <div class="event-come-a-box-main">
                                                <div class="event-come-a-box-icon"><img src="/images/icon/03.png" alt="" /></div>
                                                <div class="event-come-a-box-text">Checklists and templates for organizing and executing events and initiatives</div>
                                            </div>
                                            <div class="event-come-a-box-main">
                                                <div class="event-come-a-box-icon"><img src="/images/icon/04.png" alt="" /></div>
                                                <div class="event-come-a-box-text">Links to Lions Club International and other relevant organizations that provide information and resources on the causes we support</div>
                                            </div>
                                            <div class="event-come-a-box-main">
                                                <div class="event-come-a-box-icon"><img src="/images/icon/05.png" alt="" /></div>
                                                <div class="event-come-a-box-text">Information on how to access our community services and assistance programs</div>
                                            </div> */}
                                        </div>
                                    </div>

                                    <div class="col-lg-12 mt-5">
                                        <div class="event-next-line">
                                            <p>{description?.description2}</p>
                                            <p><b>{description?.description3}</b></p>
                                            {/* <p>This page serves as a source of information for our members and volunteers, it provides them with the information and tools they need to carry out their responsibilities and serve our community effectively.</p>
                                            <p><b>We are constantly updating our operational resources page with new information, so please check back frequently to see the latest updates. If you have any questions or suggestions for resources that you would like to see on our page, please do not hesitate to contact us.</b></p> */}
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

export default OperationalResources;