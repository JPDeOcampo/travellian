import ImageSlideButton from "../buttons/image-slide-button"

const SubHeader = ({ title, subtitle, position, lineWidth, hasBtn, next, previous, value }) => {
    return (
        <div className={`pt-0 pb-12 h-auto ${hasBtn ? 'min-h-[194px]' : 'min-h-0'} w-full flex ${position === "left" ? 'flex-col lg:flex-row' : 'flex-col lg:flex-row-reverse'}`}>
            <div data-aos="fade-up" className={`w-full flex flex-col gap-4 ${position === "left" ? 'item-start' : 'items-end'}`}>
                <div className="flex flex-col gap-2">
                    <h2 className='text-h2 text-secondary tracking-wide font-semibold'>{title}</h2>
                    <div className="relative h-1">
                        <hr className={`border-primary border-2 absolute bottom-0 ${position === "left" ? 'left-0' : 'right-0'}`} style={{ width: lineWidth }} />
                    </div>
                </div>
                <p className='text-p2 text-secondary-300 font-medium'>{subtitle}</p>
            </div>
            {
                hasBtn && (
                    <div data-aos="fade-down" className={`h-[98px] flex items-end ${position === "left" ? 'justify-start' : 'justify-end'}`}>
                        <ImageSlideButton previous={previous} next={next} value={value}/>
                    </div>
                )
            }
        </div>
    )
}

export default SubHeader