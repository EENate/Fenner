$(document).ready(function(){$(".contactClick").on("click",function(){$("#contact").removeClass("closed").addClass("open").slideDown(500,function(){}),$("#close").delay(500).fadeIn("fast",function(){}),$("body").animate({scrollTop:[$("#contact").offset().top-86,"easeInOutExpo"]},2e3)}),$("#close").on("click",function(){$("#close").fadeOut(500,function(){}),$("#contact").removeClass("open").addClass("closed"),$("#contact").delay(500).slideUp(500,function(){})}),$(".studyThumb, .prevCase, .nextCase").click(function(){var t=$(this).attr("data-slug"),o="caseStudy.php?case="+t;window.open(o,"_self")}),jQuery("img.svg").each(function(){var t=jQuery(this),o=t.attr("id"),e=t.attr("class"),s=t.attr("src");jQuery.get(s,function(s){var n=jQuery(s).find("svg");"undefined"!=typeof o&&(n=n.attr("id",o)),"undefined"!=typeof e&&(n=n.attr("class",e+" replaced-svg")),n=n.removeAttr("xmlns:a"),t.replaceWith(n)},"xml")});var t=$("#quoteSlider").children().length,o=100*t;o+="%";var e=100/t;e+="%",$("#quoteSlider").css("width",o),$("#quoteSlider div").css("width",e),$("#quoteSlider").css("margin-left",0),$("#testLeft").css("display","none");var s=".25s",n="250",i=function(){$("#quoteSlider").css("transition-duration",s);var o=$("#quoteSlider").css("margin-left");o=parseInt(o,10),o=Math.round(o),currentWidth=$("#quoteSlider div").css("width"),currentWidth=parseInt(currentWidth,10),currentWidth=Math.round(currentWidth),o=-o/currentWidth,o=Math.round(o),0==o?(quotePos=1,newPos=-100*quotePos,newPos=Math.round(newPos),newPos+="%"):t-1>o?(quotePos=o+1,newPos=-100*quotePos,newPos=Math.round(newPos),newPos+="%"):(quotePos=o+1,newPos=0),quotePos==t-1?$("#testRight").css("display","none"):$("#testRight").css("display","block"),0==quotePos?$("#testLeft").css("display","none"):$("#testLeft").css("display","block"),$("#quoteSlider").css("margin-left",newPos)},r=function(){$("#quoteSlider").css("transition-duration",s);var o=$("#quoteSlider").css("margin-left");o=parseInt(o,10),o=Math.round(o),currentWidth=$("#quoteSlider div").css("width"),currentWidth=parseInt(currentWidth,10),currentWidth=Math.round(currentWidth),o=-o/currentWidth,o=Math.round(o),0==o?(quotePos=t-1,newPos=-100*quotePos,newPos=Math.round(newPos),newPos+="%"):o>0&&(quotePos=o-1,newPos=-100*quotePos,newPos=Math.round(newPos),newPos+="%"),quotePos==t-1?$("#testRight").css("display","none"):$("#testRight").css("display","block"),0==quotePos?$("#testLeft").css("display","none"):$("#testLeft").css("display","block"),$("#quoteSlider").css("margin-left",newPos)};$("#testRight").click(function(){i()}),$("#testLeft").click(function(){r()});for(var l=$(".port").length,c=0;l>c;)c++,$("#portfolioIndicators ul").append("<li></li>");$("#portfolioIndicators ul li:first-child").addClass("on");var o=100*l;o+="%";var a=100/l;a+="%",$("#projectSlider").css("width",o),$("#projectSlider div").css("width",a),$("#projectSlider").css("margin-left",0);var d=function(){var t=$("#portfolioIndicators ul li.on").index(),o=t+1,e=o+1;o=-100*o,o+="%",t+=1,t===l?($("#projectSlider").css("margin-left",0),$("#portfolioIndicators ul li.on").removeClass("on"),$("#portfolioIndicators ul li:first-child").addClass("on")):($("#projectSlider").css("margin-left",o),$("#portfolioIndicators ul li.on").removeClass("on"),$("#portfolioIndicators ul li:nth-child("+e+")").addClass("on"))},u=function(){var t=$("#portfolioIndicators ul li.on").index(),o=t-1,e=o+1;o=-100*o,o+="%",t+=1,1===t?(o=-100*(l-1),o+="%",$("#projectSlider").css("margin-left",o),$("#portfolioIndicators ul li.on").removeClass("on"),$("#portfolioIndicators ul li:last-child").addClass("on")):($("#projectSlider").css("margin-left",o),$("#portfolioIndicators ul li.on").removeClass("on"),$("#portfolioIndicators ul li:nth-child("+e+")").addClass("on"))};$("#rightArrow").click(function(){d()}),$("#leftArrow").click(function(){u()}),$("html").keyup(function(t){39===t.keyCode?d():37===t.keyCode&&u()}),$("#portfolioIndicators ul li").click(function(){$("#portfolioIndicators ul li").removeClass("on"),$(this).addClass("on");var t=$(this).index(),o=-100*t;o+="%",$("#projectSlider").css("margin-left",o)}),$("body").delegate("#rfqForm","submit",function(t){$("#contactSubmit").replaceWith('<h5  id="contactResult"  style="color:#373a36;">Sending Your Message</h3>'),setTimeout(function(){$.post("scripts/php/email.php",{name:$("#nameInput").val(),org:$("#orgInput").val(),email:$("#emailInput").val(),phone:$("#phoneInput").val(),details:$("#detailsInput").val()},function(t){var o=t;return 1==o?void $("#contactResult").replaceWith('<h5 id="contactSuccess"  style="color:#373a36;">Your Email Sent Successfully.</h5>'):0==o?void $("#contactResult").replaceWith('<h5 id="contactFailure"  style="color:#373a36;">Your Email Did Not Send. Please Try Again.</h5>'):void 0})},1),t.preventDefault()}),$("#logOut").click(function(){$.ajax({url:"scripts/php/phpKill.php"}),setTimeout("location.reload();",1500)})});