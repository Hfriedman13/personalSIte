import './App.css';
import Info from './Modals/Info'
import Projects from './Modals/Projects'
import Resume from './Modals/Resume'
// import ContactForm from './Modals/ContactForm'

import {pdfjs} from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



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
            
        // break; 
        // case 'contact':
        //     var contact1 = document.getElementById('contact');
        //     if (contact1){
        //       contact1.classList.toggle('active');
        //     }
             
         break; 
         default:
           blur.classList.toggle('active');
           break;
    }

}


  return (
    <div className="App"> 
    <title>Hannah Friedman</title>
<body>
    <div className="container" id="blur">
        <h1 id="nameHeader">Hannah Friedman</h1>
        <p id="sub"> Coffee. Code. Repeat.  </p>
{
//main page content (header and buttons to popups)
}
    <div className="content">
            <br/>
            
          <span>
            <span className="mainButtons" onClick={() => toggle('popup')}>INFO</span>
            <br/>
            <span className="mainButtons" onClick={()=>toggle('projects')}>PROJECTS</span>
            <br/>
            <span className="mainButtons" onClick={()=>toggle('resume')}>RESUME</span>
            {/* <br/>
            <span className="mainButtons" onClick={()=>toggle('contact')}>Contact</span> */}
          <div>
            <span id="gitButton" className="mainButtons" onClick={()=> window.open('https://github.com/Hfriedman13', '_blank')}></span>
            <span id="linkedinButton" className="mainButtons" onClick={()=> window.open('http://www.linkedin.com/in/hannahruthfriedman', '_blank')}></span>
          </div>
          </span>
            
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
    {/* <ContactForm
    handleClose={toggle} */}
    {/* /> */}
</body>
    </div>
  );
}

export default App;
