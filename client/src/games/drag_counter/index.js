import anime from 'animejs/lib/anime.es.js';
import './index.scss';
import $ from 'jquery';

function Drag() {

    var mousePos = 0;
    var currentPos = 0;
    var position = 0;
    var draggable = false;
    var blockAnimeAdd, countAnimePlus = anime.timeline(), countAnimeMinus = anime.timeline();
    var offset = 130;
    var direction;
    var dur = 500;
    var count = Math.floor(Math.random()*30);

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
            count++;
            plus();
        }

        if (position >= offset && draggable) {
            center();
            count--;
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

        $('.next').text(count).css('transform', 'translateY(-100px) translateX(-50%)');

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

        $('.next').text(count).css('transform', 'translateY(100px) translateX(-50%)');
        console.log(count)

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
        <div id = "body-drag">
        <div>
            <div class="wrap">
                <div class="stepper">
                    <span id="span" class="count first active hide"></span>
                    <span id="span" class="count second next"></span>
                </div>
                <img src="https://alikinvv.github.io/stepper-iteration/build/img/arrow-top.svg" alt="" class="arrow-top"></img>
                <img src="https://alikinvv.github.io/stepper-iteration/build/img/arrow-bottom.svg" alt="" class="arrow-bottom"></img>
            </div>

            <span class="desc">Hold & Drag to {Math.floor(Math.random()*30)}</span>
        </div>
        </div>
    )
}

export default Drag;