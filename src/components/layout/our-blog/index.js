import SubHeader from "@/components/shared/components/subheader"
import { FaArrowRightLong } from "react-icons/fa6";

const OurBlog = () => {
    return (
        <section className="default-container" id="our-blog">
            <SubHeader title={"Our Blog"} subtitle={"An insight the incredible experience in the world."} position={"left"} lineWidth={"120px"} />
            <div className="flex items-center flex-col lg:flex-row gap-8 lg:h-3/4">
                <div data-aos="fade-up-right" className="rounded-2xl overflow-hidden">
                    <div className="flex gap-4 w-full lg:min-w-96 relative">
                        <div className="overlay-primary"></div>
                        <img src='/images/blog/lake-como.jpg' alt="special offer" className="h-full w-full object-cover" />
                    </div>
                </div>
                <div data-aos="fade-up-left" className="h-full w-full lg:max-w-2xl flex flex-col justify-start lg:justify-center gap-10">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-h2 lg:text-h1 font-semibold text-secondary">Beautiful Italy <br />
                            Let’s travel</h2>
                        <p className="text-p1 text-secondary">
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.
                        </p>
                    </div>
                    <button data-aos="fade-left" className="w-48 text-p1 text-primary hover:text-primary-300 flex items-center gap-2">Read More<span><FaArrowRightLong /></span></button>
                </div>
            </div>
        </section>
    )
}

export default OurBlog;
