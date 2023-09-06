import Header from '../Header'

import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="about-image-container">
      <img
        className="mobile-about-image"
        alt="About"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
      />
      <img
        className="desktop-about-image"
        alt="About"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
      />
    </div>
  </div>
)

export default About
