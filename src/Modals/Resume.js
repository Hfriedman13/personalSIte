import App from '../App.js';
import { Accordion, Card, Button} from 'react-bootstrap'

function Resume({handleClose}) {
    return (
        < div id="resume" >
        <h2 id="popupHeader">Resume</h2>
        <Accordion>
            <Card>
                    <Accordion.Toggle className='accordionHeader' as={Button} eventKey="0">
                        Schooling
      </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                        <Card.Body className='accordionBody'>I am currently persuing my Bachelors degree in Computer Science at Auburn University.
                        I also have a Bachelors in Sociology with a minor in Psychology from Florida Gulf Coast University.</Card.Body>
                    
                </Accordion.Collapse>
            </Card>
            <Card>
                 <Accordion.Toggle className='accordionHeader' as={Button} eventKey="1">
                    Skills and Abilities
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                        <Card.Body className='accordionBody'>Experience with Java, Swift, HTML, CSS, and some JavaScript / React. I have a strong 
                        work ethic and management skills. </Card.Body>
                </Accordion.Collapse>
            </Card>
                <Card>
                        <Accordion.Toggle className='accordionHeader' as={Button} eventKey="2">
                            Experience 
      </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body className='accordionBody'>Although I have no work experience as a developer, I have a passion for developing Apps and working with 
                        Swift. </Card.Body>
                    </Accordion.Collapse>
                </Card>
        </Accordion>
            <span className="close-button" onClick={() => handleClose('resume')}>Close</span>
        </ div>
    );
    
}
export default Resume
