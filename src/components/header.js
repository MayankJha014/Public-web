import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loader from "../pages/Loader/Loader";
import { getLogoInfo } from "../redux/action/club/club";
import { getIsActive } from "../redux/action/others/other";
import { getActive, getTitle } from "../redux/action/whatwedo/whatwedo";

const Header = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, logo, error } = useSelector((state) => state.club);
  const {
    loading: load,
    title,
    active: Active,
  } = useSelector((state) => state.whatwedo);
  const { loading: loadActive, active } = useSelector((state) => state.others);
  let pathname = window.location.pathname;
  useEffect(() => {
    pathname = window.location.pathname;
  }, [window.location.pathname]);
  const data = isNaN(pathname.substring(pathname.lastIndexOf("/") + 1));
  // console.log(pathname)
  const resourceActive = active?.find((o) => o.section === "resource");
  const aboutActive = active?.find((o) => o.section === "about");
  const whatwedoActive = active?.find((o) => o.section === "whatwedo");
  const sponsersActive = active?.find((o) => o.section === "sponser");
  const eventsActive = active?.find((o) => o.section === "events");
  // console.log(title)

  // console.log(Active[0])
  // console.log(title)
  useEffect(() => {
    dispatch(getTitle());
    dispatch(getActive());
    dispatch(getLogoInfo());
    dispatch(getIsActive());
  }, [dispatch, error]);

  return (
    <>
      {loading || load || loadActive ? (
        <Loader />
      ) : (
        <>
          {!data && pathname !== "/" ? (
            <></>
          ) : (
            <>
              <header class="">
                <nav class="navbar navbar-expand-lg">
                  <div class="container-fluid p-0">
                    <Link class="navbar-brand" to="/">
                      {/* <img src="/images/Logo-plc.png" alt="" className="respon"></img> */}
                      {/* <img src={logo ? logo.image : "/images/Logo-plc.png"} alt="" className="respon"></img> */}
                      <img
                        src={
                          logo?.image
                            ? `${process.env.REACT_APP_SERVER}/${logo.image}`
                            : "/images/Logo-plc.png"
                        }
                        alt=""
                        className="respon"
                      ></img>
                      {/* <h1>Parsippany Lions club</h1> */}
                    </Link>

                    <button
                      class="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span class="navbar-toggler-icon"></span>
                    </button>

                    <div
                      class="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 desktop">
                        <li class="nav-item dropbtn">
                          <Link
                            class="nav-link nav__link"
                            aria-current="page"
                            to="/"
                          >
                            Home
                          </Link>
                        </li>
                        <li class="nav-item dropbtn">
                          <Link
                            class="nav-link nav__link"
                            aria-current="page"
                            to="/"
                          >
                            About
                          </Link>
                        </li>
                        <li class="nav-item dropbtn">
                          {aboutActive?.is_active ? (
                            <Link
                              class="nav-link nav__link"
                              to="/about"
                              className={`${
                                pathname.match("/about")
                                  ? "nav-link nav__link activelink"
                                  : "nav-link nav__link"
                              }`}
                            >
                              {aboutActive?.title1
                                ? aboutActive.title1
                                : "About"}{" "}
                            </Link>
                          ) : (
                            <>
                              {" "}
                              {aboutActive?.is_active4 && (
                                <Link
                                  class="nav-link nav__link"
                                  to="/about/mission"
                                  className={`${
                                    pathname.match("/about/mission")
                                      ? "nav-link nav__link activelink"
                                      : "nav-link nav__link"
                                  }`}
                                >
                                  {aboutActive?.title4
                                    ? aboutActive.title4
                                    : "Goal & Mission"}{" "}
                                </Link>
                              )}
                            </>
                          )}{" "}
                          <ul class="dropdown-menus">
                            {aboutActive?.is_active && (
                              <li>
                                <Link to="/about">
                                  {aboutActive?.title1
                                    ? aboutActive.title1
                                    : "Overview"}
                                </Link>
                              </li>
                            )}
                            {/* <li><Link to="/about/our-team">Our Team</Link></li> */}
                            {aboutActive?.is_active4 && (
                              <li>
                                <Link to="/about/mission">
                                  {aboutActive?.title4
                                    ? aboutActive.title4
                                    : "Goal & Mission"}
                                </Link>
                              </li>
                            )}
                            {!aboutActive && (
                              <li>
                                <Link to="/about">Overview</Link>
                              </li>
                            )}
                            {!aboutActive && (
                              <li>
                                <Link to="/about/mission">Goal & Mission</Link>
                              </li>
                            )}
                            <li>
                              <Link to="/what-we-do">What We Do</Link>
                            </li>
                            <li>
                              <Link to="/sponsors">Sponsors</Link>
                            </li>
                            {/* <li><Link to="/about/testimonials">Testimonials</Link></li>                                        */}
                          </ul>
                        </li>
                        <li class="nav-item dropbtn">
                          <Link
                            class="nav-link nav__link"
                            to="/what-we-do"
                            className={`${
                              pathname.match("/what-we-do")
                                ? "nav-link nav__link activelink"
                                : "nav-link nav__link"
                            }`}
                          >
                            What we do{" "}
                          </Link>
                          <ul class="dropdown-menus hello">
                            {whatwedoActive?.is_active && (
                              <li>
                                <Link to="/what-we-do">
                                  {whatwedoActive?.title1
                                    ? whatwedoActive.title1
                                    : "Overview"}
                                </Link>
                              </li>
                            )}
                            {!whatwedoActive && (
                              <li>
                                <Link to="/what-we-do">Overview</Link>
                              </li>
                            )}
                            {title &&
                              Active &&
                              title.map((menu, index) => (
                                // (menu.is_active && <li><Link to={`/what-we-do/${menu.category}`}>{menu.category}</Link> </li>)
                                <li>
                                  {Active[index] && (
                                    <Link to={`/what-we-do/${menu.category}`}>
                                      {menu.category}
                                    </Link>
                                  )}
                                </li>
                              ))}
                            {/* <li><Link to="/what-we-do/diabetes">Diabetes</Link></li>
                                                <li><Link to="/what-we-do/hunger">Hunger</Link></li>
                                                <li><Link to="/what-we-do/environment">Environment</Link></li>
                                                <li><Link to="/what-we-do/childhood-cancer">Child Cancer</Link></li> */}
                          </ul>
                        </li>
                        <li class="nav-item dropbtn">
                          <Link
                            class="nav-link nav__link"
                            to="/events/come-be-a-lion"
                          >
                            Incubation
                          </Link>
                        </li>
                        <li class="nav-item dropbtn">
                          <Link
                            class="nav-link nav__link"
                            to="/what-we-do"
                            className={`${
                              pathname.match("/what-we-do")
                                ? "nav-link nav__link activelink"
                                : "nav-link nav__link"
                            }`}
                          >
                            Events{" "}
                          </Link>
                        </li>
                        <li class="nav-item dropbtn">
                          {eventsActive?.is_active ? (
                            <Link
                              class="nav-link nav__link"
                              to="/events"
                              className={`${
                                pathname.match("/events")
                                  ? "nav-link nav__link activelink"
                                  : "nav-link nav__link"
                              }`}
                            >
                              {eventsActive?.title1
                                ? eventsActive.title1
                                : "Events"}{" "}
                            </Link>
                          ) : (
                            <>
                              {eventsActive?.is_active2 ? (
                                <Link
                                  class="nav-link nav__link"
                                  to="/events/photo-gallery"
                                  className={`${
                                    pathname.match("/events/photo-gallery")
                                      ? "nav-link nav__link activelink"
                                      : "nav-link nav__link"
                                  }`}
                                >
                                  {eventsActive?.title2
                                    ? eventsActive.title2
                                    : "Photo Gallery"}{" "}
                                </Link>
                              ) : (
                                <>
                                  {eventsActive?.is_active3 && (
                                    <Link
                                      class="nav-link nav__link"
                                      to="/events/come-be-a-lion"
                                      className={`${
                                        pathname.match("/events/come-be-a-lion")
                                          ? "nav-link nav__link activelink"
                                          : "nav-link nav__link"
                                      }`}
                                    >
                                      {eventsActive?.title3
                                        ? eventsActive.title3
                                        : "Come Be a Lion"}{" "}
                                    </Link>
                                  )}{" "}
                                </>
                              )}
                            </>
                          )}{" "}
                          <ul class="dropdown-menus">
                            {eventsActive?.is_active && (
                              <li>
                                <Link to="/events">
                                  {eventsActive?.title1
                                    ? eventsActive.title1
                                    : "Events"}
                                </Link>
                              </li>
                            )}
                            {eventsActive?.is_active2 && (
                              <li>
                                <Link to="/events/photo-gallery">
                                  {eventsActive?.title2
                                    ? eventsActive.title2
                                    : "Photo Gallery"}
                                </Link>
                              </li>
                            )}
                            {eventsActive?.is_active3 && (
                              <li>
                                <Link to="/events/come-be-a-lion">
                                  {eventsActive?.title3
                                    ? eventsActive.title3
                                    : "Come Be a Lion"}
                                </Link>
                              </li>
                            )}
                            {!eventsActive && (
                              <>
                                {" "}
                                <li>
                                  <Link to="/events">Events</Link>
                                </li>
                                <li>
                                  <Link to="/events/photo-gallery">
                                    Photo Gallery
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/events/come-be-a-lion">
                                    Come Be a Lion
                                  </Link>
                                </li>
                              </>
                            )}
                          </ul>
                        </li>
                        <li class="nav-item dropbtn">
                          <Link
                            class="nav-link nav__link"
                            to="/resources"
                            className={`${
                              pathname.match("/resources")
                                ? "nav-link nav__link activelink"
                                : "nav-link nav__link"
                            }`}
                          >
                            Resources{" "}
                          </Link>
                          {/* {resourceActive?.is_active ? (
                            <Link
                              class="nav-link nav__link"
                              to="/resources"
                              className={`${
                                pathname.match("/resources")
                                  ? "nav-link nav__link activelink"
                                  : "nav-link nav__link"
                              }`}
                            >
                              {resourceActive?.title1
                                ? resourceActive.title1
                                : "Resources"}{" "}
                            </Link>
                          ) : (
                            <>
                              {resourceActive?.is_active2 ? (
                                <Link
                                  class="nav-link nav__link"
                                  to="/resources/operational-resources"
                                  className={`${
                                    pathname.match(
                                      "/resources/operational-resources"
                                    )
                                      ? "nav-link nav__link activelink"
                                      : "nav-link nav__link"
                                  }`}
                                >
                                  {resourceActive?.title2
                                    ? resourceActive.title2
                                    : "Operational Resources"}{" "}
                                </Link>
                              ) : (
                                <>
                                  {resourceActive?.is_active3 && (
                                    <Link
                                      class="nav-link nav__link"
                                      to="/resources/collaterals"
                                      className={`${
                                        pathname.match("/resources/collaterals")
                                          ? "nav-link nav__link activelink"
                                          : "nav-link nav__link"
                                      }`}
                                    >
                                      {resourceActive?.title3
                                        ? resourceActive.title3
                                        : "Collaterals"}
                                    </Link>
                                  )}{" "}
                                </>
                              )}
                            </>
                          )} */}
                          <ul class="dropdown-menus">
                            {resourceActive?.is_active && (
                              <li>
                                <Link to="/resources">
                                  {resourceActive?.title1
                                    ? resourceActive.title1
                                    : "Overview"}
                                </Link>
                              </li>
                            )}
                            {resourceActive?.is_active2 && (
                              <li>
                                <Link to="/resources/operational-resources">
                                  {resourceActive?.title2
                                    ? resourceActive.title2
                                    : "Operational Resources"}
                                </Link>
                              </li>
                            )}
                            {resourceActive?.is_active3 && (
                              <li>
                                <Link to="/resources/collaterals">
                                  {resourceActive?.title3
                                    ? resourceActive.title3
                                    : "Collaterals"}
                                </Link>
                              </li>
                            )}
                            {/* {!resourceActive && (
                              <>
                                {" "}
                                <li>
                                  <Link to="/resources">Overview</Link>
                                </li>
                                <li>
                                  <Link to="/resources/operational-resources">
                                    Operational Resources
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/resources/collaterals">
                                    Collaterals
                                  </Link>
                                </li>{" "}
                              </>
                            )} */}
                          </ul>
                        </li>
                        <li class="nav-item dropbtn">
                          <Link
                            class="nav-link nav__link"
                            to="/sponsors"
                            className={`${
                              pathname.match("/sponsors")
                                ? "nav-link nav__link activelink"
                                : "nav-link nav__link"
                            }`}
                          >
                            Sponsors{" "}
                          </Link>
                          {sponsersActive?.is_active ? (
                            <Link
                              class="nav-link nav__link"
                              to="/sponsors"
                              className={`${
                                pathname.match("/sponsors")
                                  ? "nav-link nav__link activelink"
                                  : "nav-link nav__link"
                              }`}
                            >
                              {sponsersActive?.title1
                                ? sponsersActive.title1
                                : "Overview"}
                            </Link>
                          ) : (
                            <>
                              {sponsersActive?.is_active2 ? (
                                <Link
                                  class="nav-link nav__link"
                                  to="/sponsors/global-sponsors"
                                  className={`${
                                    pathname.match("/sponsors/global-sponsors")
                                      ? "nav-link nav__link activelink"
                                      : "nav-link nav__link"
                                  }`}
                                >
                                  {sponsersActive?.title2
                                    ? sponsersActive.title2
                                    : "Global Sponsors"}{" "}
                                </Link>
                              ) : (
                                <>
                                  {sponsersActive?.is_active3 ? (
                                    <Link
                                      class="nav-link nav__link"
                                      to="/sponsors/partner-with-us"
                                      className={`${
                                        pathname.match(
                                          "/sponsors/partner-with-us"
                                        )
                                          ? "nav-link nav__link activelink"
                                          : "nav-link nav__link"
                                      }`}
                                    >
                                      {sponsersActive?.title3
                                        ? sponsersActive.title3
                                        : "Partner with us"}{" "}
                                    </Link>
                                  ) : (
                                    <>
                                      {sponsersActive?.is_active4 && (
                                        <Link
                                          class="nav-link nav__link"
                                          to="/sponsors/local-sponsors"
                                          className={`${
                                            pathname.match(
                                              "/sponsors/local-sponsors"
                                            )
                                              ? "nav-link nav__link activelink"
                                              : "nav-link nav__link"
                                          }`}
                                        >
                                          {sponsersActive?.title4
                                            ? sponsersActive.title4
                                            : "Local Sponsors"}{" "}
                                        </Link>
                                      )}
                                    </>
                                  )}{" "}
                                </>
                              )}
                            </>
                          )}
                          <ul class="dropdown-menus">
                            {sponsersActive?.is_active && (
                              <li>
                                <Link to="/sponsors">
                                  {sponsersActive?.title1
                                    ? sponsersActive.title1
                                    : "Overview"}
                                </Link>
                              </li>
                            )}
                            {sponsersActive?.is_active2 && (
                              <li>
                                <Link to="/sponsors/global-sponsors">
                                  {sponsersActive?.title2
                                    ? sponsersActive.title2
                                    : "Global Sponsors"}
                                </Link>
                              </li>
                            )}
                            {sponsersActive?.is_active4 && (
                              <li>
                                <Link to="/sponsors/local-sponsors">
                                  {sponsersActive?.title4
                                    ? sponsersActive.title4
                                    : "Local Sponsors"}
                                </Link>
                              </li>
                            )}
                            {sponsersActive?.is_active3 && (
                              <li>
                                <Link to="/sponsors/partner-with-us">
                                  {sponsersActive?.title3
                                    ? sponsersActive.title3
                                    : "Partner with us"}
                                </Link>
                              </li>
                            )}
                            {!sponsersActive && (
                              <>
                                <li>
                                  <Link to="/sponsors">Overview</Link>
                                </li>
                                <li>
                                  <Link to="/sponsors/global-sponsors">
                                    Global Sponsors
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/sponsors/local-sponsors">
                                    Local Sponsors
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/sponsors/partner-with-us">
                                    Partner with us
                                  </Link>
                                </li>
                              </>
                            )}
                          </ul>
                        </li>
                        <li class="nav-item dropbtn">
                          <Link
                            class="nav-link nav__link"
                            to="/contact"
                            className={`${
                              pathname.match("/contact")
                                ? "nav-link nav__link activelink"
                                : "nav-link nav__link"
                            }`}
                          >
                            Contact
                          </Link>
                        </li>

                        <li class="nav-item dropbtn">
                          <Link
                            class="nav-link nav__link"
                            to="/events/come-be-a-lion"
                          >
                            Come be a Lion
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* 
                                    <div class="ric">
                                        <Link class="lion__button_second" to="/events/come-be-a-lion"> <i class="fa-solid fa-heart"></i> &nbsp;&nbsp;Come be a Lion</Link>
                                     </div> */}
                  </div>
                </nav>
              </header>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Header;
