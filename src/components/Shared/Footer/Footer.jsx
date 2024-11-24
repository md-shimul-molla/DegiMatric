import logo from "@@/logo/logo.png";
import { MdOutlineEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerMenu = [
    {
      title: "Services",
      path: "/"
    },
    {
      title: "Services",
      path: "/"
    },
    {
      title: "Services",
      path: "/"
    },
    {
      title: "Services",
      path: "/"
    },
    {
      title: "Services",
      path: "/"
    },
    {
      title: "Services",
      path: "/"
    },
    {
      title: "Services",
      path: "/"
    },
  ]
  return (
    <section
      id="footer"
      className="relative bg-secondary text-sm md:text-base mt-32 md:mt-56 md:mb-0 pt-24 md:pt-44"
    >
      <div className="absolute top-[-100px] md:top-[-150px] left-0 right-0 w-full">
        <div className="main_container flex flex-col gap-3 items-center bg-[#1E2008] p-4 md:p-14 rounded-3xl text-white">
          <h3 className="text-center text-xl md:text-4xl md:w-4/5">Join the Revolution and Be Part of Our Team's Journey</h3>
          <p  className="text-center text-sm md:text-base md:w-1/2">Empower your potential, drive innovation, and join a team dedicated to creating a brighter tomorrow</p>
          <button type="button" className="flex items-center gap-2 md:mt-5 bg-primary rounded text-white p-2 px-4">
            <span>See Pricing</span>
            <span><FaArrowCircleRight /></span>
          </button>
        </div>
      </div>
      <div className="main_container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-4 pt-12 text-[#FFFFFFE5] ">
          <div className=" flex flex-col gap-3">
            <Image src={logo} alt="logo" width={200} className="w-24" />

            <p className="text-white text-sm">Digimatric - the leading digital agency based in the UK, working with top-tier clients, from start-ups to enterprises.</p>
          </div>
          <div className="flex flex-col gap-3 font-normal">
            {/* Gap  */}
          </div>
          <div className="flex flex-col gap-2  font-normal">
            {/* Gap  */}
          </div>
          <div className="flex flex-col gap-3">
            <p className="flex items-center gap-3 text-[#FFFFFFE5]">
              <span className="text-lg font-semibold">
                <MdOutlineEmail />
              </span>
              <span className="text-sm md:text-base">degimatric@gmail.com</span>
            </p>
            <p className="flex items-center gap-3 text-[#FFFFFFE5]">
              <span className="text-base font-semibold">
                <FaPhone />
              </span>
              <span className="text-sm md:text-base">+880 1844 522 115</span>
            </p>
            <div className=" flex items-center gap-3">
              <Link
                href={"https://www.facebook.com/fare.com.bd"}
                target="blank"
              >
                <span className="flex items-center justify-center hover:bg-primary text-white h-8 w-8 text-xl rounded-full font-bold shadow">
                  <FaFacebookF />
                </span>
              </Link>
              <span className="flex items-center justify-center hover:bg-primary text-white h-8 w-8 text-xl rounded-full font-bold shadow">
                <FaLinkedinIn />
              </span>
              <span className="flex items-center justify-center hover:bg-primary text-white h-8 w-8 text-xl rounded-full font-bold shadow">
                <FaSquareXTwitter />
              </span>
              <span className="flex items-center justify-center hover:bg-primary text-white h-8 w-8 text-xl rounded-full font-bold shadow">
                <FaYoutube />
              </span>
            </div>
          </div>
        </div>
        <div className="footer_border py-2 md:py-4 w-full text-[#939393] flex flex-col md:flex-row justify-between items-center gap-1 mt-4 ">
          <ul className="flex items-center gap-2 md:gap-5 text-sm font-semibold flex-wrap justify-center md:justify-start">
            {
              footerMenu.map((menu, i) => {
                return (
                  <li><Link href={menu.path} className="text-white">{menu.title}</Link></li>
                )
              })
            }
          </ul>
          <p className="text-sm text-center text-white my-2 md:mt-4">
            © 2023 shantogfx - All Right Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
