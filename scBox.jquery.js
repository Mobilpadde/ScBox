/**
 * ScrollBox - Scroll that box!
 * Mads Cordes | Mobilpadde@gmail.com | http://githut.com/Mobilpadde | http://twitter.com/Mobilpadde
 * @author Mads Cordes
 * @version 0.0.1
**/
(function($){
	$.fn.scBox = function(options){
		$.fn.scBox.defaults = {
			start: 40,
			width: 200,
			height: 50,
			step: 10,
			fontSize: 15,
			textColor: "#fff",
			bgColor: "#000",
			slideColor: "#ff0000"
		};

		var $opt = $.extend({}, $.fn.scBox.defaults, options);
		
		console.log($opt);
		
		$.each(this, function(index, $this){
			var i = $opt.start;
				canvas = $("<canvas width="+$opt.width+" height="+$opt.height+"></canvas>").appendTo($this),
				ctx = canvas[0].getContext("2d");
	
			function doText(){
				var percent = Math.round((i*100/($opt.width >= $opt.height ? $opt.width : $opt.height)));
				if(percent < 0){
					percent = 0;
				}else if(percent > 100){
					percent = 100;
				}
				ctx.fillStyle = $opt.textColor;
				ctx.font = "bold "+$opt.fontSize+"px sans-serif";
				ctx.textAlign = "right";
				ctx.textBaseline = "bottom";
				ctx.fillText(percent+"%", ($opt.width-3), $opt.height);
			}
			
			if($opt.width >= $opt.height){
				ctx.fillStyle = $opt.bgColor;
				ctx.fillRect(0,0,$opt.width,$opt.height);
				
				ctx.fillStyle = $opt.slideColor;
				ctx.fillRect(0,0,i,$opt.height);
				
				doText();
			
				$(canvas[0]).bind("mousewheel DOMMouseScroll", function(e){
					ctx.clearRect(0,0,$opt.width,$opt.height);
					ctx.fillStyle = $opt.bgColor;
					ctx.fillRect(0,0,$opt.width,$opt.height);
					ctx.fillStyle = $opt.slideColor;
					if(e.originalEvent.wheelDeltaY > 0 || e.originalEvent.detail > 0){
						//console.log("Up");
						(i < $opt.width ? i=i+$opt.step : $opt.width);
						ctx.fillRect(0,0,i,$opt.height);
						doText();
					}else{
						//console.log("Down");
						(i > 0 ? i=i-$opt.step : 0);
						ctx.fillRect(0,0,i,$opt.height);
						doText();
					}
					return false;
				})
				
				$(canvas[0]).click(function(e){
					i = e.offsetX;
					ctx.clearRect(0,0,$opt.width,$opt.height);
					ctx.fillStyle = $opt.bgColor;
					ctx.fillRect(0,0,$opt.width,$opt.height);
					ctx.fillStyle = $opt.slideColor;
					ctx.fillRect(0,0,i,$opt.height);
					doText();
				})
			}else{	
				ctx.fillStyle = $opt.slideColor;
				ctx.fillRect(0,0,$opt.width,$opt.height);
				
				ctx.fillStyle = $opt.bgColor;
				ctx.fillRect(0,0,$opt.height,($opt.height-i));
				
				doText();
				
				$(canvas[0]).bind("mousewheel DOMMouseScroll", function(e){
					ctx.clearRect(0,0,$opt.width,$opt.height);
					ctx.fillStyle = $opt.slideColor;
					ctx.fillRect(0,0,$opt.width,$opt.height);
					ctx.fillStyle = $opt.bgColor;
					if(e.originalEvent.wheelDeltaY > 0 || e.originalEvent.detail > 0){
						(i < $opt.height ? i=i+$opt.step : $opt.height);
						ctx.fillRect(0,0,$opt.height,($opt.height-i));
						doText();
					}else{
						//console.log("Down");
						(i > 0 ? i=i-$opt.step : 0);
						ctx.fillRect(0,0,$opt.height,($opt.height-i));
						doText();
					}
					return false;
				})
				
				$(canvas[0]).click(function(e){
					i = ($opt.height-e.offsetY);
					ctx.clearRect(0,0,$opt.width,$opt.height);
					ctx.fillStyle = $opt.slideColor;
					ctx.fillRect(0,0,$opt.width,$opt.height);
					ctx.fillStyle = $opt.bgColor;
					ctx.fillRect(0,0,$opt.height,($opt.height-i));
					doText();
				})
			}
			return $this;
		})
	}
})(jQuery);