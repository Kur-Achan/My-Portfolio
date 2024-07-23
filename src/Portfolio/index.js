import  './index.css';
import React, { useState ,useEffect } from 'react';
function Portfolio() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 1024);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
  return(
        <div className='folio'>
        <div className={isMenuOpen ? 'menu-open' : ''}>
        <header>
          {isMobile && (
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          {(!isMobile || isMenuOpen) && (
            <nav className={isMenuOpen ? 'open' : ''}>
              <ul>
                <li><a href="#" >Achan</a></li>
                <li><a href="#">CV</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#"className='active'>My Skills</a></li>
                <li><a href="#"></a></li>
              </ul>
            </nav>
          )}
        </header>
        <button id='circle'></button>
        <button id='circle2'></button>
        <div className='heading'>
            <p id='me'>Achan</p>
            <p id='salutation'>Hi,</p>
            <p  id='intro'>I'm Achan</p>
            
            <img src="./Images/photo.png" alt="" id="pic"></img>

            <img src="./Images/chat.png" alt="" id="sms"></img>
           

 <div className='download'>
<h1> Download</h1>
<p>Click on the image to download it</p>
<a href=".Images/Achan Kur CV.pdf" download>
  <img src="./Images/AchanKur CV.pdf" alt="cv" width="104" height="142"></img>
  <button id='btn'>More me</button>

</a>
<div id='chat'>
  <p>Let's chat</p>
  </div>
</div>
   </div>
   </div>
   </div>

 
    );
};

export default Portfolio;