import React, { useState } from 'react';
import Footer from './Footer';

const faqs = [
  {
    question: "Can I reactivate my inactive account?",
    answer: "Yes, simply log in and follow the reactivation prompts on your dashboard."
  },
  {
    question: "What is an OTP or verification code?",
    answer: "It's a One-Time Password sent to your phone/email to verify your identity."
  },
  {
    question: "Can I use an international number to sign up?",
    answer: "Yes, we support international numbers during signup."
  },
  {
    question: "How can I trust that the groceries that will be delivered are quality checked and fresh?",
    answer: "Our team performs a strict quality check before dispatching all groceries."
  },
  {
    question: "Is there express shipping available for groceries?",
    answer: "Yes, we offer express delivery in select locations."
  },
  {
    question: "How do I check if a cashback is applied to my order?",
    answer: "You can view cashback details in your order summary after checkout."
  },
  {
    question: "I want to change the address for delivery of my order. Is it possible now?",
    answer: "You can change the address before the order is shipped from your account settings."
  }
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="px-6 py-12 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="src/assets/faq.jpg" // Replace with your image
            alt="FAQ Illustration"
            className="w-full max-w-sm rounded-xl shadow-md"
          />
        </div>

        {/* Right: FAQ Accordion */}
        <div>
          <h2 className="text-1xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-md overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-4 py-1 text-left font-medium text-gray-800 hover:bg-gray-100 focus:outline-none"
                >
                  {faq.question}
                  <span className="ml-2 transform transition-transform duration-300"
                    style={{
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  >
                    ▼
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 py-2 bg-gray-50 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
  
    </div>
      <Footer/>
  </>
  );
}

export default Faq;
