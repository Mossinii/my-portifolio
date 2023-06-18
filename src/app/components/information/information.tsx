import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info () {

return (
    <div className="infos">
    <SectionTitle text="languages"/>
    <div className="languages-info">
      <span> 🇺🇸 EN-Fluent</span>
      <span> 🇪🇸 ES-Intermediate</span>
      <span> 🇧🇷 PT-BR-Native Speaker</span>
    </div>
   
    <SectionTitle text="education"/>
    <div className="educational-info">
      <span>🎓</span>
      <span>Information Systems Bachelors Degree - Universidade de Caxias do Sul, 2024!</span>
    </div>
  </div>

)

}