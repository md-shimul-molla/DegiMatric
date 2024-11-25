"use client"
import Image from "next/image";
import icon from "@@/images/home/faq/faq-icon.png";
import { useState } from "react";

const FAQ = () => {
  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "What services does Digimatric provide?",
      answer:
        "Digimatric offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    },
    {
      id: 2,
      question: "How can Digimatric help my business?",
      answer: "We provide tailored solutions to enhance your digital presence and streamline operations.",
    },
    {
      id: 3,
      question: "What industries does Digimatric work with?",
      answer: "We work with industries such as healthcare, finance, retail, education, and more.",
    },
    {
      id: 4,
      question: "How long does it take to complete a project with Digimatric?",
      answer: "The duration varies depending on project scope and requirements.",
    },
    {
      id: 5,
      question: "Do you offer ongoing support and maintenance after the project is completed?",
      answer: "Yes, we provide ongoing support and maintenance tailored to your needs.",
    },
    {
      id: 6,
      question: "Can you work with existing design or development frameworks?",
      answer: "Absolutely, we can integrate with your current frameworks.",
    },
    {
      id: 7,
      question: "How involved will I be in the project development process?",
      answer: "We ensure active client involvement to align the project with your vision.",
    },
    {
      id: 8,
      question: "Can you help with website or app maintenance and updates?",
      answer: "Yes, we offer comprehensive maintenance and update services.",
    },
  ];

  // State for active FAQ
  const [activeFAQ, setActiveFAQ] = useState(null);

  // Toggle active FAQ
  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <div className="py-8 md:py-16 bg-secondary mt-3 md:mt-10">
      <div className="main_container">
        <div className="top_title_design flex flex-col items-center">
          <h2 className="text-center text-3xl md:text-5xl font-bold text-white my-3 md:mb-5">
            FAQ's
          </h2>
          <p className='text-[#FFFFFFCC] text-center w-full md:w-2/5'>Senior experts. On-demand requests. Fast
            Providing answers to your questions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5 md:pt-10">
          {faqs?.map((faq) => (
            <div
              key={faq.id}
              className={`border border-gray-700 p-5 rounded-lg cursor-pointer transition ${activeFAQ === faq.id ? "bg-gray-800" : "bg-gray-900"
                }`}
              onClick={() => toggleFAQ(faq.id)}
            >
              <div className="flex justify-between items-center">
                <h2
                  className={`text-xl font-medium ${activeFAQ === faq.id ? "text-green-400" : "text-white"
                    }`}
                >
                  {faq.id < 10 ? `0${faq.id}` : faq.id}. {faq.question}
                </h2>
                <span
                  className={`text-2xl ${activeFAQ === faq.id ? "text-green-400" : "text-gray-400"
                    }`}
                >
                  {activeFAQ === faq.id ? "×" : "+"}
                </span>
              </div>
              {activeFAQ === faq.id && (
                <p className="mt-3 text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        <div className="bottom_title_design pt-7 md:pt-20 flex flex-col gap-3 md:gap-5 items-center">
        <Image
                    src={icon}
                    alt="faq-icon"
                    width={400}
                    height={400}
                    className="w-20"
                />
          <h4 className="text-center text-2xl md:text-3xl font-bold text-white ">
            Thank you for your Interest in DigiMatric.
          </h4>
          <p className='text-[#FFFFFFCC] text-center w-full md:w-2/5'>Senior experts. On-demand requests. Fast
            We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.
          </p>
          <button type="button" className=" border-2 border-primary bg-primary hover:bg-white hover:text-black rounded shadow p-2 px-4">
            Start Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
