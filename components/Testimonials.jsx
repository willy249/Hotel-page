"use client";

import Image from "next/image";
// 導入 Swiper React 組件
import { Swiper, SwiperSlide } from "swiper/react";
// 導入所需的模組
import { Pagination } from "swiper/modules";
// 導入 Swiper 樣式
import "swiper/css";
import "swiper/css/pagination"; // 分頁樣式

// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const testimonials = [
  {
    img: "/testimonials/img-1.png",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo nostrum laudantium sequi? Alias inventore laborum, error recusandae qui delectus sequi odit iusto? Voluptate corporis itaque iste laudantium, voluptatibus laborum, error recusandae qui delectus fugit accusamus est cumque, vel tempora ullam.",
    personName: "Robert Rene",
    location: "Singapore",
  },
  {
    img: "/testimonials/img-2.png",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo nostrum laudantium sequi? Alias inventore laborum, error recusandae qui delectus sequi odit iusto? Voluptate corporis  Voluptate corporis itaque iste laborum, error recusandae qui delectus itaque iste laudantium, voluptatibus fugit accusamus est cumque, vel tempora ullam.",
    personName: "Robert Rene",
    location: "Singapore",
  },
];

const Testimonials = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className=" bg-soft_green xl:h-[880px]"
    >
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className=" container mx-auto"
      >
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className=" xl:h-[680px] overflow-hidden"
        >
          {testimonials.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className=" grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24">
                  <Image
                    src={item.img}
                    width={470}
                    height={470}
                    quality={100}
                    alt=""
                    className=" hidden xl:flex"
                  />
                  <div className=" flex-1 bg-white/20 text-white p-12">
                    <p className=" text-lg leading-9 mb-8">{item.message}</p>
                    <p className=" text-xl font-bold">{item.personName}</p>
                    <p>{item.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
