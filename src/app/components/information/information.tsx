import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info () {

return (
    <div className="infos">
    <SectionTitle text="Languages"/>
    <div className="languages-info">
      <span> 🇺🇸 EN-Fluent</span>
      <span> 🇪🇸 ES-Intermediate</span>
      <span> 🇧🇷 PT-BR-Native Speaker</span>
    </div>
   
    <SectionTitle text="Education"/>
    <div className="educational-info">
      <span>🎓Java in Practice</span>
      <span>🎓Basic Java Language Certificate</span>
      <span>🎓Basic Programming Logic Certificate</span>
      <span>🎓C language projects using Arduino</span>
    </div>
  </div>

)

}