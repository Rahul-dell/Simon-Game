var c=0;
var level =1;
var started =false;
var gamePattern = [];
var buttonColours = ["red","blue", "green", "yellow"];
var userClickedPattern = [];
function nextSequence()
{
    userClickedPattern=[];
    started =true;
    $("h1").text("Level "+ level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    playSound(randomChosenColour);
    $("#"+randomChosenColour).addClass("flash");
    setTimeout(function(){$("#"+randomChosenColour).removeClass("flash");},300);
    
    
}
var checkThen =0;
$(".btn").click(function(){
    if(started===true)
    {
    checkThen++;
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    $("#"+userChosenColour).addClass("flash");
    setTimeout(function(){$("#"+userChosenColour).removeClass("flash");},100);
    playSound(this.id);
    checkAnswer(level);

    if(checkThen===level  && started ===true)
    {
        checkThen=0;
    setTimeout(function(){nextSequence();},1000);
    level++;
    c=0;
    }
    }
});
function playSound(name){

        switch(name)
        {
            case "red" : var audio = new Audio("sounds/red.mp3");
                         audio.play();
                         break;
            case "green" : var audio = new Audio("sounds/green.mp3");
                         audio.play();
                         break;
            case "blue" : var audio = new Audio("sounds/blue.mp3");
                         audio.play();
                         break;
            case "yellow" : var audio = new Audio("sounds/yellow.mp3");
                         audio.play();
                         break;
                        }
}

    $("html").keypress(function(){
        if(started===false){
        nextSequence()}});

    function checkAnswer(currentLevel){

        if(c<=currentLevel)
        {    
            if(userClickedPattern[c]!=gamePattern[c])
            {
                c=0;
                wrong();

            }
        }
    c++;

        
    }


    function wrong(){

    var audio = new Audio("assets/wrong.mp3");
    audio.play();
    gamePattern = [];
            userClickedPattern = [];
            started = false;
            level =1;
           $("h1").text("Game Over, Press A Key To Restart...");
            
            checkThen=1;
    
    $("body").addClass("wrong");
    setTimeout(function (){$("body").removeClass("wrong");},200);

}
