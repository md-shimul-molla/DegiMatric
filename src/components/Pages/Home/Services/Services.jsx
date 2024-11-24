import img1 from '@@/images/home/service/1.png'
import img2 from '@@/images/home/service/2.png'
import img3 from '@@/images/home/service/3.png'
import img4 from '@@/images/home/service/4.png'
import img5 from '@@/images/home/service/5.png'
import img6 from '@@/images/home/service/6.png'
import { FaArrowCircleRight } from "react-icons/fa";
import ServiceCard from './ServiceCard'

const Services = () => {
    const servicesData = [
        {
            id: 1,
            title: "Digital Marketing",
            des: "At Digimatric, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
            icon: img1,
            link: "/"
        },
        {
            id: 1,
            title: "Search Engine Optimization-SEO",
            des: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
            icon: img2,
            link: "/"
        },
        {
            id: 1,
            title: "Development",
            des: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
            icon: img3,
            link: "/"
        },
        {
            id: 1,
            title: "Design",
            des: "At Digimatric, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
            icon: img4,
            link: "/"
        },
        {
            id: 1,
            title: "Social Media Marketing",
            des: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
            icon: img5,
            link: "/"
        },
        {
            id: 1,
            title: "Content Marketing",
            des: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
            icon: img6,
            link: "/"
        }
    ]
    return (
        <div className='my-5 md:my-10 pt-8 md:pt-8'>
            <div className="main_container">
                <div className="top_title_design flex flex-col items-center">
                    <h2 className="text-center text-3xl md:text-5xl font-bold text-[#111204] my-3 md:my-5">
                        Our Service
                    </h2>
                    <p className='text-[#111204CC] text-center w-full md:w-2/5'>We help our clients grow their bottom-line with clear and professional websites.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 pt-3 md:pt-6">
                    {
                        servicesData?.map((service, i) => {
                            return (
                                <ServiceCard key={i} service={service}></ServiceCard>
                            )
                        })
                    }
                </div>
                <div className="flex items-center justify-center pt-3">
                <button type="button" className="flex items-center gap-2 md:mt-5 bg-primary hover:bg-secondary hover:text-white rounded shadow p-2 px-4">
            <span>Load More</span>
            <span><FaArrowCircleRight /></span>
          </button>
                </div>
            </div>
        </div>
    )
}

export default Services