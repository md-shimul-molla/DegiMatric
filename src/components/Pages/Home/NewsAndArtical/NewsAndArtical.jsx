
import img1 from "@@/images/home/article/1.png";
import img2 from "@@/images/home/article/2.png";
import img3 from "@@/images/home/article/3.png";
import img4 from "@@/images/home/article/4.png";
import img5 from "@@/images/home/article/5.png";
import img6 from "@@/images/home/article/6.png";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const NewsAndArticles = () => {
      const articleData = [
            {
                  id: 1,
                  title: "What is the branding, and what we need it?",
                  description: "On the other hand, we denounce with righteous indignation and…",
                  category: "Branding",
                  img: img1,
                  slag: "/blog/what-is-the-branding"
            },
            {
                  id: 1,
                  title: "What is the branding, and what we need it?",
                  description: "On the other hand, we denounce with righteous indignation and…",
                  category: "Branding",
                  img: img2,
                  slag: "/blog/what-is-the-branding"
            },
            {
                  id: 1,
                  title: "What is the branding, and what we need it?",
                  description: "On the other hand, we denounce with righteous indignation and…",
                  category: "Branding",
                  img: img3,
                  slag: "/blog/what-is-the-branding"
            },
            {
                  id: 1,
                  title: "What is the branding, and what we need it?",
                  description: "On the other hand, we denounce with righteous indignation and…",
                  category: "Branding",
                  img: img4,
                  slag: "/blog/what-is-the-branding"
            },
            {
                  id: 1,
                  title: "What is the branding, and what we need it?",
                  description: "On the other hand, we denounce with righteous indignation and…",
                  category: "Branding",
                  img: img5,
                  slag: "/blog/what-is-the-branding"
            },
            {
                  id: 1,
                  title: "What is the branding, and what we need it?",
                  description: "On the other hand, we denounce with righteous indignation and…",
                  category: "Branding",
                  img: img6,
                  slag: "/blog/what-is-the-branding"
            },
      ]

      return (
            <section className="py-5 md:py-10">
                  <div className="main_container">
                        <div className="top_title_design flex flex-col items-center">
                              <p className='text-[#111204CC] font-semibold text-center uppercase text-primary'>blogs</p>
                              <h2 className=" w-full text-center text-3xl md:text-5xl font-bold text-[#111204] my-2">
                                    News & Articles
                              </h2>
                              <p className='text-[#111204CC] text-center w-full md:w-2/5'>Best Articles to get started</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 pt-3 md:pt-6 gap-3 md:gap-6">
                              {
                                    articleData.map((article, i) => {
                                          return (
                                                <div key={i} className="flex flex-col md:flex-row  md:shadow rounded md:rounded-xl">
                                                      <div className="left_image w-full md:w-2/5">
                                                            <Image
                                                                  src={article?.img}
                                                                  alt={article?.title}
                                                                  width={300}
                                                                  height={200}
                                                                  className="w-full rounded-t md:rounded-xl"
                                                            />
                                                      </div>
                                                      <div className="right_article py-3 md:p-4 flex flex-col gap-2 w-full md:w-3/5">
                                                            <p className="text-primary uppercase">{article.category}</p>
                                                            <Link href={article.slag} className="cursor-pointer"><h4 className="hover:text-primary transition text-[#111204] text-xl">{article.title}</h4></Link>
                                                            <p>{article.description}</p>
                                                      </div>
                                                </div>
                                          )
                                    })
                              }
                        </div>
                        <div className="flex items-center justify-center pt-3">
                              <button type="button" className="flex items-center gap-2 md:mt-5 bg-primary hover:bg-secondary hover:text-white rounded shadow p-2 px-4">
                                    <span>Load More</span>
                                    <span><FaArrowCircleRight /></span>
                              </button>
                        </div>
                  </div>
            </section>
      );
};

export default NewsAndArticles;
