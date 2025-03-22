/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { productsContext } from './productsContext'


export const productsProvider = ({ children }) => {

    const [products, setproducts] = useState([])

    const fetchproducts = async () => {
        const response = await fetch('../../../db.js')
        const data = await response.json()
        console.log(data)
        setproducts(data)
    }

    useEffect(() => {
        fetchproducts()

    }, [])

    return (
        <productsContext.Provider value={{products}}>
            {children}
        </productsContext.Provider>
    )
}