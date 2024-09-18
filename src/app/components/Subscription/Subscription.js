import { Button } from "@/components/ui/button";
import { icons } from "@/lib/icons";
import Image from "next/image";

const Subscription = () => {
    return (
        <section className="max-w-[1200px] mx-auto h-52 md:h-[312px] relative my-16 md:my-[100px] px-4">
            <Image
                src={icons.subscriptionBG}
                alt="subs"
                fill
                className="-z-20 px-3 xl:px-0 rounded-[32px]"
            />

            {/* rectangle start */}
            <Image
                src={icons.rectangle.rec1}
                alt="rec1"
                className="left-12 absolute top-10 hidden md:block"
            />
            <Image
                src={icons.rectangle.rec2}
                alt="rec1"
                className="md:left-8 lg:left-12 absolute top-44 lg:top-40 hidden md:block"
            />
            <Image
                src={icons.rectangle.rec3}
                alt="rec1"
                className="left-40 absolute top-10 hidden lg:block"
            />
            <Image
                src={icons.rectangle.rec4}
                alt="rec1"
                className="left-36 lg:left-40 absolute lg:bottom-12 hidden lg:block"
            />
            <Image
                src={icons.rectangle.rec1}
                alt="rec1"
                className="right-12 absolute top-10 hidden md:block"
            />
            <Image
                src={icons.rectangle.rec2}
                alt="rec1"
                className="right-8 lg:right-12 absolute top-44 lg:top-40 hidden md:block"
            />
            <Image
                src={icons.rectangle.rec3}
                alt="rec1"
                className="right-40 absolute top-10 hidden lg:block"
            />
            <Image
                src={icons.rectangle.rec4}
                alt="rec1"
                className="right-36 lg:right-40 absolute bottom-10 lg:bottom-12 hidden lg:block"
            />
            {/* rectangle end */}

            <div className="flex flex-col justify-center items-center h-full px-2">
                <h1 className="text-[#1B1C57] text-2xl md:text-[32px] font-semibold text-center">
                    Subscribe For More Info
                </h1>
                <h1 className="text-[#1B1C57] text-2xl md:text-[32px] font-semibold text-center ">
                    and update from Hounter
                </h1>
                <div className="bg-white h-[54px] w-full md:w-[496px] mt-5 md:mt-8 rounded-[32px] flex items-center px-2 md:px-2 gap-x-2 md:gap-x-5">
                    <Image
                        src={icons.inbox}
                        alt="inbox"
                        className="ml-1 md:ml-3"
                    />
                    <input
                        type="text"
                        className="w-full h-full outline-none"
                        placeholder="Your email here"
                    />
                    <Button className="rounded-[32px] bg-[#10B981] text-xs md:text-sm">
                        Subscribe Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Subscription;
