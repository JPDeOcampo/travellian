import SubHeader from "@/components/shared/components/subheader"
import { travelerExperiences } from "@/components/shared/constant";
import ImageSlideSide from "@/components/shared/components/image-slide-side";
import StarsComponent from "@/components/shared/components/stars";

const TravelerExperiences = () => {
    return (
        <section className="default-container !pb-56">
            <SubHeader title={"Traveler’s Experiences"} subtitle={"Here some awesome feedback from our travelers."} position={"left"} lineWidth={"90px"} hasBtn={false} />
            <div className="w-full grid grid-cols-1 lg:flex items-center gap-16">
                <ImageSlideSide slideContainer={"pt-14"} slideContainerChild={"w-full flex gap-4"}>
                    {travelerExperiences.map((item, index) => {
                        return (
                            <div className="relative bg-neutral-grey1 h-[313px] w-full max-w-[650px] flex-shrink-0 rounded-3xl shadow-cardShadow-1" key={index}>
                                <div className={`absolute h-20 w-20 rounded-full overflow-hidden left-10 -top-10`}>
                                    <img src={item.image} className="h-full w-full object-cover" alt={item.name}/>
                                </div>
                                <div className="p-10 w-full h-full">
                                    <div className="pt-6 flex flex-col justify-between h-full">
                                        <div className="flex flex-col gap-6">
                                            <p className="text-p1 text-neutral-grey">{item.comment}</p>
                                            <StarsComponent item={item} />
                                        </div>
                                        <div className="flex flex-col gap-0">
                                            <p className="text-p1 font-medium text-neutral-grey">{item.name}</p>
                                            <p className="text-p2 text-neutral-grey">{item.status}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                    }

                </ImageSlideSide>

            </div>


        </section>
    )
}

export default TravelerExperiences;
