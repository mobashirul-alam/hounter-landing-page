"use client";

import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { Button } from "@/components/ui/button";
import { featuredHouses } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { AiFillFire } from "react-icons/ai";
import { IoWallet } from "react-icons/io5";
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
        responsive: [
            {
                breakpoint: 2560,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="max-w-[1200px] mx-auto my-16 md:my-[120px] px-3 xl:px-0">
            {/* Heading section */}
            <div className="flex flex-col md:flex-row justify-between items-center">
                <SectionHeading
                    heading={"Featured House"}
                    subHeading={"Our Recommendation"}
                />
                <div className="flex items-center gap-x-1 md:gap-x-2 lg:gap-x-8 my-3 md:my-0">
                    <Button className="flex items-center gap-x-1 md:gap-x-2 text-[#888B97] hover:text-[#10B981] text-sm md:text-lg font-medium bg-white hover:bg-[#D1FAE5] px-3 md:px-6 py-3 md:py-6 rounded-[32px] border border-[#E0E3EB]">
                        <PiHouseFill className="text-sm md:text-2xl" /> House
                    </Button>
                    <Button className="flex items-center gap-x-1 md:gap-x-2 text-[#888B97] hover:text-[#10B981] text-sm md:text-lg font-medium bg-white hover:bg-[#D1FAE5] px-3 md:px-6 py-3 md:py-6 rounded-[32px] border border-[#E0E3EB]">
                        <MdVilla className="text-sm md:text-2xl" /> Villa
                    </Button>
                    <Button className="flex items-center gap-x-1 md:gap-x-2 text-[#888B97] hover:text-[#10B981] text-sm md:text-lg font-medium bg-white hover:bg-[#D1FAE5] px-3 md:px-6 py-3 md:py-6 rounded-[32px] border border-[#E0E3EB]">
                        <MdApartment className="text-sm md:text-2xl" />{" "}
                        Apartment
                    </Button>
                </div>
                <div className="hidden md:flex space-x-4 ml-5 lg:ml-0">
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
            <div className="mt-5 md:mt-10">
                <div className="slider-container">
                    <Slider
                        ref={(slider) => {
                            sliderRef = slider;
                        }}
                        {...settings}
                    >
                        {featuredHouses.map((house) => (
                            <div key={house.id}>
                                <div className="md:ml-10">
                                    <div className="relative">
                                        <Image
                                            src={house.image}
                                            alt={house.name}
                                            className="w-[340px] h-[242px] md:h-[382px]"
                                        />
                                        <div className="absolute bottom-4 left-4">
                                            {house.category === "Popular" && (
                                                <div className="bg-[#FEE2E2] rounded-[32px] px-4 py-2 text-[#EF4444] text-sm font-medium flex items-center gap-x-2">
                                                    <AiFillFire />
                                                    Popular
                                                </div>
                                            )}
                                            {house.category === "New House" && (
                                                <div className="bg-[#DBEAFE] rounded-[32px] px-4 py-2 text-[#1D4ED8] text-sm font-medium flex items-center gap-x-2">
                                                    <PiHouseFill />
                                                    New House
                                                </div>
                                            )}
                                            {house.category ===
                                                "Best Deals" && (
                                                <div className="bg-[#D1FAE5] rounded-[32px] px-4 py-2 text-[#047857] text-sm font-medium flex items-center gap-x-2">
                                                    <IoWallet />
                                                    Best Deals
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-xl md:text-2xl leading-[32px] font-medium text-[#0E1735] mt-3 md:mt-6 md:mb-2">
                                            {house.name}
                                        </h2>
                                        <p className="text-base md:text-xl leading-[32px] font-medium text-[#3C4563] mb-3 md:mb-6">
                                            {house.price}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-x-2 md:gap-x-4">
                                        <Image
                                            src={house.ownerImg}
                                            alt="ownerImage"
                                            className="w-[40px] h-[40px] rounded-full"
                                        />
                                        <div>
                                            <p className="text-base md:text-lg leading-6 font-medium text-[#0E1735]">
                                                {house.owner}
                                            </p>
                                            <p className="text-xs md:text-sm leading-[22px] font-medium text-[#888B97]">
                                                {house.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="md:hidden space-x-2 flex justify-center mt-5">
                    <button
                        className="p-2 text-[#3C4563] hover:text-white text-2xl bg-[#E0E3EB] hover:bg-[#10B981] rounded-[32px] transition duration-300"
                        onClick={previous}
                    >
                        <ChevronLeft className="h-5" />
                    </button>
                    <button
                        className="p-2 text-[#3C4563] hover:text-white text-2xl bg-[#E0E3EB] hover:bg-[#10B981] rounded-[32px] transition duration-300"
                        onClick={next}
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedHouse;
