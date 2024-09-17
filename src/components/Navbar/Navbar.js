import Image from "next/image";
import logo from "../../assets/hounterLogo.png";

const Navbar = () => {
    return (
        <div className="max-w-[1200px] mx-auto mt-10">
            <div className="flex justify-between items-center">
                <div>
                    <Image src={logo} alt="Hounter logo" />
                </div>
                <div className="flex items-center gap-x-14 ">
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
            </div>
        </div>
    );
};

export default Navbar;
