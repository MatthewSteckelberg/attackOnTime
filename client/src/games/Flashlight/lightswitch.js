function turnOnLights()
{
   document.body.style.cursor="pointer";
    lightSwitch.src="https://cdn.pixabay.com/photo/2012/04/18/13/25/light-switch-37017_960_720.png"
    var r = document.querySelector(':root');
    // var rs = getComputedStyle(r);
    // alert("--Flashlight is " + rs.getPropertyValue("--flashlight"));
    r.style.setProperty('--flashlight', 'none');
    //alert("Light is now on");
}






