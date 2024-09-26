
import ImageSlideButton from "../buttons/image-slide-button"

const SubHeader = ({ title, subtitle, position, lineWidth }) => {
    return (
        <div className={`py-12 h-[194px] w-full flex ${position === "left" ? '' : 'flex-row-reverse'}`}>
            <div className={`w-full flex flex-col gap-4 ${position === "left" ? 'item-start' : 'items-end'}`}>
                <div className="flex flex-col gap-2">
                    <h2 className='text-h2 text-secondary tracking-wide font-semibold'>{title}</h2>
                    <div className="relative h-1">
                        <hr className={`border-primary border-2 absolute bottom-0 ${position === "left" ? 'left-0' : 'right-0'}`} style={{width: lineWidth}}/>
                    </div>
                </div>
                <p className='text-p2 text-secondary-300 font-medium'>{subtitle}</p>
            </div>
            <div className="h-full flex items-end justify-between">
                <ImageSlideButton />
            </div>
        </div>
    )
}

export default SubHeader