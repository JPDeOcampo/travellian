import { useRef } from "react";
import SubHeader from "@/components/shared/components/subheader"
import { specialOffer } from "@/components/shared/constant"
import { FaStar } from "react-icons/fa";
import Carousel from 'react-multi-carousel';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1500 },
        items: 3,
    },
    lg_tablet: {
        breakpoint: { max: 1260, min: 464 },
        items: 2.5,
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
        items: 1.3,
    },
    mobile: {
        breakpoint: { max: 500, min: 0 },
        items: 1,
    },
};

const SpecialOffer = () => {
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
            <SubHeader title={"Special Offer"} subtitle={"Check out our special offer and discounts."} position={"right"} lineWidth={"170px"} hasBtn={true} next={next} previous={previous} />
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

                {specialOffer.map((item, index) => {
                    return (
                        <div className="h-full w-full rounded-3xl overflow-hidden relative flex flex-col shadow-cardShadow-2" key={index} data-aos="zoom-in-up">
                            <div className="w-full h-60 relative">
                                <div className="overlay-primary"></div>
                                <img src={item.image} className="object-cover h-full w-full" />
                            </div>
                            <div className="h-full w-full py-7 px-6 flex flex-col gap-12 bg-primary-25">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-h4 text-neutral-grey">{item.country}</h4>
                                        <div className="flex gap-1">
                                            {Array.from({ length: 5 }, (_, i) => {
                                                return (
                                                    <span key={i} className={`${i < item.ratings ? '[&_svg]:text-yellow-500' : '[&_svg]:text-secondary-300'}`}><FaStar /></span>

                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-p1 text-secondary">{item.desc}</p>
                                    </div>
                                </div>

                                <div className="w-full flex flex-row justify-between items-center">
                                    <div>
                                        <p className="text-p1 text-neutral-grey">From <span className="text-h3 font-semibold text-primary">€{item.price}</span></p>
                                    </div>
                                    <button className="button-primary">Details</button>
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

export default SpecialOffer;
