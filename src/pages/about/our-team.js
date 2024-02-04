import React, { useState, useEffect } from "react";
import SubMenu from '../../components/submenu/about';
import Section_BecomePartner from '../../components/section-become-partner';
import HeaderLogo from "../../components/headerlogo";
import SEO from "../../components/seo";
import { getTeamInfo, } from "../../redux/action/about/about";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const OurTeam = () => {

  const dispatch = useDispatch()


  const { loading, team } = useSelector((state) => state.about)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    dispatch(getTeamInfo());

  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <SEO
            title='Our Team | Parsippany Lions Club'
            description='The Parsippany Lions Club is a dedicated group of individuals who are committed to making a difference in local community. Our team is made up of individuals from all walks of life and backgrounds, united by our passion for service and our commitment to improving the lives of those in need.'
            keywords='Parsippany Lions Club, Volunteer, members, officers, Human resources, Help, Humanity, Charity, Community service.'
          />
          <main>
            <section class="about__banner ourteam">
              <div class="about__banner__bg">
                <HeaderLogo />
                <h1>About</h1>
                <p> About/ <span>Team</span></p>
              </div>

            </section>
            <SubMenu activelink='ourteam' />

            <section class="our-team pt-5">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12 px-5">

                    <div class="col-lg-9">
                      <div class="overview-heading-uper">
                        Our Team
                      </div>

                      <div class="overview-byline-uper">
                        The Parsippany Lions Club is led by a dedicated team of volunteers who are committed to making a difference in our community. Our team is made up of individuals from all walks of life and backgrounds, united by our passion for service and our commitment to improving the lives of those in need.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="ourteam-mainbox">
                      {team && team.map((member) => (
                        <div class="our-team-box">
                          <div class="our-team-box-image">
                            <img src={`${process.env.REACT_APP_SERVER}/${member.image}`} alt="" />
                            {/* <img src="/images/Sujit Sanyal.png" alt="" /> */}
                          </div>
                          <div class="our-box-team-heading">
                            {member.name}
                          </div>
                          <div class="our-box-team-by-line">
                            {member.designation}
                          </div>
                          <div class="paragraph-our-team">
                            {member.description}
                            {/* Our President, Sujit Sanyal, has been a member of the Lions Club for several years and brings a wealth of experience and leadership to the organization. He is dedicated to ensuring that the club's mission is carried out through various community service projects and fundraising events. */}
                          </div>
                        </div>
                      ))}
                      {/* <div class="our-team-box">
                        <div class="our-team-box-image">
                          <img src="/images/Vice President.png" alt="" />
                        </div>
                        <div class="our-box-team-heading">
                          Vice President
                        </div>
                        <div class="our-box-team-by-line he-1">
                          Vice President
                        </div>
                        <div class="paragraph-our-team">
                          Fatima Khan, is a teacher in the Parsippany school district, brings her experience working with children to the club, and is passionate about making a difference in the lives of local students.
                        </div>
                      </div> */}


                    </div>
                    {/* <div class="ourteam-mainbox">
                      <div class="our-team-box">
                        <div class="our-team-box-image">
                          <img src="/images/Kazuo Watanabe.png" alt="" />
                        </div>
                        <div class="our-box-team-heading ">
                          Kazuo Watanabe
                        </div>
                        <div class="our-box-team-by-line he-2">
                          Treasurer
                        </div>
                        <div class="paragraph-our-team">
                          Treasurer Kazuo Watanabe, a retired professional, is responsible for overseeing the club's finances and ensuring that our fundraising efforts are successful.
                        </div>
                      </div>
                      <div class="our-team-box Box-4">
                        <div class="our-team-box-image">
                          <img src="/images/Susan Davis.png" alt="" />
                        </div>
                        <div class="our-box-team-heading">
                          Susan Davis
                        </div>
                        <div class="our-box-team-by-line he-3">
                          Secretary
                        </div>
                        <div class="paragraph-our-team">
                          Susan Davis, Health Care Professional, is responsible for keeping accurate records of meetings and events and communicating with members and the community about the club's activities.
                        </div>
                      </div>


                    </div> */}
                  </div>
                </div>
              </div>
            </section>

            <section class="membership-form">
              <div class="membership">
                <div class="membership-form-text">
                  <p>Together, our team works hard to make a positive impact in the lives of those in need in our community through organizing and participating in various service projects, fundraising events, and community outreach programs. We welcome anyone who is interested in making a difference in our community to join our team and the club</p>
                  <p>Parsippany Lions Club is a new Branch currently affiliated with Livingston Lions Club. The current members are residents of Parsippany, who have been active in Lions Community programs in other townships including Livingston and recently in Parsippany. After gaining experience running local Community programs, these members have decided to set up a new branch for Parsippany Troy Hills township.</p>
                  <p>We invite like-minded Parsippany residents, who are passionate about uplifting our great township to enroll as members and actively drive local community programs. </p>
                  <p>Parsippany is a diverse township. Diversity is strength! Each one of us is gifted with unique strengths and abilities. Our Club can benefit from your experience making Parsippany a role model for other townships.</p>
                </div>
                <div class="membership-box-bg">
                  <div class="membership-form-image-content">
                    <div class="view smf">
                      <img src="/images/download.png" alt="" />&nbsp; <span>View sample membership form</span>
                    </div>
                    <div class="view lcif">
                      <img src="/images/download.png" alt="" />&nbsp; <span>Download: Lions Club Information Flyer</span>

                    </div>
                    <div class="view ecd">
                      <img src="/images/download.png" alt="" />&nbsp; <span>Explanation of Club Dues: XX XX XX</span>
                    </div>

                    <div class="download-button">
                      <a href="">Download membership form</a>
                    </div>
                    <div class="upload-button">
                      <a href="">Upload completed form</a>
                    </div>

                    <div class="view mt-2" >
                      <img src="/images/or.png" alt="" width="20px" />&nbsp; <span>Send form in Email</span>
                    </div>

                  </div>
                  <div class="membership-image-illu">
                    <img src="/images/our-team-illu.png" alt="" />

                  </div>
                </div>
              </div>
            </section>
            <Section_BecomePartner />
          </main>
        </>
      )}

    </>
  );
};

export default OurTeam;