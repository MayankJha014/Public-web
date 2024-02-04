import React, { useState, useEffect } from "react";
import SubMenu from '../components/submenu/events';
import Section_ComeBeaLion from '../components/section-come-be-a-lion';
import Section_BecomePartner from '../components/section-become-partner';
import HeaderLogo from "../components/headerlogo";
import SEO from "../components/seo";
import { getEventCategory, getUpcomingEvent } from "../redux/action/events/events";
import { useDispatch, useSelector } from "react-redux";
import { getDescriptionPoint } from "../redux/action/description/description";
import { getBannerInfo, getLionBannerInfo } from "../redux/action/banner/banner";
import Loader from "./Loader/Loader";
import { getTitleInfo } from "../redux/action/others/other";

const Events = () => {

    const dispatch = useDispatch()
    const [section, setsection] = useState("events");
    const [subsection, setsubsection] = useState("upcoming");


    const { loading, Events, EventCategory } = useSelector((state) => state.event)
    const { loading: load, description } = useSelector((state) => state.description)
    const { loading: loadBanner, banner, lionbanner } = useSelector((state) => state.banner)
    const { loading: loadTitle, title } = useSelector((state) => state.others)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        dispatch(getUpcomingEvent())
        dispatch(getEventCategory())
        dispatch(getLionBannerInfo())
        dispatch(getBannerInfo(section, subsection))
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
                        title='Events | Parsippany Lions Club'
                        description='The Parsippany Lions Club is a community-based organization that hosts and participates in various events throughout the year to raise awareness and funds to support our initiatives and programs.'
                        keywords='Parsippany Lions Club, Volunteer, Help, Events, Programs, Activities, Service camps, Humanity, Charity, Community service'
                    />
                    <main>
                        <section class="about__banner event" style={{ backgroundImage: banner?.image ? `url(${process.env.REACT_APP_SERVER}/${banner?.image})` : `url('../images/banner-events.jpg')` }}>
                            <div class="about__banner__bg">
                                <HeaderLogo />
                                <h1>{banner?.heading ? banner?.heading : `Events`}</h1>
                                <p>   Events /<span>  Upcoming Events</span></p>
                            </div>
                        </section>

                        <SubMenu activelink="events" />

                        <section class="overview pt-5">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12 px-5">

                                        <div class="col-lg-9">
                                            <div class="overview-heading-uper">
                                                {title?.title1 ? title.title1 : 'Upcoming Events'}
                                            </div>

                                            <div class="overview-byline-uper">
                                                {/* The Parsippany Lions Club is a community-based organization that hosts and participates in various events throughout the year to raise awareness and funds to support our initiatives and programs. */}
                                                {description?.description1}
                                            </div>
                                        </div>




                                    </div>
                                    {Events && Events.length === 0 ? <>
                                        <div class="col-lg-12 mt-5"><div class="inputgear">There are no active events currently, stay tuned for the upcoming events...</div></div>

                                    </> :
                                        <>
                                            {Events && Events.map((event, index) => (
                                                <div key={event.id} class="col-lg-12 px-5">
                                                    {/* <a href={`/${event.heading}/${event.id}`} target="_blank"> */}
                                                    {/* <a href={`${process.env.REACT_APP_SERVER}/${event?.document}`} target="_blank"> */}
                                                    {/* <div key={event.id} class="overview-card-box"> */}

                                                    <div class="overview-card-box"> <div class="image-overview"> {/* <img src="/images/event2-thumb.jpg" alt="" /> */} <a href={`${process.env.REACT_APP_SERVER}/${event?.document}`} target="_blank"> <img src={`${process.env.REACT_APP_SERVER}/${event.image}`} alt="" /> </a></div> <div class={`overview-content overviewbg-${index} fullwidth`}> <div class="overview-content-parag"> <div class="event-box-one"> <div class="eventbox-content"> <div class="overview-content-heading"> {event.heading} <p>{event?.subheading}</p> </div> <div class="overview-content-parag"> <div class="event-icon-dflex"> <div class="icon-event-overview"> <i class="fa-solid fa-clock"></i> </div> <div class="icon-event-overview"> {event.date} ,  {event.startingTime}- {event.endingTime} </div> </div> <div class="event-icon-dflex mt-3"> <div class="icon-event-overview"> <i class="fa-solid fa-location-dot"></i> </div> <div class="icon-event-overview"> {/* Livingston Community Center, 204 Hillside Ave, Livingston, NJ */} {event.address} </div> </div><a href={`/${event.heading}/${event.id}`} target="_blank" className="btn__moreeee">View more <i class="fa fa-chevron-right"></i>
                                                    </a>
                                                    </div> </div> </div> </div> </div> </div>
                                                    {/* <div class="overview-card-box"> <div class="image-overview"> <img src="/images/event2-thumb.jpg" alt="" /> <img src={`${process.env.REACT_APP_SERVER}/${event.image}`} alt="" /> </div> <div class={`overview-content overviewbg-${index} fullwidth`}> <div class="overview-content-parag"> <div class="event-box-one"> <div class="eventbox-content"> <div class="overview-content-heading"> {event.heading} <p>{event?.subheading}</p> </div> <div class="overview-content-parag"> <div class="event-icon-dflex"> <div class="icon-event-overview"> <i class="fa-solid fa-clock"></i> </div> <div class="icon-event-overview"> {event.date} ,  {event.startingTime}- {event.startingTime} </div> </div> <div class="event-icon-dflex mt-3"> <div class="icon-event-overview"> <i class="fa-solid fa-location-dot"></i> </div> <div class="icon-event-overview"> Livingston Community Center, 204 Hillside Ave, Livingston, NJ {event.address} </div> </div><a href={`/${event.heading}/${event.id}`} target="_blank" class="viewmore">View more <i class="fa fa-chevron-right"></i></a> </div> </div> </div> </div> </div> </div> */}
                                                    {/* </a> */}
                                                </div>))}
                                        </>
                                    }
                                </div>
                            </div>
                        </section>

                        <section class="mt-5">
                            <div class="container">
                                <div class="event-by-line mt-5">{description?.description5 ? description?.description5 : 'Some of the events we host include:'}</div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="row">

                                            {EventCategory && EventCategory.map((category, index) => (
                                                <div key={category.id} class="col-lg-6 px-4">
                                                    <div class="event-host-include">
                                                        <div class="event-image-host">
                                                            <img src={`${process.env.REACT_APP_SERVER}/${category.image}`} alt="" />
                                                        </div>

                                                        <div class="event-heading-host">
                                                            {category.heading}
                                                        </div>

                                                        <div class="event-content">
                                                            {category.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}


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
                                                    {description?.description2}
                                                    {/* We welcome anyone who is interested in getting involved in our events and making a difference in our community. If you're interested in volunteering or participating in one of our events, please contact us. Together, we can make a difference in the lives of those in need in our community.
                                                    Kindly check our events page frequently for the latest updates on upcoming events and campaigns. */}
                                                </b>
                                            </p>
                                            <p>
                                                <b>{description?.description3}</b>
                                                {/* <b>Kindly check our events page frequently for the latest updates on upcoming events and campaigns.</b> */}
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
            )
            }

        </>
    );
};

export default Events;