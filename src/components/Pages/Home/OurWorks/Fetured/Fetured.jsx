import img1 from '@@/images/home/our-work/1.png'
import img2 from '@@/images/home/our-work/2.png'
import img3 from '@@/images/home/our-work/3.png'
import img4 from '@@/images/home/our-work/4.png'
import img5 from '@@/images/home/our-work/5.png'
import img6 from '@@/images/home/our-work/6.png'
import WorkCard from '../WorkCard'

const Featured = () => {
      const ourWorksData = [
            {
              id: 1,
              img: img1
            },
            {
              id: 1,
              img: img2
            },
            {
              id: 1,
              img: img3
            },
            {
              id: 1,
              img: img4
            },
            {
              id: 1,
              img: img5
            },
            {
              id: 1,
              img: img6
            },
          ]
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
      {
          ourWorksData?.map((service, i) => {
              return (
                  <WorkCard
                      key={i}
                      service={service}
                  ></WorkCard>
              )
          })
      }
  </div>
  )
}

export default Featured