import React from 'react'
import './CardGrid.css';
// import "./GSAPComponents.css"
import { gsap } from "gsap";


function CardGrid() {
    //gsap.to(".box", {duration: 3, x: 300, opacity: 0, scale: 0.5})
    gsap.to(".box",{ duration: 2.5, ease: "circ.out", x: "400%" })
    

    return (
        <div>
            <div className="box"></div>
            <div className="box">bsfvsdfvsf</div>
            <div className="box">c</div>
        </div>
    )
}

export default CardGrid
