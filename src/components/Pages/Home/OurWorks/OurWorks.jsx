import { FaArrowCircleRight } from "react-icons/fa";
import WorkCard from './WorkCard'
import WorkTab from './WorkTab'

const OurWorks = () => {

    return (
        <div className='my-5 md:my-10 '>
            <div className="main_container">
                <div className="top_title_design flex flex-col items-center">
                    <h2 className="text-center text-3xl md:text-5xl font-bold text-white my-3 md:my-5">
                    Our Works
                    </h2>
                    <p className='text-[#FFFFFFCC] text-center w-full md:w-2/5'>We help our clients grow their bottom-line with clear and professional websites.</p>
                </div>
               <WorkTab></WorkTab>
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
                    {
                        ourWorksData?.map((service, i) => {
                            return (
                                <WorkCard
                                    key={i}
                                    service={service}
                                ></WorkCard>
                            )
                        })
                    }
                </div> */}
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

export default OurWorks