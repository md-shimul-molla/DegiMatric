import ClientTestimonial from "@/components/Pages/Home/Testimonial/Testimonial";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

const page = () => {

    return (
        <div className="">
       <TopGap></TopGap>
       <SharedBanner
        title="Testimonials"
        description="Explore insightful articles, tips, and stories about education, travel, and success to guide your journey abroad"
      ></SharedBanner>
       <ClientTestimonial></ClientTestimonial>
        </div>
    )
}

export default page;