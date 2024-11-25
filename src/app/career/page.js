import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

const page = () => {

    return (
        <div className="">
           <TopGap></TopGap>
           <SharedBanner
        title="Join Our Team at Digimatric"
        description="Explore insightful articles, tips, and stories about education, travel, and success to guide your journey abroad"
      ></SharedBanner>
        </div>
    )
}

export default page;