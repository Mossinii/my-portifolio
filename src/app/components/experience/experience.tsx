import React from "react";
import { SectionTitle } from "../sectionTitle/section-title";
import "./experience.scss"
import Image from "next/image";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>Como desenvolvedor júnior, trago uma sólida experiência em várias linguagens e tecnologias, o que me permite atuar de forma abrangente em projetos full-stack. Ao longo do tempo, trabalhei com linguagens como Java, PHP e Python, conhecendo os principais frameworks associados a cada uma delas.
         Minha experiência se destaca na escrita de código limpo e modular, especialmente usando TypeScript, o que fortalece a robustez e a escalabilidade dos projetos em que trabalho. Estou continuamente atualizado com as melhores práticas da indústria e tenho uma paixão profunda por criar experiências de usuário excepcionais. </p>

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