//Java Script Support For Animate .css
//Plugin Developed By Sankalp Bhamare..

var s = "";

const infinite = 1342;
var Animations = 
[]
var Animate = 
{
   "addAnimations":(name,duration)=>
   {
   	   var checked = true;
   	   for(var  i= 0 ;i< Animations.length;i++)
   	   {
   	   	 if(Animations[i].name  == name) checked = false;
   	   }
   	   if(checked)
       Animations[Animations.length] = {"name":name,"duration":duration};      
      
       
   },
   "anim":(name)=>
   {
   	 for(var i  = 0;i < Animations.length;i++)
   	 {
   	 	if(Animations[i].name == name)
   	 	{
   	 		return Animations[i];
   	 	}
   	 }
   },
   "removeAnimations":(ref)=>
   {
       for(var  i  = 0; i < Animations.length;i ++)
       {
       	  ref.removeClass(Animations[i].name+" infinite once");
       }
   },
   "playAnimation":(ref,anim,timings)=>
   {
     Animate.removeAnimations(ref);

     ref.addClass(anim.name+" animated "+timings);
     ref.css({"animation-duration":anim.duration+"s"})
     if(timings == "once")
     {
     	ref.addClass("once");
     
     	setTimeout(()=>{
     	  Animate.removeAnimations(ref);
     	  
     	},anim.duration*1000)
     }

   }
}

//Infinite Deal Of NonSense--->
var asl = "<select class=\"fade asl\"><optgroup label=\"Attention Seekers\"><option value=\"bounce\">bounce</option><option value=\"flash\">flash</option><option value=\"pulse\">pulse</option><option value=\"rubberBand\">rubberBand</option><option value=\"shake\">shake</option><option value=\"swing\">swing</option><option value=\"tada\">tada</option><option value=\"wobble\">wobble</option><option value=\"jello\">jello</option></optgroup><optgroup label=\"Bouncing Entrances\"><option value=\"bounceIn\">bounceIn</option><option value=\"bounceInDown\">bounceInDown</option><option value=\"bounceInLeft\">bounceInLeft</option><option value=\"bounceInRight\">bounceInRight</option><option value=\"bounceInUp\">bounceInUp</option></optgroup><optgroup label=\"Bouncing Exits\"><option value=\"bounceOut\">bounceOut</option><option value=\"bounceOutDown\">bounceOutDown</option><option value=\"bounceOutLeft\">bounceOutLeft</option><option value=\"bounceOutRight\">bounceOutRight</option><option value=\"bounceOutUp\">bounceOutUp</option></optgroup><optgroup label=\"Fading Entrances\"><option value=\"fadeIn\">fadeIn</option><option value=\"fadeInDown\">fadeInDown</option><option value=\"fadeInDownBig\">fadeInDownBig</option><option value=\"fadeInLeft\">fadeInLeft</option><option value=\"fadeInLeftBig\">fadeInLeftBig</option><option value=\"fadeInRight\">fadeInRight</option><option value=\"fadeInRightBig\">fadeInRightBig</option><option value=\"fadeInUp\">fadeInUp</option><option value=\"fadeInUpBig\">fadeInUpBig</option></optgroup><optgroup label=\"Fading Exits\"><option value=\"fadeOut\">fadeOut</option><option value=\"fadeOutDown\">fadeOutDown</option><option value=\"fadeOutDownBig\">fadeOutDownBig</option><option value=\"fadeOutLeft\">fadeOutLeft</option><option value=\"fadeOutLeftBig\">fadeOutLeftBig</option><option value=\"fadeOutRight\">fadeOutRight</option><option value=\"fadeOutRightBig\">fadeOutRightBig</option><option value=\"fadeOutUp\">fadeOutUp</option><option value=\"fadeOutUpBig\">fadeOutUpBig</option></optgroup><optgroup label=\"Flippers\"><option value=\"flip\">flip</option><option value=\"flipInX\">flipInX</option><option value=\"flipInY\">flipInY</option><option value=\"flipOutX\">flipOutX</option><option value=\"flipOutY\">flipOutY</option></optgroup><optgroup label=\"Lightspeed\"><option value=\"lightSpeedIn\">lightSpeedIn</option><option value=\"lightSpeedOut\">lightSpeedOut</option></optgroup><optgroup label=\"Rotating Entrances\"><option value=\"rotateIn\">rotateIn</option><option value=\"rotateInDownLeft\">rotateInDownLeft</option><option value=\"rotateInDownRight\">rotateInDownRight</option><option value=\"rotateInUpLeft\">rotateInUpLeft</option><option value=\"rotateInUpRight\">rotateInUpRight</option></optgroup><optgroup label=\"Rotating Exits\"><option value=\"rotateOut\">rotateOut</option><option value=\"rotateOutDownLeft\">rotateOutDownLeft</option><option value=\"rotateOutDownRight\">rotateOutDownRight</option><option value=\"rotateOutUpLeft\">rotateOutUpLeft</option><option value=\"rotateOutUpRight\">rotateOutUpRight</option></optgroup><optgroup label=\"Sliding Entrances\"><option value=\"slideInUp\">slideInUp</option><option value=\"slideInDown\">slideInDown</option><option value=\"slideInLeft\">slideInLeft</option><option value=\"slideInRight\">slideInRight</option></optgroup><optgroup label=\"Sliding Exits\"><option value=\"slideOutUp\">slideOutUp</option><option value=\"slideOutDown\">slideOutDown</option><option value=\"slideOutLeft\">slideOutLeft</option><option value=\"slideOutRight\">slideOutRight</option></optgroup><optgroup label=\"Zoom Entrances\"><option value=\"zoomIn\">zoomIn</option><option value=\"zoomInDown\">zoomInDown</option><option value=\"zoomInLeft\">zoomInLeft</option><option value=\"zoomInRight\">zoomInRight</option><option value=\"zoomInUp\">zoomInUp</option></optgroup><optgroup label=\"Zoom Exits\"><option value=\"zoomOut\">zoomOut</option><option value=\"zoomOutDown\">zoomOutDown</option><option value=\"zoomOutLeft\">zoomOutLeft</option><option value=\"zoomOutRight\">zoomOutRight</option><option value=\"zoomOutUp\">zoomOutUp</option></optgroup><optgroup label=\"Specials\"><option value=\"hinge\">hinge</option><option value=\"rollIn\">rollIn</option><option value=\"rollOut\">rollOut</option></optgroup></select>"
//<ending
start()
function start()
{
  $("body").append(asl);
  Animate.addAnimations("hide",1);
  Animate.addAnimations("fade",1);
	s = $(".asl").toArray();
	s = s[0].children;
    
	for(var i = 0;i<s.length;i++)
	{
		var n = $(s[i]).toArray();
		var n = n[0].children;
		for(var x = 0;x < n.length;x++)
		{
			
			Animate.addAnimations($(n[x]).val(),1);
			//console.log(Animate);
		}
	}
}

//jQuery Plugin Begins Here >
(function ( $ ) {
   
    $.fn.playAnim = function(name,type) {
        Animate.playAnimation(this,Animate.anim(name),type)
        return this;
    };
    $.fn.removeAnim = function()
    {
    	Animate.removeAnimations(this);
    }
    
}( jQuery ));
