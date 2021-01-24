import './App.css';
import Info from './Modals/Info'
import Projects from './Modals/Projects'
import Resume from './Modals/Resume'
import './cat.scss'
import Snap from 'snapsvg-cjs';
import { useEffect } from 'react';


function App() {
  //blur background while popup is opene
  function toggle(id) {
    var blur = document.getElementById('blur');
    if (blur) {
      blur.classList.toggle('active');
    }
    
    //Pop up modals when repspective buttons are clicked 
    switch(id) {
        case 'popup':
            var popup1 = document.getElementById('popup');
            if (popup1){
              popup1.classList.toggle('active'); 
            }
            
        break;
        case 'projects':
            var projects1 = document.getElementById('projects');
            if (projects1){
              projects1.classList.toggle('active');
            }
           
        break; 
        case 'resume':
            var resume1 = document.getElementById('resume');
            if (resume1) {
              resume1.classList.toggle('active');
            }

         break; 
         default:
           blur.classList.toggle('active');
           break;
    }
  }
  
  useEffect(() =>{
    window.addEventListener('DOMContentLoaded', play());
    return window.removeEventListener('DOMContentLoaded',play())
  },[])

  function play() {
    var blue = '#2980b9';
    const svgElement = document.getElementById('logo');
    if (svgElement) {
      var l = Snap('#logo');
      var p = l.select('path');
      l.clear();
      l.append(p);
      p.attr({
        fill: blue,
        stroke: '#0066CC',
      });

      setTimeout(function () {
        var logoTitle = 'Hannah Friedman';
        var logoRandom = '';
        var logoTitleContainer = l.text(0, '98%', '');
        var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
        logoTitleContainer.attr({
          fontSize: 380,
          fontFamily: 'Dosis',
          fontWeight: '600'
        });

        function generateRandomTitle(i, logoRandom) {
          setTimeout(function () {
            logoTitleContainer.attr({ text: logoRandom });
          }, i * 90);
        }

        for (var i = 0; i < logoTitle.length + 1; i++) {
          logoRandom = logoTitle.substr(0, i);
          for (var j = i; j < logoTitle.length; j++) {
            logoRandom += possible.charAt(Math.floor(Math.random() * possible.length));
          }
          generateRandomTitle(i, logoRandom);
          logoRandom = '';
        }
      }, 500);
    }
  }


  return (
    <div className="App"> 
    <title>Hannah Friedman</title>
    <div className="container" id="blur">
        <div id="nameHeader">
          <svg xmlns="http://www.w3.org/2000/svg" fill="plum" id="logo" viewBox="0 0 3200 700" width="750px">
            <path fill="none" />
          </svg>
        </div>
        <p id="sub"> Coffee. Code. Repeat.  </p>
{
//main page content (header and buttons to popups)
}
    <div className="content">

      <div className="mainButton-row">
        <span className="mainButtons" onClick={() => toggle('popup')}>INFO</span>
        <span className="mainButtons btn-space" onClick={()=>toggle('projects')}>PROJECTS</span>
        <span className="mainButtons" onClick={()=>toggle('resume')}>RESUME</span>
      </div>
      <div className="socialButton-row">
        <span id="gitButton" className="mainButtons" onClick={()=> window.open('https://github.com/Hfriedman13', '_blank')} />
        <span id="linkedinButton" className="mainButtons" onClick={()=> window.open('http://www.linkedin.com/in/hannahruthfriedman', '_blank')} />
      </div>
          <div className="main">
            <span className="stand"></span>
            <div className="cat">
              <div className="body"></div>
              <div className="head">
                <div className="ear"></div>
                <div className="ear"></div>
              </div>
              <div className="face">
                <div className="nose"></div>
                <div className="whisker-container">
                  <div className="whisker"></div>
                  <div className="whisker"></div>
                </div>
                <div className="whisker-container">
                  <div className="whisker"></div>
                  <div className="whisker"></div>
                </div>
              </div>
              <div className="tail-container">
                <div className="tail">
                  <div className="tail">
                    <div className="tail">
                      <div className="tail">
                        <div className="tail">
                          <div className="tail">
                            <div className="tail"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  </div>

    {//popups-->

}
   <Info
    handleClose={toggle}
    />
    <Projects
    handleClose={toggle}
    />
    <Resume
    handleClose={toggle}
    />
    </div>

    
  );
  
}

export default App;
