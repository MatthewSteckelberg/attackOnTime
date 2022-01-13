import './index.css';
// import './media.css';


function Bookshelf() {
    // function startTimer() {
    //     ticker.start();
    //     console.log(totalTime)
    // };
    const displayAlert = (e) => {
        e.preventDefault();
        alert("awesome, thank you.")
        // ticker.stop();
        // alert(`You found it in ${totalTime} seconds`);
    }


    const timerBox = document.getElementById("timerBox");

    console.log("ticker");


    // timer stuff

    function AdjustingInterval(workFunc, interval, errorFunc) {
        var that = this;
        var expected, timeout;
        this.interval = interval;

        this.start = function () {
            expected = Date.now() + this.interval;
            timeout = setTimeout(step, this.interval);
        }

        this.stop = function () {
            clearTimeout(timeout);
        }

        function step() {
            var drift = Date.now() - expected;
            if (drift > that.interval) {
                // You could have some default stuff here too...
                if (errorFunc) errorFunc();
            }
            workFunc();
            expected += that.interval;
            timeout = setTimeout(step, Math.max(0, that.interval - drift));
        }
    }

    // For testing purposes, we'll just increment
    // this and send it out to the console.
    var justSomeNumber = 0;
    let totalTime = 0;

    // Define the work to be done
    var doWork = function () {
        totalTime = ++justSomeNumber
        console.log(totalTime);
        timerBox.innerHTML = totalTime;
    };

    // Define what to do if something goes wrong
    var doError = function () {
        console.warn('The drift exceeded the interval.');
    };

    // (The third argument is optional)
    var ticker = new AdjustingInterval(doWork, 1000, doError);

    return (
        <div className='bookshelf-game'>
            <h1 id="game-instructions">I want to read the Great Gatsby</h1>
            <br />
            {/* <h2 id="timerBox"></h2> */}

            <div className='bookshelf-body'>
                <ul >
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book10.jpg" alt="1" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book02.jpg" alt="2" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book03.jpg" alt="3" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book04.jpg" alt="4" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book05.jpg" alt="5" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book06.jpg" alt="6" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book07.jpg" alt="7" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book08.jpg" alt="" /></li>
                    <li><img id="gatsby" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book09.jpg" alt="" onClick={displayAlert} /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book01.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book11.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book13.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book12.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book14.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book15.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book16.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book17.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book18.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book19.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book20.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book21.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book22.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book23.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book24.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book25.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book26.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book27.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book28.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book29.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book30.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book31.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book32.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book33.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book34.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book10.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book02.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book03.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book04.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book05.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book06.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book07.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book08.jpg" alt="" /></li>
                    <li><img id="gatsby" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book09.jpg" alt="" onClick={displayAlert} /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book01.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book11.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book13.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book12.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book14.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book15.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book16.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book17.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book18.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book19.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book20.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book21.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book22.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book23.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book24.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book25.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book26.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book27.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book28.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book29.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book30.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book31.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book32.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book33.jpg" alt="" /></li>
                    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book34.jpg" alt="" /></li>
                </ul>
            </div>
        </div>

    )

}

export default Bookshelf;