import React, { use, useState } from 'react'
import btnModule from './Button.module.css'

const TernaryPractice = () => {
        // const [status, setStatus] = useState(true);

        // const [pStatus, setPStatus] = useState(false)

        const [showPassword, setShowPassword] = useState(false)
       


    return (
        <div>

            {/* <input type={pStatus ? 'text' : 'password'} className='mt-6 border' />
            <button className='ml-4' onClick={() => setPStatus(!pStatus)}>{pStatus ? 'Hide' : 'show'}</button>
            <br/><br/>  */}

            {/* <input type={showPassword ? "text" : "password"} placeholder='please type password'/>

            <button onClick={()=>setShowPassword(!showPassword)}>{showPassword ? "Hide" :"Show"}</button> */}

                  {/* {/* <button className={btnModule.error}>Error</button>
            <button className='w-1/2 bg-[red] h-10 mt-10' onClick={() => setStatus(!status)}> {(status) ? "Hide" :"Show"}</button>
               
            {
                (status)
                    ?
                    <h1 className='text-4xl mt-4 bg-yellow-200 w-1/2 h-10'>Ternary Operator</h1>
                    :
                    ""
            } */}

                </div>
    )
}

export default TernaryPractice