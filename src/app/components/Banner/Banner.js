import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { TiLocation } from "react-icons/ti";
import pImg1 from "../../../assets/partnership/traveloka_logo_1.png";
import pImg2 from "../../../assets/partnership/traveloka_logo_2.png";
import pImg3 from "../../../assets/partnership/traveloka_logo_3.png";
import pImg4 from "../../../assets/partnership/traveloka_logo_4.png";

const robotoMono = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

const Banner = () => {
    const partnershipLogo = [
        { id: 1, img: pImg1 },
        { id: 2, img: pImg2 },
        { id: 3, img: pImg3 },
        { id: 4, img: pImg4 },
    ];
    return (
        <div className="max-w-[1200px] mx-auto mt-[182px]">
            <div>
                <h1 className="text-[#1B1C57] text-[50px] font-bold leading-[50px] mb-6">
                    Find The Place To
                    <br />
                    Live{" "}
                    <span
                        className={`${robotoMono.className} text-transparent`}
                        style={{
                            WebkitTextStroke: "1px black",
                        }}
                    >
                        Your Dreams
                    </span>
                    <br />
                    Easily Here
                </h1>
                <p className="max-w-lg text-base text-[#626687] opacity-75 mb-8">
                    Everything you need about finding your place to live will be
                    here, where it will be easier for you
                </p>

                {/* Search */}
                <div className="flex items-center mb-8 max-w-lg border border-[#E0E3EB] rounded-[32px] p-1 gap-x-5">
                    <div>
                        <TiLocation className="text-[#F59E0B] text-2xl ml-3" />
                    </div>
                    <input
                        type="text"
                        className="w-full h-full outline-none"
                        placeholder="Search for the location you want!"
                    />
                    <Button
                        type="submit"
                        className="bg-[#10B981] text-white px-4 py-3 rounded-[32px] gap-x-1"
                    >
                        Search <ChevronRight />
                    </Button>
                </div>

                <div>
                    <h4 className="mt-8 text-[#888B97]">Our Partnership</h4>
                    <div className="flex items-center gap-x-8 mt-2">
                        {partnershipLogo.map((item) => (
                            <Image
                                key={item.id}
                                src={item.img}
                                alt="logo"
                                className="w-[82.5px]"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
