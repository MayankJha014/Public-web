import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeaderLogo from "../components/headerlogo";
import SEO from "../components/seo";
import { getHomeAboutInfo, getHomeExtraInfo, getHomeOthersInfo, getHomeWhatweDoInfo } from "../redux/action/Home/home";
import { getImages, getOverview, getTitle } from "../redux/action/whatwedo/whatwedo";
import { getUpcomingEvent } from "../redux/action/events/events"
import { getBannerInfo, getLionBannerInfo, getSectionBannerInfo } from "../redux/action/banner/banner";
import Loader from "./Loader/Loader";
import Carousel from 'react-bootstrap/Carousel';
import IndexHeaderLogo from "../components/IndexHeaderlogo";
import FileSaver from 'file-saver';
import { getDownload, getTitleInfo } from "../redux/action/others/other";
import axios from 'axios';
import fileDownload from "js-file-download";

const Home = () => {


    const dispatch = useDispatch()
    const [section, setSection] = useState("home")
    const [subsection, subsetSection] = useState("home")


    const { loading, about, others, whatwedo, extra } = useSelector((state) => state.home)
    const { loading: load, overview } = useSelector((state) => state.whatwedo)
    const { loading: loadBanner, sectionBanner, banner, lionbanner } = useSelector((state) => state.banner)
    const { loading: loadEvent, Events } = useSelector((state) => state.event)
    const { loading: loadTitle, title } = useSelector((state) => state.others)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const saveFile = async (e) => {
        e.preventDefault()
        window.open(`${process.env.REACT_APP_SERVER}/${lionbanner?.image}`, '_blank');
        axios({
            url: `${process.env.REACT_APP_SERVER}/v1/others/download/${lionbanner?.image}`,
            method: "GET",
            responseType: "blob"
        }).then((res) => {
            var tmp = `${lionbanner?.image}`.split(".");
            fileDownload(res.data, `club.${tmp.pop()}`)
        })
    }
    // console.log(title.is_active4)

    useEffect(() => {

        dispatch(getOverview())
        dispatch(getSectionBannerInfo(section, subsection));
        dispatch(getBannerInfo(section, subsection))
        dispatch(getLionBannerInfo())
        dispatch(getUpcomingEvent())
        dispatch(getImages())
        dispatch(getHomeAboutInfo());
        dispatch(getHomeOthersInfo());
        dispatch(getHomeWhatweDoInfo())
        dispatch(getTitleInfo(section))
        dispatch(getHomeExtraInfo())
    }, [dispatch,]);

    return (
        <>
            {loading || load || loadEvent || loadBanner || loadTitle ? (
                <Loader />
            ) : (
                <>

                    <SEO
                        title='Home | Parsippany Lions Club'
                        description='The Parsippany Lions Club is a dedicated group of individuals who are committed to making a difference in local community. Our goal is to empower volunteers to serve their communities, meet humanitarian needs, encourage peace, and promote international understanding through Lions clubs.'
                        keywords='Parsippany Lions Club, Volunteer, Help, Humanity, Charity, Community service, Fundraising, Hunger, Cancer, Vision, Environment, Donation, Diabetes'
                    />
                    <main class="">
                        <IndexHeaderLogo />

                        <Carousel>
                            {sectionBanner && sectionBanner?.map((banners) => (
                                <Carousel.Item>

                                    <section class="top__banner" style={{ backgroundImage: banners?.image ? `url(${process.env.REACT_APP_SERVER}/${banners?.image})` : `url('../images/home-banner.jpg')` }}>
                                        <div class="main__shadow py-5">

                                            {/* <HeaderLogo /> */}

                                            <div class="container p-5">
                                                <div class="row">
                                                    <div class="col-lg-10">
                                                        <div class="header__conntent py-5">

                                                            <div class="by__line">{banners?.heading}</div>
                                                            <h1 class="text-white">{banners?.subheading}</h1>
                                                            <Link to={`${banners?.link}`} class="btn__more">{banners?.button}</Link>
                                                            {/* <div class="by__line">{banner?.heading ? banner.heading : `Always donate for Children`}</div>
                                                <h1 class="text-white">{banner?.subheading ? banner.subheading : `Lend a Helping Hand to Those in Need`}</h1>
                                                <Link to="/sponsors/partner-with-us" class="btn__more">Learn more</Link> */}

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>


                                </Carousel.Item>
                            ))}
                        </Carousel>

                        {(title?.is_active || (!title && about?.is_active)) &&
                            <section class="mt-5">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="text-paragraph-in-to">
                                                {/* <h2 className="heading2">About Parsipanny Lions Club</h2> */}
                                                <h2 className="heading2">{title?.title1}</h2>
                                                <p className="italicpara">{about?.description1}</p>
                                                <p>{about?.description2} </p>
                                                <p>{about?.description3} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        }

                        <section class="mt-5">
                            <div class="container pt-5">
                                <div class="row">
                                    {(title?.is_active2 || (!title && whatwedo?.is_active)) &&
                                        <>
                                            <div class="col-lg-4">
                                                <div class="image__round">
                                                    {/* <img src="images/home-whatwedo.jpg" alt="" width="100%" height="100%" /> */}
                                                    <img src={whatwedo?.image ? `${process.env.REACT_APP_SERVER}/${whatwedo.image}` : "/images/Logo-plc.png"} alt="" width="100%" height="100%" />
                                                </div>
                                            </div>
                                            <div class="col-lg-1 hidden"></div>
                                            <div class="col-lg-7 px-5">
                                                <div class="conntent__about px-5">
                                                    <h1 class=" ">{title?.title2 ? title.title2 : 'What we do'}</h1>

                                                    <p>{whatwedo?.description2}</p>
                                                    <div class="para__graph">{whatwedo?.description3}</div>

                                                    <Link to="/what-we-do" class="btn__morett">{whatwedo?.button ? whatwedo.button : 'Learn more'}</Link>
                                                </div>
                                            </div>
                                        </>
                                    }
                                    {extra && extra.map((data) => (
                                        <>  {data.is_active && <section class="mt-5">
                                            <div class="container pt-5">
                                                <div class="row">
                                                    <div class="col-lg-4">
                                                        <div class="image__round">
                                                            {/* <img src="images/home-whatwedo.jpg" alt="" width="100%" height="100%" /> */}
                                                            <img src={data?.image && `${process.env.REACT_APP_SERVER}/${data.image}`} alt="" width="100%" height="100%" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-1 hidden"></div>
                                                    <div class="col-lg-7 px-5">
                                                        <div class="conntent__about px-5">
                                                            <h1 class=" ">{data?.heading && data.heading}</h1>

                                                            <p>{data?.description2 && data.description2}</p>
                                                            <div class="para__graph">{data?.description3 && data.description3}</div>


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        }
                                        </>
                                    ))}

                                    {(title?.is_active3 || (!title && others?.description3)) &&
                                        <div class="col-lg-6">
                                            <div class="small___content">
                                                <h1>{title?.title3 ? title.title3 : 'Global Causes'}</h1>
                                                <p>{others?.description3}</p>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </section>


                        <section class="mb-5">
                            <div class="container-fluid">
                                <div class="row d-flex justify-content-center">

                                    {overview && overview.map((data) => (
                                        <div class="col-lg-2 mt-5">
                                            <Link to={`/what-we-do/${data?.category}`}>
                                                <div class="card--">
                                                    <div class="card__body__Diabetes hover_c">
                                                        <img src={`${process.env.REACT_APP_SERVER}/${data?.image}`} alt="" width="100%" />
                                                    </div>
                                                    <h5>{data?.category}</h5>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}


                                </div>
                            </div>
                        </section>

                        <section class="team" style={{ backgroundImage: lionbanner?.document ? `url(${process.env.REACT_APP_SERVER}/${lionbanner?.document})` : `url('../images/home-banner.jpg')` }}>
                            <div class="main__shadow_team mt-5 py-5">
                                <div class="container">
                                    <div class="center__view py-4">
                                        {/* <h1 class="text-white">{lionbanner?.heading} Come, be a Lion!</h1> */}
                                        <h1 class="text-white">{lionbanner?.heading}</h1>
                                        {/* <p class="text-white">Join your hand with us for a better life and future</p> */}
                                        <p class="text-white">{lionbanner?.subheading}</p>
                                        <a href={`${process.env.REACT_APP_SERVER}/${lionbanner?.image}`} class="btn__more" target={"_blank"} onClick={(e) => saveFile(e)}>Download form</a>
                                        {/* */}
                                    </div>
                                </div>
                            </div>
                        </section>


                        {(title?.is_active4 || (!title && others?.description2)) &&
                            <section class="upcoming__event">
                                <div class="background__event pt-5">
                                    <div class="container-fluid pt-5">
                                        <div class="row">
                                            <div class="col-lg-5">
                                                <div class="upcoming__event_heding">
                                                    <h1>{title?.title4 ? title.title4 : 'Join our upcoming events'}</h1>
                                                    <p>{others?.description2}</p>
                                                    <Link to="/events" class="btn__more">{others?.button1 ? others?.button1 : `Event Gallery`}</Link>
                                                </div>
                                            </div>


                                            <div class="col-lg-7">
                                                <div class="upcoming__event__image">
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            {Events && Events?.length === 0 ? <div class="event_home" style={{ fontSize: "22px", color: "#ffffff" }}>There are no active events currently, stay tuned for the upcoming events...</div> : <>
                                                                <div class="text__event">

                                                                    {Events && Events?.length > 0 && Events[0] && Events[0]?.heading ? <Link to={`/${Events[0] && Events[0]?.heading}/${Events[0] && Events[0]?.id}`} target="_blank" ><h2>{Events && Events[0] && Events[0]?.heading} </h2></Link>
                                                                        :
                                                                        <Link to='#'><h2>{Events && Events?.length > 0 && Events[0] && Events[0]?.heading} </h2></Link>
                                                                    }
                                                                    <p>{Events && Events?.length > 0 && Events[0] && Events[0]?.subheading}</p>
                                                                    <div class="time">
                                                                        <div class="icon">
                                                                            <i class="fa-solid fa-clock"></i>
                                                                        </div>
                                                                        <div class="text__time">
                                                                            {Events && Events?.length > 0 && Events[0] && Events[0]?.date}  ,     {Events && Events[0] && Events[0]?.startingTime}-  {Events && Events[0] && Events[0]?.endingTime}
                                                                        </div>
                                                                    </div>
                                                                    <div class="time">
                                                                        <div class="icon">
                                                                            <i class="fa-solid fa-location-dot"></i>
                                                                        </div>
                                                                        <div class="text__time">

                                                                            {Events && Events?.length > 0 && Events[0] && Events[0]?.address}
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <a href={`/${Events[0] && Events?.length > 0 && Events[0]?.heading}/${Events[0] && Events?.length > 0 && Events[0]?.id}`} target="_blank" className="btn__more">View more <i class="fa fa-chevron-right"></i></a>
                                                                    </div>
                                                                </div>
                                                            </>}
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="illu__image">
                                                                <img src="images/Group 8.png" alt="" width="100%" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </section>
                        }
                        {/* } */}
                        {(title?.is_active5 || (!title && others?.description1)) &&
                            <section class="our__partner mt-5">
                                <div class="container mt-5">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="our__partner__text">
                                                <h2>{title?.title5 ? title.title5 : 'Our Partners'}</h2>
                                                <p>{others?.description1}</p>
                                                <Link to="/sponsors/partner-with-us" class="btn__morett">{others?.button2 ? others?.button2 : 'Partner with us'}</Link>
                                            </div>

                                        </div>
                                        <div className="col-lg-1">

                                        </div>

                                        <div className="col-lg-4">
                                            <div class="image-for-ourpartner"><img src="images/Ellipse 20.png" alt="" /></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="our__partner__image">
                                                <div class="row">
                                                    <div class="col-lg-4">
                                                        <div class="logo__partner__image">
                                                            <img src="images/amd (2).png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="logo__partner__image">
                                                            <img src="images/Omise logo (1).png" alt="" />
                                                        </div>

                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="logo__partner__image">
                                                            <img src="images/Leaflet logo.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="logo__partner__image">
                                                            <img src="images/bbt.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="logo__partner__image">
                                                            <img src="images/jsf.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="logo__partner__image">
                                                            <img src="images/dl.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="logo__partner__image">
                                                            <img src="images/Quip logo.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="logo__partner__image">
                                                            <img src="images/SAS logo.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="logo__partner__image">
                                                            <img src="images/FOSSID logo.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </section>
                        }
                    </main>
                </>
            )
            }
        </>
    );
};

export default Home;