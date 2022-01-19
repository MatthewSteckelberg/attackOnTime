import "./flashlight.module.css";
import './index.css';
import lightOn from './images/light-on.webp';
import lightOff from './images/light-off.webp';
import Timer from '../../components/timer/Timer';
import { useContext, useEffect } from 'react';
import UserContext from '../../components/UserContext';

function FlashlightReact(userObject) {
    const userManager = useContext(UserContext);
    const switchNumber = Math.floor(Math.random() * 4 + 1);
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
        document.getElementById('lightSwitchOff1').removeAttribute("hidden");
        document.getElementById('lightSwitchOn1').hidden = true;
        document.getElementById('lightSwitchOff2').removeAttribute("hidden");
        document.getElementById('lightSwitchOn2').hidden = true;
        document.getElementById('lightSwitchOff3').removeAttribute("hidden");
        document.getElementById('lightSwitchOn3').hidden = true;
        document.getElementById('lightSwitchOff4').removeAttribute("hidden");
        document.getElementById('lightSwitchOn4').hidden = true;
        // document.getElementById('light-next-button').removeAttribute("hidden");
        
        document.getElementById('xyz').removeAttribute("hidden");
        document.getElementById('flashlight-instructions').hidden = true;

        // var rs = getComputedStyle(r);

        //alert("--Flashlight is " + rs.getPropertyValue("--flashlight"));
        //alert("Light is now on");
    }
    useEffect(() => {
    console.log('switch: ' + switchNumber)
    if (switchNumber === 2) {
        document.getElementById("lightswitch-1").hidden = true;
        document.getElementById("lightswitch-2").removeAttribute('hidden')
        document.getElementById("lightswitch-3").hidden = true;
        document.getElementById("lightswitch-4").hidden = true;
    } else if(switchNumber === 3) {
        document.getElementById("lightswitch-1").hidden = true;
        document.getElementById("lightswitch-2").hidden = true;
        document.getElementById("lightswitch-3").removeAttribute('hidden')
        document.getElementById("lightswitch-4").hidden = true;   
    } else if(switchNumber === 4) {
        document.getElementById("lightswitch-1").hidden = true;
        document.getElementById("lightswitch-2").hidden = true;
        document.getElementById("lightswitch-3").hidden = true;   
        document.getElementById("lightswitch-4").removeAttribute('hidden')
    }


    })
    return (

        <div className="flashlightGame">
            {userManager.currentUser ? <h2 id="flashlight-instructions">Help {userManager.currentUser.sub}, it's dark in here!</h2>:
            <h2 id="flashlight-instructions">It's dark in here, turn on the lights!</h2>
            }
            {/* <a hidden className='btn' id='light-next-button' href="/" type='submit'>NEXT</a> */}
            <div hidden id='xyz'>
                <Timer userObject={userObject}/>
            </div>
            <div id="lightswitch-1" className="lightswitch-1" >
                <img className="switch" src={lightOff} alt="light switch" id="lightSwitchOn1" onClick={turnOnLights} />
                <img className="switch" hidden src={lightOn} alt="light switch" id="lightSwitchOff1" onClick={turnOnLights} />
            </div>
            <div hidden id="lightswitch-2" className="lightswitch-2" >
                <img className="switch" src={lightOff} alt="light switch" id="lightSwitchOn2" onClick={turnOnLights} />
                <img className="switch" hidden src={lightOn} alt="light switch" id="lightSwitchOff2" onClick={turnOnLights} />
            </div>
            <div hidden id="lightswitch-3" className="lightswitch-3" >
                <img className="switch" src={lightOff} alt="light switch" id="lightSwitchOn3" onClick={turnOnLights} />
                <img className="switch" hidden src={lightOn} alt="light switch" id="lightSwitchOff3" onClick={turnOnLights} />
            </div>
            <div hidden id="lightswitch-4" className="lightswitch-4" >
                <img className="switch" src={lightOff} alt="light switch" id="lightSwitchOn4" onClick={turnOnLights} />
                <img className="switch" hidden src={lightOn} alt="light switch" id="lightSwitchOff4" onClick={turnOnLights} />
            </div>

        </div>
    );

}
export default FlashlightReact;