import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  const artifacts = [
    {
      id: 1,
      title: "Rosetta Stone",
      description: "Decipher the language of ancient Egypt with this iconic artifact.",
      origin: "Egypt, 196 BC",
      image: "https://i.ibb.co/PjQqhV7/istockphoto-827287838-612x612.jpg",
    },
    {
      id: 2,
      title: "Terracotta Warriors",
      description: "Experience the grandeur of Emperor Qin Shi Huang's army.",
      origin: "China, 210 BC",
      image: "https://i.ibb.co/9G45Yrp/photo-1527922891260-918d42a4efc8.jpg",
    },
    {
      id: 3,
      title: "Stonehenge",
      description: "A prehistoric monument shrouded in mystery, located in England.",
      origin: "England, 3000 BC",
      image: "https://i.ibb.co.com/82kV2Ys/stonehenge-101801-640.jpg",
    },
  ];

  return (
    <div className="w-11/12 mx-auto mt-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        {artifacts.map((artifact) => (
          <SwiperSlide key={artifact.id}>
            <div className="relative w-full bg-gray-100">
              <img
                src={artifact.image}
                alt={artifact.title}
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-800/30 to-transparent"></div>
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white px-5">
                <h3 className="text-4xl font-bold mb-2">{artifact.title}</h3>
                <p className="text-xl italic mb-2">{artifact.origin}</p>
                <p className="text-lg max-w-lg mx-auto">{artifact.description}</p>
              </div>
              <div className="absolute top-5 right-5 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full font-semibold">
                Featured
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
