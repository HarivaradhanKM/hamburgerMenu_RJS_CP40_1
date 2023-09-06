import Header from '../Header'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <Header />
    <div className="not-found-content-container">
      <div className="not-fount-responsive-container">
        <img
          className="not-found-image"
          alt="not found"
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        />
        <h1 className="heading">Lost Your Way?</h1>
        <p className="description">
          Sorry, we cannot find that page. You will find lots to explore on the
          home page
        </p>
      </div>
    </div>
  </div>
)

export default NotFound
