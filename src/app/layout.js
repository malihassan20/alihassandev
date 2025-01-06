import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '../context/ThemeContext';
import PreLoader from '../layouts/PreLoader';
import '../../styles/globals.css'
import Header from '../layouts/Header';
import CopyRight from '../layouts/CopyRight';
import MobileMenu from '../layouts/MobileMenu';

export const metadata = {
  title: "Ali Hassan || Personal Portfolio",
  description: "This is Ali Hassan personal portfolio website to showcase of skills and projects",
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