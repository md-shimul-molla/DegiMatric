import Link from "next/link";
import Clients from "../Clients/Clients";

const Banner = () => {

  return (
    <div id="banner" className="relative">
      <div className="main_container">
        <div className="banner_content flex flex-col justify-center text-white gap-4 items-center">
          <h1 className="text-2xl md:text-6xl font-bold text-center md:w-4/5">The Digital Marketing Agency for Your  <span className="text-primary">Success</span></h1>
          <p className="w-3/4 md:w-1/2 text-center text-[#FFFFFFCC]">A results-driven digital marketing agency focused on growth and innovation</p>
          <Link href="/contact"><button className="bg-primary p-3 font-semibold px-5 text-white  hover:bg-secondary hover:border transition rounded">Book A Meeting</button></Link>
          <h6 className="banner_text_design mt-3 md:mt-6 text-sm">TRUSTED BY AMAZING BRANDS</h6>
        </div>
      </div>
      <Clients></Clients>
    </div>
  );
};

export default Banner;
