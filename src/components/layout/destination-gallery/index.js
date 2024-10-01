import { useRef } from "react";
import SubHeader from "@/components/shared/components/subheader"
import { destinationGallery } from "@/components/shared/constant";
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
const DestinationGallery = () => {
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
        <section className="default-container">
            <SubHeader title={"Destination Gallery"} subtitle={"Our photo gallery on trip."} position={"left"} lineWidth={"290px"} hasBtn={true} next={next} previous={previous} />
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true}
                arrows={false}
                containerClass="py-6"
                ref={carouselRef} itemClass="pr-4 lg:!pr-6">

                {destinationGallery.map((item, index) => {
                    return (
                        <div className="group relative" key={index} data-aos="zoom-out-down">
                            <div className={`h-[400px] w-full rounded-3xl overflow-hidden relative shadow-cardShadow-1 z-[4]`}>
                                <div className="overlay-primary"></div>
                                <img src={item.image} className="h-full w-full object-cover" alt={item.title} />
                            </div>
                        </div>

                    )
                })
                }
            </Carousel>
        </section>
    )
}

export default DestinationGallery;
