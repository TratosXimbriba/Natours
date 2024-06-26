import FeaturesSection from "./layout/FeaturesSection";
import Header from "./layout/Header";
import AboutSection from "./layout/AboutSection";
import ToursSection from "./layout/ToursSection";

/*
color-primary: #55c57a
color-primary-light: #7ed56f
color-primary-dark: #28b485 

color-secondary-light: #ffb900
color-secondary-dark: #ff7730

color-tertiary-light: #2998ff
color-tertiary-dark: #5643fa

color-grey-light: #f7f7f7

color-grey-dark: #777
color-white: #fff
color-dark: #000


*/

function App() {
  return (
    <div className="p-7">
      <Header />
      <AboutSection />
      <FeaturesSection />
      <ToursSection />
    </div>
  );
}

export default App;
