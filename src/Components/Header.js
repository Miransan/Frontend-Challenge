import React from "react";
import '../App.css';
import header from "../header.png";


function Header(props) {
       
  
    return (
        <div className="App-header">
        <div id="header-img" >
                <img src={header} alt="headerimg" />
            </div>
        <ul className='Header-List'>
          
          <a href='#skills-div' className='Header-ListItems' id="skills-button">Skills</a>
          <a href='#projects-div' className='Header-ListItems' id="projects-button">Projects</a>
          <li className='Header-ListItems' id="Contactme-Button"> <a href="mailto:miran@ozu.edu.tr">Contact Me!</a></li>
        </ul>
        </div>
    );
  }
  
  export default Header;






