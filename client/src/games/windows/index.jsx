import gsap from 'gsap';
import $ from 'jquery'; 
import './style.css';
import React from 'react';


function BayWindow() {

  var carousel = document.querySelector('.carousel');
var cells = carousel.querySelectorAll('.carousel__cell');
var cellCount; // cellCount set from cells-range input value
var selectedIndex = 0;
var cellWidth = carousel.offsetWidth;
var cellHeight = carousel.offsetHeight;
var isHorizontal = true;
var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
var radius, theta;
// console.log( cellWidth, cellHeight );

function rotateCarousel() {
  var angle = theta * selectedIndex * -1;
  carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
    rotateFn + '(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});

var cellsRange = document.querySelector('.cells-range');
cellsRange.addEventListener( 'change', changeCarousel );
cellsRange.addEventListener( 'input', changeCarousel );



function changeCarousel() {
  cellCount = cellsRange.value;
  theta = 360 / cellCount;
  var cellSize = isHorizontal ? cellWidth : cellHeight;
  radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
  for ( var i=0; i < cells.length; i++ ) {
    var cell = cells[i];
    if ( i < cellCount ) {
      // visible cell
      cell.style.opacity = 1;
      var cellAngle = theta * i;
      cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
    } else {
      // hidden cell
      cell.style.opacity = 0;
      cell.style.transform = 'none';
    }
  }

  rotateCarousel();
}

var orientationRadios = document.querySelectorAll('input[name="orientation"]');
( function() {
  for ( var i=0; i < orientationRadios.length; i++ ) {
    var radio = orientationRadios[i];
    radio.addEventListener( 'change', onOrientationChange );
  }
})();

function onOrientationChange() {
  var checkedRadio = document.querySelector('input[name="orientation"]:checked');
  isHorizontal = checkedRadio.value == 'horizontal';
  rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
  changeCarousel();
}

// set initials
onOrientationChange();

  // let xPos = 0;


  //   gsap.timeline()
  //       .set('.ring', { rotationY:180, cursor:'grab' }) //set initial rotationY so the parallax jump happens off screen
  //       .set('.img',  { // apply transform rotations to each image
  //         rotateY: (i)=> i*-36,
  //         transformOrigin: '50% 50% 500px',
  //         z: -500,
  //         backgroundImage:(i)=>'url(https://picsum.photos/id/'+(i+32)+'/600/400/)', backgroundPosition:(i)=>getBgPos(i),
  //         backfaceVisibility:'hidden'
  //       })    
  //       .from('.img', {
  //         duration:1.5,
  //         y:200,
  //         opacity:0,
  //         stagger:0.1,
  //         ease:'expo'
  //       })
  //       .add(()=>{
  //         $('.img').on('mouseenter', (e)=>{
  //           let current = e.currentTarget;
  //           gsap.to('.img', {opacity:(i,t)=>(t==current)? 1:0.5, ease:'power3'})
  //         })
  //         $('.img').on('mouseleave', (e)=>{
  //           gsap.to('.img', {opacity:1, ease:'power2.inOut'})
  //         })
  //       }, '-=0.5')
    
  //   $(window).on('mousedown touchstart', dragStart);
  //   $(window).on('mouseup touchend', dragEnd);
   
  
  //   function dragStart(e){ 
  //     if (e.touches) e.clientX = e.touches[0].clientX;
  //     xPos = Math.round(e.clientX);
  //     gsap.set('.ring', {cursor:'grabbing'})
  //     $(window).on('mousemove touchmove', drag);
  //   }
    

  //   function drag(e){
  //     if (e.touches) e.clientX = e.touches[0].clientX;    
    
  //     gsap.to('.ring', {
  //       rotationY: '-=' +( (Math.round(e.clientX)-xPos)%360 ),
  //       onUpdate:()=>{ gsap.set('.img', { backgroundPosition:(i)=>getBgPos(i) }) }
  //     });
      
  //     xPos = Math.round(e.clientX);
  //   }
    
    
  //   function dragEnd(e){
  //     $(window).off('mousemove touchmove', drag);
  //     gsap.set('.ring', {cursor:'grab'});
  //   }
    
    
  //   function getBgPos(i){ //returns the background-position string to create parallax movement in each image
  //     return ( 100-gsap.utils.wrap(0,360,gsap.getProperty('.ring', 'rotationY')-180-i*36)/360*500 )+'px 0px';
  //   }
    
  //   // document.getElementById("thisOne").addEventListener("click", foundIt);
    
  //   function foundIt(e) {
  //       e.preventDefault();
  //       alert("found it!")
  //   }
       
    return(
   <div>   
<div class="scene">
  <div class="carousel">
    <div class="carousel__cell">1</div>
    <div class="carousel__cell">2</div>
    <div class="carousel__cell">3</div>
    <div class="carousel__cell">4</div>
    <div class="carousel__cell">5</div>
    <div class="carousel__cell">6</div>
    <div class="carousel__cell">7</div>
    <div class="carousel__cell">8</div>
    <div class="carousel__cell">9</div>
    <div class="carousel__cell">10</div>
    <div class="carousel__cell">11</div>
    <div class="carousel__cell">12</div>
    <div class="carousel__cell">13</div>
    <div class="carousel__cell">14</div>
    <div class="carousel__cell">15</div>
  </div>
</div>

<div class="carousel-options">
  <p>
    <label>
      Cells
      <input class="cells-range" type="range" min="3" max="15" value="9" />
    </label>
  </p>
  <p>
    <button class="previous-button">Previous</button>
    <button class="next-button">Next</button>
  </p>
  <p>
    Orientation:
    <label>
      <input type="radio" name="orientation" value="horizontal" checked />
      horizontal
    </label>
    <label>
      <input type="radio" name="orientation" value="vertical" />
      vertical
    </label>
  </p>
</div>
</div>


      // <div class="stage">
      //     <h1 id="header">Find the Dog</h1>
      //   <div class="container">
      //     <div class="ring">
      //       <div class="img"></div>
      //       <div class="img"></div>
      //       <div class="img"></div>
      //       <div class="img"></div>
      //       <div class="img"></div>
      //       <div class="img"></div>
      //       <div class="img"></div>
      //       <div class="img"></div>
      //       <div class="img" id="thisOne"></div>
      //       <div class="img"></div>
      //     </div>
      //   </div>
      // </div>
     
  )}

export default BayWindow;