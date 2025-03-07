'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { FEEDBACKS } from "../constant/data";

import { testimonialsSliderProps } from "../sliderProps";
const Feedback = () => {
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_testimonials">
        <div className="container">
          <div className="orido_tm_main_title">
            <h3>
              <span>
                Valuable feedback
                <br />
                from my client
              </span>
            </h3>
          </div>
          <Swiper
            {...testimonialsSliderProps}
            className='owl-carousel gallery_zoom'
          >
            {FEEDBACKS.map((feedback, index) => (
              <SwiperSlide key={feedback.id}>
                <div className="testimonials_in">
                  {/* <img src={feedback.image} alt={feedback.name} style={{ borderRadius: '12px' }} /> */}

                  <div className="info">
                    <div className="text">
                      <p>
                        {feedback.feedback}
                      </p>
                    </div>
                    <div className="details">
                      <h3 className="name">
                        <span>{feedback.name}</span>
                      </h3>
                      <span className="job">{feedback.job}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </div>
  );
};
export default Feedback;
