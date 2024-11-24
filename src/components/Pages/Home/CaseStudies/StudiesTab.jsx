"use client"
import { useState } from 'react'
import img1 from '@@/images/home/case-studies/left-logo/1.png'
import img2 from '@@/images/home/case-studies/left-logo/2.png'
import img3 from '@@/images/home/case-studies/left-logo/3.png'
import img4 from '@@/images/home/case-studies/left-logo/4.png'
import Image from 'next/image'

const StudiesTab = () => {
      const tabData = [
            {
                  id: 1,
                  name: "",
                  logo: img1
            },
            {
                  id: 2,
                  name: "",
                  logo: img2
            },
            {
                  id: 3,
                  name: "",
                  logo: img3
            },
            {
                  id: 4,
                  name: "",
                  logo: img4
            },
      ]
      // State to track the active tab
      const [activeTab, setActiveTab] = useState(1);
      const handleTabActive = (tab) => {
            setActiveTab(tab.id)
      
      }
      return (
            <div className=' py-5 md:py-10'>
                  {tabData.map((tab) => (
                        <div
                              key={tab.id}
                              onClick={() => handleTabActive(tab)} // Set active tab on click
                              className={`studies_tab flex justify-center items-center p-3 md:p-5 cursor-pointer  border-t-4 ${activeTab === tab.id ? "border-primary bg-[#fafafa4c]" : " border-white"
                                    }`}
                        >
                              <div className="w-1/4">
                                    <Image
                                          width={300}
                                          src={tab?.logo}
                                          alt={"client-img"}
                                          className="w-full rounded-full"
                                    />
                              </div>

                        </div>
                  ))}
            </div>
      )
}

export default StudiesTab