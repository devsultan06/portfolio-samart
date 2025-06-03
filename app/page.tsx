import About from "@components/home/About";
import Explore from "@components/home/Explore";
import FaqBox from "@components/home/FaqBox";
import HeaderHome from "@components/home/HeaderHome";
import Marque from "@components/layout/Marque";
import Services from "@components/home/Services";
import CustomImage from "@components/ui/CustomImage";
import Recent from "@components/home/Recent";

export default function Home() {
  return (
    <div className=" ">

      <HeaderHome />
      <About />
      <Services/>
      <Recent/>

    </div>
  );
}
