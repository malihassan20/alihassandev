'use client'
import { Fragment, useEffect } from "react";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import {
  dataImage,
  hashtag_,
  imgToSVG,
  scrollSection,
  stickyNav,
} from "../utilits";

const Layout = ({ children }) => {
  useEffect(() => {
    // Initialize functions
    imgToSVG();
    dataImage();
    hashtag_();

    // Add scroll event listeners
    const handleStickyNav = () => stickyNav();
    const handleScrollSection = () => scrollSection();

    window.addEventListener("scroll", handleStickyNav);
    window.addEventListener("scroll", handleScrollSection);

    // Cleanup function to remove event listeners when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleStickyNav);
      window.removeEventListener("scroll", handleScrollSection);
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleanup on unmount

  return (
    <Fragment>
      <ImageView />
      <VideoPopup />
      <div className="orido_tm_all_wrap" data-magic-cursor="show">
        {children}
      </div>
    </Fragment>
  );
};

export default Layout;
