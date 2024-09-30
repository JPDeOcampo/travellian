import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

// MENU & FOOTER ITEMS //
const menuItem = [
    {
        title: "Home",
        href: "#",
    },
    {
        title: "Explore",
        href: "#",
    },
    {
        title: "Travel",
        href: "#",
    },
    {
        title: "Blog",
        href: "#",
    },
    {
        title: "Pricing",
        href: "#",
    },
];

const informationItems = [
    {
        title: "Destinations",
        href: "#",
    },
    {
        title: "Supports",
        href: "#",
    },
    {
        title: "Terms & Conditions",
        href: "#",
    },
    {
        title: "Privacy",
        href: "#",
    },
];

const contactInfo = ["+123 456 789", "info@travellian.com", "1245, New York, USA"];

const socialItems = [
    {
        title: "Facebook",
        icon: <FaFacebook />,
        href: "#",
    },
    {
        title: "Pinterest",
        icon: <FaPinterest />,
        href: "#",
    },
    {
        title: "Instagram",
        icon: <FaInstagram />,
        href: "#",
    },
    {
        title: "Twitter",
        icon: <FaTwitter />,
        href: "#",
    },
];

// MENU & FOOTER ITEMS END //

const destinations = [
    {
        title: "Berlin",
        country: "Germany",
        image: "/images/destinations/germany.jpg"
    },
    {
        title: "Berlin",
        country: "Germany",
        image: "/images/destinations/germany.jpg"
    },
    {
        title: "Berlin",
        country: "Germany",
        image: "/images/destinations/germany.jpg"
    },
    {
        title: "Berlin",
        country: "Germany",
        image: "/images/destinations/germany.jpg"
    }
];

const specialOffer = [
    {
        country: "Berlin",
        ratings: 4,
        desc: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
        price: "3500",
        image: "/images/destinations/germany.jpg"
    },
    {
        country: "Berlin",
        ratings: 3,
        desc: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
        price: "3500",
        image: "/images/destinations/germany.jpg"
    },
    {
        country: "Berlin",
        ratings: 5,
        desc: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
        price: "3500",
        image: "/images/destinations/germany.jpg"
    },
];

const tripPlanners = [
    {
        title: "Eiffel Tower",
        ratings: 4,
        price: "99",
        days: "7",
        image: "/images/trip-planners/eiffel-tower.jpg"
    },
    {
        title: "Colosseum",
        ratings: 4,
        price: "99",
        days: "7",
        image: "/images/trip-planners/colosseum.jpg"
    },
    {
        title: "Switzerland",
        ratings: 4,
        price: "99",
        days: "7",
        image: "/images/trip-planners/switzerland.jpg"
    },
    {
        title: "Berlin",
        ratings: 4,
        price: "99",
        days: "7",
        image: "/images/destinations/germany.jpg"
    }
];

const destinationGallery = [
    {
        title: "Eiffel Tower",
        ratings: 4,
        price: "99",
        days: "7",
        image: "/images/trip-planners/eiffel-tower.jpg"
    },
    {
        title: "Colosseum",
        ratings: 4,
        price: "99",
        days: "7",
        image: "/images/trip-planners/colosseum.jpg"
    },
    {
        title: "Switzerland",
        ratings: 4,
        price: "99",
        days: "7",
        image: "/images/trip-planners/switzerland.jpg"
    },
    {
        title: "Berlin",
        ratings: 4,
        price: "99",
        days: "7",
        image: "/images/destinations/germany.jpg"
    }
];



export { menuItem, informationItems, contactInfo, socialItems, destinations, specialOffer, tripPlanners, destinationGallery }