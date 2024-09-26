import SubHeader from "@/components/shared/components/subheader"
import { specialOffer } from "@/components/shared/constant/special-offer"
import { FaStar } from "react-icons/fa";

const SpecialOffer = () => {
    return (
        <section className="default-container">
            <SubHeader title={"Special Offer"} subtitle={"Check out our special offer and discounts."} position={"right"} lineWidth={"140px"} hasBtn={true} />
            <div className="flex gap-12 mt-7">
                {specialOffer.map((item, index) => {
                    return (
                        <div className="h-auto min-h-[550px] w-[497px] rounded-3xl overflow-hidden relative flex flex-col shadow-cardShadow-2" key={index}>
                            <div className="w-full h-60 relative">
                                <div className="overlay-primary"></div>
                                <img src={item.image} className="object-cover h-full w-full" />
                            </div>
                            <div className="h-full w-full py-7 px-6 flex flex-col justify-between bg-primary-25">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-h4 text-neutral-grey">{item.country}</h4>
                                        <div className="flex gap-1">
                                            {Array.from({ length: 5 }, (_, i) => {
                                                return (
                                                    <span key={i}  className={`${i < item.ratings ? '[&_svg]:text-yellow-500' : '[&_svg]:text-secondary-300'}`}><FaStar /></span>

                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-p1 text-secondary">{item.desc}</p>
                                    </div>
                                </div>

                                <div className="w-full flex justify-between items-center">
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

            </div>
        </section>
    )
}

export default SpecialOffer;
