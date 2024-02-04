import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SubMenu from '../../components/submenu/sponsors';
import Section_ComeBeaLion from '../../components/section-come-be-a-lion';
import Section_BecomePartner from '../../components/section-become-partner';
import HeaderLogo from "../../components/headerlogo";
import SEO from "../../components/seo";
import { Carousel } from '@trendyol-js/react-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getGlobalSponserPoint, getLocalSponserPoint } from "../../redux/action/sponsers/sponser";
import { getBannerInfo, getTitleInfo } from "../../redux/action/others/other";
import { getDescriptionPoint } from "../../redux/action/description/description";
import { getLionBannerInfo } from "../../redux/action/banner/banner";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const LocalSponsors = () => {
    const [section, setsection] = useState("sponser");
    const [subsection, setsubsection] = useState("local");

    const { loading, sponser, localsponser } = useSelector((state) => state.sponser)
    const { loading: load, description } = useSelector((state) => state.description)
    const { loading: loadBanner, banner, lionbanner } = useSelector((state) => state.banner)
    const { loading: loadTitle, title } = useSelector((state) => state.others)

    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    useEffect(() => {
        dispatch(getGlobalSponserPoint())
        dispatch(getLocalSponserPoint())
        dispatch(getBannerInfo(section, subsection))
        dispatch(getDescriptionPoint(section, subsection))
        dispatch(getLionBannerInfo())
        dispatch(getTitleInfo(section))
    }, [dispatch]);
    return (
        <>
            {/* {loading || load || loadBanner || loadTitle ? ( */}
            {loading ? (
                <Loader />
            ) : (
                <>
                    <SEO
                        title='Local Sponsors | Parsippany Lions Club'
                        description='The Parsippany Lions Club, Our global sponsors provide vital support through financial contributions, in-kind donations, and volunteer support.'
                        keywords='Parsippany Lions Club, Volunteer, global sponsors, financial support, fund raiser, donation camps, donations, Help, Humanity, Charity, Community service.'
                    />
                    {/* <Header activelink='sponsors' /> */}
                    <main>
                        <section class="about__banner globalsponsor" style={{ backgroundImage: banner?.image && `url(${process.env.REACT_APP_SERVER}/${banner?.image})` }} >
                            <div class="about__banner__bg">
                                <HeaderLogo />

                                <h1>{banner?.heading ? banner?.heading : `Local Sponser`}</h1>

                                <p>  Sponsors / <span>  Local Sponsors</span></p>
                            </div>
                        </section>

                        <SubMenu activelink="localsponsors" />

                        <section className="pt-5">
                            <div className="container px-5">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="event-come-be-a-loin-heading">
                                            {title?.title4 ? title.title4 : 'Local Sponsor'}
                                            {/* {title?.title4 ? title.title4 : 'Local Sponsor'} */}
                                        </div>
                                        <div className="event-come-be-a-text">
                                            {/* <p>We are proud to serve the community of Parsippany, NJ, and we are grateful for the support of our local sponsors who help us to continue our mission of serving those in need.</p> */}
                                            {/* <p>Our local sponsors are businesses and organizations within the Parsippany community who believe in the mission of the Lions Club and are committed to supporting our efforts. They generously contribute to our fundraising events, donate goods and services, and offer their time and expertise to help us carry out our mission.</p> */}
                                            <p>{description?.description1}</p>
                                            <p>{description?.description2}</p>
                                            <p className="pt-5"><b>{description?.description4 ? description.description4 : 'We would like to take this opportunity to recognize our local sponsors and express our appreciation for their support:'}</b> </p>
                                            {/* <p><b>Patel Brothers</b> is a grocery store chain that specializes in South Asian foods and spices, offering a wide range of products from India, Pakistan, and other countries in the region.</p>
                                            <p><b>Rauchberg Dental Group</b> is a dental practice that provides a range of services including preventative care, restorative dentistry, cosmetic dentistry, and orthodontics.</p>
                                            <p><b>C2 Education</b> is a tutoring and test preparation service that offers customized programs for students of all ages and abilities, including SAT/ACT prep, college admissions counseling, and subject-specific tutoring.</p>
                                            <p><b>Kumon</b> is a learning center that offers individualized math and reading programs for students from pre-K to high school, with the goal of developing strong academic skills and a love of learning.</p>
                                            <p><b>Buffalo Wild Wings</b> is a sports bar and restaurant chain that offers a variety of wings, burgers, and other pub-style fare, along with a selection of beers and other beverages.</p>
                                            <p><b>Provident Bank</b> is a community bank that provides a range of financial services to individuals and businesses in New Jersey and Pennsylvania, including checking and savings accounts, loans, and investment services.</p>
                                            <p><b>New York Life</b> is a life insurance and financial services company that offers a range of products and services designed to help individuals and businesses achieve their financial goals and plan for the future.</p>
                                            <p><b>First Bank</b> is a community bank that offers a range of personal and business banking services, including checking and savings accounts, loans, and online banking</p> */}
                                            {localsponser && localsponser?.map((data, index) => (
                                                <p key={data.id}><b>{data?.description1}</b>{`${" "} ${data?.description2}`}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>



                        <div className="container mt-5">
                            <Slider {...settings}>
                                {localsponser && localsponser?.map((data, index) => (
                                    <div key={data.id}>
                                        <div className="logo-tobrand">
                                            <a href={`${data.url}`} target="_blank">
                                                <img src={`${process.env.REACT_APP_SERVER}/${data.image}`} alt="" className="d-block w-100" />
                                            </a>

                                        </div>
                                    </div>
                                ))}



                            </Slider>
                        </div>


                        {/* <div className="container mt-5">
                            <Slider {...settings}>
                                <div>
                                    <div className="logo-tobrand">
                                        <a href="https://www.patelbros.com/" target="_blank">
                                            <img src="/images/logo/1.png" alt="" className="d-block w-100" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-tobrand">
                                        <a href="https://www.patelbros.com/" target="_blank">
                                            <img src="/images/logo/2.png" alt="" className="d-block w-100" />
                                        </a>
                                    </div>
                                </div>


                                <div>
                                    <div className="logo-tobrand">
                                        <a href="https://www.patelbros.com/" target="_blank">
                                            <img src="/images/logo/3.png" alt="" className="d-block w-100" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-tobrand">
                                        <a href="https://www.patelbros.com/" target="_blank">
                                            <img src="/images/logo/4.png" alt="" className="d-block w-100" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-tobrand">
                                        <a href="https://www.patelbros.com/" target="_blank">
                                            <img src="/images/logo/5.png" alt="" className="d-block w-100" />
                                        </a>
                                    </div>
                                </div>

                            </Slider>
                        </div> */}



                        <Section_ComeBeaLion detail={lionbanner} />
                        <Section_BecomePartner />
                    </main>
                    {/* <Footer /> */}
                </>
            )
            }
        </>
    );
};
export default LocalSponsors;