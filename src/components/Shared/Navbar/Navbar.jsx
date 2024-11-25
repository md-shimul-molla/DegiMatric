"use client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import logo from "@@/logo/logo.png";
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isRoot, setIsRoot] = useState(true);
  // const router = useRouter();
  const pathname = usePathname()

  useEffect(() => {
    setIsRoot(pathname === '/');
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navData = [
    {
      path: "/",
      title: "Home",
      subManu: []
    },
    {
      path: "/services",
      title: "Services",
      subManu: [
        {
          path: "/products",
          title: "All Products",
        },
        {
          path: "/products/passenger-elevator",
          title: "Passenger Elevator",
        },
        {
          path: "/products/home-elevator",
          title: "Home Elevator",
        },
        {
          path: "/products/panramic-elevator",
          title: "Panoramic Elevator",
        },
        {
          path: "/products/bed-elevator",
          title: "Bed Elevator",
        },
        {
          path: "/products/freight-elevator",
          title: "Freight Elevator",
        },
        {
          path: "/products/car-elevator",
          title: "Car Elevator",
        },
        {
          path: "/products/dumbwaiter-elevator",
          title: "Dumbwaiter Elevator",
        },
        {
          path: "/products/capsule-elevator",
          title: "Capsule Elevator",
        },
        {
          path: "/products/escalator",
          title: "Escalator",
        },
        {
          path: "/products/moving-walway",
          title: "Moving Walkway",
        },
      ]
    },
    {
      path: "/works",
      title: "Works",
      subManu: []
    },
    {
      path: "/process",
      title: "Process",
      subManu: []
    },
    {
      path: "/about",
      title: "About",
      subManu: []
    },
    {
      path: "/blog",
      title: "Blog",
      subManu: []
    },
    {
      path: "/case-studies",
      title: "Case Studies",
      subManu: []
    },
    {
      path: "/testimonial",
      title: "Testimonial",
      subManu: []
    },
    {
      path: "/career",
      title: "Career",
      subManu: []
    },
    {
      path: "/contact",
      title: "Contact",
      subManu: []
    },
  ];

  return (
    <nav className={`z-50  w-full fixed top-0 left-0 right-0 py-3 lg:py-0 pt-5 ${isSticky ? " bg-secondary nav_shadow" : "bg-[#00000000] "}`}>
    <div className={`main_container flex justify-between items-center  ${isSticky ? "" : "navber_border"}`}>
      {/* Logo side here >>>>>>>>>>>>>>>> */}
      <div className="">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={600}
            placeholder="blur"
            className="w-20"
            sizes="100vw"
          />
        </Link>
      </div>
      {/* NAv manu side here >>>>>>>>>>>>>>>> */}
      <div className={`absolute ${navToggle ? "left-0" : "left-[-120%]  "
        } top-[4.5rem] flex w-full flex-col pb-3 pt-2 transition-all duration-300  lg:static lg:w-[unset] lg:flex-row bg-[#000000c0] lg:bg-transparent lg:pb-0 lg:pt-0 `}
      >
        <ul className="nav_manu flex pl-10 md:pl-0 flex-col lg:flex-row items-start md:items-center justify-center py-1 gap-0 px-1 text-white">
          {navData.map(({ path, title, subManu }) => (
            <li key={path} className="relative">
              <NavLink
                onClick={() => setNavToggle(false)}
                href={path}
                activeClassName="text-primary bg-[#262626]"
                exact={path === "/"}
                className="flex items-center text-base font-semibold gap-2 p-3 py-5"
              >
                {title}
                {
                  subManu.length > 0 &&
                  <span className="arrow"></span>
                }
              </NavLink>
              {
                subManu?.length > 0 &&
                <ul className="sub_nav_manu  z-10 shadow-lg absolute top-7 md:top-16  left-14 md:left-[-15px] w-60 h-auto bg-secondary p-1 text-white ">
                  <div className="lll relative">
                    <span className="absolute -z-50 top-[-10px]  rotate-45 left-5 bg-secondary h-5 w-5 "></span>
                  </div>
                  {subManu?.map(({ path, title }) => (
                    <li key={path} className="mx-auto z-40 hover:bg-white  px-4 p-2">
                      <NavLink
                        onClick={() => setNavToggle(false)}
                        href={path}
                        activeClassName=""
                        exact={path === "/"}
                      >
                        {title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              }

            </li>
          ))}
        </ul>
      </div>
      {/* Right side here >>>>>>>>>>>>>>>> */}
      <div className="right_side hidden lg:block">
        <div className="flex justify-end items-center mt-2">
          <Link href="/contact"><button className="btn-active btn-primary btn-sm text-xs px-5 text-white  hover:bg-secondary transition rounded">Get Started</button></Link>
        </div>
      </div>
      {/* Right toggle bar for mobile  */}
      <label className="swap-rotate swap   bg-white rounded-full h-9 w-9  lg:hidden">
        <input
          checked={navToggle}
          onChange={() => setNavToggle((pre) => !pre)}
          type="checkbox"
        />
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
    </div>
  </nav>
  );
};

export default Navbar;
