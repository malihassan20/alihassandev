'use client';
import { useTheme } from '../context/ThemeContext';
const Home = () => {
  const { isDark } = useTheme();
  return (
    <div className='orido_tm_hero orido_tm_section' id='home'>
      <div className='container'>
        <div className='content'>
          <div className='details'>
            <div className='short'>
              <h3>
                Ali Hassan{' '}
                <img className='svg' src='/img/svg/hi.svg' alt='Hi Icon' />
              </h3>
              <span className='job'>Senior Full Stack Engineer</span>
            </div>
            <div className='text'>
              <p>
                Empowering Innovation with 8+ Years of Expertise in Full Stack
                Development, API Engineering, and AWS Architecture—Crafting
                Scalable, High-Performance Digital Solutions That Drive Impact.
              </p>
            </div>
            <div className='buttons'>
              <div className='orido_tm_boxed_button'>
                <a className='anchor' href='mailto:contact@alihassan.dev'>
                  Say Hello{' '}
                  <img className='svg' src='/img/svg/send.svg' alt='' />
                </a>
              </div>
              <div className='orido_tm_simple_button'>
                <a className='line_effect anchor' href='#portfolio'>
                  My Recent Work{' '}
                  <img className='svg' src='/img/svg/top-arrow.svg' alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
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
                  alt='Github Icon'
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
                  alt='LinkedIn Icon'
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
                  alt='Upwork Icon'
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='orido_tm_down'>
        <a className='anchor' href='#about'>
          {isDark === true ? (
            <svg
              width='26px'
              height='100%'
              viewBox='0 0 247 390'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              style={{
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: 1.5,
              }}
            >
              <path
                id='wheel'
                d='M123.359,79.775l0,72.843'
                style={{ fill: 'none', stroke: '#fff', strokeWidth: '20px' }}
              />
              <path
                id='mouse'
                d='M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z'
                style={{ fill: 'none', stroke: '#fff', strokeWidth: '20px' }}
              />
            </svg>
          ) : (
            <svg
              width='26px'
              height='100%'
              viewBox='0 0 247 390'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              style={{
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: 1.5,
              }}
            >
              <path
                id='wheel'
                d='M123.359,79.775l0,72.843'
                style={{ fill: 'none', stroke: '#12141D', strokeWidth: '20px' }}
              />
              <path
                id='mouse'
                d='M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z'
                style={{ fill: 'none', stroke: '#12141D', strokeWidth: '20px' }}
              />
            </svg>
          )}
        </a>
      </div>
      <div className='avatar'>
        <div className='img'>
          <img
            src={`img/hero/${isDark ? 'ali-light.svg' : 'ali-dark.svg'}`}
            alt='Ali Hassan'
          />
          <div className='video_button'>
            <a
              className='popup-youtube'
              href='https://www.youtube.com/watch?v=KxJWIQ3H5JY'
            >
              <img
                className='anim_circle'
                src='/img/hero/hero-circle.png'
                alt=''
              />
              <img className='svg' src='/img/svg/play.svg' alt='' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
