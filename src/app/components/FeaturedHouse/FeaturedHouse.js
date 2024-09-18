"use client";

import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { Button } from "@/components/ui/button";
import { featuredHouses } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { MdApartment, MdVilla } from "react-icons/md";
import { PiHouseFill } from "react-icons/pi";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const FeaturedHouse = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="max-w-[1200px] mx-auto my-[120px] px-3 xl:px-0">
            {/* Heading section */}
            <div className="flex justify-between items-center">
                <SectionHeading
                    heading={"Featured House"}
                    subHeading={"Our Recommendation"}
                />
                <div className="flex items-center gap-x-8">
                    <Button className="flex items-center gap-x-2 text-[#888B97] hover:text-[#10B981] text-lg font-medium bg-white hover:bg-[#D1FAE5] px-6 py-6 rounded-[32px] border border-[#E0E3EB]">
                        <PiHouseFill className="text-2xl" /> House
                    </Button>
                    <Button className="flex items-center gap-x-2 text-[#888B97] hover:text-[#10B981] text-lg font-medium bg-white hover:bg-[#D1FAE5] px-6 py-6 rounded-[32px] border border-[#E0E3EB]">
                        <MdVilla className="text-2xl" /> Villa
                    </Button>
                    <Button className="flex items-center gap-x-2 text-[#888B97] hover:text-[#10B981] text-lg font-medium bg-white hover:bg-[#D1FAE5] px-6 py-6 rounded-[32px] border border-[#E0E3EB]">
                        <MdApartment className="text-2xl" /> Apartment
                    </Button>
                </div>
                <div className="space-x-4">
                    <button
                        className="px-4 py-4 text-[#3C4563] hover:text-white text-2xl bg-[#E0E3EB] hover:bg-[#10B981] rounded-[32px] transition duration-300"
                        onClick={previous}
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        className="px-4 py-4 text-[#3C4563] hover:text-white text-2xl bg-[#E0E3EB] hover:bg-[#10B981] rounded-[32px] transition duration-300"
                        onClick={next}
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>

            {/* featured house carousel */}
            <div className="mt-10">
                <div className="slider-container">
                    <Slider
                        ref={(slider) => {
                            sliderRef = slider;
                        }}
                        {...settings}
                    >
                        {featuredHouses.map((house) => (
                            <div key={house.id}>
                                <div className="ml-10">
                                    <div>
                                        <Image
                                            src={house.image}
                                            alt={house.name}
                                            className="w-[340px] h-[382px]"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl leading-[32px] font-medium text-[#0E1735] mt-6 mb-2">
                                            {house.name}
                                        </h2>
                                        <p className="text-xl leading-[32px] font-medium text-[#3C4563] mb-6">
                                            {house.price}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-x-4">
                                        <Image
                                            src={house.ownerImg}
                                            alt="ownerImage"
                                            className="w-[40px] h-[40px] rounded-full"
                                        />
                                        <div>
                                            <p className="text-lg leading-6 font-medium text-[#0E1735]">
                                                {house.owner}
                                            </p>
                                            <p className="text-sm leading-[22px] font-medium text-[#888B97]">
                                                {house.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default FeaturedHouse;
