import { Link } from "react-router-dom";
import SwiperContent from "../swiper";
// import { HashLink as Lin } from "react-router-hash-link";




// icons link
//import { FaAmazon } from "react-icons/fa";
//import { SiFlipkart, SiPaytm, SiZoho, SiTcs, SiApple } from "react-icons/si";

// icons
//import { BsPersonWorkspace } from "react-icons/bs";
//import { FaUserTie } from "react-icons/fa6";
//import { FaMoneyCheck, FaHandsHelping } from "react-icons/fa";


export default function Home() {


  

  return (
    <>
      {/* --------------Carousel start----------------------------- */}

      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../image/swiper_img3.jpg" width="100%" height="100%" alt="" />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1 className="text-light">START YOUR WORK</h1>
                <p className="opacity-75"> Turn your ideas into reality by hiring top freelancers—fast, reliable, and tailored to your needs</p>
                <Link className="btn btn-lg btn-success" to='/signup'>Sign up today</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../image/swiper_img2.jpg" width="100%" height="100%" alt="" />
            <div className="container">
              <div className="carousel-caption">
                <h1 className="text-light">CHOOSE YOUR PROJECT</h1>
                <p>Get work done in over 2700 different categories</p>
                <Link className="btn btn-lg btn-success" to="/browsejob">Learn more...</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../image/swiper_img.jpg" width="100%" height="100%" alt="" />
            <div classNames="container">
              <div className="carousel-caption text-end">
                <h1 className="text-light">POST YOUR NEEDS</h1>
                <p>Need to hire a freelancer for a job?</p>
                <Link className="btn btn-lg btn-success" to="./postjob">Way to go</Link>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      <SwiperContent />
     
    </>
  );
}
