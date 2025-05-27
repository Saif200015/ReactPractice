import { React, useState } from 'react'
import { foodItems } from "./Data/food.js"

export const SearchFilter = () => {

    const [store, setStore] = useState(foodItems);
    const [data, setData] = useState('');

    const getData = ((e) => {
        console.log(e.target.value);
        setData(e.target.value);
    })

    const filterOut = store.filter((element) => {
        return element.name.toLowerCase().includes(data) || element.brand.toLowerCase().includes(data)
    })


    return (
        <div>
            <input type='text' placeholder=' Search here....' className=' mr-4 mt-5 border border-black w-1/2 h-10'
                onChange={getData} />
            <div className='mt-4'>
                {
                    filterOut && filterOut.length > 0 ? (
                        filterOut.map((element, index) => (
                            <div key={index}>
                                <p>{element.name}</p>
                                <p>{element.brand}</p>
                                <br />
                            </div>
                        ))
                    ) : (
                        <p>OOOOOOOps Data Not found</p>
                    )
                }

            </div>
        </div>
    )
}
