"use client";

import SectionHeadingAlt from "@/components/SectionHeadingAlt/SectionHeadingAlt";
import { reviews } from "@/lib/data";
import Image from "next/image";
import { useRef } from "react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Reviews = () => {
    let sliderRef = useRef(null);

    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="mb-[120px]">
            <div className="mb-10">
                <SectionHeadingAlt
                    subHeading={"See our review"}
                    heading={"What our user say about us"}
                />
            </div>

            <div className="max-w-[1200px] mx-auto">
                <div className="slider-container">
                    <Slider
                        ref={(slider) => {
                            sliderRef = slider;
                        }}
                        {...settings}
                    >
                        {reviews.map((review) => (
                            <div key={review.id} className="w-[500px]">
                                <div className="flex flex-col items-center rounded-2xl">
                                    <Image
                                        src={review.houseImg}
                                        alt="house image"
                                        className="w-[740px] h-[400px] rounded-2xl"
                                    />
                                    <div className="max-w-[612px] bg-white shadow-[0px_9px_32px_0px_#595CDB0D] p-8 -mt-36 rounded-2xl mb-8">
                                        <h3 className="text-xl leading-[25px] font-semibold text-[#1B1C57] mb-4">
                                            {review.title}
                                        </h3>
                                        <p className="text-sm leading-6 text-[#626687] mb-6">
                                            {review.description}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-x-4">
                                                <Image
                                                    src={review.reviewer}
                                                    alt="reviewer Image"
                                                    className="w-[40px] h-[40px] rounded-full"
                                                />
                                                <div>
                                                    <p className="text-lg leading-6 font-medium text-[#0E1735]">
                                                        {review.name}
                                                    </p>
                                                    <p className="text-sm leading-[22px] font-medium text-[#888B97]">
                                                        {review.designation}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-x-4">
                                                <FaStar className="text-2xl text-[#F59E0B]" />
                                                <p className="text-xl leading-7 font-semibold text-[#3C4563]">
                                                    {review.rating}
                                                </p>
                                            </div>
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

export default Reviews;
