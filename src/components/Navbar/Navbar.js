"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../../assets/hounterLogo.png";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={` py-3 px-3 xl:px-0 fixed top-0 z-50 w-full ${
                scrolling ? "bg-[#10B981]/50 mt-0" : "md:mt-7"
            } transition duration-300`}
        >
            <div className="w-full max-w-[1200px] mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <Image src={logo} alt="Hounter logo" />
                    </div>
                    <div className="hidden md:flex items-center gap-x-14 ">
                        <div className="flex items-center gap-x-6">
                            <button className="text-sm leading-[17.5px] font-semibold text-[#F0F3FD] px-4 py-2 bg-white/10 border border-white/30 hover:bg-white/20 hover:border-white/40 transition duration-300 rounded-[32px]">
                                About Us
                            </button>
                            <button className="text-sm leading-[17.5px] font-semibold text-[#F0F3FD] px-4 py-2 bg-white/10 border border-white/30 hover:bg-white/20 hover:border-white/40 transition duration-300 rounded-[32px]">
                                Article
                            </button>
                            <button className="text-sm leading-[17.5px] font-semibold text-[#F0F3FD] px-4 py-2 bg-white/10 border border-white/30 hover:bg-white/20 hover:border-white/40 transition duration-300 rounded-[32px]">
                                Property
                            </button>
                        </div>
                        {/* Sign up button */}
                        <button className="bg-[#D1FAE5] rounded-[32px] px-6 py-3 text-[#047857] text-sm font-semibold leading-[22px] border border-[#D1FAE5] hover:border-[#047857] duration-300">
                            Sign Up!
                        </button>
                    </div>

                    {/* mobile responsive */}
                    <div className="block md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost">
                                    <Menu />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="bg-[#047857]">
                                <div className="flex flex-col items-center gap-y-8 mt-6">
                                    <div className="flex flex-col items-center gap-y-3">
                                        <button className="text-sm leading-[17.5px] font-semibold text-[#F0F3FD] px-4 py-2 bg-white/10 border border-white/30 hover:bg-white/20 hover:border-white/40 transition duration-300 rounded-[32px]">
                                            About Us
                                        </button>
                                        <button className="text-sm leading-[17.5px] font-semibold text-[#F0F3FD] px-4 py-2 bg-white/10 border border-white/30 hover:bg-white/20 hover:border-white/40 transition duration-300 rounded-[32px]">
                                            Article
                                        </button>
                                        <button className="text-sm leading-[17.5px] font-semibold text-[#F0F3FD] px-4 py-2 bg-white/10 border border-white/30 hover:bg-white/20 hover:border-white/40 transition duration-300 rounded-[32px]">
                                            Property
                                        </button>
                                    </div>
                                    {/* Sign up button */}
                                    <button className="bg-[#D1FAE5] rounded-[32px] px-6 py-3 text-[#047857] text-sm font-semibold leading-[22px] border border-[#D1FAE5] hover:border-[#047857] duration-300">
                                        Sign Up!
                                    </button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
