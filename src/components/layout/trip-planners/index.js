import SubHeader from "@/components/shared/components/subheader"
import { tripPlanners } from "@/components/shared/constant";
import { FaStar } from "react-icons/fa";

const TripPlanners = () => {
    return (
        <section className="default-container flex items-center lg:!pt-28">
            <div className="w-full pt-0 lg:pt-28 grid grid-cols-1 lg:flex items-center gap-16">
                <div className={`h-full w-full lg:w-1/4 flex flex-col justify-center pb-24 lg:pb-0`}>
                    <SubHeader title={"Trip Planners"} subtitle={"20 years from now you will be more disappointed by the things that you didn’t do. Stop regretting and start travelling, start throwing off the bowlines."} position={"left"} lineWidth={"90px"} />
                    <div>
                        <button className="button-primary">View all trips plan</button>
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-36 lg:gap-4">
                    {tripPlanners.map((item, index) => {
                        return (
                            <div className="group relative" key={index}>
                                <div className={`h-[400px] w-full rounded-3xl overflow-hidden relative shadow-cardShadow-1 z-[4] ${index % 2 === 0 ? "-translate-y-28" : "-translate-y-28 group-hover:lg:-translate-y-28 lg:translate-y-0"} transition-all`}>
                                    <div className="overlay-primary"></div>
                                    <img src={item.image} className="h-full w-full object-cover" alt={item.title}/>
                                </div>
                                <div className={`absolute h-full w-full flex-col justify-end gap-1 inset-0 p-6 z-[2] transition-all flex`}>
                                    <div className="flex justify-between w-full">
                                        <p className="text-p2 text-secondary uppercase font-medium">Guided</p>
                                        <p className="text-p2 text-secondary uppercase font-medium">€{item.price}</p>
                                    </div>

                                    <h3 className="text-secondary text-h4 tracking-wide font-semibold">{item.title}</h3>
                                    <div className="flex gap-1 items-center justify-between">
                                        <div className="flex gap-1 flex-wrap">
                                            {Array.from({ length: 5 }, (_, i) => {
                                                return (
                                                    <span key={i} className={`${i < item.ratings ? '[&_svg]:text-yellow-500' : '[&_svg]:text-secondary-300'}`}><FaStar /></span>

                                                )
                                            })}
                                        </div>
                                        <p className="text-micro text-secondary font-medium">{item.days} Days tour</p>
                                    </div>
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

export default TripPlanners;
