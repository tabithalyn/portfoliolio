import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Skills from "./sections/Skills";

// https://youtu.be/hkHHwA-vEyQ?si=8A5k1oGCNI0K4zTC&t=8083

// https://www.creative-tim.com/twcomponents/component/navlink-button
// https://ui.aceternity.com/tools/box-shadows

function App() {

  return (
    <div className="m-0 p-0 bg-gradient-to-b from-gray-900 to-black font-lato">
    <header>
      <Header />
    </header>

    <main>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>

    <footer>
      <Footer />
    </footer>
    </div>
  );
}

export default App;
