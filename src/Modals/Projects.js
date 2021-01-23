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
                        <Card.Body className='accordionBody'>This webpage is written with React JS, CSS, and HTML. This page will allow vistors to view a brief
                        about section, view projects I have completed / in the process of completing, as well as my resume, a contact form, and link to my Linkdin and Github. 
                        Thank you for visiting!! 
                        </Card.Body>

                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle className='accordionHeader' as={Button} eventKey="1">
                        iOS Development Bootcamp
                        </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body className='accordionBody'>I am currently enrolled in a iOS App development bootcamp. During the duration
                        of the course I have currently completed 10 Apps, as well as developed a love for the Swift language. I am developing
                        my own app store game with Watch OS, which I hope to be completed available in the app store soon.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle className='accordionHeader' as={Button} eventKey="2">
                        RunHer
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="2">
                        <Card.Body className='accordionBody'>
                            Written in Swift / SwiftUI, I created an iOS app where users can time their runs. I created RunHer to route, time, and track my runs. 
                            RunHer tracks your route in real time. Once your run is completed it shows a map of your run indicated by a "pace" line, which
                            will be green yellow or red depending on your pace throughout the run. It also allows you to save your runs.

               <br></br>
                <a href="https://github.com/Hfriedman13/CPSC-2713">Repository</a></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <span className="close-button" onClick={() => handleClose('projects')}>Close</span>
        </ div>
    );
}
export default Projects

