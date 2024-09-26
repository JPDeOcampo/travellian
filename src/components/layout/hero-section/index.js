import HeroTitle from "./hero-title";
import HeroContent from "./hero-content";

const customStyle = {
    backgroundImage: "url('/images/hero-section.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
};

const HeroSection = () => {
    return (
        <section className="w-full h-full relative" style={customStyle}>
            <div className="overlay-black"></div>
            <div className="w-full h-full flex justify-center flex-col z-10 gap-10 relative">
                <div className="hero-container">
                    <HeroTitle />
                </div>
                <div className="relative">
                    <HeroContent />
                </div>

            </div>
        </section>
    )
}

export default HeroSection;