import SubHeader from "@/components/shared/components/subheader"
import { destinations } from "@/components/shared/constant/destinations"
const DestinationSection = () => {
    return (
        <section className="h-full relative default-container">
            <SubHeader title={"Popular Destinations"} subtitle={"Most popular destinations around the world, from historical places to natural wonders."} position={"left"} />
            <div className="flex overflow-auto gap-4 mt-7">
                {destinations.map((item, index) => {
                    return (
                        <div className="h-[497px] w-[376px] rounded-md overflow-hidden relative" key={index}>
                            <img src={item.image} className="h-full w-full"/>
                        </div>
                    )
                })
                }

            </div>
        </section>
    )
}

export default DestinationSection
