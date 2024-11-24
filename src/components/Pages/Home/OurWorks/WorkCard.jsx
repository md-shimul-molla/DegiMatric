import Image from "next/image";
import Link from "next/link";


const WorkCard = ({ service }) => {
    const { img } = service;
    return (
        <div className="work_card border border-primary transition h-full">
            <Image
                src={img}
                alt="service-icon"
                width={200}
                height={200}
                className="w-full"
            />
        </div>
    )
}

export default WorkCard