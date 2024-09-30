const ImageSlideSide = ({ children, currentIndex, totalSlides, className }) => {
    const slide = {
        transition: 'transform 0.5s ease-in-out',
        transform: `translateX(-${(currentIndex / totalSlides) * 442}%)`,
    }
    console.log(currentIndex, totalSlides)
    return (
        <div className="relative overflow-hidden w-full pb-4 pt-7">
            <div className={`slide ${className}`} style={slide}>
                {children}
            </div>
        </div>
    );
};

export default ImageSlideSide;