import { menuItem, informationItems, contactInfo, socialItems } from "@/components/shared/constant";
const NewsLetter = () => {
  return (
    <div className="bg-transparent h-auto w-full absolute flex justify-center -top-32 md:-top-28 lg:-top-20 px-7 z-10">
      <div className="bg-neutral-white h-auto lg:h-[150px] w-full max-w-[1150px] rounded-2xl relative shadow-cardShadow-3 py-5 px-8 lg:px-16 flex flex-col lg:flex-row gap-6 lg:gap-12 items-start lg:items-center">
        <div className="w-full lg:w-1/2" data-aos="fade-down">
          <h2 className="text-h3 sm:text-h2 text-neutral-grey font-medium tracking-wider">Our NewsLetter</h2>
        </div>

        <div className="grid grid-cols-1 md:flex justify-between w-full gap-4 md:gap-12">
          <form className="w-full">
            <label>Email</label>
            <input type="text" placeholder="Enter your email" className="w-full h-12" />
          </form>
          <div className="flex items-end justify-start lg:justify-end">
            <button className="button-primary">Subscribe</button>
          </div>

        </div>
      </div>
    </div>
  )
}
const Footer = () => {
  return (
    <section className="w-full bg-neutral-blue h-auto relative">
      <NewsLetter />
      <div className="default-container !pt-40 !pb-28 relative">
        <div className="flex flex-col lg:flex-row justify-between gap-14 lg:gap-8 w-full">
          <div>
            <img src="/images/logo.png" className="mb-4" data-aos="fade-right" />
            <p className="text-neutral-white text-p2">Copyright © Travellian 2024 All rights reserved</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-h5 text-neutral-white font-semibold">Menu</h3>
            <ul className='flex flex-col gap-2'>
              {
                menuItem.map((item, index) => (
                  <li key={index}><a className='text-neutral-white hover:text-primary' href='#'>{item.title}</a></li>
                ))
              }
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-h5 text-white font-semibold">Information</h3>
            <ul className='flex flex-col gap-2'>
              {
                informationItems.map((item, index) => (
                  <li key={index}><a className='text-neutral-white hover:text-primary' href='#'>{item.title}</a></li>
                ))
              }
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-h5 text-white font-semibold">Contact Info</h3>
            <ul className='flex flex-col gap-2'>
              {
                contactInfo.map((item, index) => (
                  <li key={index}><a className='text-neutral-white'>{item}</a></li>
                ))
              }
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-h5 text-white font-semibold">Follow us on</h3>
            <ul className='flex gap-6'>
              {
                socialItems.map((item, index) => (
                  <li key={index}><a className='text-neutral-white hover:text-primary [&_svg]:text-h3' href='#'>{item.icon}</a></li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
