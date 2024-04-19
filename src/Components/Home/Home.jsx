import React, { useState, useEffect } from 'react'
import Product from '../Products/Product'
import { products } from "./../../Json/Products.json"
import { IoIosPricetag } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";

const Home = () => {
    const [displayProducts, setDisplayProducts] = React.useState([]);
    const [searchedText, setSearchedText] = React.useState("")
    const [isSorting, setIsSorting] = React.useState(false);

    React.useEffect(() => {
        products && setDisplayProducts(products)
    }, [])
    React.useEffect(() => {

    }, [isSorting])

    const handleProductChange = (ev) => {
        const { value } = ev.target;
        setSearchedText(value)
        if (value) {
            const filteredProduct = products.filter((ele) => {
                return ele.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
            })
            setDisplayProducts(filteredProduct);
        } else {
            setDisplayProducts(products);
        }

    }
    const handleSortbyPrice = (ele) => {
        console.log({ products })

        const sortedByPrice = products.sort((a, b) => +a[ele] - +b[ele]);

        // products.sort(ele => ele.)
        setDisplayProducts(sortedByPrice)
        setIsSorting(!isSorting)
    }
    return (
        <div>
            <div className='m-5 h-[30px] flex justify-between'>
                <div className='flex gap-1'>

                    <button className=' bg-gray-300 rounded-md p-2 cursor-pointer' onClick={() => handleSortbyPrice("price")}>
                        <IoIosPricetag />
                    </button>
                    <button className=' bg-gray-300 rounded-md p-2 cursor-pointer' onClick={() => handleSortbyPrice("rating")}><FaRegStar /></button>
                </div>
                <div className='flex center gap-3'>
                    <input className='bg-gray-300 border-2	border-slate-600' onChange={handleProductChange} placeholder='search here' id="searchInput" type="text" value={searchedText} />

                </div>
            </div>
            <div className='flex justify-center flex-wrap gap-4'>
                {displayProducts.map((ele, i) => {
                    return <Product key={ele.id} data={ele} />
                })}
            </div>
        </div >
    )
}

export default Home