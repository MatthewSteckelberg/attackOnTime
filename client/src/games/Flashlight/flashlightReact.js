import "./flashlight.module.css";
import './index.css';
import lightOn from './images/light-on.webp';
import lightOff from './images/light-off.webp';
import Timer from '../../components/timer/Timer';
import { useContext } from 'react';
import UserContext from '../../components/UserContext';

function FlashlightReact(userObject) {
    const userManager = useContext(UserContext);
    console.log(userManager.currentUser)

    var light = "https://cdn.pixabay.com/photo/2012/04/16/13/27/switch-36000_960_720.png";


    function update(e) {
        var x = e.clientX || e.touches[0].clientX
        var y = e.clientY || e.touches[0].clientY

        document.documentElement.style.setProperty('--cursorX', x + 'px')
        document.documentElement.style.setProperty('--cursorY', y + 'px')
        // console.log({ x });
    }

    document.addEventListener('mousemove', update)
    document.addEventListener('touchmove', update)



    function turnOnLights() {
        var r = document.querySelector(':root');
        //   var rs = getComputedStyle(r);
        //   alert("--Flashlight is " + rs.getPropertyValue("--flashlight"));
        light = "https://cdn.pixabay.com/photo/2012/04/18/13/25/light-switch-37017_960_720.png"
        r.style.setProperty('--flashlight', 'none');
        r.style.setProperty('--mouse', 'auto');
        document.getElementById('lightSwitchOff').removeAttribute("hidden");
        document.getElementById('lightSwitchOn').hidden = true;
        // document.getElementById('light-next-button').removeAttribute("hidden");
        
        document.getElementById('xyz').removeAttribute("hidden");
        document.getElementById('flashlight-instructions').hidden = true;

        // var rs = getComputedStyle(r);

        //alert("--Flashlight is " + rs.getPropertyValue("--flashlight"));
        //alert("Light is now on");
    }

    return (

        <div className="flashlightGame">
            {userManager.currentUser ? <h2 id="flashlight-instructions">Help {userManager.currentUser.sub}, it's dark in here!</h2>:
            <h2 id="flashlight-instructions">It's dark in here, turn on the lights!</h2>
            }
            {/* <a hidden className='btn' id='light-next-button' href="/" type='submit'>NEXT</a> */}
            <div id="lightSwitchDiv row">
                <img className="switch" src={lightOff} alt="light switch" id="lightSwitchOn" onClick={turnOnLights} />
                <img className="switch" hidden src={lightOn} alt="light switch" id="lightSwitchOff" onClick={turnOnLights} />
            </div>
            <div hidden id='xyz'>
                <Timer userObject={userObject}/>
            </div>
        </div>
    );

}
export default FlashlightReact;