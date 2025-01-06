"use client";
import { Fragment, useEffect, useState } from "react";
// import Counter from "./Counter";

import { filter_hashtag } from "../utilits";
import { SKILLS, EDUCATIONS, EXPERIENCES } from "../constant/data";

const ExpertAreas = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContentTab = (value) => (activeTab == value ? "current" : "");

  useEffect(() => {
    filter_hashtag();
  }, [activeTab]);

  return (
    <Fragment>
      <div className='orido_tm_section'>
        <div className='orido_tm_informations'>
          <div className='container'>
            <div className='informations_inner'>
              <div className='left'>
                <div className='orido_tm_main_title'>
                  <h3>
                    <span>
                      My expert
                      <br />
                      areas
                    </span>
                  </h3>
                </div>
                <div className='text'>
                  <p>
                    I specialize in developing high-performance, scalable web
                    applications with a focus on modern, responsive front-end
                    frameworks such as React.js, Next.js, and Redux. My backend
                    expertise includes crafting robust architectures using
                    Node.js, Express.js, PHP, and Laravel, seamlessly integrated
                    with efficient database solutions like MySQL, PostgreSQL,
                    and MongoDB.
                  </p>
                  <p>
                    I have extensive experience implementing RESTful APIs,
                    third-party integrations, and advanced payment gateways like
                    Stripe and PayPal. Skilled in mapping technologies such as
                    Google Maps API and Mapbox, I leverage tools like Git,
                    Docker, Kubernetes, CI/CD pipelines, and AWS for seamless
                    deployments, optimized performance, and scalability. My
                    expertise allows me to deliver innovative, user-centric web
                    solutions that meet complex requirements efficiently.
                  </p>
                </div>
                <div className='orido_tm_boxed_button'>
                  <a href='#'>
                    My Resume{" "}
                    <img className='svg' src='img/svg/paper.svg' alt='' />
                  </a>
                </div>
              </div>
              <div className='right'>
                <div className='filter'>
                  <ul>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(1)}`}
                        onClick={() => setActiveTab(1)}
                        data-tab='tab_1'
                      >
                        <span>Skills</span>{" "}
                        <img
                          className='svg'
                          src='img/svg/top-arrow.svg'
                          alt=''
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(2)}`}
                        onClick={() => setActiveTab(2)}
                        data-tab='tab_2'
                      >
                        <span>Experience</span>{" "}
                        <img
                          className='svg'
                          src='img/svg/top-arrow.svg'
                          alt=''
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(3)}`}
                        onClick={() => setActiveTab(3)}
                        data-tab='tab_3'
                      >
                        <span>Education</span>{" "}
                        <img
                          className='svg'
                          src='img/svg/top-arrow.svg'
                          alt=''
                        />
                      </a>
                    </li>
                  </ul>
                  <span className='ccc' />
                </div>
                <div className='content'>
                  <div id='tab_1' className={`wrapper ${activeContentTab(1)}`}>
                    <div className='skillbox'>
                      <ul>
                        {SKILLS.map((skill, i) => (
                          <li key={i}>
                            <div className='list_inner'>
                              <span className='icon'>
                                <span className='in'>
                                  <img
                                    className='svg'
                                    src={skill.icon}
                                    alt=''
                                  />
                                </span>
                              </span>
                              <p className='name'>
                                {skill.name}
                                {/* <span>({skill.value}%)</span> */}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id='tab_2' className={`wrapper ${activeContentTab(2)}`}>
                    <div className='timelinebox'>
                      <ul>
                        {EXPERIENCES.map((experience, i) => (
                          <li key={i}>
                            <div className='list_inner'>
                              <div className='time'>
                                <span className='year'>{experience.time}</span>
                                <span className='company'>
                                  {experience.company}
                                </span>
                              </div>
                              <div className='job'>
                                <h3>
                                  <span>{experience.designation}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id='tab_3' className={`wrapper ${activeContentTab(3)}`}>
                    <div className='timelinebox'>
                      <ul>
                        {EDUCATIONS.map((education, i) => (
                          <li key={i}>
                            <div className='list_inner'>
                              <div className='time'>
                                <span className='year'>{education.time}</span>
                                <span className='company'>
                                  {education.institution}
                                </span>
                              </div>
                              <div className='job'>
                                <h3>
                                  <span>{education.certificate}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /INFORMATIONS */}
      {/* COUNTER */}
      {/* <div className='orido_tm_section'>
        <div className='orido_tm_counter'>
          <div className='container'>
            <div className='counter_list'>
              <ul>
                {counts.map((count, i) => (
                  <li key={i}>
                    <div className='list_inner'>
                      <h3>
                        <Counter end={count.value} />
                      </h3>
                      <span className='title'>{count.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};
export default ExpertAreas;
