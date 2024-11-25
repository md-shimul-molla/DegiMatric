import Banner from "./Banner/Banner"
import CaseStudies from "./CaseStudies/CaseStudies"
import FAQ from "./FAQ/FAQ"
import HowWeWork from "./HowWeWork/HowWeWork"
import NewsAndArticles from "./NewsAndArtical/NewsAndArtical"
import OurPrices from "./OurPriceing/OurPriceing"
import OurWorks from "./OurWorks/OurWorks"
import Services from "./Services/Services"
import ClientTestimonial from "./Testimonial/Testimonial"
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs"


const HomePage = async () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <div className="bg-secondary my-3 md:my-10 py-4 md:py-10">
        <HowWeWork></HowWeWork>
        <OurWorks></OurWorks>
      </div>
      <ClientTestimonial></ClientTestimonial>
      <div className="bg-secondary mt-3 md:mt-10 py-4 md:py-5">
        <OurPrices></OurPrices>
        <WhyChooseUs></WhyChooseUs>
      </div>
      <CaseStudies></CaseStudies>
      <NewsAndArticles></NewsAndArticles>
       <FAQ></FAQ>
    </div>
  )
}

export default HomePage