import React from "react";
import { SectionTitle } from "../sectionTitle/section-title";
import "./experience.scss"
import Image from "next/image";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>As a junior developer, I bring solid experience in various languages and technologies, allowing me to work comprehensively on full-stack projects. Over time, I have worked with languages such as Java, PHP, and Python, familiarizing myself with the main frameworks associated with each of them.
         My experience stands out in writing clean and modular code, especially using TypeScript, which enhances the robustness and scalability of the projects I work on. I stay consistently updated with industry best practices and have a deep passion for creating exceptional user experiences. </p>

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
          <span>8 Months</span>
        </div>
    </div>
    
        </div>

        <div className="experience-language">
          <Image
            src="/python.png"
            alt="Python Logo"
            width={40}
            height={40}
            priority
          />

          <div className="experience-unit">
            <div className="experience-measure measure-5">
              <span>3 Months</span>
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