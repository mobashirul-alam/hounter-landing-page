import { AiFillFire } from "react-icons/ai";
import { IoWallet } from "react-icons/io5";
import { PiHouseFill } from "react-icons/pi";

import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import house1 from "../assets/featuredHouse1.png";
import house2 from "../assets/featuredHouse2.png";
import house3 from "../assets/featuredHouse3.png";

export const featuredHouses = [
    {
        id: 1,
        name: "Roselands House",
        image: house1,
        price: "$ 35.000.000",
        location: "Manchester, Kentucky",
        owner: "Dianne Russell",
        ownerImg: avatar1,
        category: "Popular",
        icon: <AiFillFire />,
    },
    {
        id: 2,
        name: "Woodlandside",
        image: house2,
        price: "$ 20.000.000",
        location: "Dr.San Jose, South Dakota",
        owner: "Robert Fox",
        ownerImg: avatar2,
        category: "New House",
        icon: <PiHouseFill />,
    },
    {
        id: 3,
        name: "The Old Lighthouse",
        image: house3,
        price: "$ 44.000.000",
        location: "Santa Ana, Illinois",
        owner: "Ronald Richards",
        ownerImg: avatar3,
        category: "Best Deals",
        icon: <IoWallet />,
    },
    {
        id: 4,
        name: "Roselands House",
        image: house1,
        price: "$ 35.000.000",
        location: "Manchester, Kentucky",
        owner: "Dianne Russell",
        ownerImg: avatar1,
        category: "Popular",
        icon: <AiFillFire />,
    },
    {
        id: 5,
        name: "Woodlandside",
        image: house2,
        price: "$ 20.000.000",
        location: "Dr.San Jose, South Dakota",
        owner: "Robert Fox",
        ownerImg: avatar2,
        category: "New House",
        icon: <PiHouseFill />,
    },
    {
        id: 6,
        name: "The Old Lighthouse",
        image: house3,
        price: "$ 44.000.000",
        location: "Santa Ana, Illinois",
        owner: "Ronald Richards",
        ownerImg: avatar3,
        category: "Best Deals",
        icon: <IoWallet />,
    },
];
