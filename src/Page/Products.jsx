import { Footer } from "../Component/Footer"
import { Navebar } from "../Component/Navebar"
import {Card} from "../Component/Card"
import { useState } from 'react';
import { useSelector } from 'react-redux';





export const Products = () => {


  const [searchText, setSearchText] = useState("")
  const data = useSelector((state)=> state.proudcts[0])
  const filteredData = data.filter(prod => prod.title.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <>
    <Navebar/>
    <section className="he container mx-auto">
        <div className="md:py-10 text-center pt-32">
            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} className="px-6 py-3 text-xl outline-none border border-black w-full md:w-1/3 rounded-full" type="text" />
        </div>
        <div className="flex rox justify-center items-center gap-4 py-10 flex-wrap"> 
        {
           filteredData.map((prod) => {
            return <Card prod={prod} key={prod._id} /> 
          })
        }
        </div>
    </section>
    <Footer/>
    </>
  )
}
