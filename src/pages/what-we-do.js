import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SubMenu from '../components/submenu/what-we-do';
import Section_ComeBeaLion from '../components/section-come-be-a-lion';
import Section_BecomePartner from '../components/section-become-partner';
import HeaderLogo from "../components/headerlogo";
import SEO from "../components/seo";
import { getActive, getOverview, getTitle } from "../redux/action/whatwedo/whatwedo";
import { useDispatch, useSelector } from "react-redux";
import { getDescriptionPoint } from "../redux/action/description/description";
import { getBannerInfo, getLionBannerInfo } from "../redux/action/banner/banner";
import Loader from "./Loader/Loader";
import { getTitleInfo } from "../redux/action/others/other";

const Whatwedo = () => {

  const dispatch = useDispatch()
  const { loading, overview, title, active } = useSelector((state) => state.whatwedo)
  const { loading: load, description } = useSelector((state) => state.description)
  const { loading: loadBanner, banner, lionbanner } = useSelector((state) => state.banner)
  const { loading: loadTitle, title: ttile, error: errTitle, message: msgTitle } = useSelector((state) => state.others)
  const [section, setsection] = useState("whatwedo");
  const [subsection, setsubsection] = useState("overview");

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  useEffect(() => {
    dispatch(getOverview());
    dispatch(getTitle())
    dispatch(getDescriptionPoint(section, subsection))
    dispatch(getBannerInfo(section, subsection))
    dispatch(getLionBannerInfo())
    dispatch(getTitleInfo(section));
    dispatch(getActive())
  }, [dispatch]);



  return (
    <>
      {loading || load || loadBanner ? (
        <Loader />
      ) : (
        <>
          <SEO
            title='What we do | Parsippany Lions Club'
            description='We at the Parsippany Lions Club, support a range of causes including vision health, diabetes, hunger, environment, childhood cancer, and many other priority causes as deemed fit by our community.'
            keywords='Parsippany Lions Club, Volunteer, Help, Mission, our team, Humanity, Charity, Community service, Hunger, Cancer, Vision, Environment, Donation, Diabetes'
          />
          <main>
            <section class="about__banner whatwedo" style={{ backgroundImage: banner?.image ? `url(${process.env.REACT_APP_SERVER}/${banner.image})` : `url('../images/banner-events.jpg')` }}>
              <div class="about__banner__bg">
                <HeaderLogo />
                <h1> {banner?.heading ? banner?.heading : `What we do`}</h1>
                <p>   What we do/ <span>Overview</span></p>
              </div>
            </section>

            <SubMenu activelink="whatwedo" title={title} active={active} />

            <section class="pt-5">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12 px-5">
                    <div class="col-lg-9">
                      <div class="overview-heading-uper">
                        {ttile?.title1 ? ttile.title1 : 'Overview'}
                      </div>

                      <div class="overview-byline-uper">
                        {description?.description1}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="mt-5">
              <div class="container px-5">
                <div class="row">

                  {overview && overview.map((views, index) => (
                    <div key={views.id} class="col-lg-12 mt-5">
                      <div class="row">
                        <div class="col-lg-2 p-0">
                          <div class="image__about">
                            <img src={`${process.env.REACT_APP_SERVER}/${views.image}`} alt="" width="100%" />
                          </div>
                        </div>
                        <div class="col-lg-10 p-0">
                          <div class={`text__about__co color-${index}`}>
                            <div class="co-text">
                              <h3> {views.category}</h3>
                              <p>{views.description}</p>
                            </div>
                            <div class="btn-about">
                              <Link to={`/what-we-do/${views.category}`} class="about__btn__more">Learn more</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}




                  {/* <div class="col-lg-12 mt-5">
                    <div class="row">
                      <div class="col-lg-2 p-0">
                        <div class="image__about">
                          <img src="images/card/Group 33.png" alt="" width="100%" />
                        </div>
                      </div>
                      <div class="col-lg-10 p-0">
                        <div class="text__about__co color-2">
                          <div class="co-text">
                            <h3>Hunger</h3>
                            <p>We address the issue of hunger in our community by organizing and participating in community food drives, providing food and meals to those in need, and raising awareness about the issue of hunger.</p>
                          </div>
                          <div class="btn-about">
                            <Link to="/what-we-do/hunger" class="about__btn__more">Learn more</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}




                </div>
              </div>
            </section>
            <section class="mt-5">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="extra-content-allover">
                      <p>{description?.description2}</p>
                      <p>
                        <b>
                          {description?.description3}
                        </b>
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
      )}

    </>
  );
};

export default Whatwedo;