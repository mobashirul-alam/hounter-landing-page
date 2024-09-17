import { AiFillFire } from "react-icons/ai";
import { IoWallet } from "react-icons/io5";
import { PiHouseFill } from "react-icons/pi";

import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import blog1 from "../assets/blog/blog1.png";
import blog2 from "../assets/blog/blog2.png";
import blog3 from "../assets/blog/blog3.png";
import blog4 from "../assets/blog/blog4.png";
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

export const articles = [
    {
        id: 1,
        blogImg: blog1,
        title: "The things we need to check when we want to buy a house",
        readTime: "4 min red",
        date: "25 Apr 2021",
        author: "Dianne Russel",
        authorImg: avatar1,
    },
    {
        id: 2,
        blogImg: blog2,
        title: "7 ways to distinguish the quality of the house we want to buy",
        readTime: "6 min red",
        date: "24 Apr 2021",
        author: "Courtney Henry",
        authorImg: avatar2,
    },
    {
        id: 3,
        blogImg: blog3,
        title: "The best way to know the quality of the house we want to buy",
        readTime: "2 min red",
        date: "24 Apr 2021",
        author: "Doriene Robertson",
        authorImg: avatar3,
    },
    {
        id: 4,
        blogImg: blog4,
        title: "12 things to know before buying a house",
        readTime: "8 min red",
        date: "25 Apr 2021",
        author: "Cameron Williamson",
        authorImg: avatar1,
        description:
            "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
    },
];
