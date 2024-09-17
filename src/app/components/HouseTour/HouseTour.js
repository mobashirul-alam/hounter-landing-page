import { icons } from "@/lib/icons";
import { PhoneCall } from "lucide-react";
import Image from "next/image";

import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { Button } from "@/components/ui/button";
import HeroVideoDialog from "@/components/ui/heroVideoDialog";

const details = [
    {
        id: 1,
        icon: icons.bed,
        text: "4 bedrooms",
    },
    {
        id: 2,
        icon: icons.bath,
        text: "2 Bathrooms",
    },
    {
        id: 3,
        icon: icons.garage,
        text: "1 Carport",
    },
    {
        id: 4,
        icon: icons.floor,
        text: "2 Floors",
    },
];

const HouseTour = () => {
    return (
        <section className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 items-end gap-8 mb-[120px]">
            <div>
                <SectionHeading
                    heading="Let's Tour And See Our House"
                    subHeading="Ready To Shell"
                />
                <p className="ml-10 text-[16px] text-[#626687] font-light mt-3 max-w-[413px]">
                    Houses recommended by our partners that have been curated to
                    become the home of your dreams!
                </p>
                <div>
                    <h3 className="text-[16px] text-[#1B1C57] font-semibold ml-10 mt-4">
                        House Detail
                    </h3>

                    <div className="grid grid-cols-2 gap-3 ml-10 mt-2">
                        {details.map((item) => (
                            <div
                                className="flex items-center gap-2"
                                key={item.id}
                            >
                                <Image src={item.icon} alt="bath" />
                                <span className="text-[#3C4563] font-normal">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="h-[1px] w-4/5 bg-[#F0F3Fd] mt-8 ml-8" />

                    <div className="mt-8 flex items-center justify-between max-w-[450px] ml-10">
                        <div className="flex items-center gap-4">
                            <Image src={icons.avatar.girl} alt="girl" />
                            <div>
                                <h3 className="text-[18px] text-[#0E1735] font-normal ">
                                    Dianne Russel
                                </h3>
                                <span className="text-[16px] text-[#888B97]">
                                    Managing Director
                                </span>
                            </div>
                        </div>
                        <Button className="bg-[#10B981] rounded-[32px] flex items-center gap-x-3">
                            <PhoneCall className="h-4 w-4" /> Contact Now
                        </Button>
                    </div>
                </div>
            </div>
            <div className="relative">
                <HeroVideoDialog
                    className="dark:hidden block"
                    animationStyle="from-center"
                    videoSrc="https://www.youtube.com/embed/zumJJUL_ruM?si=cUjLuUC3wgOTtiKF"
                    thumbnailSrc="https://utfs.io/f/ENJYMqft5qDj1MWIjFpW0agRv7bjAKBzn5pL1i6XI2SEmycF"
                    thumbnailAlt="Hero Video"
                />
                <Image
                    src={icons.houseTour.sofa}
                    alt="sofa"
                    className="absolute -bottom-12 -left-8"
                />
                <Image
                    src={icons.houseTour.sofa2}
                    alt="sofa"
                    className="absolute -bottom-12 left-[276px]"
                />
                <Image
                    src={icons.houseTour.sofa3}
                    alt="sofa"
                    className="absolute -bottom-12 left-96 hidden md:block"
                />
            </div>
        </section>
    );
};

export default HouseTour;
