'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { MEMU_LINK } from '../constant/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const { isDark, onToggleTheme } = useTheme();
  const [activeLink, setActiveLink] = useState('#home');

  return (
    <div className='orido_tm_mobile_menu'>
      <div className='mobile_menu_inner'>
        <div className='mobile_in'>
          <div className='logo'>
            <Link href='/'>
              <img src={`/img/logo/${isDark ? 'logo' : 'light'}.svg`} alt='' />
            </Link>
          </div>

          <div className='trigger'>
            <div className='button'>
              <button onClick={onToggleTheme} className='theme-toggle-btn'>
                {isDark ? (
                  <FontAwesomeIcon
                    icon={faSun}
                    size='lg'
                    title='Switch to Light Mode'
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faMoon}
                    size='lg'
                    title='Switch to Dark Mode'
                  />
                )}
              </button>
            </div>
            <div
              onClick={() => setToggle(!toggle)}
              className={`hamburger hamburger--slider ${
                toggle ? 'is-active' : ''
              }`}
            >
              <div className='hamburger-box'>
                <div className='hamburger-inner' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`dropdown ${toggle ? 'show' : ''}`}>
        <div className='dropdown_inner'>
          <div
            onClick={() => setToggle(!toggle)}
            className={`hamburger hamburger--slider ${
              toggle ? 'is-active' : ''
            }`}
          >
            <div className='hamburger-box'>
              <div className='hamburger-inner' />
            </div>
          </div>
          <ul className='anchor_nav'>
            {MEMU_LINK.map((link, i) => (
              <li
                key={i}
                className={
                  activeLink === link.href ? 'current active' : 'current'
                }
              >
                <a
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setToggle(!toggle);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
