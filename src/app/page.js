import Hero from "./components/home/hero";
import Impact from "./components/home/impact";
import Info from "./components/home/info";
import Partners from "./components/home/partners";
import Register from "./components/home/resgister";
import Benefits from "./components/home/benefits";
import Footer from "./components/common/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Impact />
      <Info />
      <Partners />
      <Register />
      <Benefits />
      <Footer /> 
    </>
  );
}
