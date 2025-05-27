// create cities list 
// then print on the screen 
// then one input box for seach cities
// then logic for the searching in onchange


import {React,useState} from 'react'

export const CityTask = () => {

    const cityList = ["Mumbai", "Delhi", "Pune", "Bangalore", "Kolkata", "Chandigarh", "Chennai", "Jaipur", "Lucknow"]
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCities = cityList.filter(city =>
        city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1 className='font-bold text-4xl mb-4 '>City list</h1>

            <input type='text' className='border mb-4' value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Please choose your city' />
            <div>
                 {filteredCities.length > 0 ? (
                    filteredCities.map((city, index) => (
                        <div key={index} className='text-lg'>{city}</div>
                    ))
                ) : (
                    <div className='text-gray-500'>No city found</div>
                )}
            </div>

        </div>
    )
}


