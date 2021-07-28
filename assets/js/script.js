

$(function() {

	var windowWidth =  document.body.offsetWidth;

	var width = 460;
	var animationSpeed = 2000;
	var pause = 5000; 
	var currentSlide = 1;


	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');

	var interval; 

	if (windowWidth <= 900){
		width = 320;
	}else if (windowWidth <= 1212) {
		width = 350;
	}

	function startSlider() {
		interval = setInterval(function() {
			$slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
				currentSlide++;
				if(currentSlide === $slides.length - 2) {
					currentSlide = 1;
					$slideContainer.css('margin-left', 0);  
				}
			});
		}, pause);
	}

	function pauseSlider() {
		clearInterval(interval);
	}

	$slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);
	startSlider();	
});




function searchToggle() {
	var searchFormElement = document.getElementById('search');
	var searchIconElement = document.getElementById('search-btn');
	// event.preventDefault();
	searchFormElement.style.display = 'block';
	searchIconElement.style.visibility = 'hidden';
	
}

function searchClose() {
	var searchFormElement = document.getElementById('search');
	var searchIconElement = document.getElementById('search-btn');
	// event.preventDefault();
	searchFormElement.style.display = 'none';
	searchIconElement.style.visibility = 'visible';
}

	// $slideContainer.mousemove(function(e){
	// 	var valueX = e.pageX * -1 / 2;

	// 	$slideContainer.css({
	// 		'transform': 'translateX('+valueX+'px)'
	// 	})
	// });

// function stopVideoAndShowContent(){
//  var video = document.getElementById('marvel_video');
//  var marvel_header = document.getElementById('marvel_header')
//  var close_video_btn = document.getElementById('close_video_btn');

// 	video.onended = function() {
// 		video.style.display = 'none';
// 		close_video_btn.style.display = 'none';
// 		marvel_header.style.display = 'block';
// 		var splide = new Splide( '.splide', {
// 			type   : 'loop',
// 			perPage: 7,
// 			rewind: true,
// 			perMove: 1,
// 			gap: 20,
// 		} ).mount();
// 	};
// }

// stopVideoAndShowContent();


var windowWidth =  document.body.offsetWidth;
if (windowWidth <= 600) {
	new Splide( '.splide', {
		type   : 'loop',
		perPage: 2,
		rewind: true,
		perMove: 1,
		gap: 10,
	} ).mount();

	new Splide( '.splide_popular', {
		type   : 'loop',
		perPage: 2,
		rewind: true,
		perMove: 1,
		autoplay: true,
		gap: 20,
	} ).mount();

	new Splide( '.splide_bond', {
		type   : 'loop',
		perPage: 2,
		rewind: true,
		perMove: 1,
		gap: 20,
	} ).mount();

	new Splide( '.splide_tvseries', {
		type   : 'loop',
		perPage: 2,
		rewind: true,
		perMove: 1,
		gap: 10,
	} ).mount();

	new Splide( '.splide_kids', {
		type   : 'loop',
		perPage: 2,
		rewind: true,
		perMove: 1,
		gap: 10,
	} ).mount();
} else 	if (windowWidth <= 900){
	new Splide( '.splide', {
		type   : 'loop',
		perPage: 3,
		rewind: true,
		perMove: 1,
		gap: 10,
	} ).mount();

	new Splide( '.splide_popular', {
		type   : 'loop',
		perPage: 3,
		rewind: true,
		perMove: 1,
		autoplay: true,
		gap: 20,
	} ).mount();

	new Splide( '.splide_bond', {
		type   : 'loop',
		perPage: 3,
		rewind: true,
		perMove: 1,
		gap: 20,
	} ).mount();

	new Splide( '.splide_tvseries', {
		type   : 'loop',
		perPage: 3,
		rewind: true,
		perMove: 1,
		gap: 10,
	} ).mount();

	new Splide( '.splide_kids', {
		type   : 'loop',
		perPage: 3,
		rewind: true,
		perMove: 1,
		gap: 10,
	} ).mount();
}else if (windowWidth <= 1212) {
	new Splide( '.splide', {
		type   : 'loop',
		perPage: 4,
		rewind: true,
		perMove: 1,
		gap: 20,
	} ).mount();

	new Splide( '.splide_popular', {
		type   : 'loop',
		perPage: 4,
		rewind: true,
		perMove: 1,
		autoplay: true,
		gap: 20,
	} ).mount();

	new Splide( '.splide_bond', {
		type   : 'loop',
		perPage: 4,
		rewind: true,
		perMove: 1,
		gap: 20,
	} ).mount();

	new Splide( '.splide_tvseries', {
		type   : 'loop',
		perPage: 4,
		rewind: true,
		perMove: 1,
		gap: 10,
	} ).mount();

	new Splide( '.splide_kids', {
		type   : 'loop',
		perPage: 4,
		rewind: true,
		perMove: 1,
		gap: 10,
	} ).mount();
}else {
	new Splide( '.splide', {
		type   : 'loop',
		perPage: 5,
		rewind: true,
		perMove: 1,
		gap: 20,
	} ).mount();

	new Splide( '.splide_popular', {
		type   : 'loop',
		perPage: 5,
		rewind: true,
		perMove: 1,
		autoplay: true,
		gap: 20,
	} ).mount();

	new Splide( '.splide_bond', {
		type   : 'loop',
		perPage: 5,
		rewind: true,
		perMove: 1,
		gap: 20,
	} ).mount();

	new Splide( '.splide_tvseries', {
		type   : 'loop',
		perPage: 5,
		rewind: true,
		perMove: 1,
		gap: 10,
	} ).mount();

	new Splide( '.splide_kids', {
		type   : 'loop',
		perPage: 5,
		rewind: true,
		perMove: 1,
		gap: 10,
	} ).mount();
}

function get_action(form) 
{
    var v = grecaptcha.getResponse();
    if(v.length == 0)
    {
        document.getElementById('captcha').innerHTML="You can't leave Captcha Code empty";
        return false;
    }
    else
    {
        document.getElementById('captcha').innerHTML="Captcha completed";
        return true; 
    }
}












