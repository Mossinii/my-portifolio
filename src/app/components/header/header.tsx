import Image from 'next/image'
import "./header.scss"


export function Header() {

  return (
    <div className="header"> 
      <div>
        <h1>Hi, i´m Kauan Mossini!👋</h1>
        <h2>Developer</h2>
        </div>
      <Image
        src="/me.jpeg"
        alt="Vercel Logo"
        width={280}
        height={277}
        priority
      />
    </div>
  )
} 