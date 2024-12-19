import React, { useState, useRef, useEffect } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How to get to the spa from the nearest airport?",
      answer:
        "The nearest airport is Bari Karol Wojtyła Airport (BRI), located about an hour's drive away. Transfers can be arranged upon request.",
    },
    {
      question: "Is the property pet-friendly?",
      answer:
        "Small pets are welcome, under the careful control of the owners, in order to respect the venue.",
    },
    {
      question: "Do you offer Wi-Fi?",
      answer: "Yes, we provide free Wi-Fi throughout the property.",
    },
    {
      question: "What dining options are available?",
      answer:
        "Our property comes with a small but fully-equipped kitchen. There are also excellent dining options in the nearby towns of Castellana Grotte and Putignano.",
    },
    {
      question: "Are room upgrades available?",
      answer:
        "Please contact us for more information regarding room upgrades and premium packages.",
    },
    {
      question: "What about parking?",
      answer:
        "Free private parking located inside the property is available on-site, including a charging station for electric vehicles.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[#2c2c2c] text-gray-100 py-12 px-6 lg:px-20">
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl lg:text-4xl font-semibold text-headingColor mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg lg:text-xl text-gray-400 leading-relaxed">
          Find answers to the most common questions about Trullo Monte Farella.
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center px-4 py-3 bg-gray-500 hover:bg-gray-700 transition-all duration-300"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-xl">{isActive ? "-" : "+"}</span>
              </button>
              <div
                className={`transition-[max-height] duration-700 ease-in-out overflow-hidden`}
                style={{
                  maxHeight: isActive ? "200px" : "0px",
                }}
              >
                <div className="px-4 py-3 bg-gray-500 text-slate-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
