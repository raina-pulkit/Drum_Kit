// var s = document.querySelector(".drum");

// s.addEventListener("click", function (){
//     alert("I was clicked bro!");
// });


/* Instead of passing a function name as a parameter, like in case of the addEventListener, we can simply add an anonymous function there
    so, instead of:
        i.addEventListener("click", clicked);
    we can do:
        i.addEventListener("click", function (){
            alert("I was clicked!");
        });
    and it would do the same thing. we can even name this function, but it doesn't make sense, cause we can't use it anywhere else anyways
*/

var s = document.querySelectorAll(".drum");
var sound;
var dic = {
    "w":"crash",
    "a":"kick-bass",
    "s":"snare",
    "d":"tom-1",
    "ArrowUp":"tom-2",
    "ArrowLeft":"tom-3",
    "ArrowDown":"tom-4",
    "ArrowRight":"crash"
};

for(const i of s){
    i.addEventListener("click", function (){ //Or we can do for(var i = 0; i<s.length; i++) and then add EventListeners
        var classes = this.classList;
        var elem = classes[1];

        var loc = "sounds/"+dic[elem]+".mp3";
        buttonAnimator(elem);
        /*switch (elem) {
            case "w":
                sound = new Audio("sounds/crash.mp3");
                sound.play();
                break;
            case "a":
                sound = new Audio("sounds/kick-bass.mp3");
                sound.play();
                break;
            case "s":
                sound = new Audio("sounds/snare.mp3");
                sound.play();
                break;
            case "d":
                sound = new Audio("sounds/tom-1.mp3");
                sound.play();
                break;
            case "ArrowUp":
                sound = new Audio("sounds/tom-2.mp3");
                sound.play();
                break;
            case "ArrowLeft":
                sound = new Audio("sounds/tom-3.mp3");
                sound.play();
                break;
            case "ArrowDown":
                sound = new Audio("sounds/tom-4.mp3");
                sound.play();
                break;
            case "ArrowRight":
                sound = new Audio("sounds/crash.mp3");
                sound.play();
                break;            
        
            default:
                console.log("Wrong entry: " + elem);
                break;
        }*/

        sound = new Audio(loc);
        sound.play();
    });
}

document.addEventListener("keydown", function (e){
    console.log(e);
    var elem = e.key;
    var loc = "sounds/"+dic[elem]+".mp3";
    buttonAnimator(elem);
    sound = new Audio(loc);
    sound.play();
});

function buttonAnimator(currentClass){
    var btn = document.querySelector("."+currentClass);
    btn.classList.add("pressed");
    setTimeout(function(){
        btn.classList.remove("pressed")
    }, 300);
}