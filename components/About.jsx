"use client";
import Image from "next/image";
// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import { Button } from "./ui/button";

// components
import Stats from "./Stats";

const About = () => {
  const isMobile = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const [ref, inView] = useInView({
    threshold: isMobile ? 0.5 : null,
  });

  return (
    <section className=" py-12 xl:py-0 xl:pb-24" ref={ref}>
      <div className=" container mx-auto">
        <div className=" flex flex-col xl:flex-row">
          {/* 1_img */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className=" flex-1 relative"
          >
            <Image
              src={"/about/img2.png"}
              width={559}
              height={721}
              alt=""
              priority
              style={{ width: 559, height: 721 }}
            />
          </motion.div>
          {/* 2_text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className=" xl:max-w-[470px]"
          >
            {/* 描述 */}
            <h2 className="h2 mb-[38px]">About Hotely</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              aliquid possimus natus reprehenderit vel. Voluptate veritatis
              iusto perferendis eum recusandae!
            </p>
            {/* 統計數字 */}
            <div className=" my-5 xl:my-10 min-h-[35px]">
              {inView && <Stats />}
            </div>
            <p className=" mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              ipsum, accusantium soluta labore a numquam architecto iusto fugit
              odio ipsam.
            </p>
            <Button variant="accent">Explore More</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
