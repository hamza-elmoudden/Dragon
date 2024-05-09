import { configureStore } from '@reduxjs/toolkit'
import producte from "./ProducteSlice"
import proudcts from "./Producte"
import productethree from "./Productthree"

export const store = configureStore({
    reducer:{
        producte:producte,
        proudcts:proudcts,
        productethree:productethree
    }
})