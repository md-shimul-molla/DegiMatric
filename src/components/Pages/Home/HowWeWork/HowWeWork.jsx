import { BsFillRocketTakeoffFill } from "react-icons/bs";

const HowWeWork = () => {
  const one = <BsFillRocketTakeoffFill />;
  const two = <BsFillRocketTakeoffFill />;
  const three = <BsFillRocketTakeoffFill />;
  const data = [
    {
      id: 1,
      title: "Subscribe & get started",
      icon: one,
      des: "Submit as many design tasks as you need without worrying about individual project fees."
    },
    {
      id: 1,
      title: "Subscribe & get started",
      icon: one,
      des: "Submit as many design tasks as you need without worrying about individual project fees."
    },
    {
      id: 1,
      title: "Subscribe & get started",
      icon: one,
      des: "Submit as many design tasks as you need without worrying about individual project fees."
    },
  ]
  return (
    <div className='main_container py-3'>
      <h6 className='text-primary'>How We Work</h6>
      <div className="top_section grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
        <div className="top_left">
          <h2 className="text-3xl md:text-5xl font-semibold text-white my-3 md:my-5">
            Build a dedicated team for a fraction of the usual
            cost
          </h2>
        </div>
        <div className="top_right">
          <p className='text-[#FFFFFFCC] text-xl py-2 md:py-5'>Grow your brand with high-quality design for a flat monthly fee. Work with senior designers. Subscribe and make as many requests as you need - no limits.</p>
          <button type="button" className=" mt-2 md:mt-3 bg-primary hover:bg-secondary hover:text-white rounded shadow p-2 px-4">
            See Pricing
          </button>
        </div>
      </div>
      <div className="bottom_section pt-8 md:pt-20 grid grid-cols-1 md:grid-cols-3 gap-5">
        {
          data?.map((item, i) => {
            return (
              <div key={i} className="w-full flex flex-col gap-2 md:gap-4 text-white">
                <div className="flex justify-center items-center text-3xl md:text-4xl rounded-full md:w-20 md:h-20 w-14 h-14 bg-primary text-black">
                  {item.icon}
                </div>
                <p className="text-xl font-semibold">{item.title}</p>
                <p className="text-[#FFFFFFCC]">{item.des}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default HowWeWork;