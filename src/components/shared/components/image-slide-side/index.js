const ImageSlideSide = ({ children, currentIndex, totalSlides, slideContainer, slideContainerChild }) => {
    const slide = {
        transition: 'transform 0.5s ease-in-out',
        transform: `translateX(-${(currentIndex / totalSlides) * 442}%)`,
    }
    console.log(currentIndex, totalSlides)
    return (
        <div className={`relative overflow-hidden w-full pb-4 ${slideContainer}`}>
            <div className={`slide ${slideContainerChild}`} style={slide}>
                {children}
            </div>
        </div>
    );
};

export default ImageSlideSide;