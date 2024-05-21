import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList,faDragon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


export const Navebar = () => {

  const MoveNave = ()=>{
    const bar = document.querySelector(".navbar")
          bar.classList.toggle("movenav")
  }


  
  return (
    <>
        <motion.header animate={{top:0}} transition={{duration:0.5}} className='md:py-10  py-3 text-right px-5 fixed w-full md:relative bg-white z-50 h-24 top-[-10rem] '>
            <nav className='hidden md:flex items-center  w-full justify-around container mx-auto '>
                <div className='flex  items-center  md:text-2xl justify-between  space-x-10'>
                  <h1 className="text-3xl font-bold">
                    <Link className="cursor-pointer" to="/">Dragon</Link>
                  </h1>
                  <div className='flex gap-10 items-center text-2xl font-bold'>
                    <Link className="cursor-pointer" to="/">Home</Link>
                    <Link className="cursor-pointer" to="/products">Products</Link>
                    <Link className="cursor-pointer" to="/contact">Contact us</Link>
                  </div>
                </div>
                <div className='gap-20  flex'>
                  <Link className="cursor-pointer" to={"/"}>
                  <FontAwesomeIcon className='text-4xl' icon={faDragon} />
                  </Link>
                </div>
            </nav>
            <div className=" block md:hidden cursor-pointer " onClick={MoveNave}>
            <FontAwesomeIcon className="text-4xl" icon={faList} />
            </div>
            <div className="navbar w-80 -right-80 top-24  z-50 bg-slate-100 fixed md:hidden">
            <div className='flex flex-col  text-3xl  py-10 px-10 text-center space-y-10'>
                  <h1 className="text-3xl font-bold">
                    <Link className="cursor-pointer" to="/">Dragon</Link>
                  </h1>
                  <div className='flex flex-col gap-10'>
                    <Link  className="cursor-pointer" to="/">Home</Link>
                    <Link className="cursor-pointer" to="/products">Products</Link>
                    <Link className="cursor-pointer" to="/contact">Contact us</Link>
                  </div>
                  <div className='flex justify-center flex-col gap-8'>
                  <div className="cursor-pointer">
                  <FontAwesomeIcon className='text-4xl' icon={faDragon} />
                  </div>
                </div>
                </div>
            </div>
        </motion.header>
    </>
  )
}
