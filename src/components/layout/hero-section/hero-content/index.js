import React from 'react'

const HeroContent = () => {
    return (
        <div className='w-full max-w-8xl mx-auto pl-4 lg:pl-0 pr-4 lg:pr-16'>
            <div className='h-auto min-h-[180px] w-full max-w-[1200px] bg-neutral-white hero-content flex rounded-2xl md:rounded-tr-2xl md:rounded-br-2xl overflow-hidden'>
                <div className='z-10 grid grid-cols-1 md:flex justify-between w-full'>
                    <div className='relative py-10 px-8 lg:px-16 h-full w-full flex items-center'>
                        <form className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8 w-full'>
                            <div className='grid grid-cols-2 gap-6'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label className='text-p2 md:text-p1'>Destination</label>
                                    <input type='text' />
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label className='text-p2 md:text-p1'>Person</label>
                                    <input type='number' />
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-6'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label className='text-p2 md:text-p1'>Check In</label>
                                    <input type='date' />
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label className='text-p2 md:text-p1'>Check Out</label>
                                    <input type='date' />
                                </div>
                            </div>

                        </form>
                    </div>
                    <button className='h-full bg-primary hover:bg-primary-300 w-full md:w-[12.5rem] p-6 md:p-0 text-neutral-white text-h4 md:text-h3'><span data-aos="fade-down">Book Now</span></button>
                </div>

            </div>

        </div>

    )
}

export default HeroContent