import { FaCheck } from "react-icons/fa";

const PriceCard = ({ data }) => {
      const { id, name, label, des, price, condition, phone, facilities } = data;
      return (
            <div className="bg-[#222222] rounded md:rounded-lg flex flex-col gap-2 p-3 md:p-6 border border-primary hover:border-white transition">
                  <div className="flex items-center gap-2">
                        <p className="text-white text-xl md:text-3xl font-semibold">{name}</p>
                       { label &&
                         <p className={`bg-primary ${label == "Growth" && "bg-white"} rounded p-2 px-4 text-xs md:sm`}>{label}</p>
                       }
                  </div>
                  <p className="text-[#FFFFFFCC] border-b border-primary py-2 md:py-4 text-sm">{des}</p>
                  <h6 className="text-2xl md:text-4xl font-semibold text-primary pt-2">${price}/m</h6>
                  <p className="text-[#FFFFFFCC] border-b border-primary pb-2 md:pb-5 text-sm">{condition}</p>
                  <ul className="flex flex-col gap-2 md:gap-3 py-2">
                        {
                              facilities?.map((item, i) => {
                                    return (
                                          <li className="flex gap-2 md:gap-3">
                                                <span className="text-primary"><FaCheck /></span>
                                                <span className="text-white">{item.facility}</span>
                                          </li>
                                    )
                              })
                        }
                  </ul>
                  <div className="w-full flex flex-col gap-2 pt-3 md:pt-5">
                        <button type="button" className="w-full border-2 border-primary bg-transparent text-white hover:bg-primary hover:text-black rounded shadow p-2 px-4">
                        Book A Call
                        </button>
                        <button type="button" className="w-full  border-2 border-primary bg-primary hover:bg-white hover:text-black rounded shadow p-2 px-4">
                              Click to buy
                        </button>
                  </div>
            </div>
      )
}

export default PriceCard