import { useRef } from "react";
import SubHeader from "@/components/shared/components/subheader"
import { travelerExperiences } from "@/components/shared/constant";
import ImageSlideButton from "@/components/shared/components/buttons/image-slide-button";
import StarsComponent from "@/components/shared/components/stars";
import Carousel from 'react-multi-carousel';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1500 },
        items: 2.5,
    },
    laptop: {
        breakpoint: { max: 1500, min: 1024 },
        items: 2,
    },
    lg_tablet: {
        breakpoint: { max: 1100, min: 1024 },
        items: 1.5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 0 },
        items: 1,
    },
};

const TravelerExperiences = () => {
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
        <section className="default-container !pb-56" id="traveler-experience">
            <SubHeader title={"Traveler’s Experiences"} subtitle={"Here some awesome feedback from our travelers."} position={"left"} lineWidth={"240px"} hasBtn={false} />
            
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true}
                    arrows={false}
                    containerClass="py-16"
                    ref={carouselRef}
                    itemClass="pr-4 lg:!pr-6">
                    {travelerExperiences.map((item, index) => {
                        return (
                            <div className="relative bg-neutral-grey1 h-full w-full  flex-shrink-0 rounded-3xl shadow-cardShadow-1" key={index} data-aos="zoom-out-up">
                                <div className={`absolute h-20 w-20 rounded-full overflow-hidden left-10 -top-10`}>
                                    <img src={item.image} className="h-full w-full object-cover" alt={item.name} />
                                </div>
                                <div className="p-10 w-full h-full">
                                    <div className="pt-6 flex flex-col justify-between gap-6 h-full">
                                        <div className="flex flex-col gap-6">
                                            <p className="text-p1 text-neutral-grey">{item.comment}</p>
                                            <StarsComponent item={item} />
                                        </div>
                                        <div className="flex flex-col gap-0">
                                            <p className="text-h4 font-medium text-neutral-grey">{item.name}</p>
                                            <p className="text-p1 text-neutral-grey">{item.status}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                    }
                </Carousel>
                <div data-aos="fade-down" className="w-full flex justify-end">
                    <ImageSlideButton previous={previous} next={next} />
                </div>
            
        </section>
    )
}

export default TravelerExperiences;
