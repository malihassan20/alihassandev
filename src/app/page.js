
import dynamic from "next/dynamic";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import ExpertAreas from "../components/ExpertAreas";
import Feedback from "../components/Feedback";
import Hero from "../components/Home";
import Services from "../components/Services";
import CopyRight from "../layouts/CopyRight";
import Header from "../layouts/Header";
import Layout from "../layouts/Layout";
import MobileMenu from "../layouts/MobileMenu";
import Mouse from "../layouts/Mouse";
import ProgressBar from "../layouts/ProgressBar";
const Projects = dynamic(() => import("../components/Projects"), {
  ssr: false,
});


function Home() {
  return (
    <div>
      <Layout>
        
        <Hero />
        <About />
        <ExpertAreas />
        <Services />
        <Projects />
        <Feedback />
        <Blog />
        <Contact />
        <Mouse />
        <ProgressBar />
      </Layout>
    </div>
  );
}

export default Home;
