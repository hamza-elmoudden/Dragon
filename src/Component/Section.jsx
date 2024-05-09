import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faTruck,faLifeRing,faRotateRight,faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Section = () => {
  return (
    <>
    <section className="px-3 h w-full pt-5"> 
        <div className="home h-full">
          <div className="h-full container mx-auto flex items-center py-8">
            <div className='w-full md:w-1/2 overflow-hidden space-y-8'>
              <div className=' space-y-12 overflow-hidden'>
                <motion.h1 animate={{top:0}} transition={{duration:0.5}} className="text-6xl capitalize font-bold opacity-70 md:relative top-[-10rem]"> class Leather Accessoires Amazing For Men's</motion.h1>
                <motion.p animate={{top:0}} transition={{duration:0.7}} className="opacity-60 text-xl font-bold relative top-[10rem]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.div animate={{left:0}} transition={{duration:0.8}} className="space-x-3 flex items-center border border-spacing-3 w-fit py-4 px-8 border-black cursor-pointer hover:bg-white hover:border-white left-[40rem] relative">
                  <FontAwesomeIcon icon={faPlus} />
                  <Link className="text-xl" to={"/products"}>Shop Now</Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section className="py-2 container mx-auto">
      <div className="flex flex-col md:flex-row gap-4 -mt-20 flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/3  cursor-pointer">
              <div className="w-full transition-transform duration-300 transform hover:scale-110">
                <img className='w-full rounded-lg' src={require("../image/banner/1.jpg")} alt="" />
              </div>
          </div>
          <div className="w-full md:w-1/3   cursor-pointer">
              <div className="w-full transition-transform duration-300 transform hover:scale-110">
                <img className='w-full rounded-lg' src={require("../image/banner/2.jpg")} alt="" />
              </div>
          </div>
          <div className="w-full md:w-1/3   cursor-pointer">
              <div className="w-full transition-transform duration-300 transform hover:scale-110">
                <img className='w-full rounded-lg' src={require("../image/banner/3.jpg")} alt="" />
              </div>
          </div>
      </div>
    </section>
    <section className="py-10 container mx-auto flex flex-col md:flex-row flex-wrap gap-4 md:gap-0 px-4">
      <div className="flex gap-7 w-full md:w-1/4 cursor-pointer">
          <div>
            <FontAwesomeIcon className="text-2xl" icon={faTruck} />
          </div>
        <div className="space-y-5">
          <h1 className="text-xl opacity-75">Free Shipping</h1>
          <p className="text-xl opacity-55">
            Free shipping on all US order or order above $200
          </p>
        </div>
      </div>
      <div className="flex gap-7 w-full md:w-1/4  cursor-pointer">
          <div>
            <FontAwesomeIcon className="text-2xl" icon={faLifeRing} />
          </div>
        <div className="space-y-5">
          <h1 className="text-xl opacity-75">Support 24/7</h1>
          <p className="text-xl opacity-55">
            Contact us 24 hours a day, 7 days a week
          </p>
        </div>
      </div>
      <div className="flex gap-7 w-full md:w-1/4  cursor-pointer">
          <div>
            <FontAwesomeIcon className="text-2xl" icon={faRotateRight} />
          </div>
        <div className="space-y-5">
          <h1 className="text-xl opacity-75">30 Days Return</h1>
          <p className="text-xl opacity-55">
          Simply return it within 30 days for an exchange
          </p>
        </div>
      </div>
      <div className="flex gap-7 w-full md:w-1/4  cursor-pointer">
          <div>
            <FontAwesomeIcon className="text-2xl" icon={faCreditCard} />
          </div>
        <div className="space-y-5">
          <h1 className="text-xl opacity-75">100% Payment Secure</h1>
          <p className="text-xl opacity-55">
            We ensure secure payment with PEV
          </p>
        </div>
      </div>
    </section>
    <div className="container mx-auto h-1 bg-black my-3 rounded-full"></div>
    </>
  )
}

