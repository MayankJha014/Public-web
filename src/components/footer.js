import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Loader from "../pages/Loader/Loader";
import { getClubInfo } from "../redux/action/club/club";
import { getFooterInfo } from "../redux/action/Home/home";
import moment from "moment"
import { getDonate } from "../redux/action/others/other";

const Footer = () => {

    const dispatch = useDispatch()
    const { origin } = window.location
    // console.log(origin)
    let pathname = window.location.pathname;
    useEffect(() => {
        pathname = window.location.pathname;
    }, [window.location.pathname]);
    const data = isNaN(pathname.substring(pathname.lastIndexOf("/") + 1))
    // console.log(pathname)


    const { loading, info, logo, error } = useSelector((state) => state.club)
    const { loading: load, footer } = useSelector((state) => state.home)
    const { loading: loadOther, donate } = useSelector((state) => state.others)


    useEffect(() => {

        dispatch(getClubInfo())
        dispatch(getFooterInfo())
        dispatch(getDonate())
    }, [dispatch, error]);


    return (
        <>
            {loading || load || loadOther ? (
                <Loader />
            ) : (

                <>
                    {!data && pathname !== '/' ? <></> :
                        <>
                            <>
                                <section className="donate-section">
                                    <div className="shadow-donate">
                                        <div className="container py-5">
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <h2 className="donate-heading">{donate?.heading1 ? donate.heading1 : 'DONATE NOW'}</h2>
                                                    <p className="donate-text-content">{donate?.heading2 ? donate.heading2 : 'For Donate and Sponsorships:'} <span className="email-donate">{info?.data?.email}</span></p>
                                                </div>

                                                <div className="col-lg-4">
                                                    <div className="dontae-type-btn">
                                                        <a className="donate-btn" data-bs-toggle="modal" data-bs-target="#exampleModal-donate" >
                                                            {donate?.button ? donate.button : 'DONATE NOW'}
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
                                                                                        <p> {donate?.heading3 ? donate.heading3 : 'Please mail donation cheque to below mail address'} </p>
                                                                                        <a href={`mailto:${info?.data?.email}`} target={"_blank"}>{info?.data?.email}</a>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-lg-4 p-2">
                                                                                    <div className="scan-donate">
                                                                                        <p>{donate?.heading4 ? donate.heading4 : 'Scan the venmo or code'}</p>
                                                                                        {/* <img src="/images/scan-bar-code.png" alt="" className="venmo" /> */}
                                                                                        <img src={`${process.env.REACT_APP_SERVER}/${donate?.image1}`} alt="" className="venmo" />
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-lg-4 p-2">
                                                                                    <div className="donate-app-zelle">
                                                                                        <p>{donate?.heading5 ? donate.heading5 : 'Use zelle app'}</p>
                                                                                        {/* <img src="/images/zelle.png" alt="" className="zeel" /> */}
                                                                                        <img src={`${process.env.REACT_APP_SERVER}/${donate?.image2}`} alt="" className="zeel" />
                                                                                        <p>
                                                                                            {donate?.heading6 ? donate.heading6 : 'Send Payment To'}: <br /> {donate?.heading7 ? donate.heading7 : 'Parsippany Lions Club'} <br></br>
                                                                                            {donate?.heading8 ? donate.heading8 : 'Mobile'}: {donate?.heading9 ? donate.heading9 : '862-579-8822'} </p>


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
                                </section>
                                <footer>
                                    <div class="footer mt-5">
                                        <div class="container pt-5">
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <div class="footer__logo">
                                                        {/* <img src="images/Logo 2.png" alt="" /> */}
                                                        {/* <img src={logo ? logo.image : "/images/Logo-plc.png"} alt="" ></img> */}
                                                        <img src={`${process.env.REACT_APP_SERVER}/${logo?.image}`} alt="" ></img>
                                                    </div>
                                                    <div class="brand__text">
                                                        {footer?.description}
                                                    </div>
                                                    <Link to="/events/come-be-a-lion" class="btn__more buttone"> {footer?.button ? footer.button : `Come be a Lion`}</Link>
                                                </div>

                                                <div class="col-lg-2">
                                                    <div class="f__heading">
                                                        Links
                                                    </div>
                                                    <div class="link__name">
                                                        <ul>
                                                            <li><Link to="/what-we-do">What we do</Link></li>
                                                            <li><Link to="/about">About us</Link></li>
                                                            <li><Link to="/resources">Resources</Link></li>
                                                            <li><Link to="/contact">Contact us</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="f__heading">
                                                        Contact us
                                                    </div>
                                                    <div class="link__name">
                                                        <ul>
                                                            <li><span><i class="fa-solid fa-phone"></i></span>&nbsp; &nbsp;{info?.data?.number}</li>
                                                            <li><span><i class="fa-solid fa-envelope"></i></span>&nbsp; &nbsp;{info?.data?.email}</li>
                                                            <li><p className="footeraddress"><span><i class="fa-solid fa-location-dot"></i></span>&nbsp;
                                                                &nbsp;{info?.data?.address}</p></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="f__heading">
                                                        Connect with us
                                                    </div>
                                                    <div class="link__name">
                                                        <ul>
                                                            {info?.data?.facebook &&
                                                                <li><a href={info?.data?.facebook} target="_blank"><span><i class="fa-brands fa-facebook"></i></span>&nbsp;
                                                                    &nbsp;Facebook</a></li>}
                                                            {/* <li><a href="" target={"_blank"}><span><i class="fa-brands fa-twitter"></i></span>&nbsp; &nbsp;Twitter</a>
                                        </li> */}
                                                            {info?.data?.instagram && <li><a href={info?.data?.instagram} target={"_blank"}><span><i class="fa-brands fa-instagram"></i></span>&nbsp;
                                                                &nbsp;Instagram</a></li>}
                                                            {/* {info?.data?.twitter && <li><a href={info?.data?.twitter} target={"_blank"}><span><i class="fa-brands fa-twitter"></i></span>&nbsp;
                                                                &nbsp;Twitter</a></li>} */}

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container">
                                            <div class="linecopyrigth">
                                                {/* {footer?.copyright ? footer.copyright : `© 2023 parsippanylionsclub.org, All rights reserved | Parsippany lions club`} */}
                                                {`© ${moment().year()} ${origin && origin}, All rights reserved | ${logo?.title}`}
                                            </div>
                                        </div>
                                    </div>
                                </footer>

                            </>
                        </>}

                </>
            )}
        </>
    );
};

export default Footer;