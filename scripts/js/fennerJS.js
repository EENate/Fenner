//MAIN JQUERY FILE FOR FENNER 
$(document).ready(function() {
	
	
	//TOGGLE CONTACT FORM
  	$(".contactClick").on("click", function(){
		$("#contact").removeClass("closed").addClass("open").slideDown(500, function(){});
		$("#close").delay(500).fadeIn("fast", function(){});
		$('body').animate({
		        scrollTop: [$("#contact").offset().top-86, "easeInOutExpo"]
		    }, 2000);
	});
	
	$("#close").on("click", function() {
		$("#close").fadeOut(500, function(){});
		$("#contact").removeClass("open").addClass("closed");
		$("#contact").delay(500).slideUp(500, function(){});
	});
	
	
	//CASE STUDY LINK
	$(".studyThumb, .prevCase, .nextCase").click(function()
	{
		var caseSlug = $(this).attr("data-slug");
		var newURL = "caseStudy.php?case=" + caseSlug;
		window.open(newURL,"_self")
	});
	
	
 //Replace all SVG images with inline SVG
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
    
    //QUOTE SLIDER FUNCTIONALITY
    var quoteCount = $("#quoteSlider").children().length;
    	
    	//DUPLICATE THE FIRST QUOTE FOR INFINITE LOOPING
//    	var lastQuote = $("#quoteSlider div:first-child").html();
//    	$("#quoteSlider").append('<div class="quote">' + lastQuote + '</div>');
//    	quoteCount = quoteCount + 1;
    	
    	//CALC THE SLIDER WIDTH AS %
    	var sliderWidth = quoteCount * 100;
    	sliderWidth = sliderWidth + "%";
    	
    	//CALC THE QUOTE WIDTHS AS %
    	var quoteWidth = 100 / quoteCount;
    	quoteWidth = quoteWidth + "%";
    	
    	//MAKE THE SLIDER THE RIGHT WIDTH
    	$("#quoteSlider").css("width", sliderWidth);
    	$("#quoteSlider div").css("width", quoteWidth);
    	$("#quoteSlider").css("margin-left", 0);

		//TURN OFF THE LEFT ARROW SINCE WE'RE STARTING AT THE BEGINNING
		$("#testLeft").css("display", "none");

		//SET TIMINGS
		var transitionDuration = ".25s";
		var transitionMill = "250";

		//SLIDE TO THE RIGHT
		var quoteRight = function () {
		
			$("#quoteSlider").css("transition-duration", transitionDuration);
		
		
			// FIND OUT IF THE SLIDER IS MOVED AND ROUND THAT TO THE NEAREST PIXEL
			var currentQuote = $("#quoteSlider").css("margin-left");
			currentQuote = parseInt(currentQuote, 10);
			currentQuote = Math.round(currentQuote);
			
			// FIND OUT HOW WIDE EACH SLIDE IS AND ROUND THAT TO THE NEAREST PIXEL
			currentWidth = $("#quoteSlider div").css("width");
			currentWidth = parseInt(currentWidth, 10);
			currentWidth = Math.round(currentWidth);
			
			// DIVIDE THE CURRENT SLIDER POSITION BY THE WIDTH TO FIND OUT WHAT SLIDE WE ARE CURRENTLY LOOKING AT
			currentQuote = (-currentQuote) / currentWidth;
			currentQuote = Math.round(currentQuote);
			
			//SEE IF WE'RE STILL AT THE FIRST QUOTE
			if (currentQuote == 0) {
				quotePos = 1;
				newPos = quotePos * -100;			
				newPos = Math.round(newPos);			
				newPos = newPos + "%";
				}
			// IF WE'RE NOT ON THE FIRST QUOTE, UPDATE THE QUOTE POSITION AND MOVE THERE AS A PERCENTAGE
			else if(currentQuote < (quoteCount -1)) {
				quotePos = currentQuote + 1;
				newPos = quotePos * -100;
				newPos = Math.round(newPos);			
				newPos = newPos + "%";
				}
			// IF WE'RE AT THE END OF THE SLIDER, GO BACK TO THE BEGINNING
			else {
				quotePos = currentQuote + 1;
				newPos = 0;
//				quotePos = currentQuote + 1;
//				newPos = quotePos * -100;
//				newPos = Math.round(newPos);			
//				newPos = newPos + "%";
//				$("#quoteSlider").css("margin-left", newPos);
//				setTimeout(slideReset, transitionMill);
//				
//				function slideReset(){
//					$("#quoteSlider").css("transition-duration", "0s");
//					$("#quoteSlider").css("margin-left", "0");
//				}
//				$("#quoteSlider").css("transition-duration", transitionDuration);
//				
//				return;

			}
				if (quotePos == (quoteCount - 1)) {
					$("#testRight").css("display", "none");
				}
				else {
					$("#testRight").css("display", "block");
				}
				
				if (quotePos == 0) {
					$("#testLeft").css("display", "none");
				}
				else {
					$("#testLeft").css("display", "block");
				}
				
				$("#quoteSlider").css("margin-left", newPos);
			}
			
			var quoteLeft = function () {
			
				$("#quoteSlider").css("transition-duration", transitionDuration);
			
			
				// FIND OUT IF THE SLIDER IS MOVED AND ROUND THAT TO THE NEAREST PIXEL
				var currentQuote = $("#quoteSlider").css("margin-left");
				currentQuote = parseInt(currentQuote, 10);
				currentQuote = Math.round(currentQuote);
				
				// FIND OUT HOW WIDE EACH SLIDE IS AND ROUND THAT TO THE NEAREST PIXEL
				currentWidth = $("#quoteSlider div").css("width");
				currentWidth = parseInt(currentWidth, 10);
				currentWidth = Math.round(currentWidth);
				
				// DIVIDE THE CURRENT SLIDER POSITION BY THE WIDTH TO FIND OUT WHAT SLIDE WE ARE CURRENTLY LOOKING AT
				currentQuote = (-currentQuote) / currentWidth;
				currentQuote = Math.round(currentQuote);
				
				//SEE IF WE'RE STILL AT THE FIRST QUOTE
				if (currentQuote == 0) {
					quotePos = quoteCount - 1;
					newPos = quotePos * -100;			
					newPos = Math.round(newPos);			
					newPos = newPos + "%";
					}
				// IF WE'RE NOT ON THE FIRST QUOTE, UPDATE THE QUOTE POSITION AND MOVE THERE AS A PERCENTAGE
				else if(currentQuote > 0) {
					quotePos = currentQuote -1;
					newPos = quotePos * -100;
					newPos = Math.round(newPos);			
					newPos = newPos + "%";
					}
					
					if (quotePos == (quoteCount - 1)) {
						$("#testRight").css("display", "none");
					}
					else {
						$("#testRight").css("display", "block");
					}
					
					if (quotePos == 0) {
						$("#testLeft").css("display", "none");
					}
					else {
						$("#testLeft").css("display", "block");
					}
					
					$("#quoteSlider").css("margin-left", newPos);
				}
			
			
			
		//PORTFOLIO ARROW NAVIGATION
		$("#testRight").click(function() {
			quoteRight();
		});
		
		//PORTFOLIO ARROW NAVIGATION
		$("#testLeft").click(function() {
			quoteLeft();
		});	

	//INDICATOR GENERATION
	var portCount = $(".port").length;
	var i = 0;
	while (i < portCount) {
		
		i++;
		//APPEND ENOUGH INDICATORS FOR ALL THE PORTOLFIO ITEMS
		$("#portfolioIndicators ul").append('<li></li>');	

	}	
	//SET THE FIRST PORTFOLIO ITEM TO ON
	$("#portfolioIndicators ul li:first-child").addClass('on');	
	
	//SET PORTFOLIO SLIDER WIDTH
	var sliderWidth = portCount * 100;
	sliderWidth = sliderWidth + "%";
	var itemWidth = 100 / portCount;
	itemWidth = itemWidth + "%";
	$("#projectSlider").css("width", sliderWidth);
	$("#projectSlider div").css("width", itemWidth);
	$("#projectSlider").css("margin-left", 0);



	
	var portfolioRight = function() {
	
		//GET THE CURRENT PORFOLIO POSITION
		var portPos = $("#portfolioIndicators ul li.on").index();
		
		//MOVE THE SLIDER
		var newPos = portPos + 1;
		var newInd = newPos + 1;
		newPos = newPos*-100;
		newPos = newPos + "%";
		
		portPos = portPos + 1;
		if (portPos === portCount) {
			$("#projectSlider").css("margin-left", 0);	
			$("#portfolioIndicators ul li.on").removeClass('on');
			$("#portfolioIndicators ul li:first-child").addClass('on')	;	
		}
		else {
			$("#projectSlider").css("margin-left", newPos);
			$("#portfolioIndicators ul li.on").removeClass('on');
			$("#portfolioIndicators ul li:nth-child(" + newInd +")").addClass('on')	;	
		}
		
	};
	
	var portfolioLeft = function()
	{
		//GET THE CURRENT PORFOLIO POSITION
		var portPos = $("#portfolioIndicators ul li.on").index();
		
		//MOVE THE SLIDER
		var newPos = portPos - 1;
		var newInd = newPos + 1;
		newPos = newPos*-100;
		newPos = newPos + "%";
		portPos = portPos + 1;
		if (portPos === 1) {
			newPos = (portCount - 1) * -100;
			newPos = newPos + "%";
			$("#projectSlider").css("margin-left", newPos);	
			$("#portfolioIndicators ul li.on").removeClass('on');
			$("#portfolioIndicators ul li:last-child").addClass('on')	;	
		}
		else {
			$("#projectSlider").css("margin-left", newPos);
			$("#portfolioIndicators ul li.on").removeClass('on');
			$("#portfolioIndicators ul li:nth-child(" + newInd +")").addClass('on')	;	
		}
	};
	
	//PORTFOLIO RIGHT ARROW NAVIGATION
	$("#rightArrow").click(function() {
		portfolioRight();
	});
		
	
	//PORTFOLIO LEFT ARROW NAVIGATION
		$("#leftArrow").click(function() {
			portfolioLeft();
	});
	
	//PORTFOLIO FUNCTIONALITY WITH KEYS
	$("html").keyup(function(e) {
		//event.preventDefault();	
		if(e.keyCode === 39)
		{			
			portfolioRight();
		}
		else if (e.keyCode === 37) {
			portfolioLeft();
		}
		
	 });
	 
	 
	 // INDICATOR CLICK
	 $("#portfolioIndicators ul li").click(function() {
	 $("#portfolioIndicators ul li").removeClass("on");
	 $(this).addClass("on");
	 var portLoc = $(this).index();
	 var newPos = portLoc *-100;
	 newPos = newPos + "%";
	 $("#projectSlider").css("margin-left", newPos);	
	 
	 });
	 
	//EMAIL SUBMIT
$("body").delegate("#rfqForm", "submit", function( event ){
	   	
	   	$("#contactSubmit").replaceWith("<h5  id=\"contactResult\"  style=\"color:#373a36;\">Sending Your Message</h3>");
	   	
       setTimeout(function() {
        	$.post( "scripts/php/email.php",{
        	     	name : $( "#nameInput" ).val(),
        	     	org : $( "#orgInput" ).val(),
        	     	email : $( "#emailInput" ).val(),
        	     	phone : $( "#phoneInput" ).val(),
        	     	details : $( "#detailsInput" ).val()},
        	     	function(data) {
        	       var emailResult = data;
        	//       alert( "Data Loaded: " + authResult );
        	       if (emailResult == true)
        	       {
        	       $("#contactResult").replaceWith("<h5 id=\"contactSuccess\"  style=\"color:#373a36;\">Your Email Sent Successfully.</h5>");
        	       return;
        	       }
        	       else if (emailResult == false)
        	       {
        	       
        	       $("#contactResult").replaceWith("<h5 id=\"contactFailure\"  style=\"color:#373a36;\">Your Email Did Not Send. Please Try Again.</h5>");
        	       return;
        	       }
        	       });
        }, 1);
          event.preventDefault();
       });	

	       
	  //LOGGOUT
	  $("#logOut").click(function() {
	  	$.ajax({ url: 'scripts/php/phpKill.php' });
	  	setTimeout("location.reload();", 1500)
	  });
	
	//PORTFOLIO FUNCTIONALITY WITH SWIPES
//	$("div.port").swipeleft(function() {
//			portfolioRight();
//	});
//	
//	$("div.port").swiperight(function() {
//			portfolioLeft();
//	});


});//DOCUMENT.READY