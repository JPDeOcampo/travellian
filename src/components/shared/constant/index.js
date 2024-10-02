import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

// MENU & FOOTER ITEMS //
const menuItem = [
    {
        title: "Home",
        href: "#home",
    },
    {
        title: "Explore",
        href: "#destination-section",
    },
    {
        title: "Travel",
        href: "#trip-planners",
    },
    {
        title: "Blog",
        href: "#our-blog",
    },
    {
        title: "Pricing",
        href: "#special-offer",
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
        country: "Berlin, Germany",
        image: "/images/destinations/germany.jpg"
    },
    {
        title: "Eternal City",
        country: "Rome, Italy",
        image: "/images/destinations/rome.jpg"
    },
    {
        title: "Big Ben",
        country: "London, United Kingdom",
        image: "/images/destinations/london.jpg"
    },
    {
        title: "Venice",
        country: "Venice, Italy",
        image: "/images/destinations/venice.png"
    },
    {
        title: "Amsterdam",
        country: "Amsterdam",
        image: "/images/destinations/amsterdam.jpg"
    },
    {
        title: "Berlin",
        country: "Germany",
        image: "/images/destinations/germany.jpg"
    },
];

const specialOffer = [
    {
        country: "Berlin, Germany",
        ratings: 2,
        desc: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
        price: "3500",
        image: "/images/special/steigenberger-frankfurter.jpg"
    },
    {
        country: "London, United Kingdom",
        ratings: 3,
        desc: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
        price: "3500",
        image: "/images/special/london-the-goring.jpg"
    },
    {
        country: "Paris, France",
        ratings: 5,
        desc: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
        price: "3500",
        image: "/images/special/le-grand-hotel-cabourg.jpg"
    },
    {
        country: "Italy, Italy",
        ratings: 4,
        desc: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
        price: "3500",
        image: "/images/special/borgo-egnazia.jpg"
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
        ratings: 5,
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
        ratings: 3,
        price: "99",
        days: "7",
        image: "/images/destinations/germany.jpg"
    }
];


const travelerExperiences = [
    {
        name: "John Doe",
        status: "Manager",
        image: "/images/trip-planners/switzerland.jpg",
        ratings: 4,
        comment: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness."
    },
    {
        name: "Karen Lively",
        status: "Journalist, HWO News",
        image: "/images/trip-planners/switzerland.jpg",
        ratings: 4,
        comment: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness."
    },
    {
        name: "Maik Eberhart",
        status: "Blogger",
        image: "/images/trip-planners/switzerland.jpg",
        ratings: 4,
        comment: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness."
    },
    {
        name: "Ellen Kaur",
        status: "Model",
        image: "/images/trip-planners/switzerland.jpg",
        ratings: 4,
        comment: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness."
    },
];



export { menuItem, informationItems, contactInfo, socialItems, destinations, specialOffer, tripPlanners, destinationGallery, travelerExperiences }