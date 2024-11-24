import Image from "next/image";
import Link from "next/link";


const ServiceCard = ({ service }) => {
    const { id, title, des, link, icon } = service;
    return (
        <div className="service_card bg-white p-4 md:p-6 border-2 border-transparent hover:border-primary transition h-full flex flex-col gap-2 md:gap-3">
            <div className="icon w-16 md:w-20 py-2 md:py-3">
                <Image
                    src={icon}
                    alt="service-icon"
                    width={200}
                    height={200}
                    className="w-full"
                />
            </div>
            <h4 className="text-xl md:text-xl">{title}</h4>
            <p>{des}</p>
            <Link href="/contact" className="w-full p2-4 md:pt-6">
                <button className="w-full bg-primary  text-sm py-3 text-white  hover:bg-secondary transition rounded">
                    Learn More
                </button>
            </Link>
        </div>
    )
}

export default ServiceCard