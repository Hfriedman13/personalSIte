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
                        <Card.Body className='accordionBody'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat</Card.Body>
                    
                </Accordion.Collapse>
            </Card>
            <Card>
                 <Accordion.Toggle className='accordionHeader' as={Button} eventKey="1">
                    Skills and Abilities
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                        <Card.Body className='accordionBody'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat</Card.Body>
                </Accordion.Collapse>
            </Card>
                <Card>
                        <Accordion.Toggle className='accordionHeader' as={Button} eventKey="2">
                            Experience? 
      </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body className='accordionBody'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat</Card.Body>
                    </Accordion.Collapse>
                </Card>
        </Accordion>
        <a href="/#" onClick={() => handleClose('resume')}>Close</a>
        </ div>
    );
    
}
export default Resume
