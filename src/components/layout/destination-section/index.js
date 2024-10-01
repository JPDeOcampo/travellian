import { useState, useRef } from "react";
import SubHeader from "@/components/shared/components/subheader"
import { destinations } from "@/components/shared/constant"
import { IoMdPin } from "react-icons/io";
import Carousel from 'react-multi-carousel';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1500 },
        items: 3.8,
    },
    laptop: {
        breakpoint: { max: 1500, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2.2,
    },
    xlg_mobile: {
        breakpoint: { max: 900, min: 700 },
        items: 2,
    },
    lg_mobile: {
        breakpoint: { max: 700, min: 0 },
        items: 1.5,
    },
    mobile: {
        breakpoint: { max: 500, min: 0 },
        items: 1,
    },
};

const DestinationSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const next = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const previous = () => {
        if (carouselRef.current) {
            carouselRef.current.previous();
        }
    };

    return (
        <section className="h-full relative default-container !pt-28">
            <SubHeader title={"Popular Destinations"}
                subtitle={"Most popular destinations around the world, from historical places to natural wonders."}
                position={"left"} lineWidth={"240px"} hasBtn={true} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} next={next} previous={previous} />
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true}
                arrows={false}
                containerClass="py-6"
                ref={carouselRef}
                itemClass="pr-4 lg:!pr-6">

                {destinations.map((item, index) => {
                    return (
                        <div className="h-[497px] w-full rounded-3xl overflow-hidden relative shadow-cardShadow-1 flex-shrink-0" key={index} data-aos="zoom-in-down">
                            <div className="overlay-primary"></div>
                            <img src={item.image} className="h-full w-full" />
                            <div className="absolute h-full w-full flex flex-col justify-end gap-1 inset-0 p-6 z-[2]">
                                <h3 className="text-neutral-white text-h3 tracking-wide">{item.title}</h3>
                                <div className="flex gap-1 items-center">
                                    <span><IoMdPin className="text-neutral-white text-sm" /></span>
                                    <p className="text-neutral-white text-p1">{item.country}</p>
                                </div>

                            </div>
                        </div>
                    )
                })
                }
            </Carousel>
        </section>
    )
}

export default DestinationSection;
