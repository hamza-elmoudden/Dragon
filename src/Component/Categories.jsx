import {Card} from "./Card"
import { useSelector } from 'react-redux';


export const Categories = () => {

    const data = useSelector((state)=> state.producte[0])
  return (
   <>
    <section className="py-10 container mx-auto">
        <div className="w-full flex flex-col gap-6">
            <h1 className="text-3xl capitalize opacity-75">Hot Categories</h1>
            <div className="h-1 w-full bg-gray-300 rounded-full"></div>
        </div>
        <div className="py-16 flex flex-col gap-10">
            <div className="flex justify-center gap-10 w-full flex-wrap">
                <div className="w-[52rem] overflow-hidden relative">
                    <div className="py-6 px-10 bg-black text-white text-xl capitalize w-fit absolute z-40 bottom-0 cursor-pointer">
                        Shose
                    </div>
                    <img className="w-full hover:translate-zw-full h-full object-cover transition-transform duration-300 transform hover:scale-110" src={require("../image/box1.webp")} alt="box" />
                </div>
                <div className="w-[52rem] md:w-[25rem] h-[25rem] overflow-hidden relative">
                    <div className="py-6 px-10 bg-black text-white text-xl capitalize w-fit absolute z-40 bottom-0 cursor-pointer">
                        Bags
                    </div>
                    <img className="w-full hover:translate-zw-full h-full object-cover transition-transform duration-300 transform hover:scale-110" src={require("../image/box2.webp")} alt="box" />
                </div>
            </div>
            <div className="flex justify-center gap-10 w-full flex-wrap">
                <div className="w-[52rem] md:w-[25rem] h-[25rem] overflow-hidden relative">
                    <div className="py-6 px-10 bg-black text-white text-xl capitalize w-fit absolute z-40 bottom-0 cursor-pointer">
                        Shirts
                    </div>
                    <img className="w-full hover:translate-zw-full h-full object-cover transition-transform duration-300 transform hover:scale-110" src={require("../image/box3.webp")} alt="box" />
                </div>
                <div className="w-[52rem] h-[25rem] overflow-hidden relative">
                    <div className="py-6 px-10 bg-black text-white text-xl capitalize w-fit absolute z-40 bottom-0 cursor-pointer">
                        Jackets
                    </div>
                    <img className="w-full hover:translate-zw-full h-full object-cover transition-transform duration-300 transform hover:scale-110" src={require("../image/box4.webp")} alt="box" />
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col gap-6">
            <h1 className="text-3xl capitalize opacity-75">Our Products</h1>
            <div className="h-1 w-full bg-gray-300 rounded-full"></div>
        </div>
        <div className="flex flex-wrap py-10 gap-10 justify-center items-center">
        {
           data.map((prod) => {
            return <Card prod={prod} key={prod._id} /> 
          })
        }
        </div>
    </section>
   </>
  )
}
