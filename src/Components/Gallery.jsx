import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Gallery = () => {
    const [items, setItems] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:5555/artifacts')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])

    return (
        <div className="w-11/12 mx-auto px-4 py-8 bg-gray-200 my-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 space-y-4 md:space-y-0">
                <div>
                    <h2 className="text-3xl font-bold">Discover Historical Treasures</h2>
                    <p className="text-lg mt-2">
                        Share your passion for history by tagging us <b>#ArtifactExplorer</b> and <b>@HistoryTracker</b> for a chance to have your discovery featured!
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                        <FaFacebookF size={24} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-400">
                        <FaTwitter size={24} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-pink-500">
                        <FaInstagram size={24} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-700">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                loop={true}
                breakpoints={{
                    480: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="w-full max-w-7xl mx-auto"
            >
                {items?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative rounded-xl overflow-hidden shadow-lg group">
                            <img
                                src={item.artifactImage}
                                alt={item.artifactName}
                                className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-2xl transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-3 text-lg font-semibold">
                                {item.artifactName}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Gallery;

