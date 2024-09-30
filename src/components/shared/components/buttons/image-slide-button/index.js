import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ImageSlideButton = ({ value, currentIndex, setCurrentIndex }) => {
   
    const itemsPerSlide = 3;

    const nextSlide = () => {
        console.log(currentIndex < value.length - itemsPerSlide, currentIndex, value.length, 'kk')
        if (currentIndex < value.length - itemsPerSlide) {
            setCurrentIndex(currentIndex + itemsPerSlide);
        } else {
            return;
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - itemsPerSlide);
        } else {
            return;
        }
    };
    return (
        <div className="w-auto flex gap-6">
            <button className="w-16 h-12 bg-secondary-700 hover:bg-secondary-300 rounded-md" onClick={prevSlide}><span className="[&_svg]: text-neutral-white text-h1 flex justify-center items-center"><MdKeyboardArrowLeft /></span></button>
            <button className="w-16 h-12 bg-primary hover:bg-primary-300 rounded-md" onClick={nextSlide}><span className="[&_svg]: text-neutral-white text-h1 flex justify-center items-center"><MdKeyboardArrowRight /></span></button>
        </div>
    )
}

export default ImageSlideButton;