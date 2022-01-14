import './index.css';
import Navbar from '../../components/navbar/Navbar';
// import './media.css';


function Bookshelf() {
    // function startTimer() {
    //     ticker.start();
    //     console.log(totalTime)
    // };
    const displayAlert = (e) => {
        e.preventDefault();
        document.getElementById('next-button').removeAttribute("hidden");
        document.getElementById('game-instructions').hidden = true;
        // ticker.stop();
        // alert(`You found it in ${totalTime} seconds`);
    }

        //trying to add a random book as the goal

    // const randomBook = () => {
    //     const bookID = Math.floor(Math.random() * 34);
    //     console.log(bookID)
        
    //     const book = document.getElementsByClassName(`book-${bookID}`)
    //     console.log(book)
    //     console.log(book[0].alt)
    //     // book[0].addEventListener("onClick", displayAlert)
    //     // book[1].addEventListener("onClick", displayAlert)

    //     // console.log(book[0].alt)
    //     const bookName = book[0].alt
    //     console.log(bookName)
    //     document.getElementById("book-name").innerHTML = bookName;
    // }
    // randomBook();

    return (
        <div className='bookshelf-game'>

            <h1 id="game-instructions">I want to read <span id='book-name'>The Great Gatsby</span></h1>
            <a hidden className='col-md-2 btn' id='next-button' href="/flashlight" type='submit'>NEXT</a>
            <br />
            {/* <h2 id="timerBox"></h2> */}

            <div className='bookshelf-body'>
                <ul >
                    <li><img className="book-10" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book10.jpg" alt="Magicians Impossible" /></li>
                    <li><img className="book-2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book02.jpg" alt="Gone Girl" /></li>
                    <li><img className="book-3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book03.jpg" alt="Point of Control" /></li>
                    <li><img className="book-4" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book04.jpg" alt="Black Dog" /></li>
                    <li><img className="book-5" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book05.jpg" alt="Juniper Unraveling" /></li>
                    <li><img className="book-6" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book06.jpg" alt="The Art of Crash Landing" /></li>
                    <li><img className="book-7" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book07.jpg" alt="Der KreclassNamee Mann" /></li>
                    <li><img className="book-8" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book08.jpg" alt="Wink Poppy MclassNamenight" /></li>
                    <li><img className="book-9" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book09.jpg" alt="The Great Gatsby" onClick={displayAlert} /></li>
                    <li><img className="book-1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book01.jpg" alt="The Nowhere Girls" /></li>
                    <li><img className="book-11" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book11.jpg" alt="The Light Between Oceans" /></li>
                    <li><img className="book-13" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book13.jpg" alt="Resistance" /></li>
                    <li><img className="book-12" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book12.jpg" alt="Spindle Fire" /></li>
                    <li><img className="book-14" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book14.jpg" alt="Wonderful World" /></li>
                    <li><img className="book-15" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book15.jpg" alt="All The Crooked Saints" /></li>
                    <li><img className="book-16" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book16.jpg" alt="Not a Sound" /></li>
                    <li><img className="book-17" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book17.jpg" alt="Don't Cry Murder" /></li>
                    <li><img className="book-18" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book18.jpg" alt="The Queen of Hearts" /></li>
                    <li><img className="book-19" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book19.jpg" alt="The Long Drop" /></li>
                    <li><img className="book-20" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book20.jpg" alt="And Then There Were None" /></li>
                    <li><img className="book-21" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book21.jpg" alt="The Death of Bees" /></li>
                    <li><img className="book-22" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book22.jpg" alt="Inexplicables" /></li>
                    <li><img className="book-23" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book23.jpg" alt="The Sisters Brothers" /></li>
                    <li><img className="book-24" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book24.jpg" alt="The Snow Child" /></li>
                    <li><img className="book-25" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book25.jpg" alt="The Tragedy Paper" /></li>
                    <li><img className="book-26" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book26.jpg" alt="The Flame Alphabet" /></li>
                    <li><img className="book-27" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book27.jpg" alt="Litle Red Riding Hood: And Other Classic French Fairy Tales" /></li>
                    <li><img className="book-28" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book28.jpg" alt="The Psychopath Test" /></li>
                    <li><img className="book-29" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book29.jpg" alt="The Toy Collector" /></li>
                    <li><img className="book-30" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book30.jpg" alt="The Unlikely Pilgrimage of Harold Fry" /></li>
                    <li><img className="book-31" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book31.jpg" alt="One Perfect Day: The Selling of the American Wedding" /></li>
                    <li><img className="book-32" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book32.jpg" alt="Manhattan" /></li>
                    <li><img className="book-33" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book33.jpg" alt="The Elephant Vanishes" /></li>
                    <li><img className="book-34" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book34.jpg" alt="The Catastrophist" /></li>
                    <li><img className="book-10" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book10.jpg" alt="Magicians Impossible" /></li>
                    <li><img className="book-2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book02.jpg" alt="Gone Girl" /></li>
                    <li><img className="book-3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book03.jpg" alt="Point of Control" /></li>
                    <li><img className="book-4" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book04.jpg" alt="Black Dog" /></li>
                    <li><img className="book-5" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book05.jpg" alt="Juniper Unraveling" /></li>
                    <li><img className="book-6" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book06.jpg" alt="The Art of Crash Landing" /></li>
                    <li><img className="book-7" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book07.jpg" alt="Der KreclassNamee Mann" /></li>
                    <li><img className="book-8" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book08.jpg" alt="Wink Poppy MclassNamenight" /></li>
                    <li><img className="book-9" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book09.jpg" alt="The Great Gatsby" onClick={displayAlert} /></li>
                    <li><img className="book-1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book01.jpg" alt="The Nowhere Girls" /></li>
                    <li><img className="book-11" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book11.jpg" alt="The Light Between Oceans" /></li>
                    <li><img className="book-13" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book13.jpg" alt="Resistance" /></li>
                    <li><img className="book-12" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book12.jpg" alt="Spindle Fire" /></li>
                    <li><img className="book-14" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book14.jpg" alt=" Wonderful World" /></li>
                    <li><img className="book-15" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book15.jpg" alt="All The Crooked Saints" /></li>
                    <li><img className="book-16" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book16.jpg" alt="Not a Sound" /></li>
                    <li><img className="book-17" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book17.jpg" alt="Don't Cry Murder" /></li>
                    <li><img className="book-18" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book18.jpg" alt="The Queen of Hearts" /></li>
                    <li><img className="book-19" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book19.jpg" alt="The Long Drop" /></li>
                    <li><img className="book-20" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book20.jpg" alt="And Then There Were None" /></li>
                    <li><img className="book-21" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book21.jpg" alt="The Death of Bees" /></li>
                    <li><img className="book-22" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book22.jpg" alt="Inexplicables" /></li>
                    <li><img className="book-23" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book23.jpg" alt="The Sisters Brothers" /></li>
                    <li><img className="book-24" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book24.jpg" alt="The Snow Child" /></li>
                    <li><img className="book-25" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book25.jpg" alt="The Tragedy Paper" /></li>
                    <li><img className="book-26" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book26.jpg" alt="The Flame Alphabet" /></li>
                    <li><img className="book-27" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book27.jpg" alt="Litle Red Riding Hood: And Other Classic French Fairy Tales" /></li>
                    <li><img className="book-28" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book28.jpg" alt="The Psychopath Test" /></li>
                    <li><img className="book-29" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book29.jpg" alt="The Toy Collector" /></li>
                    <li><img className="book-30" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book30.jpg" alt="The Unlikely Pilgrimage of Harold Fry" /></li>
                    <li><img className="book-31" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book31.jpg" alt="One Perfect Day: The Selling of the American Wedding" /></li>
                    <li><img className="book-32" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book32.jpg" alt="Manhattan" /></li>
                    <li><img className="book-33" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book33.jpg" alt="The Elephant Vanishes" /></li>
                    <li><img className="book-34" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book34.jpg" alt="The Catastrophist" /></li>
                </ul>
            </div>
            <br />
            <br />
        </div>

    )

}

export default Bookshelf;