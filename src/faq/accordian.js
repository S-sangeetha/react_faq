import add from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg"
import React from "react";
import { useState } from 'react';
const Accordion = ({ question, answer }) => {
    const [isActive, setActive] = useState(false)
    return (
        <div className="mt-6">
            <button class="accordion-toggle group inline-flex items-center justify-between w-full   mr-8" onClick={() => setActive(!isActive)}>
                <h6 className="text-[customPurple] hover:text-[#ad28eb]"> {question}</h6>
                <div>
                    <img src={isActive ? minus : add} width="22" height="22" viewBox="0 0 22 22" fill="none" alt="symbol"></img>
                </div>
            </button>
            <div >
                {isActive && <p className="text-lightPurple justify-between">{answer}</p>}
            </div>
            <hr></hr>
        </div>
    )
}
export default Accordion;