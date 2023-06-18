import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info () {

return (
    <div className="infos">
    <SectionTitle text="languages"/>
    <div className="languages-info">
      <span> ✨EN-Fluent</span>
      <span> ✨PT-BR-Native Speaker</span>
    </div>
   
    <SectionTitle text="education"/>
    <div className="educational-info">
      <span> emoji</span>
      <span>Computer Science Bachelors Degree - Universidade Federal de Pelotas</span>
    </div>
  </div>

)

}