'use client';
import { Fragment, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProjectDetailsPopup from './popup/ProjectDetailsPopup';
import { projectSliderProps } from '../sliderProps';
import { dataImage } from '../utilits';
import { PROJECTS } from '../constant/data';

const Projects = () => {
  const [detailsPopup, setDetailsPopup] = useState(false);
  const [activeProject, setActiveProject] = useState({});

  useEffect(() => {
    dataImage();
  }, []);

  return (
    <Fragment>
      <ProjectDetailsPopup
        close={() => setDetailsPopup(false)}
        open={detailsPopup}
        project={activeProject}
      />
      <div className='orido_tm_section' id='portfolio'>
        <div className='orido_tm_portfolio'>
          <div className='container'>
            <div className='orido_tm_main_title'>
              <h3>
                <span>
                  Look at my
                  <br />
                  recent projects
                </span>
              </h3>
            </div>
            <div className='portfolio_list'>
              <Swiper
                {...projectSliderProps}
                className='owl-carousel gallery_zoom'
              >
                {PROJECTS.map((project) => (
                  <SwiperSlide key={project.id}>
                    <div className='list_inner'>
                      <div className='image'>
                        <img
                          src={project.thumbImg}
                          alt={project.title}
                          style={{ borderRadius: '12px' }}
                        />
                        <div className='main' data-img-url={project.thumbImg} />
                      </div>
                      <div className='details'>
                        <span className='category'>Details</span>
                        <h3 className='title'>
                          <span>{project.title}</span>
                        </h3>
                      </div>
                      <a
                        className='orido_tm_full_link details_link c-pointer'
                        onClick={() => {
                          setActiveProject(project);
                          setDetailsPopup(true);
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <a className='prev_button' href='#'>
                <img className='svg' src='/img/svg/prev.svg' alt='' />
              </a>
              <a className='next_button' href='#'>
                <img className='svg' src='/img/svg/next.svg' alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Projects;
