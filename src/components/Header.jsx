import image from '../assets/image.png'

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <img src={image} alt="Studio Ghibli Logo" className="header-image" />

        </div>
        <p className="header-quote">
          "The world is full of magical things, patiently waiting for our senses to grow sharper."
        </p>
      </div>
    </header>
  )
}
  
  