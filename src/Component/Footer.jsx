import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faPhone,faEnvelope,faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




export const Footer = () => {
  return (
    <>
    <footer className="py-10 bg-black">
        <div className=' container mx-auto text-white flex flex-wrap md:space-x-4 md:justify-between flex-col md:flex-row space-y-5 md:space-y-0'>
            <div className="space-y-10 flex flex-col">
                <h1 className="text-3xl font-bold">
                    <Link to={"/"} >Dragon</Link>
                </h1>
                <div className='flex space-x-3 items-center'>
                    <a href="#"><FontAwesomeIcon icon={faHouse} className="text-xl" /></a>
                    <p>123 Main Street, Anytown, CA 12345 - USA.</p>
                </div>
                <div className='flex space-x-3 items-center'>
                    <a href="#"><FontAwesomeIcon icon={faPhone} className="text-xl"  /></a>
                    <p>(0) 800 456 789</p>
                </div>
                <div className='flex space-x-3 items-center'>
                    <a href="#"><FontAwesomeIcon icon={faEnvelope} className="text-xl"  /></a>
                    <p>contact@demoemail.com </p>
                </div>
            </div>
            <div className='space-y-10 flex flex-col'>
                <h1 className='text-3xl font-bold'>
                    Products
                </h1>
                <ul className='space-y-5'>
                    <li>
                        <a href="#">Prices drop</a>
                    </li>
                    <li>
                        <a href="#">New products</a>
                        </li>
                    <li>
                        <a href="#">Best sales</a>
                    </li>
                    <li>
                        <a href="#">Contact us</a>
                    </li>
                </ul>
            </div>
            <div className='space-y-10 flex flex-col'>
                <h1 className='text-3xl font-bold'>
                    Our company
                </h1>
                <ul className='space-y-5'>
                    <li>
                        <a href="#">Delivery</a>
                    </li>
                    <li>
                        <a href="#">About us</a>
                        </li>
                    <li>
                        <a href="#">Contact us</a>
                    </li>
                    <li>
                        <a href="#">Sitemap</a>
                    </li>
                    <li>
                        <a href="#">Stores</a>
                    </li>
                </ul>
            </div>
            <div className='space-y-10'>
                <h1 className='text-3xl font-bold'>
                    <a href="#">Join Our Newsletter Now</a>
                </h1>
                <div className="space-x-4 flex items-center">
                    <input type="text" placeholder='Your Email Address' className="py-3 px-2 rounded-xl text-black text-xl outline-none shadow-lg  " />
                    <div  className='border border-spacing-2 border-white px-8 py-3 rounded-xl'>
                        <FontAwesomeIcon className="text-2xl" icon={faPaperPlane} />
                    </div>
                </div>
                <div>
                    <p>Get E-mail updates about our latest shop and special offers.</p>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
