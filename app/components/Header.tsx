function Header() {
  return (
    <>
      <div id="header">
        <div className="container">
            <nav>
                <img src="img/logo.png" className="logo"/>
                <ul>
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="header_text">
                <p>Student</p>
                <h1>Hello, I'm Hoang <span>Chi Si</span><br/>a student of VNU HCMUS.</h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header