
import { Header } from './components/header/header'
import './styles/home.scss'

export default function Home() {
  return (
    <main className="container">
    <Header/>
      <div className="experince">
        <h3>Experience</h3>
        <p>3 years working as a Software Developer, in companys such as Itaú, Stone and Aftersale.</p>
        <div className="experience-time">
        </div>
        <div className="infos">
          <h3>languages</h3>
          <div className="leanguages-info">
            <span> ✨EN-Fluent</span>
            <span> ✨PT-BR-Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="educational-info">
            <span> emoji</span>
            <span>Computer Science Bachelors Degree - Universidade Federal de Pelotas</span>
          </div>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>Contact me</button>
        </div>
      </div>
    </main>
  )
}
