import React, { useState, useEffect } from "react";
import Section_ComeBeaLion from '../components/section-come-be-a-lion';
import Section_BecomePartner from '../components/section-become-partner';
import HeaderLogo from "../components/headerlogo";
import SEO from "../components/seo";
import { useDispatch, useSelector } from "react-redux";
import { createContact } from "../redux/action/contact/contact";
import Loader from "./Loader/Loader";
import { getLionBannerInfo } from "../redux/action/banner/banner";
import { getClubInfo } from "../redux/action/club/club";
import { getDescriptionPoint } from "../redux/action/description/description";

const Contact = () => {

  const dispatch = useDispatch()
  const [url, setUrl] = useState("")

  const [section, setsection] = useState("contact");
  const [subsection, setsubsection] = useState("contact");
  const { loading, error, message } = useSelector((state) => state.contact)
  const { loading: load, info } = useSelector((state) => state.club)
  const { loading: loadBanner, lionbanner } = useSelector((state) => state.banner)
  const { loading: loadDescription, description, } = useSelector((state) => state.description)



  // useEffect(() => {
  //   if (info?.data?.googlemapUrl) {
  //     setUrl(info.data.googlemapUrl)
  //     // var url = url.replace("watch?v=", "v/");

  //     if (url) {
  //       setUrl(url.replace("/maps", "/maps/embed"))
  //       // var url = url.replace("/maps", "/maps/embed");
  //     }
  //   }
  // })

  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
  })
  const { name, email, subject } = contact;

  const ContactDataChange = (e) => {

    setContact({ ...contact, [e.target.name]: e.target.value });

  };

  const submitContact = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('name', name);
    myForm.append('email', email);
    myForm.append('subject', subject);

    await dispatch(createContact(myForm));

    // dispatch(getDescriptionPoint(section, subsection))
  };

  // console.log(url)



  useEffect(() => {
    dispatch(getClubInfo())
    dispatch(getLionBannerInfo())
    dispatch(getDescriptionPoint(section, subsection))
    window.scrollTo(0, 0)
  }, [message, error, loading])

  return (
    // <>
    //   {loading || loadDescription ? (
    //     <Loader />
    //   ) : (
    <>
      <SEO
        title='Contact | Parsippany Lions Club'
        description='The Parsippany Lions Club is a dedicated group of individuals who are committed to making a difference in local community. Our Contact Us page provides you with all the necessary information to get in touch with us and find out more about our organization, initiatives, and programs. '
        keywords='Parsippany Lions Club, Volunteer, Help, events, contact, mailbox, contact details, Point of contact, Humanity, Charity, Community service.'
      />
      <main>
        <section class="form">
          <HeaderLogo />

          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6 pt-5">
                <div class="form-group pt-5">
                  <div class="text-form-contact">
                    {/* Get in touch */}
                    {description?.description4}
                    <br />
                    <span>
                      {description?.description5}

                      {/* Don't hesitate to reach out to us, we are always happy to hear from you! */}
                    </span>
                  </div>
                  {/* {
                    showconfirmation === "Yes" &&
                    <div className="confirmation">Thanks for providing your information. <br/>We will get back to you soon.</div>
                } */}
                  {message ? <><div className="confirmation">Thanks for providing your information. <br />We will get back to you soon.</div></> : (
                    <form onSubmit={submitContact} class="mt-5">
                      <div class="mb-3">
                        <label for="txtName" class="form-label">Name</label>
                        <input type="text" name="name" value={name} onChange={ContactDataChange} class="form-control contact" id="txtName" required
                          aria-describedby="emailHelp" />
                      </div>
                      <div class="mb-3">
                        <label for="txtEmail" class="form-label">Email</label>
                        <input type="email" name="email" value={email} onChange={ContactDataChange} class="form-control contact" id="txtEmail" required />
                      </div>

                      <div class="mb-3">
                        <label for="txtMessage" class="form-label">Message</label>
                        <br />
                        <textarea name="subject" value={subject} onChange={ContactDataChange} id="txtMessage" cols="30" rows="4" class="form-control contact"></textarea>
                      </div>
                      <button type="submit" class="btn__more submit">
                        <span className="spinnercontainer">{loading ? <span id="spinner"><i class="fa fa-spinner fa-spin"></i></span> : null} </span>submit<span className="spinnercontainer"></span>
                      </button>

                      {/* {loading ? (<button class="btn__more submit" type="submit" disabled >Submit</button>) : (<button class="btn__more submit" type="submit">Submit</button>)} */}
                    </form>
                  )}
                </div>
              </div>
              <div class="col-lg-6">

                <div class="contact-us-map-menu">
                  <div class="map-box-frame">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.1286111876548!2d-74.42310338465359!3d40.86905167931518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c308110ef616a1%3A0x3d20c7dc2444e06a!2s1081%20Parsippany%20Blvd%2C%20Parsippany%2C%20NJ%2007054%2C%20USA!5e0!3m2!1sen!2sin!4v1675682868342!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map"></iframe> */}
                    <iframe src={info?.data?.googlemapUrl ? info.data.googlemapUrl : `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.1286111876548!2d-74.42310338465359!3d40.86905167931518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c308110ef616a1%3A0x3d20c7dc2444e06a!2s1081%20Parsippany%20Blvd%2C%20Parsippany%2C%20NJ%2007054%2C%20USA!5e0!3m2!1sen!2sin!4v1675682868342!5m2!1sen!2sin`} width="600" height="450" allowfullscreen="" loading="lazy" name="X-Frame-Options" referrerpolicy="no-referrer-when-downgrade" className="map"></iframe>
                  </div>

                  <div class="two-box-flex-map">
                    <div class="flex-map-t">
                      <div class="one-box-flex-map">
                        <div class="iconbox-flex-map address">
                          <img src="/images/icon/location.png" alt="" />
                        </div>
                        <div class="text-box-flex-map">
                          {info?.data?.address ? info.data.address : `1081 Parsippany Blvd., Ste 101, Parsippany, NJ 07054`}
                        </div>
                      </div>
                      <div class="one-box-flex-map">
                        <div class="iconbox-flex-map">
                          <img src="/images/icon/calling.png" alt="" />
                        </div>
                        <div class="text-box-flex-map">
                          {info?.data?.number ? info.data.number : `+1-862-579-8822`}
                        </div>
                      </div>
                      <div class="one-box-flex-map">
                        <div class="iconbox-flex-map">
                          <img src="/images/icon/message.png" alt="" />
                        </div>
                        <div class="text-box-flex-map">
                          {info?.data?.email ? info.data.email : `info@parsippanylionsclub.org`}
                        </div>
                      </div>
                    </div>


                    {/* <div class="flex-map-t">
                      <div class="one-box-flex-map">
                        <div class="iconbox-flex-map">
                          <img src="/images/icon/oofice.png" alt="" />
                        </div>
                        <div class="text-box-flex-map">
                          Office Hours : 8 am to 7am
                        </div>
                      </div>

                      <div class="one-box-flex-map schedule">
                        <div class="iconbox-flex-map schedule">
                          <img src="/images/icon/sadule.png" alt="" />
                        </div>
                        <div class="text-box-flex-map schedule" >
                          Schedule meeting
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="mt-5">
          <div class="container-fluid px-5">
            <div class="row">
              <div class="col-lg-12 px-5">
                <div class="extra-content-allover">
                  <p>{description?.description1}</p>
                  <p>{description?.description2}</p>
                  <p><b> {description?.description3}</b></p>

                  {/* <p>We are always available to answer any questions you may have about our organization, initiatives, programs, and ways to get involved.</p> */}
                  {/* <p>We encourage you to contact us if you have any questions or comments, or if you are interested in becoming a member or volunteer. We are here to serve our community and are always looking for ways to improve and grow our organization.</p> */}
                  {/* <p><b>Don't hesitate to reach out to us, we are always happy to hear from you!</b></p> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section_ComeBeaLion detail={lionbanner && lionbanner} />
        <Section_BecomePartner />
      </main>
    </>
    //   )}

    // </>
  );
};

export default Contact;