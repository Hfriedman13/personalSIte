
import selfie from '../Assets/selfie.png';

function Info({ handleClose }) {
    return (
        < div id="popup" >
            <h2 id="popupHeader">About Me. . . </h2>
            <h3>Hello!</h3>
            <div className="infoImage">
                <img alt="" src={selfie} width='160' height='275' />
            </div>
            <p id="infoPara">An ambitious beginner looking for a challenge. Currently pursuing 
            my bachelor’s in computer science, I am humble and hungry to learn new skills and grow 
            as a developer. I have a background in various coding languages such as Java, JavaScript, and Swift. 
            With four years of retail management experience, I have learned to work with teams, communicate 
            effectively, problem solve, and overcome adversity.   </p>
            <span className="close-button" onClick={() => handleClose()}>Close</span>
        </div>
    );
}

export default Info
