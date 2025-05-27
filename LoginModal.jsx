import {React,useState} from 'react'
import './App.css'
const LoginModal = () => {

    let [modalStatus,setModalStatus]=useState(false)

  return (
    <div>
        <button className='mt-4 border border-black py-4 px-2 rounded-full pb-4' onClick={()=>setModalStatus(!modalStatus)}>Enquire Now</button>
    <button></button>
    <div className={`modalOverLay ${modalStatus ? 'modalShow':''}`}>
        <div className={`modalDiv ${modalStatus ? 'showModalView':''}`}>
            <h3>Enquiry Now</h3>
        </div>
    </div>
    </div>
  )
}

export default LoginModal