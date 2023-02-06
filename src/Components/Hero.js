import '../App.css';
import cvphoto from "../cvphoto.png";
import GithubLogo from "../github.png";
import LinkedinLogo from "../LinkedIn.png";

// import { Route, Link, Switch } from 'react-router-dom';
// const {reference,clickskills,clickproject}=props;



function Hero(props) {


    return (
        <section class="hero-section">

            <div class="hero-top">

                <div id="hero-line" >
                    
                     Miran Şan 
                </div>
               
                
            </div>

            <div id="hero-div">
                <h1 id="hero-sentence">
                    An Entrepreneur <br />
                    Who thinks <br />
                    Outside the box <br />
                </h1>
                <p id="hero-ozet">Hi. I am Miran. If you are looking for someone with high level of teamwork, motivation and energy, you are at the right address. do not hesitate to contact me.</p>
            </div>
            
            <div id="hero-image" >
                <img src={cvphoto} alt="cvphoto" />
            </div>

            <div className="buttons-scroll">

                <button className="hero-contact-button">
                    <a href="mailto:miran@ozu.edu.tr">Contact Me!</a>
                </button>

                <button className="hero-github-button">
                    <img src={GithubLogo} alt="github" />
                    <a href="https://github.com/Miransan" >Github</a>
                </button>

                <button className="hero-linkedin-button">
                    <img src={LinkedinLogo} alt="linkedin" />

                    <a href="https://www.linkedin.com/in/miransan/" >Linkedin</a>
                </button>
            </div>


        </section>

    );
}

export default Hero;


