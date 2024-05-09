import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Footer } from "../Component/Footer"
import { Navebar } from "../Component/Navebar"
import { faSquareFacebook,faSquareInstagram,faSquareTwitter,faSquarePinterest } from '@fortawesome/free-brands-svg-icons';
import { faShieldHalved,faTruck ,faArrowRightArrowLeft,faCirclePlay} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import {urlFor,client}  from "../Sanity/Client"
import Swal from "sweetalert2"
import { useParams } from 'react-router-dom';



export  const Product = () => {
    const order = useRef(null)
    const movetoorder = ()=>{
        if (order.current) {
            order.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    const {idprod} = useParams()
    const [prod,setprod] = useState(null)
    const [data,setdata] = useState({
    first_name:"",
    Last_name:"",
    email:"",
    phone:"",
    contry:"",
    city:"",
    postcode:"",
    address:""
  })

  function handelform(e){
    setdata({...data,[e.target.name]:e.target.value})
  }

  const handelsubmit = async (e)=>{
    e.preventDefault()
    try {

      if(data.first_name === "" || data.Last_name === "" || data.email === "" || data.phone === "" || data.contry === "" || data.city === "" || data.postcode === "" || data.address === ""){
          return null
      }
      
      client.create({
        _type:"order",
        first_name:data.first_name,
        Last_name:data.Last_name,
        email:data.email,
        phone:data.phone,
        contry:data.contry,
        city:data.city,
        postcode:data.postcode,
        address:data.address,
        title_prodacte:data.title,
        price:data.price,
        producte:{
          _ref:prod._id
        }
        
      })

      Swal.fire({
        title: 'Order',
        text: `Price : ${prod.price}`,
        icon: 'success',
        confirmButtonText: 'OK'
      })

      setdata({
        first_name:"",
        Last_name:"",
        email:"",
        phone:"",
        contry:"",
        city:"",
        postcode:"",
        address:""
      })

    } catch (error) {
      console.log(`Error : \n ${error}`)
    }
  }

  const image_one = ()=>{
    const img = document.querySelector(".img_hom")
    img.src = prod ? urlFor(prod.image_one.asset._ref) : urlFor(prod.image_one.asset._ref)
  }

  const image_two = ()=>{
    const img = document.querySelector(".img_hom")
    img.src = prod ? urlFor(prod.image_two.asset._ref) : urlFor(prod.image_one.asset._ref)
  }

  const image_three = ()=>{
    const img = document.querySelector(".img_hom")
    img.src = prod ? urlFor(prod.image_three.asset._ref) : urlFor(prod.image_one.asset._ref)
  }


  useEffect(() => {
    window.scrollTo(0, 0)
    const fetchData = async () => {
        try {
            const result = await client.fetch(`
                *[_type == 'producte' && _id == '${idprod}']{
                    _id,
                    title,
                    price,
                    description,
                    image_one{asset{_ref,_type}},
                    image_two{asset{_ref,_type}},
                    image_three{asset{_ref,_type}},
                }
            `);
            setprod(result[0]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
      }, [idprod]);
  return (
    <>
    <Navebar/>
    <section className="he container mx-auto py-36">
       <div className="flex gap-32 flex-col md:flex-row ">
            <div className="md:w-1/3 w-full space-y-10">
                <div className="rounded-lg overflow-hidden cursor-pointer hover:shadow-lg hover:border hover:border-black">
                    <img className="w-full img_hom" src={prod ? urlFor(prod.image_one.asset._ref) : ""} alt="webp" />
                </div>
                <div className="flex justify-center items-center gap-10">
                    <div className="w-44 overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:border hover:border-black">
                        <img className="w-full" onClick={image_one} src={prod ? urlFor(prod.image_one.asset._ref) : ""} alt="webp" />
                    </div>
                    <div className="w-44 overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:border hover:border-black">
                        <img className="w-full" onClick={image_two} src={prod ? urlFor(prod.image_two.asset._ref) : ""} alt="webp" />
                    </div>
                    <div className="w-44 overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:border hover:border-black">
                        <img className="w-full" onClick={image_three} src={prod ? urlFor(prod.image_three.asset._ref) : ""} alt="webp" />
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 w-full h-full space-y-6">
                <div>
                    <h1 className="text-4xl capitalize">Healthy Melt</h1>
                </div>
                <div className="flex gap-3 text-xl items-center w-fit">
                    <p className="">$ 76.00</p>
                    <div className="p-2 bg-pink-600 w-fit text-white rounded-lg text-center">
                        SAVE 5%
                    </div>
                </div>
                <div>
                    <p className="text-xl opacity-90">
                    100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.
                    </p>
                </div>
                <div>
                    <div className=" flex items-center gap-10">
                        <h1 className="text-2xl capitalize">Color :</h1>
                        <div className="space-x-4 flex">
                            <div className="bg-red-800 w-11 h-11 rounded-lg cursor-pointer hover:shadow-red-800 hover:shadow-lg"></div>
                            <div className="bg-blue-800 w-11 h-11 rounded-lg cursor-pointer hover:shadow-blue-800 hover:shadow-lg"></div>
                            <div className="bg-yellow-800 w-11 h-11 rounded-lg cursor-pointer hover:shadow-yellow-800 hover:shadow-lg"></div>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <div className="px-10 py-2 rounded-lg text-3xl uppercase bg-pink-600 w-fit cursor-pointer text-white hover:shadow-lg" onClick={()=>movetoorder()}>Order</div>
                </div>
                <div className="space-y-4">
                    <h1 className='text-2xl capitalize'>Share</h1>
                    <div className="flex gap-3">
                        <div className="text-4xl hover:text-blue-800 cursor-pointer">
                            <FontAwesomeIcon icon={faSquareFacebook} />
                        </div>
                        <div className="text-4xl hover:text-pink-800 cursor-pointer">
                            <FontAwesomeIcon icon={faSquareInstagram} />
                        </div>
                        <div className="text-4xl hover:text-blue-800 cursor-pointer">
                            <FontAwesomeIcon icon={faSquareTwitter} />
                        </div>
                        <div className="text-4xl hover:text-red-700 cursor-pointer">
                            <FontAwesomeIcon icon={faSquarePinterest} />
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className='flex gap-6 items-center'>
                        <div className="text-4xl">
                            <FontAwesomeIcon icon={faShieldHalved} />
                        </div>
                        <p className="text-xl capitalize">Security policy (edit with Customer reassurance module)</p>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <div className="text-4xl">
                            <FontAwesomeIcon icon={faTruck} />
                        </div>
                        <p className="text-xl capitalize">Delivery policy (edit with Customer reassurance module)</p>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <div className="text-4xl">
                            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                        </div>
                        <p className="text-xl capitalize">Return policy (edit with Customer reassurance module)</p>
                    </div>
                </div>
            </div>
       </div>
    </section>
    <section className="container mx-auto py-10">
        <div className="space-y-3">
            <div className="text-3xl font-serif capitalize flex justify-center items-center gap-20">
                <div className="cursor-pointer hover:text-gray-500">Description</div>
                <div className="cursor-pointer hover:text-gray-500">Product Details</div>
                <div className="cursor-pointer hover:text-gray-500">Reviews</div>
            </div>
            <div className="w-full h-1 bg-gray-200 rounded-full"></div>
        </div>
        <div>
            <div className="px-5 py-10 space-y-10">
                <div className='space-y-10'>
                    <h1 className="font-bold text-4xl capitalize">Details</h1>
                    <p className="text-xl capitalize opacity-80">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis noexercit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.</p>
                </div>
                <div className="space-y-10">
                    <h1 className="font-bold text-4xl capitalize">Features</h1>
                    <div className="space-y-6">
                        <div className="flex gap-6">
                            <div className="text-3xl">
                                <FontAwesomeIcon icon={faCirclePlay} />
                            </div>
                            <div className="text-2xl capitalize opacity-80">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="text-3xl">
                                <FontAwesomeIcon icon={faCirclePlay} />
                            </div>
                            <div className="text-2xl capitalize opacity-80">
                                Irure dolor in reprehenderit in voluptate velit esse
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="text-3xl">
                                <FontAwesomeIcon icon={faCirclePlay} />
                            </div>
                            <div className="text-2xl capitalize opacity-80">
                                Sed do eiusmod tempor incididunt ut labore et 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section ref={order} className="container mx-auto py-20">
            <div  className="py-16 flex justify-center w-full" id="order">
                    <form onSubmit={handelsubmit}  className="w-full  text-center space-y-12 border border-spacing-4 p-8 rounded-lg shadow-lg">
                        <div className="grid md:grid-cols-2 gap-3">
                            <input type="text"  name="first_name" onChange={handelform} value={data.first_name}  placeholder="First Name"  className="outline-none border border-gray-200 py-4 px-2 rounded-lg"/>
                            <input type="text"  name="Last_name" onChange={handelform} value={data.Last_name}  placeholder="Last Name" className="outline-none border border-gray-200 py-4 px-2 rounded-lg" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                            <input type="text" placeholder="Email" onChange={handelform} value={data.email} name="email"  className="outline-none border border-gray-200 py-4 px-2 rounded-lg" />
                            <input type="text"  placeholder="Phone" onChange={handelform} value={data.phone}  name="phone"  className="outline-none border border-gray-200 py-4 px-2 rounded-lg" />
                        </div>
                           <div className="grid md:grid-cols-2 gap-3">
                            <input type="text" placeholder="Post Code" onChange={handelform} value={data.postcode} name="postcode"  className="outline-none border border-gray-200 py-4 px-2 rounded-lg" />
                            <input type="text" placeholder="Country" onChange={handelform} value={data.contry}  name="contry"  className="outline-none border border-gray-200 py-4 px-2 rounded-lg" />
                          </div>
                          <div className="grid md:grid-cols-2 gap-3">
                            <input type="text" placeholder="City"onChange={handelform} value={data.city}  name="city"  className="outline-none border border-gray-200 py-4 px-2 rounded-lg" />
                          </div>
                          <div className="grid md:grid-cols-1 gap-3">
                            <input type="text" onChange={handelform} value={data.address}  name="address"  placeholder="Address" className="outline-none border border-gray-200 py-4 px-2 rounded-lg" />
                          </div>
                        <div className="flex justify-center">
                            <button type="submit" className="py-5 px-3 border border-gray-600 rounded-full text-white bg-pink-600 text-xl font-bold uppercase hover:bg-gray-800 md:w-1/2 w-full">Order Now</button>
                        </div>
                    </form>
              </div>
    </section>
    <Footer/>
    </>
  )
}
