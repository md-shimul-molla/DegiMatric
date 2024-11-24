import img1 from '@@/images/home/client/1.png'
import img2 from '@@/images/home/client/2.png'
import img3 from '@@/images/home/client/3.png'
import img4 from '@@/images/home/client/4.png'
import img5 from '@@/images/home/client/5.png'
import Image from 'next/image'

const Clients = () => {
    const data = [
        {
            id: 1,
            title: "",
            img: img1
        },
        {
            id: 1,
            title: "",
            img: img2
        },
        {
            id: 1,
            title: "",
            img: img3
        },
        {
            id: 1,
            title: "",
            img: img4
        },
        {
            id: 1,
            title: "",
            img: img5
        },
    ]
    return (
        <div className='absolute bottom-[-50px] left-0 right-0 w-full'>
            <div className="main_container bg-[#222222] rounded-2xl shadow p-6 md:px-14">
                <div className="grid grid-cols-5 gap-3 md:gap-10 items-center">
                    {
                        data.map((item, i) => {
                            return (
                                <div key={i} className=''>
                                    <Image
                                        src={item?.img}
                                        alt="logo"
                                        width={300}
                                        height={200}
                                        className="w-full"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Clients