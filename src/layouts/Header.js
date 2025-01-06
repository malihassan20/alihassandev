'use client';
import Link from 'next/link';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext';
import { MEMU_LINK } from '../constant/data';
const Header = () => {
  const { isDark, onToggleTheme } = useTheme();

  return (
    <div className='orido_tm_header'>
      <Head>
        <link rel='icon' href='/img/favicon.png' sizes='any' />
      </Head>
      <div className='header_in'>
        <div className='logo'>
          <Link href='/'>
            <img src={`/img/logo/${isDark ? 'logo' : 'light'}.svg`} alt='' />
          </Link>
        </div>
        <div className='menu'>
          <ul className='anchor_nav'>
            {MEMU_LINK.map((link, i) => (
              <li key={i}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          <span className='ccc' />
        </div>
        <div className='button'>
          <button
            onClick={onToggleTheme}
            className='theme-toggle-btn c-pointer'
          >
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
      </div>
    </div>
  );
};
export default Header;
