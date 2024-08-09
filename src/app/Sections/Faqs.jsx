"use client";
import React, { useState } from "react";
import { faqsData } from "../data/FaqsData";
import { Plus, Minus } from "lucide-react";
import Heading from "../components/Heading";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 lg:px-20 mt-20">
      <Heading>Frequently asked questions</Heading>
      <div className="lg:flex block justify-between pt-20 items-center ">
        <div className="flex flex-col gap-5 pt-10 max-w-2xl pb-40 " data-aos="fade-up">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F3F3F3] rounded-2xl p-6 shadow-lg mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => handleToggle(index)}
            >
              <div className="flex items-center justify-between cursor-pointer">
                <h6 className="text-Text font-heading leading-10 text-lg font-semibold">
                  {faq.label} {faq.question}
                </h6>
                {openIndex === index ? (
                  <Minus className="w-6 h-6 text-bgColor" />
                ) : (
                  <Plus className="w-7 h-7 text-black" />
                )}
              </div>
              {openIndex === index && (
                <div className="mt-4">
                  <p className="text-md font-medium max-w-md">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          <img src="/assets/images/faqsImage.webp" alt="FAQs" />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
