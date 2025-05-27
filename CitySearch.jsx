import React, { useState } from 'react'

const CitySearch = () => {

  const [store,setStore]=useState('')

  const city =["Mumbai","Pune","Latur","UK","Londan","Kurla","Swarget","Karad","Kadegaon","Kadepur"]

  const handleCity=((e)=>(
      setStore(e.target.value)
  ))

  const filterCity=city.filter((element)=>(
      element.toLowerCase().includes(store.toLowerCase())
  ))

  return (
    <div>
      <input type='text' className='mt-6 w-1/2 h-10 border rounded-full' placeholder='       Search here.......' onChange={handleCity} />

      {
        filterCity.map((element)=>(
          <div className='mt-2'>{element}</div>
        ))
      }

    </div>
  )
}

export default CitySearch