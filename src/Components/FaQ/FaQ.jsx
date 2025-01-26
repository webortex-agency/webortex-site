import { Container } from "@mui/material";
import React, { useState } from "react";

const FaQ = () => {
  const [expanded, setExpanded] = useState(null);

  const faqs = [
    {
      question: "What features does GenClip offer for video editing?",
      answer:
        "GenClip offers smart trimming, scene detection, color correction, background music suggestions, and automatic captions. It simplifies editing with easy transitions and voiceovers.",
    },
    {
      question: "How does GenClip's AI improve the editing process?",
      answer:
        "GenClip's AI automates repetitive tasks, making video editing faster and more efficient, while maintaining high quality.",
    },
    {
      question: "Can GenClip work with all video formats?",
      answer:
        "Yes, GenClip supports a wide range of video formats, ensuring compatibility with most cameras and devices.",
    },
    {
      question: "What are the subscription plans and pricing for GenClip?",
      answer:
        "GenClip offers flexible subscription plans, including monthly, annual, and enterprise pricing. Visit our pricing page for more details.",
    },
  ];

  const toggleFAQ = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Container maxWidth="lg">
    <div className="flex flex-col lg:flex-row min-h-screen  text-white p-8">
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-6">
      <div className="inline-block px-4 py-1 rounded-full text-sm font-medium border border-white">
  FAQ
</div>

        <h1 className="text-5xl font-bold leading-tight">
          This is the start of something new
        </h1>
        <p className="text-lg text-gray-400">
          Managing a small business today is already tough. Avoid further
          complications by ditching outdated, tedious trade methods. Our goal
          is to streamline SMB trade, making it easier and faster than ever.
        </p>
        <button className="flex items-center space-x-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100">
          <span>Any questions? Reach out</span>
          <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  width="24"
  height="24"
>
  <path
    d="M15.05 3.72l-1.28 2.12a1 1 0 00.23 1.32l2.02 1.64a14.9 14.9 0 01-7.51 7.51l-1.64-2.02a1 1 0 00-1.32-.23l-2.12 1.28a1 1 0 00-.42 1.13A17.98 17.98 0 0012 21c4.66 0 8.89-1.79 12.05-4.95A18 18 0 0015.47 3.3a1 1 0 00-1.13.42z"
  />
</svg>

        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-600 pb-4 cursor-pointer"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <h2
                className={`text-lg font-medium ${
                  expanded === index ? "text-white" : "text-gray-400"
                }`}
              >
                {faq.question}
              </h2>
              <button
                className={`w-8 h-8 flex items-center justify-center border rounded-md ${
                  expanded === index
                    ? "bg-gray-800 text-white border-gray-500"
                    : "bg-black text-gray-400 border-gray-600"
                }`}
              >
                {expanded === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                )}
              </button>
            </div>
            {expanded === index && (
              <p className="mt-4 text-gray-400">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    </Container>
  );
};

export default FaQ;
