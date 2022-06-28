import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Navigation from "./components/header/Navigation";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
