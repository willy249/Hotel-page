"use client";

import Image from "next/image";

// 導入 Swiper React 組件
import { Swiper, SwiperSlide } from "swiper/react";
// 導入所需的模組
import { Autoplay } from "swiper/modules";
// 導入 Swiper 樣式
import "swiper/css";

import { Button } from "./ui/button";

// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const recommendationData = [
  {
    name: "Shanghai Hotel",
    Image: "/recommendation/hotel-1.png",
    location: "Shanghai, China",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo suscipit ea repellat fugiat voluptatibus adipisci nisi? Ad illo porro quis.",
    price: 40,
    testimonial: {
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo suscipit ea repellat fugiat voluptatibus adipisciadipisicing elit.",
      personName: "Robert Rene",
    },
  },
  {
    name: "Peaks Lodge",
    Image: "/recommendation/hotel-2.png",
    location: "Aspen, USA",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo suscipit ea repellat fugiat voluptatibus adipisci nisi? Ad illo porro quis.",
    price: 80,
    testimonial: {
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo suscipit ea repellat fugiat voluptatibus adipisciadipisicing elit.",
      personName: "Emily Jhonson",
    },
  },
  {
    name: "Tropical Oasis Resort",
    Image: "/recommendation/hotel-3.png",
    location: "Bali, Indonesia",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo suscipit ea repellat fugiat voluptatibus adipisci nisi? Ad illo porro quis.",
    price: 120,
    testimonial: {
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo suscipit ea repellat fugiat voluptatibus adipisciadipisicing elit.",
      personName: "Michael Anderson",
    },
  },
];

const Recommendation = () => {
  return (
    <section className=" pb-12 xl:pt-[157px] xl:pb-[112px] bg-soft_green-secondary relative">
      {/* slider */}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: true }}
          loop
          speed={2000}
        >
          {recommendationData.map((hotel, index) => {
            return (
              <SwiperSlide key={index}>
                <div className=" flex flex-col xl:flex-row xl:pl-[135px] gap-y-12 xl:gap-y-0">
                  {/* 1_text */}
                  <div className=" max-w-[345px] xl:pt-8 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0">
                    <h2 className="h2 mb-4">{hotel.name}</h2>
                    <p className=" text-soft_green text-sm mb-6">
                      {hotel.location}
                    </p>
                    <p className=" mb-[60px]">{hotel.desc}</p>
                    <div className=" flex items-center gap-x-[50px]">
                      <Button variant="accent" className=" px-[44px]">
                        Book me
                      </Button>
                      <div>
                        <span className=" font-bold">{hotel.price}</span>
                        <span className=" text-sm">/Night</span>
                      </div>
                    </div>
                  </div>
                  {/* 2_圖片 & 感言 */}
                  <div className=" order-1 xl:order-2 flex-1 flex justify-center xl:justify-end relative h-[634px]">
                    <div>
                      <Image
                        src={hotel.Image}
                        width={905}
                        height={528}
                        quality={100}
                        alt=""
                        className=" xl:rounded-tl-[20px] xl:rounded-bl-[20px]"
                      />
                      <div className=" bg-soft_green p-4 text-white text-center xl:text-left xl:max-w-[468px] xl:min-h-[212px] xl:absolute xl:bottom-0 xl:translate-x-1/2 xl:rounded-xl xl:px-10">
                        <p className=" mb-3 max-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6">
                          {hotel.testimonial.message}
                        </p>
                        <p className=" text-xl font-bold">
                          {hotel.testimonial.personName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>

      {/* pattern */}
      <Image
        src={"/recommendation/pattern.svg"}
        width={240}
        height={240}
        alt=""
        className=" hidden xl:flex absolute left-[135px] -bottom-[120px]"
      />
    </section>
  );
};

export default Recommendation;
