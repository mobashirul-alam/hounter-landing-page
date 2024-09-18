import { icons } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/hounterLogo.png";

const footerLinks = [
    {
        title: "Property",
        sublinks: [
            {
                id: 1,
                title: "House",
                href: "/",
            },
            {
                id: 2,
                title: "Apartment",
                href: "/",
            },
            {
                id: 3,
                title: "Villa",
                href: "/",
            },
        ],
    },
    {
        title: "Article",
        sublinks: [
            {
                id: 1,
                title: "New Article",
                href: "/",
            },
            {
                id: 2,
                title: "Populer Article",
                href: "/",
            },
            {
                id: 3,
                title: "Most Read",
                href: "/",
            },
            {
                id: 4,
                title: "Tips & Tricks",
                href: "/",
            },
        ],
    },
];

const Footer = () => {
    return (
        <section className="relative">
            <div className="max-w-[1200px] mx-auto pb-[100px] grid grid-cols-2 md:grid-cols-5 gap-10 px-3 xl:px-0">
                <div className="col-span-2 space-y-4">
                    <Image src={logo} alt="Hounter logo" />
                    <p className="font-lexend text-[14px] text-[#626687] max-w-[320px]">
                        We provide information about properties such as houses,
                        villas and apartments to help people find their dream
                        home
                    </p>
                    <div className="flex items-center gap-3">
                        <a href="#">
                            <Image src={icons.facebook} alt="Facebook icon" />
                        </a>
                        <a href="#">
                            <Image src={icons.twitter} alt="Facebook icon" />
                        </a>
                        <a href="#">
                            <Image src={icons.instagram} alt="Facebook icon" />
                        </a>
                    </div>
                </div>
                {footerLinks.map((item) => (
                    <div key={item.title}>
                        <h1 className="text-[#0E1735] text-[18px] font-semibold font-lexend">
                            {item.title}
                        </h1>
                        <div className="flex flex-col gap-y-3 mt-6">
                            {item.sublinks.map(({ href, id, title }) => (
                                <Link
                                    key={id}
                                    href={href}
                                    className="text-[#626687] text-[14px] font-lexend font-normal"
                                >
                                    {title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="col-span-2 md:col-span-1">
                    <h1 className="text-[#0E1735] text-[18px] font-semibold font-lexend">
                        Contact
                    </h1>
                    <div className="space-y-3 mt-6">
                        <p className="text-[#626687] text-[14px] font-lexend font-normal">
                            2464 Royal Ln. Mesa, New Jersey 45463
                        </p>
                        <p className="text-[#626687] text-[14px] font-lexend font-normal">
                            (671) 555-0110
                        </p>
                        <p className="text-[#626687] text-[14px] font-lexend font-normal">
                            info@hounter.com
                        </p>
                    </div>
                </div>
            </div>

            <Image
                src={icons.vector.green}
                alt="green"
                className="absolute right-0 bottom-0 -z-20"
            />
            <Image
                src={icons.vector.blue}
                alt="green"
                className="absolute right-0 bottom-0 -z-20"
            />
        </section>
    );
};

export default Footer;
