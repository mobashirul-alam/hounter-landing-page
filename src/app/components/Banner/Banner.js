import { Button } from "@/components/ui/button";
import { icons } from "@/lib/icons";
import { ChevronRight } from "lucide-react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { TiLocation } from "react-icons/ti";
import bannerImg from "../../../assets/bg/bannerTop.png";
import infoImg from "../../../assets/blog/blog4.png";
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
        <div className="relative">
            <div className="max-w-[1200px] mx-auto pt-[182px] mb-[212px] flex justify-between">
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
                        Everything you need about finding your place to live
                        will be here, where it will be easier for you
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
                        <h4 className="mt-8 text-[#888B97] font-light">
                            Our Partnership
                        </h4>
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
                <div className="self-end flex items-center gap-4">
                    <div className="p-6 bg-white rounded-[32px] shadow-[0px_11px_48px_0px_#3333330F] flex justify-center items-center gap-x-4">
                        <div className="flex items-center">
                            <Image
                                src={icons.avatar.boy1}
                                alt="avatar"
                                className="w-14 h-14 border-[3px] border-white rounded-full shadow-[0px_9px_32px_0px_#595CDB1A]"
                            />
                            <Image
                                src={icons.avatar.boy2}
                                alt="avatar"
                                className="w-14 h-14 border-[3px] border-white rounded-full -ml-6 shadow-[0px_9px_32px_0px_#595CDB1A]"
                            />
                            <Image
                                src={icons.avatar.girl}
                                alt="avatar"
                                className="w-14 h-14 border-[3px] border-white rounded-full -ml-6 shadow-[0px_9px_32px_0px_#595CDB1A]"
                            />
                        </div>
                        <div>
                            <h4 className="text-[#1B1C57] text-base font-semibold leading-6">
                                1k+ People
                            </h4>
                            <p className="text-[#68799F] text-xs leading-5">
                                Successfully Getting Home
                            </p>
                        </div>
                    </div>
                    <div className="p-6 bg-white rounded-[32px] shadow-[0px_11px_48px_0px_#3333330F] flex justify-center items-center gap-x-4">
                        <div>
                            <Image
                                src={infoImg}
                                alt="avatar"
                                className="w-14 h-14 border-[3px] border-white rounded-3xl shadow-[0px_9px_32px_0px_#595CDB1A]"
                            />
                        </div>
                        <div>
                            <h4 className="text-[#1B1C57] text-base font-semibold leading-6">
                                56 Houses
                            </h4>
                            <p className="text-[#68799F] text-xs leading-5">
                                Sold Monthly
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 right-0 2xl:right-56 -z-50">
                <div>
                    <Image src={bannerImg} alt="banner image" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
