

class AnimObject{
    constructor(obj){
        this.div = obj;

        // SET TARGET //
        this.target = obj.getAttribute("anim_target");

        obj.setAttribute("anim_id", animObjects.length);
        
        this.id = animObjects.length;
        this.event = obj.getAttribute("anim_event");
        this.transform = obj.getAttribute("anim_transform"); 

        this.endvalue = obj.getAttribute("anim_endvalue"); 

        this.frames = obj.getAttribute("anim_frames"); 
        this.origin = obj.getAttribute("anim_origin"); 
        this.startdelay = obj.getAttribute("anim_delay"); 
        this.interpolation = obj.getAttribute("anim_interpolation"); 
        this.toggle = obj.getAttribute("anim_toggle"); 
        this.repeat = obj.getAttribute("anim_repeat"); 

        this.state = "start";

        
        
        if(this.div.getAttribute("anim_event") == "onclick"){
            this.div.onclick = async function(e) { 

                for (let i = 0; i < animObjects.length; i++) {
                    let obj = animObjects[i];

                    if(obj.div.getAttribute("anim_id") == this.getAttribute("anim_id")){
                        obj.animate();

                        

             
                    }
                }
            }
        }

        if(this.div.getAttribute("anim_event") == "onhover"){
            this.div.onmouseover = function(e) { 

                for (let i = 0; i < animObjects.length; i++) {
                    let obj = animObjects[i];
            
                    if(obj.div.getAttribute("anim_id") == this.getAttribute("anim_id")){
                        obj.animate();

                        
             
                    }
                    
                }

            }
        }

        if(this.div.getAttribute("anim_event") == "onload"){
            this.animate();

        }


    }
    
    animate() {
        //console.log("Animate function");
        let unit;
        let transform = this.transform;
        let origin = this.origin;
        let startdelay = this.startdelay;
        let target = this.div;
        let interpolation =  this.interpolation;
        let toggle = this.toggle;

        // SET TARGET //
        if (this.target != "self") {
            console.log("T: " + this.div.getAttribute("anim_target"))
            target = document.getElementById(this.div.getAttribute("anim_target"));

        }


        if (transform == "rotateX" || transform == "rotateY" || transform == "rotateZ") {
            unit = "deg";

        }

        if (transform == "rotateX" || transform == "rotateY" || transform == "rotateZ") {
            unit = "deg";

        }

        if (transform == "scaleX" || transform == "scaleY" || transform == "scale") {
            unit = "";

        }

        if (transform == "translateX" || transform == "translateY") {
            unit = "px";

        }


        this.div.style.transformOrigin = origin;

        let forwardAnim = target.animate([
            { // from
                
            },
            { // to
                transform: transform + "(" + this.endvalue + unit + ")"
            }
            ], 
            {
                delay: startdelay,
                fill: 'forwards',
                easing: interpolation,
                duration: this.frames*frames
            });

            


        if (this.state == "start") {
            //console.log("START")
            forwardAnim.play();

            if (toggle == "true") {
                this.state = "end";
            }
            

        }
        else if (transform == "scaleX" || transform == "scaleY" || transform == "scale") {
            //console.log("END")
            target.animate([
                { // from
                    transform: transform + "(" + this.endvalue + unit + ")"
                },
                { // to
                    transform: transform + "(" + 1 + unit + ")"
                }
              ], 
              {
                delay: startdelay,
                fill: 'forwards',
                easing:  interpolation,
                duration: this.frames*frames
            });

            this.state = "start";
        }
        else{
            //console.log("END")
            target.animate([
                { // from
                    transform: transform + "(" + this.endvalue + unit + ")"
                },
                { // to
                    transform: transform + "(" + 0 + unit + ")"
                }
              ], 
              {
                delay: startdelay,
                fill: 'forwards',
                easing: interpolation,
                duration: this.frames*frames
            });

            this.state = "start";


        }
    }

    debug(){
        console.log("-----")
        console.log("Object: " + this.id)
        console.log("Target: " + this.target);
        console.log("Event: " + this.event);
        console.log("Transform: " + this.transform);
        console.log("Endvalue: " + this.endvalue);
        console.log("Frames: " + this.frames);
        console.log("Origin: " + this.origin);
        console.log("Delay: " + this.startdelay);
        console.log("Interpolation: " + this.interpolation);
        console.log("Toggle: " + this.toggle);
        console.log("Repeat: " + this.repeat);


    }

}


// GLOBAL VARIABELS //
let divs = document.getElementsByTagName("div");
let animObjects = new Array();
let frames = 1000/25;
//console.log(divs)

// INITIAL SETUP //
function setupAnimLibObjects() {
    
    for (let i = 0; i < divs.length; i++) {
       let div = divs[i];

        if(div.getAttribute("anim") == "true"){
            animObjects.push(new AnimObject(div));

        }
        
    }

    // Debug //
    for (let i = 0; i < animObjects.length; i++) {
        //console.log(animObjects[i])
  
    }  

}

// START //
function start(){
    setupAnimLibObjects();

}


document.addEventListener("DOMContentLoaded", function(event) { 
    start();

});

