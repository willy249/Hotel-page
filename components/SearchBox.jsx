"use client";

//shadcn-ui
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
// icons
import { MapPin } from "lucide-react";
// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

// components
import DatePicker from "./DatePicker";
import GuestSelect from "./GuestSelect";

const SearchBox = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className=" w-full max-w-[488px] bg-white max-h-max flex flex-col border border-outline rounder-[20px] p-10"
    >
      {/* Input & date */}
      <div className=" mb-[20px]">
        {/* 1_Input*/}
        <Label htmlFor="destination">Where are you going?</Label>
        <div className=" relative flex items-center mb-[20px]">
          <Input id="destination" placeholder='try "Taiwan"' />
          <MapPin size={24} className=" absolute right-8 text-black" />
        </div>
        {/* 2_日期 */}
        <div className=" flex flex-col xl:flex-row gap-x-[30px] gap-y-5 xl:gap-y-0">
          {/* 2-1 Check In */}
          <div className=" flex flex-col flex-1">
            <Label>Check In</Label>
            <DatePicker />
          </div>
          {/* 2-2 Check Out */}
          <div className=" flex flex-col flex-1">
            <Label>Check Out</Label>
            <DatePicker />
          </div>
        </div>
      </div>

      {/* select, checkbox, btn */}
      <div className=" flex flex-col">
        {/* 1_select */}
        <div className=" flex flex-col flex-1 mb-[24px]">
          <Label>Guests</Label>
          <GuestSelect />
        </div>
        {/* 2_checkbox */}
        <div className=" flex items-center gap-x-3 mb-[24px]">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className=" font-semibold mb-0">
            Pay when checking in?
          </Label>
        </div>
        {/* 3_btn */}
        <Button size="lg" variant="accent">
          Search Hotel
        </Button>
      </div>
    </motion.div>
  );
};

export default SearchBox;
