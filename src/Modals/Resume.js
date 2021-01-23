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
                        Work History
                        </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body className='accordionBody'>Internship - Studio67 - Web design </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle className='accordionHeader' as={Button} eventKey="2">
                        Skills
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="2">
                        <Card.Body className='accordionBody'>
                           * Java <br></br>
                           * HTML / CSS <br></br>
                           * JavaScript <br></br>
                           * Swift / SwiftUI
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <span className="close-button" onClick={() => handleClose('resume')}>Close</span>
        </ div>
    );
}
export default Resume
