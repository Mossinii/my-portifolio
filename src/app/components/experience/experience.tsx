import React from "react";
import { SectionTitle} from "../sectionTitle/section-title";
import "./experience.scss"
import Image from "next/image";

export function Experience (){
return (
    <div className="experience">
     <SectionTitle text ="Experience"/> 
   <p>3 years working as a Software Developer, in companys such as Itaú, Stone and Aftersale.</p>
    
    <div className="experience-time">
      <div>
      <Image
        src="/react.png"
        alt="React Logo"
        width={50}
        height={50}
        priority
      />
      </div>
    </div>
    </div>
)
}