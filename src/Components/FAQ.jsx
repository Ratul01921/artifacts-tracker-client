import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1735135211616.json';
const FAQ = () => {
    const qaData = [
        {
            question: "What is a historical artifact?",
            answer:
                "A historical artifact is an object that has cultural, historical, or archaeological significance, often used to understand ancient civilizations and their ways of life.",
        },
        {
            question: "How are artifacts preserved?",
            answer:
                "Artifacts are preserved through careful techniques, such as climate-controlled environments, proper storage, and sometimes even conservation processes to prevent decay.",
        },
        {
            question: "Where can I view historical artifacts?",
            answer:
                "Historical artifacts can be viewed in museums, galleries, or historical sites. Some artifacts are also available digitally through online museum collections.",
        },
        {
            question: "Can anyone donate artifacts to museums?",
            answer:
                "Yes, museums often accept donations of artifacts, though the objects must meet certain criteria, such as historical significance and proper provenance.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="py-16 bg-gray-200">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <div className="flex flex-col md:flex-row justify-between items-center space-x-8 gap-6">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <Lottie animationData={animationData} loop={true} className="w-64 h-64 md:w-80 md:h-80" />
                    </div>
                    <div className="w-full md:w-2/3 space-y-4">
                        {qaData.map((item, index) => (
                            <div
                                key={index}
                                className="card bg-white shadow-lg rounded-xl p-4 transition-all duration-300 ease-in-out transform hover:scale-105"
                            >
                                <div
                                    onClick={() => toggleAnswer(index)}
                                    className="flex items-center justify-between cursor-pointer p-4 hover:bg-base-300 rounded-md"
                                >
                                    <div className="text-xl font-semibold text-gray-800">{item.question}</div>
                                    <div
                                        className={`transform transition-transform duration-300 ${activeIndex === index ? "rotate-45 text-blue-600" : "text-gray-600"
                                            } text-2xl`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </div>
                                {activeIndex === index && (
                                    <div className="mt-4 text-gray-600">{item.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
