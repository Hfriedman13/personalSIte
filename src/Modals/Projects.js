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
                        <Card.Body className='accordionBody'>I created an interactive web app using JavaScript 
                        and React to showcase my resume, and projects. The site also has a links to my GitHub and 
                        LinkedIn Profiles. Using GitHub pages to host my site, I purchased a domain name to allow 
                        you to access my site via my URL. This project was created with best practices in mind by 
                        following modern CSS/HTML guidelines through the react documentation and CSS-tricks website.
                        </Card.Body>

                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle className='accordionHeader' as={Button} eventKey="1">
                        iOS Development Bootcamp
                        </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body className='accordionBody'>Beginning the course in mid-November of 2020. I have expanded my 
                        knowledge, interest and skills with Swift and SwiftUI. Over the course of a few months, I have learned 
                        the basics of Xcode, interface builder, MVC design patterns, JSON Parsing, APIs, and Core Location. I 
                        continue to practice these techniques in my projects such as Runher and projects given throughout the 
                        Bootcamp. This course has amplified my interest in iOS development. </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle className='accordionHeader' as={Button} eventKey="2">
                        RunHer
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="2">
                        <Card.Body className='accordionBody'>
                            I am currently in the process of developing an iOS app which tracks your route, pace, and distance while 
                            you're on a run. Made with SwiftUI, this app allows users to save their runs to track their performance using
                             their core location along with map kit. My app shows the user their route marked with a pace line, which is
                            green, yellow, or red based upon their pace.  I am hoping to soon put this app on the app store. 
               <br></br>
                </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <span className="close-button" onClick={() => handleClose('projects')}>Close</span>
        </ div>
    );
}
export default Projects

