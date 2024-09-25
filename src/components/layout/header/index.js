import React from 'react'

const Header = () => {
    return (
        <nav className='absolute z-50 w-full'>
            <div className='default-container relative flex justify-between items-center'>
                <div>
                    <img src='/images/logo.png' />
                </div>
                <div>
                    <ul className='flex gap-8'>
                        <li><a className='text-neutral-white' href='#'>Home</a></li>
                        <li><a className='text-neutral-white' href='#'>Explore</a></li>
                        <li><a className='text-neutral-white' href='#'>Travel</a></li>
                        <li><a className='text-neutral-white' href='#'>Blog</a></li>
                        <li><a className='text-neutral-white' href='#'>Pricing</a></li>
                    </ul>
                </div>
                <div>
                    <button className='bg-transparent text-neutral-white hover:text-primary py-2 px-4 rounded-md'>Login</button>
                    <button className='bg-primary hover:bg-primary-300 text-neutral-black py-2 px-4 rounded-md'>Sign Up</button>
                </div>

            </div>

        </nav>
    )
}

export default Header;