import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Accordion from '../components/accordion'
import Point from '../components/point'
import Highlight from '../components/highlight'
import Feature from '../components/feature'
import Check from '../components/check'
import FAQ141 from '../components/faq141'
import Footer from '../components/footer'
import './home.css'

const Landing = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Finbest</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="home-header">
        <div className="home-heading">
          <div id="notifcation" className="home-notification"></div>
          <Navbar></Navbar>
        </div>
        <div className="home-hero">
          <div className="home-content">
            <h1 className="home-title">
              Hire Top College Talent Effortlessly without Breaking the Bank
            </h1>
            <span className="home-caption">
              Join College Placements Offline or Online and Access Affordable,
              Reliable and Skilled Talent for your Startup 
            </span>
            <div className="home-hero-buttons">
              <a
                href="https://cal.com/unipace/demo-college"
                className="home-link"
              >
                <div className="home-ios-btn">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M426 704l256-192-256-192v384zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                  </svg>
                  <span className="home-caption1">Request a Demo</span>
                </div>
              </a>
              <a href="tel:9717538010" className="home-link1">
                <div className="home-android-btn">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M682 256h256v256l-98-98-268 268-170-170-256 256-60-60 316-316 170 170 208-208z"></path>
                  </svg>
                  <span className="home-caption2">Contact Sales</span>
                </div>
              </a>
            </div>
          </div>
          <div className="home-images">
            <div className="home-column1">
              <img
                alt="pastedImage"
                src="/pastedimage-v31-700h.png"
                className="home-pasted-image1"
              />
              <img
                alt="pastedImage"
                src="/pastedimage-c39.svg"
                className="home-pasted-image2"
              />
            </div>
            <div className="home-column2">
              <img
                alt="pastedImage"
                src="/pastedimage-iqnj.svg"
                className="home-pasted-image3"
              />
              <img
                alt="pastedImage"
                src="/pastedimage-06e.svg"
                className="home-pasted-image4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-video"></div>
      <div className="home-stats">
        <div className="home-stat">
          <span className="home-caption3">40+</span>
          <span className="home-description">Partnered Colleges</span>
        </div>
        <div className="home-stat1">
          <span className="home-caption4">50,000+</span>
          <span className="home-description1">
            <span>
              Fresher Students aspiring for
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>unpaid and paid Internships</span>
          </span>
        </div>
        <div className="home-stat2">
          <span className="home-caption5">500+</span>
          <span className="home-description2">
            <span>
              Startups already hiring
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>through Unipace </span>
          </span>
        </div>
      </div>
      <div className="home-sections">
        <div className="home-section">
          <div className="home-image">
            <div className="home-image-overlay"></div>
          </div>
          <div className="home-content1">
            <h2 className="home-text06">
              <span>Access Top College Talent with Our Offline Drives</span>
              <br></br>
            </h2>
            <Accordion
              text="Exclusive College Partnership"
              text1="Access a network of exclusive college partnerships to tap into top talent usually reserved for large companies"
              text2="On-Campus Recruitment Events"
              text3="Join on-campus recruitment events organized by unipace. We handle all logistics so you can directly engage with students"
              text4="Internship Programs Tailored to Your Needs"
              text5="Create and manage internship programs tailored to your startup's need serving as a pipeline for future hires"
            ></Accordion>
          </div>
        </div>
        <div className="home-section1">
          <div className="home-content2">
            <div className="home-heading01">
              <h2 className="home-text09">
                Ease your Hiring Worries with Our Dedicated Hiring Associate
              </h2>
              <span className="home-text10">
                Personalized Guidance for Role Recommendations, Stipends and
                Interview Scheduling 
              </span>
            </div>
            <div className="home-content3">
              <div className="home-points">
                <Point></Point>
                <Point text="Technical Supervisor Arrangement: Arrangement of need based technical interviewer for assessments"></Point>
                <Point text="Seamless communication with Colleges: Smooth liason between you and your selected colleges"></Point>
              </div>
              <Link to="/" className="home-navlink">
                <div className="home-get-started">
                  <span className="home-sign-up">Get started now</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="home-image1"></div>
        </div>
        <div className="home-section2">
          <div className="home-image2">
            <div className="home-image-highlight">
              <span className="home-text11">
                <span>
                  always know your in and out
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-content4">
            <h2 className="home-text14">Everything you get with unipace</h2>
            <Highlight
              title="Affordable Talent Acquisition "
              description="Hire college students at competetive rates, optimising your recruitment budget without comprimising on quality"
            ></Highlight>
            <Highlight
              title="Direct Campus Engagement"
              description="Engage directly with students through campus events and promotions,enhancing your recruitment reach and brand visibility"
            ></Highlight>
            <div className="home-explore">
              <span>Contact Sales-&gt;</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner-container">
        <div className="home-banner">
          <div className="home-pasted-image5">
            <span className="home-text16">
              Apply for 2024 Internship Season Today 
            </span>
            <div className="home-book-btn">
              <span className="home-text17">Book a demo</span>
            </div>
          </div>
          <span className="home-text18">
            Apply for 2024 Internship Season Today 
          </span>
          <div className="home-book-btn1">
            <span className="home-text19">Book a demo</span>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="home-header1">
          <div className="home-tag">
            <span className="home-text20">Features</span>
          </div>
          <div className="home-heading02">
            <h2 className="home-text21">Everything you get with unipace</h2>
            <span className="home-text22">
              Explore Our Extensive Features Designed to Simplify and Enhance
              Your Startup&apos;s Talent Acquisition
            </span>
          </div>
        </div>
        <div className="home-feature-list">
          <Feature
            title="Posting"
            thumbnail="post_add"
            description="Easily post and manage all your job openings seamlessly"
            thumbnailAlt="post_add"
          ></Feature>
          <Feature
            title="Diversity"
            thumbnail="/vector6113-r6dl.svg"
            description="Access a wide range of skilled and diverse candidates"
          ></Feature>
          <Feature
            title="Customization"
            thumbnail="/vector6113-6zj.svg"
            description="Tailor hiring processes to fit your specific startup needs."
          ></Feature>
          <Feature
            title="Coordination"
            thumbnail="/vector6113-lvvs.svg"
            description="Arrange interviews with our network of technical interviewers"
          ></Feature>
          <Feature
            title="Shortlisting"
            thumbnail="/vector6114-cupp.svg"
            description="Efficiently shortlist the best candidates for your roles"
          ></Feature>
          <Feature
            title="Integration"
            thumbnail="/vector6114-6m1e.svg"
            description="Manage applications using integrated tools, including Excel"
          ></Feature>
          <Feature
            title="Communication"
            thumbnail="/vector6114-yjl.svg"
            description="Facilitate smooth communication between colleges and startups"
          ></Feature>
          <Feature
            title="Analytics"
            thumbnail="/vector6113-lvvs.svg"
            description="Access insights and track hiring performance with analytics"
          ></Feature>
        </div>
      </div>
      <div className="home-pricing">
        <div className="home-content5">
          <div className="home-header2">
            <div className="home-tag1">
              <span className="home-text23">Pricing plans</span>
            </div>
            <div className="home-heading03">
              <h2 className="home-text24">No setup cost or hidden fees.</h2>
            </div>
          </div>
          <div className="home-pricing-plans">
            <div className="home-plans">
              <div className="home-plan">
                <div className="home-top">
                  <div className="home-heading04">
                    <span className="home-text25">Standard</span>
                    <span className="home-text26">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost">
                    <span className="home-text27">Free</span>
                  </div>
                </div>
                <div className="home-bottom">
                  <div className="home-check-list">
                    <Check></Check>
                    <Check feature="Quis nostrud exercitation ulla"></Check>
                    <Check feature="Duis aute irure dolor intuit"></Check>
                    <Check feature="Voluptas sit aspernatur aut odit"></Check>
                    <Check feature="Corporis suscipit laboriosam"></Check>
                  </div>
                  <div className="home-button">
                    <span className="home-text28">Get Standard</span>
                  </div>
                </div>
              </div>
              <div className="home-plan1">
                <div className="home-top1">
                  <div className="home-heading05">
                    <span className="home-text29">Plus</span>
                    <span className="home-text30">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost1">
                    <span className="home-text31">$8</span>
                    <span className="home-text32">/month</span>
                  </div>
                </div>
                <div className="home-bottom1">
                  <div className="home-check-list1">
                    <Check></Check>
                    <Check feature="Quis nostrud exercitation ulla"></Check>
                    <Check feature="Duis aute irure dolor intuit"></Check>
                    <Check feature="Voluptas sit aspernatur aut odit"></Check>
                    <Check feature="Corporis suscipit laboriosam"></Check>
                  </div>
                  <div className="home-button1">
                    <span className="home-text33">Get Standard</span>
                  </div>
                </div>
              </div>
              <div className="home-plan2">
                <div className="home-top2">
                  <div className="home-heading06">
                    <span className="home-text34">Premium</span>
                    <span className="home-text35">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost2">
                    <span className="home-text36">$16</span>
                    <span className="home-text37">/month</span>
                  </div>
                </div>
                <div className="home-bottom2">
                  <div className="home-check-list2">
                    <Check></Check>
                    <Check feature="Quis nostrud exercitation ulla"></Check>
                    <Check feature="Duis aute irure dolor intuit"></Check>
                    <Check feature="Voluptas sit aspernatur aut odit"></Check>
                    <Check feature="Corporis suscipit laboriosam"></Check>
                  </div>
                  <div className="home-button2">
                    <span className="home-text38">Get Standard</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-expand">
              <div className="home-overlay">
                <div className="home-header3">
                  <div className="home-heading07">
                    <span className="home-text39">Expand</span>
                    <span className="home-text40">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </span>
                  </div>
                  <div className="home-check-list3">
                    <div className="home-check">
                      <svg viewBox="0 0 1024 1024" className="home-icon04">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text41">
                        Sed ut perspiciatis unde
                      </span>
                    </div>
                    <div className="home-check1">
                      <svg viewBox="0 0 1024 1024" className="home-icon06">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text42">
                        Quis nostrud exercitation ulla
                      </span>
                    </div>
                    <div className="home-check2">
                      <svg viewBox="0 0 1024 1024" className="home-icon08">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text43">
                        Duis aute irure dolor intuit
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home-button3">
                  <span className="home-text44">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-plans1">
            <div className="home-plan3">
              <div className="home-top3">
                <div className="home-heading08">
                  <span className="home-text47">Standard</span>
                  <span className="home-text48">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="home-cost3">
                  <span className="home-text49">Free</span>
                </div>
              </div>
              <div className="home-bottom3">
                <div className="home-check-list4">
                  <Check></Check>
                  <Check feature="Quis nostrud exercitation ulla"></Check>
                  <Check feature="Duis aute irure dolor intuit"></Check>
                  <Check feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="home-button4">
                  <span className="home-text50">Get Standard</span>
                </div>
              </div>
            </div>
            <div className="home-plan4">
              <div className="home-top4">
                <div className="home-heading09">
                  <span className="home-text51">Plus</span>
                  <span className="home-text52">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="home-cost4">
                  <span className="home-text53">$8</span>
                  <span className="home-text54">/month</span>
                </div>
              </div>
              <div className="home-bottom4">
                <div className="home-check-list5">
                  <Check></Check>
                  <Check feature="Quis nostrud exercitation ulla"></Check>
                  <Check feature="Duis aute irure dolor intuit"></Check>
                  <Check feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="home-button5">
                  <span className="home-text55">Get Plus</span>
                </div>
              </div>
            </div>
            <div className="home-plan5">
              <div className="home-top5">
                <div className="home-heading10">
                  <span className="home-text56">Premium</span>
                  <span className="home-text57">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="home-cost5">
                  <span className="home-text58">$16</span>
                  <span className="home-text59">/month</span>
                </div>
              </div>
              <div className="home-bottom5">
                <div className="home-check-list6">
                  <Check></Check>
                  <Check feature="Quis nostrud exercitation ulla"></Check>
                  <Check feature="Duis aute irure dolor intuit"></Check>
                  <Check feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="home-button6">
                  <span className="home-text60">Get Plus</span>
                </div>
              </div>
            </div>
            <div className="home-expand1">
              <div className="home-overlay1">
                <div className="home-header4">
                  <div className="home-heading11">
                    <span className="home-text61">Expand</span>
                    <span className="home-text62">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </span>
                  </div>
                  <div className="home-check-list7">
                    <div className="home-check3">
                      <svg viewBox="0 0 1024 1024" className="home-icon10">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text63">
                        Sed ut perspiciatis unde
                      </span>
                    </div>
                    <div className="home-check4">
                      <svg viewBox="0 0 1024 1024" className="home-icon12">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text64">
                        Quis nostrud exercitation ulla
                      </span>
                    </div>
                    <div className="home-check5">
                      <svg viewBox="0 0 1024 1024" className="home-icon14">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text65">
                        Duis aute irure dolor intuit
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home-button7">
                  <span className="home-text66">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-help">
          <span className="home-text69">Need any help?</span>
          <div className="home-explore1">
            <span className="home-text70">
              Get in touch with us right away -&gt;
            </span>
          </div>
        </div>
      </div>
      <FAQ141></FAQ141>
      <div className="home-get-started1">
        <div className="home-content6">
          <div className="home-heading12">
            <h2 className="home-text71">Get started with unipace now!</h2>
            <span className="home-text72">
              Unlock Access to Top College Talent and Streamline Your Hiring
              Process Today!
            </span>
          </div>
          <div className="home-hero-buttons1">
            <a href="tel:9717538010" className="home-link2">
              <div className="home-ios-btn1">
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M682 256h256v256l-98-98-268 268-170-170-256 256-60-60 316-316 170 170 208-208z"></path>
                </svg>
                <span className="home-caption6">Contact Sales</span>
              </div>
            </a>
            <a
              href="https://cal.com/unipace/demo-college"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link3"
            >
              <div className="home-android-btn1">
                <svg viewBox="0 0 1024 1024" className="home-icon18">
                  <path d="M426 704l256-192-256-192v384zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                </svg>
                <span className="home-caption7">Request a Demo</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Landing
