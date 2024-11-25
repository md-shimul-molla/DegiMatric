import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner";
import TopGap from "@/components/Shared/TopGap/TopGap";

const page = () => {

    return (
        <div className="">
           <TopGap></TopGap>
           <SharedBanner
        title="Our Works"
        description="Unveil a portfolio of beautifully designed and strategically executed digital projects that demonstrate our creativity and proficiency"
      ></SharedBanner>
        </div>
    )
}

export default page;