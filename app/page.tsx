import About from "@components/home/About";
import HeaderHome from "@components/home/HeaderHome";
import Services from "@components/home/Services";
import CustomImage from "@components/ui/CustomImage";
import Recent from "@components/home/Recent";
import Testimonials from "@components/home/Testimonials";
import CTA from "@components/home/CTA";

export default function Home() {
  return (
    <div className=" bg-[#afafaf]">

      <HeaderHome />
      <About />
      <Services />
      <Recent />
      <Testimonials />
      <CTA />

    </div>
  );
}
