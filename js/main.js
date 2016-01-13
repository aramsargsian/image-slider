sliderInt = 1; //First image to be shown
sliderNext = 2; //Next image to be shown

$(document).ready(function(){

	$('#slider > img#1').fadeIn(300); //Fade in the first image
	startSlider(); //Start the Slider
});

function startSlider() {
	count = $('#slider > img').size(); //Get the number of imgs and set it to count

	loop = setInterval(function(){ //create the time loop that does the following each 3 seconds

		if(sliderNext > count){   //Start the loop at the first image when it reaches the end.
			sliderNext = 1;
			sliderInt = 1;
		}

		$('#slider > img').fadeOut(300); //Fade out current image
		$('#slider > img#' + sliderNext).fadeIn(300); //Fade in next image based on id 

		sliderInt = sliderNext; //reset variables
		sliderNext = sliderNext + 1;

	},3000)
}

function prev(){     //Code for previous button
	newSlide = sliderInt - 1;  //Make newslide equal to the slide before current one
	showSlide(newSlide); //Run showSlide function with newSlide entered 

}

function next () {   //Code for next button. same idea as previous button.
	newSlide = sliderInt + 1; //Currently listening to Jump Out the Face by Meek Mill and Future.
	                          // Great song if you trying to get hype while developing.
	showSlide(newSlide);
}

function stopLoop(){   //Function will stop the loop so you can skip pictures in peace.
	window.clearInterval(loop);

};

function showSlide(id){  //pass in newSlide as id
	stopLoop();
	if(id > count){   //Clicking next on last image loops to first image.
			id = 1;
	}else if (id < 1){ //Clicking prev on first image loops to last image.
		id = count;
	}


	$('#slider > img').fadeOut(300); //Fade out current image
	$('#slider > img#' + id).fadeIn(300); //Fade in next image based on id.
	sliderInt = id; //reset variables
	sliderNext = id + 1;
	startSlider(); //reset the slider loop
}

$(document).ready(function(){  //When you hover on the slider it will pause. 
							   //Then when you remove the mouse it will continue
	$('#slider > img').hover(
		function() {
			stopLoop();
		},

		function(){
			startSlider();
		});
});







