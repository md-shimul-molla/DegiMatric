import Image from "next/image"
import StudiesTab from "./StudiesTab"
import { FaArrowCircleRight } from "react-icons/fa";
import img from '@@/images/home/case-studies/left-logo/1.png'

const CaseStudies = () => {
      const tab = 1
      const data = {

      }
      return (
            <div className="mb-5 md:mb-10">
                  <div className="main_container">
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-2 md:gap-5">
                              <div className="case_studies_left py-2 md:py-4 md:col-span-2">
                                    <h2 className="text-center text-3xl md:text-5xl font-bold text-white my-3 md:my-5">
                                          Case S<span className="text-primary">tudies</span>
                                    </h2>
                                    <StudiesTab></StudiesTab>
                              </div>
                              <div className="md:col-span-4">
                                    {
                                          tab == 1 &&
                                          <div className="md:p-5">
                                                <div className="top_item py-2 md:my-10 text-base md:text-lg flex flex-col md:items-end">
                                                      <p>From Concept To Market:</p>
                                                      <p><span>We Engineer Projects For</span> <span className="text-primary">Superior Performance</span></p>
                                                </div>
                                                <div className="center_item py-2 text-sm md:text-base grid grid-cols-1 md:grid-cols-2 gap-3">
                                                      <div className="flex items-center gap-2">
                                                            <div className="flex items-center justify-center w-20 h-20 bg-primary p-2 md:p-3 md:w-28 md:h-28">
                                                                  <Image
                                                                        width={100}
                                                                        src={img}
                                                                        alt={"client-logo"}
                                                                        className="w-full"
                                                                  />
                                                            </div>
                                                            <p className="h-1 w-1/2 bg-primary"></p>
                                                      </div>
                                                      <div className="">
                                                            <p>Zapier needed to implement a global rewards program.</p>
                                                            <p><span>In 6 months,</span> <span className="">we achieved:</span></p>
                                                      </div>
                                                </div>
                                                <div className="center_item my-2 md:my-4 py-2 text-sm md:text-base grid grid-cols-2 md:grid-cols-2 gap-3">
                                                      <div className="">
                                                            <h4 className="flex items-end text-primary text-7xl md:text-9xl"><span className="">40</span> <span className="pb-3 text-3xl md:text-6xl">K</span></h4>
                                                            <p className="text-[#111204]">active members inside the program</p>
                                                      </div>
                                                      <div className="">
                                                            <h4 className="flex items-end text-primary text-7xl md:text-9xl"><span className="">56</span> <span className="pb-3 text-3xl md:text-6xl">%</span></h4>
                                                            <p className="text-[#111204]">of customers are repeat customers</p>
                                                      </div>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 lg:pr-12">
                                                      <button type="button" className="flex items-center justify-center gap-2 md:mt-5 bg-primary rounded p-2 px-4">
                                                            <span>Read HP Case Study</span>
                                                            <span><FaArrowCircleRight /></span>
                                                      </button>
                                                      <button type="button" className="flex items-center justify-center gap-2 md:mt-5 bg-primary rounded p-2 px-4">
                                                            <span>Start Your Project</span>
                                                            <span><FaArrowCircleRight /></span>
                                                      </button>
                                                </div>
                                          </div>
                                    }
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default CaseStudies