import React, { useState, useEffect } from "react";
import SubMenu from '../../components/submenu/about';
import Section_ComeBeaLion from '../../components/section-come-be-a-lion';
import Section_BecomePartner from '../../components/section-become-partner';
import HeaderLogo from "../../components/headerlogo";
import SEO from "../../components/seo";
import { getTestimonial } from "../../redux/action/about/about";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const Testimonials = () => {

  const dispatch = useDispatch()


  const { loading, testimonial } = useSelector((state) => state.about)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    dispatch(getTestimonial());

  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <SEO
            title='Testimonials | Parsippany Lions Club'
            description='The Parsippany Lions Club is a dedicated group of individuals who are committed to making a difference in local community. It is inspiring to hear testimonials from our sponsors and those who have felt empowered to be a part of great humanitarian services and noble causes.'
            keywords='Parsippany Lions Club, Volunteer, testimonials, references, word of mouth, community support, Help, Humanity, Charity, Community service.'
          />
          <main>
            <section class="about__banner testimonial">
              <div class="about__banner__bg">
                <HeaderLogo />
                <h1>About</h1>
                <p> About/ <span>Testimonials</span></p>
              </div>
            </section>
            <SubMenu activelink='testimonials' />
            <section class="pt-5">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12 px-5">

                    <div class="col-lg-9">
                      <div class="overview-heading-uper">
                        Testimonials
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  {testimonial && testimonial.map((test) => (
                    <div class="col-lg-6">
                      <div class="testimonial-box">
                        <div class="testimonial-qoute quote">

                        </div>
                        <p>
                          {/* I have been a member of the Parsippany Lions Club for several years now and have been consistently impressed by the organization's dedication to making a difference in our community. The projects and events they organize truly make an impact in the lives of those in need. I am proud to be a part of such a caring and compassionate group of individuals. */}
                          {test.comment}
                        </p>

                        <div class="button-testimonial-set bg">
                          {/* Rahul Khanna, Local Business Owner */}
                          {test.name}, {test.designation}
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* <div class="col-lg-6">
                    <div class="testimonial-box">
                      <div class="testimonial-qoute quote">

                      </div>
                      <p>
                        As a teacher in the Parsippany school district, I have had the pleasure of working with the Lions Club on several occasions. Their support of local schools through scholarships and funding for educational programs is truly invaluable. The members of the club are truly dedicated to making a difference in the lives of our students.
                      </p>

                      <div class="button-testimonial-set bg">
                        Karen Johnson, Teacher
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="testimonial-box">
                      <div class="testimonial-qoute quote">

                      </div>
                      <p>
                        I was initially hesitant to join a service organization, but after attending a few meetings of the Parsippany Lions Club, I knew I had found the perfect group for me. The members are friendly and welcoming, and the community service projects they organize are truly impactful. I feel proud to be a part of this organization and am grateful for the opportunity to make a difference in my community.
                      </p>

                      <div class="button-testimonial-set bg">
                        Michael Brown, Retired
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="testimonial-box">
                      <div class="testimonial-qoute quote">

                      </div>
                      <p>
                        As a member of the Parsippany Lions Club, I have had the opportunity to participate in several community service projects and fundraising events. The sense of camaraderie and fellowship among the members is truly special, and I feel like I am making a real difference in the lives of those in need. I highly recommend this organization to anyone looking to give back to their community.
                      </p>

                      <div class="button-testimonial-set bg">
                        Chang Lee, Health Care Professional
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </section>

            <Section_ComeBeaLion />
            <Section_BecomePartner />

          </main>
        </>
      )}

    </>
  );
};

export default Testimonials;