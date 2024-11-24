import { FaArrowCircleRight } from "react-icons/fa";
import PriceCard from "./PriceCard";

const OurPrices = () => {
      const pricesData = [
            {
                  id: 1,
                  name: "Standard",
                  label: "Most Popular",
                  des: "One request at a time. For companies who need on-going design support.",
                  price: "2,995",
                  condition: "Pause or cancel anytime",
                  phone: "01984673672",
                  facilities: [
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                  ]
            },
            {
                  id: 1,
                  name: "Growth",
                  label: "Most Popular",
                  des: "One request at a time. For companies who need on-going design support.",
                  price: "2,995",
                  condition: "Pause or cancel anytime",
                  phone: "01984673672",
                  facilities: [
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                  ]
            },
            {
                  id: 1,
                  name: "Basic - Weekly",
                  label: "",
                  des: "One request at a time. For companies who need on-going design support.",
                  price: "2,995",
                  condition: "Pause or cancel anytime",
                  phone: "01984673672",
                  facilities: [
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                        {
                              id: 1,
                              facility: "1x active task at a time"
                        },
                  ]
            },
      ]
      return (
            <div className='my-5 md:my-10 '>
                  <div className="main_container">
                        <div className="top_title_design flex flex-col items-center">
                              <p className='text-[#111204CC] font-semibold text-center uppercase text-primary'>Clear & Simple Pricing</p>
                              <h2 className="text-center text-3xl md:text-5xl font-bold text-white my-3 md:my-5">
                                    Simple pricing to boost your brand
                              </h2>
                              <p className='text-[#FFFFFFCC] text-center w-full md:w-2/5'>Senior experts. On-demand requests. Fast
                                    turnarounds. Flat monthly fee. Cancel anytime.</p>
                        </div>
                        <div className="grid py-4 md:py-10 grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
                              {
                                    pricesData?.map((price, i) => {
                                          return (
                                                <PriceCard
                                                      key={i}
                                                      data={price}
                                                ></PriceCard>
                                          )
                                    })
                              }
                        </div>
                        
                  </div>
            </div>
      )
}

export default OurPrices