import React, { useState } from 'react'
import './index.css'
import './App.css'
import { faqData } from './Data/Faq'

const FaqWithProps = () => {
    let [currentId,setCurrentId]=useState(faqData[0].id)

    let items=faqData.map((itemsData,i)=>{
        let itemsDetails={
            itemsData,
            currentId,
            setCurrentId
        }
        return(
            <FaqItems itemsDetails={itemsDetails}  key={i}/>
        )
    })
  return (
    <div className='App'>
        <h1 className='items-center font-bold text-4xl mt-8'>FAQ with Props Drilling</h1>
        <div className='faqouter'>
           {items}
        </div>
    </div>
  )
}

export default FaqWithProps

function FaqItems({itemsDetails}){
    let {itemsData,currentId,setCurrentId}=itemsDetails;
    return (
        <div className='faqItems mt-12'>
                <h2 onClick={()=>setCurrentId(itemsData.id)}>{itemsData.question}</h2>

                <p className={currentId===itemsData.id ? 'activeAnswer':""}>{itemsData.answer}</p>
            </div>
    )
}