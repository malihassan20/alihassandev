const About = () => {
  return (
    <div className='orido_tm_section' id='about'>
      <div className='orido_tm_about'>
        <div className='about_in'>
          <div className='left'>
            <div className='box'>
              <h3 className='year'>08</h3>
              <span className='experience'>Years of Experience</span>
              <h3 className='name'>Ali Hassan</h3>
            </div>
          </div>
          <div className='right'>
            <span className='element'>
              <img className='svg' src='img/svg/element.svg' alt='' />
            </span>
            <div className='orido_tm_main_title'>
              <h3>
                <span className="about_span">About Me</span>
              </h3>
            </div>
            <div className='text'>
              <p>
                With over 8 years of experience as a Full Stack Developer, I
                excel in building scalable, high-performance web applications
                tailored to diverse business needs. Proficient in modern
                frameworks like React.js, Next.js, Node.js, and Laravel, I
                deliver seamless, responsive user interfaces backed by robust
                backend systems. Leveraging tools such as GraphQL, REST APIs,
                and AWS, I ensure my solutions are efficient, secure, and
                future-ready. My commitment to clean, maintainable code,
                innovative problem-solving, and timely delivery consistently
                transforms ideas into impactful, business-driving web solutions.
              </p>
            </div>
            <div className='short'>
              <div className='orido_tm_boxed_button'>
                <a href='img/cv/Ali-Hassan-Resume.pdf' download>
                  Download CV{" "}
                  <img className='svg' src='img/svg/paper.svg' alt='' />
                </a>
              </div>
              <img src='img/signature.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
