import React, { useState, useEffect } from "react";
import SubMenu from '../../components/submenu/resources';
import Section_ComeBeaLion from '../../components/section-come-be-a-lion';
import Section_BecomePartner from '../../components/section-become-partner';
import HeaderLogo from "../../components/headerlogo";
import SEO from "../../components/seo";
import { useDispatch, useSelector } from "react-redux";
import { getCollateralPDF, getResource } from "../../redux/action/resources/resource";
import { getDescriptionPoint } from "../../redux/action/description/description";
import { getBannerInfo, getLionBannerInfo } from "../../redux/action/banner/banner";
import Loader from "../Loader/Loader";
import { getTitleInfo } from "../../redux/action/others/other";
import axios from 'axios'
import fileDownload from "js-file-download";
import CollateralPDF from "./CollateralPDF";

const Collaterals = () => {
    const dispatch = useDispatch()

    const [Id, setId] = useState(3)
    const [section, setsection] = useState("resource");
    const [subsection, setsubsection] = useState("collaterals");

    const { loading, description } = useSelector((state) => state.description)
    const { loading: load, points, pdf } = useSelector((state) => state.resource)
    const { loading: loadBanner, banner, lionbanner } = useSelector((state) => state.banner)
    const { loading: loadTitle, title } = useSelector((state) => state.others)

    const saveFile = async (e) => {
        e.preventDefault()
        // window.open(`${process.env.REACT_APP_SERVER}/${pdf?.pdf}`, '_blank');
        axios({
            url: `${process.env.REACT_APP_SERVER}/v1/others/download/${pdf?.pdf}`,
            method: "GET",
            responseType: "blob"
        }).then((res) => {
            var tmp = `${pdf?.pdf}`.split(".");
            fileDownload(res.data, `${pdf?.title}.${tmp.pop()}`)
        })
    }

    useEffect(() => {
        dispatch(getResource(Id))
        dispatch(getBannerInfo(section, subsection))
        dispatch(getLionBannerInfo())
        dispatch(getDescriptionPoint(section, subsection))
        dispatch(getTitleInfo(section))
        dispatch(getCollateralPDF())
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
                        title='Collaterals | Parsippany Lions Club'
                        description='The Parsippany Lions Club, Photo Gallery page features pictures from our events and initiatives, including vision screenings, eye exams, community clean-ups, food drives, fundraisers, and other events.'
                        keywords='Parsippany Lions Club, Volunteer, collaterals, flyers, one pagers, brochures, leaflets, case study, Help, Humanity, Charity, Community service.'
                    />
                    <main>
                        <section class="about__banner opresources" style={{ backgroundImage: banner?.image ? `url(${process.env.REACT_APP_SERVER}/${banner?.image})` : `url('../images/banner-events.jpg')` }}>
                            <div class="about__banner__bg">

                                <HeaderLogo />

                                <h1>{banner?.heading ? banner?.heading : `Resources`}</h1>
                                <p>  Resources / <span> Collaterals</span></p>
                            </div>
                        </section>

                        <SubMenu activelink="collaterals" />

                        <section class="pt-5">
                            <div class="container px-5">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="event-come-be-a-loin-heading">
                                            {title?.title3 ? title.title3 : 'Collaterals'}
                                        </div>
                                        <div class="event-come-be-a-text">
                                            {/* <p>Our Collaterals page is a great way to see the impact that our efforts have had and learn more about our causes and initiatives.</p> */}
                                            <p>{description?.description1}</p>
                                        </div>

                                        <div class="headline-for-sponros pt-3">
                                            Our Collaterals page includes:
                                        </div>


                                        <div class="event-come-be-a-box">
                                            {points && points.map((point, index) => (

                                                <div class="event-come-a-box-main">
                                                    <div class="event-come-a-box-icon"><img src={`/images/icon/0${index + 1}.png`} alt="" /></div>
                                                    <div class="event-come-a-box-text">{point.point}</div>
                                                </div>
                                            ))}

                                        </div>
                                    </div>

                                    {/* 
                                    <div className="container mt-5">
                                        <div className="row"> */}
                                    <CollateralPDF pdf={pdf} />
                                    {/* {pdf && pdf.map((document, index) => (
                                                <div key={document.id} className="col-lg-3" >
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <img src={`${process.env.REACT_APP_SERVER}/${document.image}`} class="download-padfe-page" />

                                                            <h3 className="text-center">{document.title}</h3>
                                                            <a class="btn__more" target={"_blank"} onClick={(e) => saveFile(e)}>Download form</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))} */}

                                    {/* </div>
                                    </div> */}


                                    <div class="col-lg-12 mt-5">
                                        <div class="event-next-line">
                                            {/* <p>This page serves as a source of information for our members, volunteers, sponsors, and the community at large. It serves as a way for them to learn more about the causes we support, our initiatives and programs, and the impact we have on the community.</p> */}
                                            <p>{description?.description2}</p>
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

export default Collaterals;