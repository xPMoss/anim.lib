# anim.lib
Animation Library

Example:
https://xpmoss.github.io/anim.lib/

How to:
Insert the Javascript document with a script-tag att the end of your Html document.
<script src="animlib.js"></script>
  
Create a div-tag and set an attribute anim="true"
then set the attributes:
    anim_target="self"|"target id" 
    anim_event="onclick"|"onload"|"onhover"
    anim_transform="rotateZ"|"scaleX"|"scaleY"|"scale"|"translateX"|"translateY"
    anim_endvalue="value of movement"
    anim_frames="length of animation in frames/s"
    anim_origin="center"|"top"|"left"|"right"|"a combination of them"
    anim_delay="delay in frames/s"
    anim_interpolation="ease"|"linear"|"other interpolation mode"
    anim_toggle="true"|"false"
    
The script will load all the divs in the document body in a Javascript array and set all the parameters. 
  
