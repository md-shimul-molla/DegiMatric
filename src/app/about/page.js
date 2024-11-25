import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner"
import TopGap from "@/components/Shared/TopGap/TopGap"


const page = () => {
  return (
    <div className="">
       <TopGap></TopGap>
       <SharedBanner
        title="About Us"
        description="Empowering innovation and growth through a dedicated team, delivering solutions that make a difference"
      ></SharedBanner>
    </div>
  )
}

export default page