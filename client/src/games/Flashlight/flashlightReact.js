import "./flashlight.module.css"





function FlashlightReact() {

    var light = "https://cdn.pixabay.com/photo/2012/04/16/13/27/switch-36000_960_720.png";


    function update(e) {
        var x = e.clientX || e.touches[0].clientX
        var y = e.clientY || e.touches[0].clientY

        document.documentElement.style.setProperty('--cursorX', x + 'px')
        document.documentElement.style.setProperty('--cursorY', y + 'px')
        console.log({ x });
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
        
        // var rs = getComputedStyle(r);
    
        //alert("--Flashlight is " + rs.getPropertyValue("--flashlight"));
        //alert("Light is now on");
    }

    return (

        <div className="flashlightGame">
            <img src={light} alt="light switch" id="lightSwitch" onClick={turnOnLights} />

            <section>
                <article>
                    <h2>Hidden Headline</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugit earum voluptas officia, quasi saepe et commodi, dolores cumque quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet repellendus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugit earum voluptas officia, quasi saepe et commodi, dolores cumque quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet repellendus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugit earum voluptas officia, quasi saepe et commodi, dolores cumque quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet repellendus!</p>
                </article>
                <article>
                    <h2>Headline</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugit earum voluptas officia, quasi saepe et commodi, dolores cumque quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet repellendus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugit earum voluptas officia, quasi saepe et commodi, dolores cumque quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet repellendus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugit earum voluptas officia, quasi saepe et commodi, dolores cumque quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet repellendus!</p>
                </article>
                <article>
                    <h2>Headline</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugit earum voluptas officia, quasi saepe et commodi, dolores cumque quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet repellendus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugit earum voluptas officia, quasi saepe et commodi, dolores cumque quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet repellendus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugit earum voluptas officia, quasi saepe et commodi, dolores cumque quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet repellendus!</p>
                </article>
            </section>
            <div className="test"></div>
        </div>
    );

}
export default FlashlightReact;