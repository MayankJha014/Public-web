import React, { useState, useEffect } from "react";
import SubMenu from '../../components/submenu/events';
import Section_ComeBeaLion from '../../components/section-come-be-a-lion';
import Section_BecomePartner from '../../components/section-become-partner';
import HeaderLogo from "../../components/headerlogo";
import SEO from "../../components/seo";
import { getDescriptionPoint } from "../../redux/action/description/description";
import { getAlbum, getAlbumImages } from "../../redux/action/events/events";
import { useDispatch, useSelector } from "react-redux";
import { getBannerInfo, getLionBannerInfo } from "../../redux/action/banner/banner";
import Loader from "../Loader/Loader";
import { getTitleInfo } from "../../redux/action/others/other";

const PhotoGallery = () => {

    const dispatch = useDispatch()



    const [id, setId] = useState(1);


    const [section, setsection] = useState("events");
    const [subsection, setsubsection] = useState("photogallery");

    const { loading, album, Images } = useSelector((state) => state.event)
    const { loading: load, description } = useSelector((state) => state.description)
    const { loading: loadBanner, banner, lionbanner } = useSelector((state) => state.banner)

    const { loading: loadTitle, title } = useSelector((state) => state.others)



    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    useEffect(() => {
        dispatch(getAlbum());
        dispatch(getAlbumImages(id))
        dispatch(getLionBannerInfo())
        dispatch(getBannerInfo(section, subsection))
        dispatch(getDescriptionPoint(section, subsection))
        dispatch(getTitleInfo(section))
    }, [dispatch, id]);

    return (
        <>
            {loading || load || loadBanner ? (
                <Loader />
            ) : (

                <>
                    <SEO
                        title='Photo Gallery | Parsippany Lions Club'
                        description='The Parsippany Lions Club, Photo Gallery page features pictures from our events and initiatives, including vision screenings, eye exams, community clean-ups, food drives, fundraisers, and other events.'
                        keywords='Parsippany Lions Club, Volunteer, Photo Gallery, Photos, Events, Glimpse, Memories, Help, Humanity, Charity, Community service.'
                    />
                    <main>
                        <section class="about__banner gallery" style={{ backgroundImage: banner?.image ? `url(${process.env.REACT_APP_SERVER}/${banner.image})` : `url('../images/banner-events.jpg')` }}>
                            <div class="about__banner__bg">
                                <HeaderLogo />
                                <h1>{banner?.heading ? banner?.heading : `Events`}</h1>
                                <p>   Events /<span>  Photo Gallery</span></p>
                            </div>
                        </section>

                        <SubMenu activelink="photogallery" />

                        <section class="pt-5">
                            <div class="container px-5">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="photo-gallery-event-heading">
                                            {title?.title2 ? title.title2 : 'Photo Gallery'}
                                        </div>
                                        <div class="photo-gallery-event-by-line">

                                            <p>{description?.description1}</p>
                                            <p>{description?.description2}</p>
                                            <p>{description?.description3}</p>
                                            <p>{description?.description4}</p>
                                            <p>{description?.description5}</p>
                                        </div>
                                        <div class="row">
                                            {album && album.map((gallery) => (
                                                <div class="col-lg-6 mt-5">
                                                    <a type="button" class="equlee-tools" data-bs-toggle="modal" data-bs-target="#exampleModal01">

                                                        {/* <div class="event-photo-gallery-box" onClick={() => setId(gallery.id)}> */}
                                                        <div class="event-photo-gallery-box" onClick={() => setId(gallery.data.id)}>
                                                            <div class="event-photo-gallery-image">
                                                                <img src={`${process.env.REACT_APP_SERVER}/${gallery.data.image}`} alt="" />
                                                            </div>
                                                            <div class="event-content-photo-gallery">
                                                                <div class="photo-gallery-event-text">
                                                                    {gallery.data.heading}
                                                                    <br /> <span>{gallery.data.date}</span>
                                                                </div>
                                                                <div class="photo-gallery-event-text-style">
                                                                    {/* <a href="" class="event-btn01">11 Photos</a> */}
                                                                    <a href="" class="event-btn01">{gallery.noOfPhotos} Photos</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <div class="modal fade" id="exampleModal01" tabIndex={"-1"} aria-labelledby="exampleModalLabel01" aria-hidden="true" >
                                                        <div class="modal-dialog modal-xl">
                                                            <div class="modal-content">
                                                                <div class="modal-body">
                                                                    <div id="carouselExample1" class="carousel slide" >
                                                                        <div class="carousel-inner">
                                                                            {Images && Images.length == 0 && (<div class="carousel-item active">
                                                                                <img src="/images/event1/img1.jpg" class="d-block w-100" alt="" />
                                                                            </div>)}
                                                                            {Images && Images.length !== 0 && (<div class="carousel-item active">
                                                                                <img src={`${process.env.REACT_APP_SERVER}/${Images[0].image}`} class="d-block w-100" alt="" />
                                                                                {/* <img src={image.image} class="d-block w-100" alt="" /> */}
                                                                            </div>)}

                                                                            {Images && Images.map((images, index) => (
                                                                                (index !== 0 &&
                                                                                    <div key={images.id} class="carousel-item ">
                                                                                        <img src={`${process.env.REACT_APP_SERVER}/${images.image}`} class="d-block w-100" alt="" />
                                                                                        <p class="event-image-text">{images.heading}</p>
                                                                                        {/* <img src={image.image} class="d-block w-100" alt="" /> */}
                                                                                    </div>
                                                                                )))}
                                                                            {/* <div class="carousel-item">
                                                                                <img src="/images/event1/img3.jpg" class="d-block w-100" alt="" />
                                                                            </div>
                                                                            <div class="carousel-item">
                                                                                <img src="/images/event1/img4.jpg" class="d-block w-100" alt="" />
                                                                            </div>
                                                                            <div class="carousel-item">
                                                                                <img src="/images/event1/img5.jpg" class="d-block w-100" alt="" />
                                                                            </div>
                                                                            <div class="carousel-item">
                                                                                <img src="/images/event1/img6.jpg" class="d-block w-100" alt="" />
                                                                            </div>
                                                                            <div class="carousel-item">
                                                                                <img src="/images/event1/img7.jpg" class="d-block w-100" alt="" />
                                                                            </div>
                                                                            <div class="carousel-item">
                                                                                <img src="/images/event1/img8.jpg" class="d-block w-100" alt="" />
                                                                            </div>
                                                                            <div class="carousel-item">
                                                                                <img src="/images/event1/img9.jpg" class="d-block w-100" alt="" />
                                                                            </div> */}
                                                                        </div>

                                                                    </div>
                                                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample1" data-bs-slide="prev">
                                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample1" data-bs-slide="next">
                                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Next</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                            {/* <div class="col-lg-6">
                                                <a type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal02">

                                                    <div class="event-photo-gallery-box">
                                                        <div class="event-photo-gallery-image">
                                                            <img src="/images/event2/thumb.jpg" alt="" />
                                                        </div>
                                                        <div class="event-content-photo-gallery">
                                                            <div class="photo-gallery-event-text">
                                                                Create Cards for Sr. Barnabas Hospital Patients
                                                                <br /> <span>11 Dec 2022</span>
                                                            </div>
                                                            <div class="photo-gallery-event-text-style">
                                                                <a href="" class="event-btn01">9 Photos</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="modal fade" id="exampleModal02" tabIndex={"-1"} aria-labelledby="exampleModalLabel02" aria-hidden="true">
                                                    <div class="modal-dialog modal-xl">
                                                        <div class="modal-content">
                                                            <div class="modal-body">
                                                                <div id="carouselExample2" class="carousel slide">
                                                                    <div class="carousel-inner">
                                                                        <div class="carousel-item active">
                                                                            <img src="/images/event2/img1.jpg" class="d-block w-100" alt="" />
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="/images/event2/img2.jpg" class="d-block w-100" alt="" />
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="/images/event2/img3.jpg" class="d-block w-100" alt="" />
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="/images/event2/img4.jpg" class="d-block w-100" alt="" />
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="/images/event2/img5.jpg" class="d-block w-100" alt="" />
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="/images/event2/img6.jpg" class="d-block w-100" alt="" />
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="/images/event2/img7.jpg" class="d-block w-100" alt="" />
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="/images/event2/img8.jpg" class="d-block w-100" alt="" />
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="/images/event2/img9.jpg" class="d-block w-100" alt="" />
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
                                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                    <span class="visually-hidden">Previous</span>
                                                                </button>
                                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
                                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                                    <span class="visually-hidden">Next</span>
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div> */}
                                            {/* <div class="col-lg-6">
                                        <a type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal02">
                                            <div class="event-photo-gallery-box">
                                                <div class="event-photo-gallery-image">
                                                    <img src="/images/gallery2.jpg" alt="" />
                                                </div>
                                                <div class="event-content-photo-gallery">
                                                    <div class="photo-gallery-event-text">
                                                        Clean Environment
                                                        <br /> <span>7th June 2020</span>
                                                    </div>
                                                    <div class="photo-gallery-event-text-style">
                                                        <a href="" class="event-btn02">53 Photos</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>

                                        <div class="modal fade" id="exampleModal02" tabIndex={"-1"} aria-labelledby="exampleModalLabel02" aria-hidden="true">
                                            <div class="modal-dialog modal-xl">
                                                <div class="modal-content">
                                                    <div class="modal-body">
                                                        <img src="/images/gallery2.jpg" alt="" width="100%" height="100%" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-lg-6">
                                        <a type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal03">
                                            <div class="event-photo-gallery-box">
                                                <div class="event-photo-gallery-image">
                                                    <img src="/images/gallery3.jpg" alt="" />
                                                </div>
                                                <div class="event-content-photo-gallery">
                                                    <div class="photo-gallery-event-text">
                                                        Medical Camp
                                                        <br /> <span>7th June 2020</span>
                                                    </div>
                                                    <div class="photo-gallery-event-text-style">
                                                        <a href="" class="event-btn03">53 Photos</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>

                                        <div class="modal fade" id="exampleModal03" tabIndex={"-1"} aria-labelledby="exampleModalLabel03" aria-hidden="true">
                                            <div class="modal-dialog modal-xl">
                                                <div class="modal-content">
                                                    <div class="modal-body">
                                                        <img src="/images/gallery3.jpg" alt="" width="100%" height="100%" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">

                                        <a type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal04">
                                            <div class="event-photo-gallery-box">
                                                <div class="event-photo-gallery-image">
                                                    <img src="/images/gallery4.jpg" alt="" />
                                                </div>
                                                <div class="event-content-photo-gallery">
                                                    <div class="photo-gallery-event-text">
                                                        Clean Environment
                                                        <br /> <span>7th June 2020</span>
                                                    </div>
                                                    <div class="photo-gallery-event-text-style">
                                                        <a href="" class="event-btn04">53 Photos</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>

                                        <div class="modal fade" id="exampleModal04" tabIndex={"-1"} aria-labelledby="exampleModalLabel04" aria-hidden="true">
                                            <div class="modal-dialog modal-xl">
                                                <div class="modal-content">
                                                    <div class="modal-body">
                                                        <img src="/images/gallery4.jpg" alt="" width="100%" height="100%" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
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

export default PhotoGallery;