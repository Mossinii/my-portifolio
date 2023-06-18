import React from "react";
import { SectionTitle } from "../sectionTitle/section-title";
import "./experience.scss"
import Image from "next/image";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>3 years working as a Software Developer, in companys such as Itaú, Stone and Aftersale.</p>

      <div className="experience-time">

        <div className="experience-language">
          <Image
            src="/java.png"
            alt="Java Logo"
            width={40}
            height={40}
            priority
          />

          <div className="experience-unit">
            <div className="experience-measure measure-3">
              <span>9 Months</span>
            </div>
          </div>
        </div>
        
        <div  className="experience-language">  

          <Image
            src="/js.png"
            alt="JavaSript Logo"
            width={40}
            height={40}
            priority
          />

           <div className="experience-unit">
        <div className="experience-measure measure-4">
          <span>1 Year</span>
        </div>
    </div>

        </div>

        <div  className="experience-language">

          <Image
            src="/php.png"
            alt="PHP Logo"
            width={40}
            height={40}
            priority
          />

           <div className="experience-unit">
        <div className="experience-measure measure-4">
          <span>1 Year</span>
        </div>
    </div>

        </div>

        <div  className="experience-language">
          <Image
            src="/react.png"
            alt="React Logo"
            width={40}
            height={40}
            priority
          />

           <div className="experience-unit">
        <div className="experience-measure measure-1">
          <span>6 Months</span>
        </div>
    </div>
    
        </div>

        <div  className="experience-language">

          <Image
            src="/ts.png.png"
            alt="TypeScript Logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-1">
              <span>6 Months</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}