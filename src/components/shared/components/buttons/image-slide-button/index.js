import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const ImageSlideButton = () => {
    return (
        <div className="w-full flex gap-6">
            <button className="w-16 h-12 bg-secondary-700 hover:bg-secondary-300 rounded-md"><span className="[&_svg]: text-neutral-white text-h1 flex justify-center items-center"><MdKeyboardArrowLeft /></span></button>
            <button className="w-16 h-12 bg-primary hover:bg-primary-300 rounded-md"><span className="[&_svg]: text-neutral-white text-h1 flex justify-center items-center"><MdKeyboardArrowRight /></span></button>
        </div>
    )
}

export default ImageSlideButton;