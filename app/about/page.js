"use client"
import { useEffect } from "react";
import style from "./page.module.css"
import Image from "next/image";
const About=()=>{
useEffect(()=>{
    console.log("hello to the woprld")
})
return(
    <div className="row">
      <div className="col-md-8">
       <div className={style.image}></div>
      </div>
      <div className="col-md-4"></div> 
    
    </div>
)    
}

export default About;