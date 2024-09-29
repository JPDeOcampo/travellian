import SubHeader from "@/components/shared/components/subheader"
import { destinationGallery } from "@/components/shared/constant/destination-gallery";
import { FaStar } from "react-icons/fa";

const DestinationGallery = () => {
    return (
        <section className="default-container">
            <SubHeader title={"Destination Gallery"} subtitle={"Our photo gallery on trip."} position={"left"} lineWidth={"90px"} hasBtn={true} />
            <div className="w-full pt-20 grid grid-cols-1 lg:flex items-center gap-16">
                <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-44 lg:gap-4">
                    {destinationGallery.map((item, index) => {
                        return (
                            <div className="group relative" key={index}>
                                <div className={`h-[400px] w-full rounded-3xl overflow-hidden relative shadow-cardShadow-1 z-[4] ${index === 1 ? "-translate-y-20" : "-translate-y-20 group-hover:lg:-translate-y-20 lg:translate-y-0"} transition-all`}>
                                    <div className="overlay-primary"></div>
                                    <img src={item.image} className="h-full w-full object-cover" alt={item.title}/>
                                </div>
                            </div>

                        )
                    })
                    }

                </div>

            </div>


        </section>
    )
}

export default DestinationGallery;
