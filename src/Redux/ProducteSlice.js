import { createSlice } from "@reduxjs/toolkit"
import { client } from "../Sanity/Client"

const initialState = []

async function getprodatcet(){
    const data = await client.fetch(`
        *[_type == 'producte'][0...6]{
            _id,

            title,

            price,
            
            image_one{
                asset{
                _ref
                }
            },
        }
    `)

    initialState.push(data)
    
}

await getprodatcet()

const producteslice = createSlice({
    name:"producte",
    initialState ,
})



export default producteslice.reducer