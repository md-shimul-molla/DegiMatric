import Image from "next/image";

const TestimonialCard = ({ data }) => {
  const { name, post, title, des, img, client, } = data;
  return (
    <div className="px-5 md:px-40 my-5 md:my-8">
      <div className="testimonial_card flex flex-col-reverse md:flex-row items-center gap-2 md:gap-4 bg-white p-5 md:p-10  md:py-6 rounded-md md:rounded-xl relative shadow md:shadow-lg">
        <div className="left_t_content md:w-2/3">
          <div className="w-28">
            <Image
              width={100}
              src={client}
              alt={name}
              className="w-full rounded-full"
            />
          </div>
          <div className="my-1 md:py-2">
          <p className="text-[#14142B] text-base md:text-lg font-bold capitalize">{title}</p>
          <p className="text-[#111204C7] text-sm md:text-sm">{des}</p>
          </div>
          <div className="mt-2">
            <p className="text-[#111204] text-sm md:text-base font-semibold">{name}</p>
            <p className="text-[#000000] text-sm">{post}</p>
          </div>
        </div>
        <div className="right_img md:w-1/3">
          <div className="w-full">
            <Image
              width={100}
              src={img}
              alt={name}
              className="w-full rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
