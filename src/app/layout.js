import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '../context/ThemeContext';
import PreLoader from '../layouts/PreLoader';
import '../../styles/globals.css';
import Header from '../layouts/Header';
import CopyRight from '../layouts/CopyRight';
import MobileMenu from '../layouts/MobileMenu';

export const metadata = {
  title: 'Ali Hassan - Senior Software Engineer',
  description:
    'Empowering Innovation with 8+ Years of Expertise in Full Stack Development, API Engineering, and AWS Architecture—Crafting Scalable, High-Performance Digital Solutions That Drive Impact.',
};
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider>
          <PreLoader />
          <Header />
          <MobileMenu />
          {children}
          <CopyRight />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
