import React, { useState } from 'react'
import './App.css'
import { faqData } from './Data/Faq'
const Faq = () => {

    let [showAns, setShowAns] = useState(faqData[0].id)

    return (
        <>
            <h1 className='mt-10 text-3xl font-bold mb-4'> Frequently Asked Question (FAQ) </h1>
            <div className='faqOuter'>
                {
                   
                    faqData.map((el) => {
                        return(
                        <div className='faqItems'>
                            <h2 className='text-2xl mb-2'onClick={()=>setShowAns(el.id )}>{el.question}</h2>
                            <p className={showAns == el.id ? "activeAnswer" : ""}>{el.answer}</p>
                        </div>
                     ) })
                }
            </div>
        </>
    )
}

export default Faq;