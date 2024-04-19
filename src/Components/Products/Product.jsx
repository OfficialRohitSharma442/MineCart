import React from 'react'

const Product = ({ data }) => {

    return (
        <div className='h-[300px] w-[300px]'>
            <div className="min-w-[300px]  h-full rounded-md overflow-hidden shadow-md  hover:shadow-lg">
                <div className="relative">
                    <img className="w-[300px] h-[100px] object-cover" src={data?.thumbnail} alt="Product Image" />
                    {/* <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
                    </div> */}
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">{data?.title}</h3>
                    <div className='flex flex-col justify-around'>

                        <p className="text-gray-600 text-sm mb-4 max-h-15">{data?.description}</p>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-lg">${data?.price}</span>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product