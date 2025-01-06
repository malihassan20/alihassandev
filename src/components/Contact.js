const Contact = () => {
  return (
    <div className='orido_tm_section' id='contact'>
      <div className='orido_tm_contact'>
        <div className='container'>
          <div className='infobox'>
            <div className='video_button'>
              <a
                className='popup-youtube'
                href='https://www.youtube.com/watch?v=KxJWIQ3H5JY'
              >
                <img
                  className='anim_circle'
                  src='/img/contact/contact-circle.png'
                  alt=''
                />
                <img className='svg' src='/img/svg/play.svg' alt='' />
              </a>
            </div>
            <div className='text'>
              <h3>{`Let's`} work together</h3>
              <p>
                Reach out today, and let’s bring your dream project to life
                together.
              </p>
            </div>
            <div className='orido_tm_boxed_button'>
              <a href='mailto:contact@alihassan.dev'>
                Say Hello <img className='svg' src='/img/svg/send.svg' alt='' />
              </a>
            </div>
          </div>
          <div className='connect'>
            <div className='left'>
              <ul>
                <li>
                  <span className='name'>Call:</span>
                  <p>
                    <a className='line_effect' href='tel:+923104221605'>
                      +92 (310) 4221605
                    </a>
                  </p>
                </li>
                <li>
                  <span className='name'>Email:</span>
                  <p>
                    <a
                      className='line_effect'
                      href='mailto:contact@alihassan.dev'
                    >
                      contact@alihassan.dev
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className='right'>
              <div className='orido_tm_follow'>
                <span>Follow me:</span>
                <ul>
                  <li>
                    <a
                      href='https://github.com/malihassan20'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img
                        className='svg'
                        src='/img/svg/social/github.svg'
                        alt=''
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.linkedin.com/in/malihassan20/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img
                        className='svg'
                        src='/img/svg/social/linkedin.svg'
                        alt=''
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.upwork.com/freelancers/malihassan20'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img
                        className='svg'
                        src='/img/svg/social/upwork.svg'
                        alt=''
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className='element'>
          <img className='svg' src='/img/svg/elements.svg' alt='' />
        </span>
        <span className='element2'>
          <img className='svg' src='/img/svg/element-2.svg' alt='' />
        </span>
      </div>
    </div>
  );
};
export default Contact;
