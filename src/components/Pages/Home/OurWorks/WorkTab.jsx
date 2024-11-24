"use client";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { ImStarEmpty } from "react-icons/im";
import { CgWebsite } from "react-icons/cg";
import { FaMobileAlt } from "react-icons/fa";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { MdOutlinePermMedia } from "react-icons/md";
import Featured from "./Fetured/Fetured";

const WorkTab = () => {
      const tab1 = <ImStarEmpty />;
      const tab2 = <CgWebsite />;
      const tab3 = <FaMobileAlt />;
      const tab4 = <TbDeviceDesktopAnalytics />;
      const tab5 = <MdOutlinePermMedia />;

      const tabData = [
            { id: 1, title: "Featured", icon: tab1 },
            { id: 2, title: "Website", icon: tab2 },
            { id: 3, title: "Mobile app", icon: tab3 },
            { id: 4, title: "Graphic design", icon: tab4 },
            { id: 5, title: "Social media", icon: tab5 },
      ];

      // State to track the active tab
      const [activeTab, setActiveTab] = useState(1);

      return (
            <div className="show_work">
                  <div className="tab_section flex flex-wrap items-center justify-center py-2 md:py-5">
                        {tabData.map((tab) => (
                              <div
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)} // Set active tab on click
                                    className={`w_tab relative flex flex-col items-center p-3 md:p-5 cursor-pointer gap-2 text-white ${activeTab === tab.id ? "bg-gradient-to-t from-[#2ECC71] to-[#176639]" : "bg-transparent"
                                          }`}
                              >
                                    <p className="text-center text-2xl md:text-3xl">{tab.icon}</p>
                                    <p className="text-center text-sm md:text-lg pb-2">{tab.title}</p>
                                    {
                                          activeTab === tab.id && <span className="absolute bottom-[-4px] md:bottom-[2px] left-1/3  text-4xl"><IoMdArrowDropdown /></span>
                                    }

                              </div>
                        ))}
                  </div>
                  {
                        activeTab === 1 && <Featured></Featured>
                  }
                  {
                        activeTab === 2 && <p className="text-2xl font-semibold text-white text-center py-10">No Data Found!</p>
                  }
                  {
                        activeTab === 3 && <p className="text-2xl font-semibold text-white text-center py-10">No Data Found!</p>
                  }
                  {
                        activeTab === 4 && <p className="text-2xl font-semibold text-white text-center py-10">No Data Found!</p>
                  }
                  {
                        activeTab === 5 && <p className="text-2xl font-semibold text-white text-center py-10">No Data Found!</p>
                  }
            </div>
      );
};

export default WorkTab;
