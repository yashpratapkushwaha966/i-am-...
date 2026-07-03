import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero/Hero";
import About from "../components/sections/About/About";
import Skills from "../components/sections/Skills/Skills";
import Projects from "../components/sections/Projects/Projects";
// import Experience from "../components/sections/experience/Experience";
import Contact from "../components/sections/Contact/Contact";
// import Footer from "../components/layout/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      {/* <Experience /> */}
      <Contact />
      {/* <Footer /> */}
    </>
  );
};

export default Home;