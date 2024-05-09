import React from 'react'
import { Card } from './Card'
import { useSelector } from 'react-redux';


export const Popular = () => {
    const data = useSelector((state)=> state.productethree[0])

  return (
    <>
    <section className="container mx-auto py-10">
            <div className="flex flex-col justify-center items-center gap-8">
                <div className="text-4xl uppercase">
                    Popular Products
                </div>
                <div className="text-xl opacity-60 capitalize">
                    Most Trendy 2023 Clother
                </div>
            </div>
            <div className="flex gap-10 items-center justify-center flex-wrap py-10 ">
                <div className="py-3 px-6 border border-spacing-6 border-black text-2xl cursor-pointer opacity-50">
                    New Arrival
                </div>
                <div className="py-3 px-6 border border-spacing-6 border-black text-2xl cursor-pointer">
                    OnSale
                </div>
                <div className="py-3 px-6 border border-spacing-6 border-black text-2xl cursor-pointer">
                    Featured Products
                </div>
            </div>
            <div className="flex justify-center items-center gap-5 flex-wrap row">
            {
           data.map((prod) => {
            return <Card prod={prod} key={prod._id} /> 
          })
        }
            </div>
            <div className="flex py-8 justify-center items-center gap-2 md:flex-row flex-col">
                <div className="w-full md:w-1/2 p-4">
                    <div className="overflow-hidden">
                        <img className="w-full hover:translate-zw-full h-full object-cover transition-transform duration-300 transform hover:scale-110"  src={require("../image/bg4.webp")} alt="" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <div className="overflow-hidden">
                        <img className="w-full hover:translate-zw-full h-full object-cover transition-transform duration-300 transform hover:scale-110" src={require("../image/bg11.webp")} alt="" />
                    </div>
                </div>
            </div>
    </section>
    </>
  )
}
