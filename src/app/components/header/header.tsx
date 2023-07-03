import Image from 'next/image'
import "./header.scss"


export function Header() {

  return (
    <div className="header"> 
      <div>
        <h1>Hi, i´m Kauan Mossini!👋</h1>
        <h2> Full Developer</h2>
        </div>
      <Image
        src="/me.jpeg"
        alt="Kauan Mossini"
        width={270}
        height={260}
        priority
      />
    </div>
  )
} 