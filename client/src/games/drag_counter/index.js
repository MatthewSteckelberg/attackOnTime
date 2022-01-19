import anime from 'animejs/lib/anime.es.js';
import './index.scss';
import $ from 'jquery';
import Timer from '../../components/timer/Timer';
import { useEffect } from 'react';

 do {
var count = Math.floor(Math.random() * 10);
var goalCount = count - 5 + (Math.floor(Math.random() * 12));
    } while (count== goalCount)

function Drag(userObject){

    var mousePos = 0;
    var currentPos = 0;
    var position = 0;
    var draggable = false;
    var blockAnimeAdd, countAnimePlus = anime.timeline(), countAnimeMinus = anime.timeline();
    var offset = 50;
    var direction;
    var dur = 100;

    var newCount = count;
      
    console.log(document.getElementsByClassName('active').innerHTML)
    $(document).on('mousedown', '.stepper', function () {
        currentPos = mousePos;

        draggable = true;
        blockAnimeAdd.pause();

        if ($('.first').hasClass('active')) {
            $('.first').removeClass('active').addClass('next');
            $('.second').removeClass('next').addClass('active');
        } else if ($('.second').hasClass('active')) {
            $('.second').removeClass('active').addClass('next');
            $('.first').removeClass('next').addClass('active');
        }

        if (direction == 'plus') {
            countAnimePlus.pause();
        }

        if (direction == 'minus') {
            countAnimeMinus.pause();
        }
    })

    $(document).on("mousemove", function (event) {
        mousePos = event.pageY;

        if (draggable) {
            position = mousePos - currentPos;
            $('.stepper').css('transform', 'translateY(' + position / 2 + 'px)');
        }

        if (position <= (offset * -1) && draggable) {
            center();
            newCount++;
            plus();
        }

        if (position >= offset && draggable) {
            center();
            newCount--;
            minus();
        }
    });

    $(document).on("mouseup", function (event) {
        if (draggable) {
            center();
        }
    });


    function center() {
        draggable = false;
        blockAnimeAdd = anime({
            targets: '.stepper',
            duration: dur,
            translateY: 0,
        });
    }


    function plus() {
        direction = 'plus';
        countAnimePlus = anime.timeline();

        $('.next').text(newCount).css('transform', 'translateY(-100px) translateX(-50%)');
        console.log(`count: ${newCount} \ngoal: ${goalCount}`)
        if (newCount == goalCount) {
            document.getElementById('drag-timer').removeAttribute('hidden')
        }
       
        countAnimePlus.add({
            targets: '.active',
            translateY: 100,
            translateX: '-50%',
            duration: dur,
        })
            .add({
                targets: '.next',
                translateY: 0,
                translateX: '-50%',
                duration: dur,
                offset: '-=' + dur,
            });
    }

    function minus() {
        direction = 'minus';
        countAnimeMinus = anime.timeline();

        $('.next').text(newCount).css('transform', 'translateY(100px) translateX(-50%)');
        console.log(`count: ${newCount} \ngoal: ${goalCount}`)
        if (newCount == goalCount) {
                document.getElementById('drag-timer').removeAttribute('hidden')
        }  
    
        countAnimeMinus.add({
            targets: '.active',
            translateY: -100,
            translateX: '-50%',
            duration: dur,
        })
            .add({
                targets: '.next',
                translateY: 0,
                translateX: '-50%',
                duration: 1500,
                offset: '-=' + dur,
            });
    }

    center();
    plus();
    setTimeout(() => {
        $('.hide').removeClass('hide');
    }, 300);

    return (
        <div id="body-drag">
            <div hidden id="drag-timer">
                <Timer userObject={userObject}/>
            </div>
            <br />
            <div>
                <br />
                <div class="wrap">
                    <div class="stepper">
                        <span id="span" class="count first active hide"></span>
                        <span id="span" class="count second next"></span>
                    </div>
                    <img src="https://alikinvv.github.io/stepper-iteration/build/img/arrow-top.svg" alt="" class="arrow-top"></img>
                    <img src="https://alikinvv.github.io/stepper-iteration/build/img/arrow-bottom.svg" alt="" class="arrow-bottom"></img>
                </div>

                <h1 id='drag-instructions' class="desc">Hold & Drag to {goalCount}</h1>
                <br />
                
            </div>

        </div>

    )
}

export default Drag;