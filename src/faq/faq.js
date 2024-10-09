// import bckg from "../assets/images/background-pattern-desktop.svg"
import add from "../assets/images/icon-plus.svg";
import star  from "../assets/images/icon-star.svg";
import minus from "../assets/images/icon-minus.svg"
import React from "react";
import  { useState } from 'react';
function Faq() {
  const quesAns=[
    {   id: 1,
        question:"How can I get help if I'm stuck on a challenge?",
        answer:"The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated help channel! If you haven't joined yet, you can get an invite to our Discord server here."
    },
    {   id: 2,
        question:"How do I submit my solution?",
        answer:"We'd recommend reading our complete guide to submitting solutions . If you get stuck and need help, please feel free to ask questions in our Discord server, and we'll help you submit your project."
    },
    {   id: 3,
        question:"Is there an official solution I can take a look at?",
        answer:"We don't provide official solutions for the challenges. This is because there is no single perfect way to complete a challenge. Instead, you're encouraged to review other people's code in the community. You can learn so much by seeing how other people have approached the same challenges and giving them feedback."
    },
    {   id: 4,
        question:"Do I get a code review when I post my solution?",
        answer:"Frontend Mentor is a collaborative learning community where everyone can give feedback to each other. If you'd like to receive feedback from the community, please be sure to post a question "
    },
    
  ]
  const [id,setId]=useState([])
  const answer = (value) =>{
    if (id.includes(value)) {
      setId(id.filter((id) => id !== value));
    } else {
      setId([...id, value]);
    }    
  }
   
 const arrayDataItems = quesAns.map(quesAns =>  
    <div  className="">
        <button class="accordion-toggle group inline-flex items-center justify-between w-full   mr-8" onClick={() =>  answer(quesAns.id)}>
        <h6 className="text-[customPurple] hover:text-[#ad28eb]"> {quesAns.question}</h6>
        <div>
        <img src={ id.includes(quesAns.id)  ?minus:add} width="22" height="22" viewBox="0 0 22 22" fill="none" alt="symbol"></img> 
        </div>
        </button>
        <div >
        { id.includes(quesAns.id)  ? <p className="text-lightPurple justify-between">{quesAns.answer}</p> :" " }
        
        

        </div>
        <hr></hr>
    </div>
  )
    return(
    <div className="h-screen">
    <div  className='h-100 bg-bgcolor'>
    <div  className='bg-background h-56 sm:h-56 md:h-56'>

    <div  className='flex items-center justify-center'>
    <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto  bg-white border border-gray-200 rounded-lg shadow mt-28 p-4" >
    <div className="flex flex-row pl-4 pt-4">
        <img className="rounded-t-lg" src={star} alt="logo" /><h2 className="ml-5 font-WorkSansBold text-customPurple">FAQs</h2>
    </div>
    <div className="mt-6">
    {arrayDataItems}    
    </div>
   </div>
    </div>
</div>
  </div>
  </div>
  
    )}
    
    export default Faq;