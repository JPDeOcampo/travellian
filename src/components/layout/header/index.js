import { menuItem } from "@/components/shared/constant";

const Header = () => {
    return (
        <nav className='absolute z-50 w-full'>
            <div className='nav-container relative flex justify-between items-center'>
                <div data-aos="fade-down">
                    <img src='/images/logo.png' />
                </div>
                <div>
                    <ul className='flex gap-8'>
                        {
                            menuItem.map((item, index) => (
                                <li key={index}><a className='text-neutral-white' href='#'>{item.title}</a></li>
                            ))
                        }
                    </ul>
                </div>
                <div data-aos="zoom-in-left">
                    <button className='bg-transparent text-neutral-white hover:text-primary py-2 px-4 rounded-md'>Login</button>
                    <button className='bg-primary hover:bg-primary-300 text-neutral-black py-2 px-4 rounded-md'>Sign Up</button>
                </div>

            </div>

        </nav>
    )
}

export default Header;