import '../styles/hero.css'

const Hero = () => {
  return (
    <>
      <div className="Main">
        <h2>Elzipo.dev</h2>
        <h1>PORTFOLIO</h1>
        <p>software developer</p>
      </div>

      <div className="email">
        <p>Elzipo106@gmail.com</p>
      </div>

      <footer>&copy; copyright reserved {new Date().getFullYear()}
      </footer>
    </>
  )
}

export default Hero
