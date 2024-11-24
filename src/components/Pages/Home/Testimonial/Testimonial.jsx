
import img1 from "@@/images/home/testimonial/1.png";
import client from "@@/images/home/testimonial/client-logo.png";
import TestimonialSlider from "./TestimonialSlider";

const ClientTestimonial = () => {
  const testimonialData = [
    {
      id: 1,
      img: img1,
      client: client,
      name: "Arafat Chowdhury",
      post: "Director of Gymstory",
      title: "Digimatric is the best digital agency i have ever seen! Highly Recommended!",
      des: "I recently hired Ideapeel for a custom web development project and couldn't be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out."
    },
    {
      id: 1,
      img: img1,
      client: client,
      name: "Arafat Chowdhury",
      post: "Director of Gymstory",
      title: "Digimatric is the best digital agency i have ever seen! Highly Recommended!",
      des: "I recently hired Ideapeel for a custom web development project and couldn't be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out."
    },
    {
      id: 1,
      img: img1,
      client: client,
      name: "Arafat Chowdhury",
      post: "Director of Gymstory",
      title: "Digimatric is the best digital agency i have ever seen! Highly Recommended!",
      des: "I recently hired Ideapeel for a custom web development project and couldn't be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out."
    }
  ]

  return (
    <section className="py-5 md:py-10">
      <div className="main_container">
      <div className="top_title_design flex flex-col items-center">
                    <p className='text-[#111204CC] font-semibold text-center uppercase text-primary'>testimonial</p>
                    <h2 className=" w-full md:w-2/5 text-center text-3xl md:text-5xl font-bold text-[#111204] my-2">
                    Customers Are Our Highest Priority
                    </h2>
                    <p className='text-[#111204CC] text-center w-full md:w-2/5'>Your feedback shapes our commitment to excellence</p>
                </div>
        <TestimonialSlider
          testimonialData={testimonialData}
        ></TestimonialSlider>
      </div>
    </section>
  );
};

export default ClientTestimonial;
