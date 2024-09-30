import SubHeader from "@/components/shared/components/subheader"
import { destinations } from "@/components/shared/constant"
import { IoMdPin } from "react-icons/io";

const DestinationSection = () => {
    return (
        <section className="h-full relative default-container !pt-28">
            <SubHeader title={"Popular Destinations"} subtitle={"Most popular destinations around the world, from historical places to natural wonders."} position={"left"} lineWidth={"180px"} hasBtn={true} />
            <div className="flex gap-6 mt-7">
                {destinations.map((item, index) => {
                    return (
                        <div className="h-[497px] w-[376px] rounded-3xl overflow-hidden relative shadow-cardShadow-1" key={index}>
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

            </div>
        </section>
    )
}

export default DestinationSection;
