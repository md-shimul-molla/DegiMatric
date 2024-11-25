import ContactForm from "@/components/Pages/Home/ContactForm/ContactForm";
import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";
const page = () => {

    return (
        <div className="">
            <TopGap></TopGap>
            <SharedBanner
                title="Contact Us"
                description="Explore insightful articles, tips, and stories about education, travel, and success to guide your journey abroad"
            ></SharedBanner>
            <ContactForm></ContactForm>
        </div>
    )
}

export default page;