import Hero from "./components/hero";
import Subscribe from "./components/Sections/subscribe";
import OurService from "./components/Sections/ourService";
import AboutUs from "./components/Sections/AboutUs";

export default function Home() {
  return (
    <div className="relative">
      <div id="home" className="relative overflow-hidden">
        <Hero />
      </div>
      <div id="service">
        <OurService />
      </div>
      <div id="AboutUs" className=" rounded-lg bg-white relative -mb-8">
        <AboutUs />
      </div>
      <div id="subscribe" className="m-5 -mt-1 rounded-lg bg-white relative">
        <Subscribe />
      </div>
    </div>
  );
}
