import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ImageSlideButton = ({ previous, next }) => {
    return (
        <div className="w-auto flex gap-6">
            <button className="w-14 md:w-16 h-11 md:h-12 bg-secondary-700 hover:bg-secondary-300 rounded-md" onClick={previous}><span className="[&_svg]:text-neutral-white text-h2 md:text-h1 flex justify-center items-center"><MdKeyboardArrowLeft /></span></button>
            <button className="w-14 md:w-16 h-11 md:h-12 bg-primary hover:bg-primary-300 rounded-md" onClick={next}><span className="[&_svg]:text-neutral-white text-h2 md:text-h1 flex justify-center items-center"><MdKeyboardArrowRight /></span></button>
        </div>
    )
}

export default ImageSlideButton;