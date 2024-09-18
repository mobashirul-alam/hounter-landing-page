import { Button } from "@/components/ui/button";
import { icons } from "@/lib/icons";
import Image from "next/image";

const Subscription = () => {
    return (
        <section className="max-w-[1200px] mx-auto h-[312px] relative my-[100px] px-4">
            <Image
                src={icons.subscriptionBG}
                alt="subs"
                fill
                className="-z-20 px-3 xl:px-0"
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
                className="left-12 absolute top-40 hidden md:block"
            />
            <Image
                src={icons.rectangle.rec3}
                alt="rec1"
                className="left-40 absolute top-10 hidden md:block"
            />
            <Image
                src={icons.rectangle.rec4}
                alt="rec1"
                className="left-40 absolute bottom-12 hidden md:block"
            />
            <Image
                src={icons.rectangle.rec1}
                alt="rec1"
                className="right-12 absolute top-10 hidden md:block"
            />
            <Image
                src={icons.rectangle.rec2}
                alt="rec1"
                className="right-12 absolute top-40 hidden md:block"
            />
            <Image
                src={icons.rectangle.rec3}
                alt="rec1"
                className="right-40 absolute top-10 hidden md:block"
            />
            <Image
                src={icons.rectangle.rec4}
                alt="rec1"
                className="right-40 absolute bottom-12 hidden md:block"
            />
            {/* rectangle end */}

            <div className="flex flex-col justify-center items-center h-full">
                <h1 className="text-[#1B1C57] text-[32px] font-semibold  ">
                    Subscribe For More Info
                </h1>
                <h1 className="text-[#1B1C57] text-[32px] font-semibold  ">
                    and update from Hounter
                </h1>
                <div className="bg-white h-[54px] w-full md:w-[496px] mt-8 rounded-[32px] flex items-center px-3 md:px-2 gap-x-5">
                    <Image src={icons.inbox} alt="inbox" className="ml-3" />
                    <input
                        type="text"
                        className="w-full h-full outline-none"
                        placeholder="Your email here"
                    />
                    <Button className="rounded-[32px] bg-[#10B981] text-[14px]">
                        Subscribe Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Subscription;
