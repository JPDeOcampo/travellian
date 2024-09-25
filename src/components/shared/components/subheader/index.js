

const SubHeader = ({ title, subtitle, position }) => {
    return (
        <div className="py-12">
            <div className={`full flex flex-col gap-4 ${position === "left" ? 'item-start' : 'items-end'}`}>
                <div className="flex flex-col gap-2">
                    <h2 className='text-h2 text-secondary'>{title}</h2>
                    <hr className='w-48 border-primary border-2' />
                </div>

                <p className='text-p2 text-secondary-300'>{subtitle}</p>
            </div>

        </div>
    )
}

export default SubHeader