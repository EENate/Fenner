$(document).ready(function(){$(".contactClick").on("click",function(){$("#contact").removeClass("closed").addClass("open").slideDown(500,function(){}),$("#close").delay(500).fadeIn("fast",function(){}),$("body").animate({scrollTop:[$("#contact").offset().top-86,"easeInOutExpo"]},2e3)}),$("#close").on("click",function(){$("#close").fadeOut(500,function(){}),$("#contact").removeClass("open").addClass("closed"),$("#contact").delay(500).slideUp(500,function(){})}),$(".studyThumb").click(function(){window.open("caseStudy.php","_self")});for(var o=$(".port").length,t=0;o>t;)t++,$("#portfolioIndicators ul").append("<li></li>");$("#portfolioIndicators ul li:first-child").addClass("on");var l=100*o;l+="%";var i=100/o;i+="%",$("#projectSlider").css("width",l),$("#projectSlider div").css("width",i);var n=function(){var t=$("#portfolioIndicators ul li.on").index(),l=t+1,i=l+1;l=-100*l,l+="%",t+=1,t===o?($("#projectSlider").css("margin-left",0),$("#portfolioIndicators ul li.on").removeClass("on"),$("#portfolioIndicators ul li:first-child").addClass("on")):($("#projectSlider").css("margin-left",l),$("#portfolioIndicators ul li.on").removeClass("on"),$("#portfolioIndicators ul li:nth-child("+i+")").addClass("on"))},e=function(){var t=$("#portfolioIndicators ul li.on").index(),l=t-1,i=l+1;l=-100*l,l+="%",t+=1,1===t?(l=-100*(o-1),l+="%",$("#projectSlider").css("margin-left",l),$("#portfolioIndicators ul li.on").removeClass("on"),$("#portfolioIndicators ul li:last-child").addClass("on")):($("#projectSlider").css("margin-left",l),$("#portfolioIndicators ul li.on").removeClass("on"),$("#portfolioIndicators ul li:nth-child("+i+")").addClass("on"))};$("#rightArrow").click(function(){n()}),$("#leftArrow").click(function(){e()}),$("html").keyup(function(o){39===o.keyCode?n():37===o.keyCode&&e()}),$("#portfolioIndicators ul li").click(function(){$("#portfolioIndicators ul li").removeClass("on"),$(this).addClass("on");var o=$(this).index(),t=-100*o;t+="%",$("#projectSlider").css("margin-left",t)}),$("body").delegate("#rfqForm","submit",function(o){$("#contactSubmit").replaceWith('<h5  id="contactResult"  style="color:#373a36;">Sending Your Message</h3>'),setTimeout(function(){$.post("scripts/php/email.php",{name:$("#nameInput").val(),org:$("#orgInput").val(),email:$("#emailInput").val(),phone:$("#phoneInput").val(),details:$("#detailsInput").val()},function(o){var t=o;return 1==t?void $("#contactResult").replaceWith('<h5 id="contactSuccess"  style="color:#373a36;">Your Email Sent Successfully.</h5>'):0==t?void $("#contactResult").replaceWith('<h5 id="contactFailure"  style="color:#373a36;">Your Email Did Not Send. Please Try Again.</h5>'):void 0})},1),o.preventDefault()}),$("#logOut").click(function(){$.ajax({url:"scripts/php/phpKill.php"}),setTimeout("location.reload();",1500)})});