import Hero from "./components/hero";
import Subscribe from "./components/Sections/subscribe";
import OurService from "./components/Sections/ourService";
import ContactUs from "./components/Sections/ContactUs";

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
        <ContactUs />
      </div>
      <div id="subscribe" className="m-5 -mt-1 rounded-lg bg-white relative">
        <Subscribe />
      </div>
    </div>
  );
}
