import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SEO from "../../components/seo";
import { getClubInfo, getLogoInfo } from "../../redux/action/club/club";
import { getEventDescription, getUpcomingEvent } from "../../redux/action/events/events";
import Loader from "../Loader/Loader";

const SpringFoodFest2023 = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { loading, eventDescription, Events, error, message } = useSelector((state) => state.event)
    const { loading: load, logo, info } = useSelector((state) => state.club)

    const data = Events?.find(o => o.id.toString() === id);
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    useEffect(() => {
        dispatch(getEventDescription(id));
        dispatch(getLogoInfo())
        dispatch(getUpcomingEvent())
        dispatch(getClubInfo())

    }, [])
    // console.log(Events)
    return (
        <>
            {loading || load ? (
                <Loader />
            ) : (
                <>
                    <section
                        title={`${data?.heading}`}
                        description=''
                        keywords=''
                    />

                    <div className="springFest">
                        <div className="block1">
                            <div className="logo">
                                <a href="/">
                                    <img src={`${process.env.REACT_APP_SERVER}/${logo?.image}`} alt="" />
                                </a>
                            </div>
                            <div className="header">
                                <h1>{`${data?.heading}`}</h1>
                                <h4>{`${data?.subheading}`}</h4>
                            </div>
                        </div>
                        {eventDescription?.image1 &&
                            <div className="block2">
                                {`${eventDescription?.image1}` && <img src={`${process.env.REACT_APP_SERVER}/${eventDescription?.image1}`} alt="#" />}
                                <div className="bannertextContainer">
                                    <div className="container">
                                        <div className="bannertext">
                                            <div class="by__line">{eventDescription?.heading}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {/* <div className="block7">
                            <div className="container shadow-donate">
                                <div className="row">
                                    <div className="col-md-7">
                                     <p>{eventDescription?.description9}</p>
                                        <h2>{eventDescription?.description10}</h2>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="row leftborder">
                                            <div className="col-md-4">
                                                <div className="qrcode">
                                                    <img src={`${process.env.REACT_APP_SERVER}/${eventDescription?.image4}`} alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <a href="#" target="_blank" className="donate" data-bs-toggle="modal" data-bs-target="#exampleModal-donate">
                                                    Donate now
                                                </a>
                                                <div class="modal fade donatemodal" id="exampleModal-donate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog modal-lg">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title text-center" id="exampleModalLabel">DONATE</h5>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <div className="container">
                                                                    <div className="row">
                                                                        <div className="col-lg-4 p-2">
                                                                            <div className="mail-to-donatemodal text-center">
                                                                                <p className="texts"> Please mail donation cheque to below mail address </p>
                                                                                <a className="texts" href={eventDescription?.Headings3 && eventDescription.Headings3} target={"_blank"}>{eventDescription?.Headings3}</a>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-4 p-2">
                                                                            <div className="scan-donate">
                                                                                <p className="texts">{eventDescription?.Headings4 ? eventDescription.Headings4 : 'Scan the venmo or code'}</p>
                                                                                <img src={`${process.env.REACT_APP_SERVER}/${eventDescription?.Images1}`} alt="" className="venmo" />
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-4 p-2">
                                                                            <div className="donate-app-zelle">
                                                                                <p className="texts">{eventDescription?.Headings5 ? eventDescription.Headings5 : 'Use zelle app'}</p>
                                                                                <img src={`${process.env.REACT_APP_SERVER}/${eventDescription?.Images2}`} alt="" className="zeel" />
                                                                                <p className="texts">
                                                                                    {eventDescription?.Headings6 ? eventDescription.Headings6 : 'Send Payment To'}: <br /> {eventDescription?.Headings7 ? eventDescription.Headings7 : 'Parsippany Lions Club'} <br></br>
                                                                                    {eventDescription?.Headings8 ? eventDescription.Headings8 : 'Mobile'}: {eventDescription?.Headings9 ? eventDescription.Headings9 : '862-579-8822'} </p>


                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {eventDescription?.registrationLink &&
                            <div className="block4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            {/* <p>Come out and join us for an exciting day filled with food, games, and entertainment.</p> */}
                                            {/* <h3>Let's extend our grateful support to those who rush in when others rush out!</h3> */}
                                            <p className="registrationText">{eventDescription?.description12}</p>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="row leftborder">
                                                <div className="col-md-4">

                                                </div>
                                                <div className="col-md-8 ">
                                                    <a href={`${eventDescription?.registrationLink ? eventDescription?.registrationLink : "#"}`} target="_blank" className="donateLink eventregister">
                                                        {eventDescription?.registrationButton ? eventDescription?.registrationButton : 'Register Now'}
                                                    </a>
                                                </div></div></div></div>
                                </div>
                            </div>
                        }

                        {eventDescription?.heading2 &&
                            <div className="block3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            {/* <h2>The Spring Food Festival - A gala event to honor Parsippany First Responders.</h2>
                                        <p>The Spring Food Festival is here, and it's bigger and better than ever! Join us on March
                                            25, 2023, at Central Middle School, as we celebrate our first responders in Parsippany.
                                            Inaugurated by Mayor James Barberio, along with the chiefs of first responders, this
                                            event is all about giving back to those who keep our community safe.</p>
                                        <p>Come hungry and indulge in a tantalizing selection of Italian, Indian, and Mexican
                                            cuisine. From savory to sweet, our food stalls will satisfy all your cravings. And don't
                                            forget to quench your thirst with refreshing beverages from the Leo Club.</p>
                                        <p>Looking for some fun and excitement? Try your luck at our raffle for a chance to win
                                            amazing prizes. And get ready to dance the day away to the infectious beats of the
                                            internationally acclaimed Arya Dance Academy.</p>
                                        <p>This event is all about bringing the community together, having fun, and supporting
                                            our heroes. So come out, show your support, and let's make a difference!
                                        </p> */}
                                            <h2>{eventDescription?.heading2}</h2>
                                            <p>{eventDescription?.description1}</p>
                                            <p>{eventDescription?.description2}</p>
                                            <p>{eventDescription?.description3}</p>
                                            <p>{eventDescription?.description4}</p>
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-5 center">
                                            {/* <img src="/images/event4/blockimage.png" alt="" className="blockimage" /> */}
                                            <img src={`${process.env.REACT_APP_SERVER}/${eventDescription?.image2}`} alt="" className="blockimage" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {eventDescription?.heading3 &&
                            <div className="block4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            {eventDescription?.video}

                                            {/* if video is not null or not empty then show the video otherwise show the image */
                                                eventDescription?.video === null || eventDescription?.video === "" ?
                                                    <img src={`${process.env.REACT_APP_SERVER}/${eventDescription?.image3}`} alt="" className="blockimage" />
                                                    :

                                                    <iframe height="315" src={`${eventDescription?.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                            }
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-5">
                                            {/* <h2>Live Entertainments</h2>
                                        <p>The Spring Food Fest includes Live music, fun games and dance performances by Arya International Dance Academy.</p>
                                        <p>Arya International, a renowned and leading South
                                            Asian Performing Arts Institute across the U.S is a
                                            charitable organization, dedicated to teaching
                                            South Asian dance techniques, music, singing, and
                                            acting to students of all ages.
                                        </p> */}
                                            <h2>
                                                {eventDescription?.heading3}
                                            </h2>
                                            <p>{eventDescription?.description5}</p>
                                            <p>{eventDescription?.description6}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className="block5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 first">
                                        <h2>SAVE THE DATE</h2>
                                        <p className="date uppercase">{data?.date}<br />{data?.startingTime}-{data?.endingTime}</p>
                                    </div>
                                    <div className="col-md-4 second">
                                        <h2>ADDRESS</h2>
                                        <p className="loc  uppercase">{data?.address}</p>
                                    </div>
                                    <div className="col-md-4 third">
                                        <h2>FOLLOW US ON</h2>
                                        <div>
                                            <a href={`${info?.instagram ? info.instagram : 'https://www.instagram.com/parsippanylionsclub/'}`} target={"_blank"} className="insta">PARSIPPANYLIONSCLUB</a><br />
                                            <a href={`${info?.facebook ? info.facebook : "https://www.facebook.com/profile.php?id=100089991851526"}`} target={"_blank"} className="facebook">PARSIPPANY LIONS CLUB NJ</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {eventDescription?.heading4 &&
                            <div className="block6">
                                <div className="container">
                                    <div className="row">

                                        <div className="col-md-5">
                                            {/* <h2>Live Music by the Lions</h2>
                                        <p>In addition to the fun and food-filled event, we will
                                            be having amazing singing talent in the house.
                                        </p>
                                        <p>Our Lions from New Jersey Artists Lions Club will be
                                            singing popular numbers from variety of artists to
                                            entertain the attendees, our guests and our First
                                            Responders</p> */}
                                            <h2>{eventDescription?.heading4}</h2>
                                            <p>{eventDescription?.description7}</p>
                                            <p>{eventDescription?.description8}</p>
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-6">
                                            <div className="bluebox">
                                                &nbsp;
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                        {/* <div className="block7">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <p>{eventDescription?.description9}</p>
                                        <h2>{eventDescription?.description10}</h2>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="row leftborder">
                                            <div className="col-md-4">
                                                <div className="qrcode">
                                                    <img src={`${process.env.REACT_APP_SERVER}/${eventDescription?.image4}`} alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <a href="#" target="_blank" className="donate">
                                                    Donate now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="block7">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-7">
                                        {/* <p>Come out and join us for an exciting day filled with food, games, and entertainment.</p> */}
                                        {/* <h3>Let's extend our grateful support to those who rush in when others rush out!</h3> */}
                                        <p>{eventDescription?.description9}</p>
                                        <h2 className="blockcolour">{eventDescription?.description10}</h2>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="row leftborder">
                                            <div className="col-md-4">
                                                <div className="qrcode">
                                                    <img src={`${process.env.REACT_APP_SERVER}/${eventDescription?.image4}`} alt=""></img>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <a href="#" target="_blank" className="donateLink eventdonate" data-bs-toggle="modal" data-bs-target="#exampleModal-donate">
                                                    DONATE NOW
                                                </a>
                                                <div class="modal fade donatemodal" id="exampleModal-donate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog modal-lg">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title text-center" id="exampleModalLabel">DONATE</h5>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <div className="container">
                                                                    <div className="row">
                                                                        <div className="col-lg-4 p-2">
                                                                            <div className="mail-to-donatemodal text-center">
                                                                                {/* <p> {eventDescription?.heading3 ? donate.heading3 : 'Please mail donation cheque to below mail address'} </p> */}
                                                                                <span className="modalp"> Please mail donation cheque to below mail address </span>
                                                                                {/* <a href={`mailto:${info?.data?.email}`} target={"_blank"}>{info?.data?.email}</a> */}
                                                                                <a href={eventDescription?.Headings3 && eventDescription.Headings3} target={"_blank"}>{eventDescription?.Headings3}</a>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-4 p-2">
                                                                            <div className="scan-donate">
                                                                                <span className="modalp">{eventDescription?.Headings4 ? eventDescription.Headings4 : 'Scan the venmo or code'}</span>
                                                                                <img src={`${process.env.REACT_APP_SERVER}/${eventDescription?.Images1}`} alt="" className="venmo modalImage" />
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-4 p-2">
                                                                            <div className="donate-app-zelle">
                                                                                <p className="texts">{eventDescription?.Headings5 ? eventDescription.Headings5 : 'Use zelle app'}</p>
                                                                                <img src={`${process.env.REACT_APP_SERVER}/${eventDescription?.Images2}`} alt="" className="zeel" />
                                                                                <p className="texts">
                                                                                    {eventDescription?.Headings6 ? eventDescription.Headings6 : 'Send Payment To'}: <br /> {eventDescription?.Headings7 ? eventDescription.Headings7 : 'Parsippany Lions Club'} <br></br>
                                                                                    {eventDescription?.Headings8 ? eventDescription.Headings8 : 'Mobile'}: {eventDescription?.Headings9 ? eventDescription.Headings9 : '862-579-8822'} </p>


                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block8">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8 left">
                                        <p>For Donations and Sponsorships: <a href={`mailto:${info?.email ? info.email : 'info@parsippanylionsclub.org'}`}><span>{`${info?.email ? info.email : 'info@parsippanylionsclub.org'}`}</span></a> </p>
                                    </div>
                                    <div className="col-md-4 right">
                                        <p>{`${info?.title ? info.title : 'PARSIPPANY LIONS CLUB'}`}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
            }
        </>
    );

};

export default SpringFoodFest2023;