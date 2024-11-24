import img1 from '@@/images/home/why-choose/1.svg'
import img2 from '@@/images/home/why-choose/2.png'
import img3 from '@@/images/home/why-choose/3.png'
import img4 from '@@/images/home/why-choose/4.png'
import img5 from '@@/images/home/why-choose/5.png'
import img6 from '@@/images/home/why-choose/6.png'
import img7 from '@@/images/home/why-choose/7.png'
import img8 from '@@/images/home/why-choose/8.png'
import img9 from '@@/images/home/why-choose/9.png'
import Image from 'next/image'

const WhyChooseUs = () => {
      const whyChooseData = [
            {
                  id: 1,
                  title: "On-demand requests",
                  des: "Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1.",
                  img: img1
            },
            {
                  id: 1,
                  title: "On-demand requests",
                  des: "Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1.",
                  img: img2
            },
            {
                  id: 1,
                  title: "On-demand requests",
                  des: "Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1.",
                  img: img3
            },
            {
                  id: 1,
                  title: "On-demand requests",
                  des: "Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1.",
                  img: img4
            },
            {
                  id: 1,
                  title: "On-demand requests",
                  des: "Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1.",
                  img: img5
            },
            {
                  id: 1,
                  title: "On-demand requests",
                  des: "Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1.",
                  img: img6
            },
            {
                  id: 1,
                  title: "On-demand requests",
                  des: "Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1.",
                  img: img7
            },
            {
                  id: 1,
                  title: "On-demand requests",
                  des: "Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1.",
                  img: img8
            },
            {
                  id: 1,
                  title: "On-demand requests",
                  des: "Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1.",
                  img: img9
            },
      ]
      return (
            <div className='my-5 md:my-10 '>
                  <div className="main_container">
                        <div className="top_title_design flex flex-col items-center">
                              <p className='text-[#111204CC] font-semibold text-center uppercase text-primary'>BENEFITS</p>
                              <h2 className="text-center text-3xl md:text-5xl font-bold text-white my-3 md:my-5">
                                    Why Choose Digimatric
                              </h2>
                        </div>
                        <div className="grid py-4 md:py-10 grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
                              {
                                    whyChooseData?.map((item, i) => {
                                          return (
                                                <div key={i} className='text-white flex flex-col gap-2'>
                                                      <div className="w-10 md:w-12">
                                                            <Image
                                                                  width={100}
                                                                  src={item?.img}
                                                                  alt={item?.title}
                                                                  className="w-full"
                                                            />
                                                      </div>
                                                      <p className='font-semibold text-base md:text-lg text-[#FFFFFF]'>{i + 1}. {item.title}</p>
                                                      <p className='text-[#9593A4]'>{item.des}</p>
                                                </div>
                                          )
                                    })
                              }
                        </div>

                  </div>
            </div>
      )
}

export default WhyChooseUs