
function yellow(){
    var audio = new Audio("assets/yellow.mp3");
        audio.play();}
        function red(){
    var audio = new Audio("assets/red.mp3");
        audio.play();}
        function blue(){
    var audio = new Audio("assets/blue.mp3");
        audio.play();}
        function green(){
    var audio = new Audio("assets/green.mp3");
        audio.play();}
$(".yellow").on("click", function(){
    yellow();
    flash (this);
   
});

$(".red").on("click", function(){
    red();
    flash(this);
    
});
$(".green").on("click", function(){


    green();
    flash(this);

});
$(".blue").on("click", function(){
    blue();
    flash(this);

});
function flash(arg){
$(arg).addClass("flash");
setTimeout(function(){$(arg).removeClass("flash");},100);
}
function wrong(){

    var audio = new Audio("assets/wrong.mp3");
    audio.play();
    $("h1").text("Game Over Press Any Key to Restart");
    $("body").addClass("wrong");
    setTimeout(function (){$("body").removeClass("wrong");},500);

}

function seek(arg)
{
    
    $(arg).addClass("seek");
    setTimeout(function(){$(arg).removeClass("seek");}, 200);
}

