
import selfie from '../Assets/selfie.png';

function Info({ handleClose }) {
    return(
        < div id="popup" >
            <h2 id="popupHeader">About Me. . . </h2>
            <h3>Hello!</h3>
            <image className="infoImage">
                <img  alt="" src={selfie} width='160' height='275'/>
            </image>
            <p id="infoPara">My name is Hannah Friedman, I am an ambitious beginner looking for a challenge. Currently pursuing my bachelor’s in computer science, I am humble and
        hungry to learn new skills and grow as a developer.  </p>
            <span className="close-button" onClick={() => handleClose('popup')}>Close</span>
        </div>
    );
}

export default Info
