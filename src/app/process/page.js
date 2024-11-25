import SharedBanner from "@/components/Shared/ShareBanner/ShareBanner"
import TopGap from "@/components/Shared/TopGap/TopGap"


const page = () => {
  return (
    <div className="">
      <TopGap></TopGap>
      <SharedBanner
        title="Our Process"
        description="Streamlining every stage, from development and testing to deployment, ensuring efficiency and delivering exceptional results"
      ></SharedBanner>
    </div>
  )
}

export default page