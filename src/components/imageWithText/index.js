
// import image1 from "../components/assests/1.jpg"
import image2 from "../assests/2.jpg"
import image3 from "../assests/3.jpg"
import "./imageWithText.scss"

function ImgeWithText() {
    return (
        <div className="image-with-text-container">
        <div className="bg">
          <img className="courses-image" src={image2} alt="" />
          <div className="overlay">
            <h2>Check This <span>Out!</span></h2>
            <p>this is some text.</p>
          </div>
          <p>faisal</p>
        </div>
        <div className="bg">
          <img className="courses-image" src={image2} alt="" />
          <div className="overlay">
            <h2>Check This <span>Out!</span></h2>
            <p>this is some text.</p>
          </div>
          <p>faisal</p>
        </div>
        <div className="bg">
          <img className="courses-image" src={image2} alt="" />
          <div className="overlay">
            <h2>Check This Out!</h2>
            <p>this is some text.</p>
          </div>
          <p>faisal</p>
        </div>
        <div className="bg">
          <img className="courses-image" src={image2} alt="" />
          <div className="overlay">
            <h2>Check This Out!</h2>
            <p>this is some text.</p>
          </div>
          <p>faisal</p>
        </div>
        <div className="bg">
          <img className="courses-image" src={image2} alt="" />
          <div className="overlay">
            <h2>Check This Out!</h2>
            <p>this is some text.</p>
          </div>
          <p>faisal</p>
        </div>
        <div className="bg">
          <img className="courses-image" src={image2} alt="" />
          <div className="overlay">
            <h2>Check This Out!</h2>
            <p>this is some text.</p>
          </div>
          <p>faisal</p>
        </div>
      </div>
    );
}

export default ImgeWithText;
