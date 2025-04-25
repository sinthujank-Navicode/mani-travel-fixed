import Hero from "./components/hero";
import Subscribe from "./components/Sections/subscribe";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative  overflow-hidden">
        <Hero />
      </div>
      <div className="m-5 rounded-lg bg-white relative">
        <Subscribe />
      </div>
    </div>
  );
}
