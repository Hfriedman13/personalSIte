import React from 'react'
// // import App from '../App.js';
// import { Page, Document } from 'react-pdf'


// function Resume({handleClose}) {
//     //const resume = require('../Assets/csalgadoRES.pdf')
//     return (
//         < div id="resume" >
//         <h2 id="popupHeader">Resume</h2>
//             <Document
//                 file={require('../Assets/resumePdf.pdf')}
//             >
//                 <Page pageNumber={0} />
//             </Document>
//             <span className="close-button" onClick={() => handleClose('resume')}>Close</span>
//         </ div>
//    

import { Accordion, Card, Button } from 'react-bootstrap'

function Resume({ handleClose }) {
    return (
        /**Project popup */
        <div id="resume">
            <h2 id="popupHeader">Resume</h2>
            <Accordion>
                <Card>
                    <Accordion.Toggle className='accordionHeader' as={Button} eventKey="0">
                        Education
                        </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className='accordionBody'> Florida Gulf Coast University - Bachelors - Sociology
                        Auburn University - Bachelors - Computer Science 
                        </Card.Body>

                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle className='accordionHeader' as={Button} eventKey="1">
                        Programming Languages
                        </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body className='accordionBody'>
                            • Java <br></br> 
                            • Swift / SwiftUI <br></br>
                            • JavaScript <br></br>
                            • HTML / CSS <br></br>
                             </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle className='accordionHeader' as={Button} eventKey="2">
                        Experience
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="2">
                        <Card.Body className='accordionBody'>
                            I am currently designing and developing a website for Studio67 and 
                            ShineOff Cosmetics. Using Wix, I have been working directly with the client 
                            to create a multi paged website(s) and shop that portrays their company to their 
                            liking. Throughout the process I have managed and edited the sites photos as well as 
                            put together a webstore where their products can be showcased and purchased quickly and 
                            efficiently.  
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <span className="close-button" onClick={() => handleClose('resume')}>Close</span>
        </ div>
    );
}
export default Resume
