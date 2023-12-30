import "./App.css";
import "./styles/style.css";
import Header from "./components/Header.jsx";
import SecondPart from "./components/SecondPart.jsx";
import CategoriesHome from "./components/Categories.jsx";
import About from "./components/AboutUs.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Gallery from "./components/Gallery.jsx";
import Brands from "./components/Brands.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <SecondPart />
      <CategoriesHome />
      <About />
      <Testimonial />
      <Gallery />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
