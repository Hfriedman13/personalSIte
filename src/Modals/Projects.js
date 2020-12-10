import { Accordion, Card, Button } from 'react-bootstrap'

function Projects({ handleClose }) {
    return (
        /**Project popup */
        <div id="projects">
            <h2 id="popupHeader">Projects!</h2>
            <Accordion>
                <Card>
                    <Accordion.Toggle className='accordionHeader' as={Button} eventKey="0">
                        Personal Site
                        </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className='accordionBody'>My personal webpage is written with a combination of React, javaScript, and css. I created this page
                        to allow users to view infomation about myself including my resume with direct links to my Github and Linkdin account.
                        </Card.Body>

                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle className='accordionHeader' as={Button} eventKey="1">
                        iOS Development Bootcamp
                        </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body className='accordionBody'>I am currently enrolled in a iOS App development bootcamp. During the length
                        of the course I have currently completed 10 Apps, as well as developed a love for the Swift language. I am developing
                        my own app store game, which I hope to be completed soon and have it downloadable in the app store.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle className='accordionHeader' as={Button} eventKey="2">
                        C# Web Browser
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="2">
                        <Card.Body className='accordionBody'>
                            Using Visual Studio and the Windows Forms framework in C#. The web browser has multiple functions, similar to those in a typical
                web browser. A menubar, tool strip, tab control, etc..
               <br></br>
                <a href="https://github.com/Hfriedman13/CPSC-2713">Repository</a></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <a href="/#" onClick={() => handleClose('projects')}>Close</a>
        </ div>
    );
}
export default Projects

