import React from 'react'

const HeroContent = () => {
    return (
        <div className='w-full max-w-8xl mx-auto pl-0 pr-16'>
            <div className='h-[180px] w-full max-w-[1200px] bg-neutral-white hero-content flex rounded-tr-2xl rounded-br-2xl overflow-hidden'>
                <div className='z-10 flex'>
                    <div className='relative py-10 px-16 h-full w-full max-w-5xl flex items-center'>
                        <form className='grid grid-cols-4 gap-8'>
                            <div className='flex flex-col gap-2 w-full'>
                                <label>Destination</label>
                                <input type='text' />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label>Person</label>
                                <input type='number' />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label>Check In</label>
                                <input type='date' />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label>Check Out</label>
                                <input type='date' />
                            </div>
                        </form>
                    </div>
                    <button className='h-full bg-primary hover:bg-primary-300 w-[12.5rem] text-neutral-white text-h3'>Book Now</button>
                </div>

            </div>

        </div>

    )
}

export default HeroContent