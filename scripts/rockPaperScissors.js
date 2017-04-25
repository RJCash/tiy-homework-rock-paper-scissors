$(function () {
    var playercounter = 0;
    var computercounter =0;
    $("button").click(function () {
        var userInput = $(this).val();
        var computerInput = Math.random();
        var timer = 3;

        var evaluate = function (userInput, computerInput) {
            if (userInput === computerInput) {
                return "its a draw"
            } else if (userInput === "rock") {
                if (computerInput === "paper") {
                    computercounter++;
                    return "You lose"
                } else
                    playercounter++;
                    return "You win"
            } else if (userInput === "paper") {
                if (computerInput === "scissors") {
                    computercounter++;
                    return "You lose"
                } else
                    playercounter++;
                    return "You win"
            } else if (userInput === "scissors") {
                if (computerInput === "rock") {
                    computercounter++;
                    return "You lose"
                } else
                    playercounter++;
                    return "You win"
            }
        }
        
        $(".wait").append("3...");
        var myInterval = setInterval(
            function () {
                timer--;
                $(".wait").append(timer + "...");
                if (timer == 0) {
                    clearInterval(myInterval);
                    if (computerInput <= .33) {
                        computerInput = "rock";
                        $(".transparent2").replaceWith('<img class="transparent2" src="images/rock.png"/>');
                    } else if (computerInput <= .66 && computerInput >= .34) {
                        computerInput = "paper";
                        $(".transparent2").replaceWith('<img class="transparent2" src="images/paper.png"/>');
                    } else if (computerInput > .66) {
                        computerInput = "scissors";
                        $(".transparent2").replaceWith('<img class="transparent2" src="images/scissors.png"/>');
                    }
                    if (userInput === "rock"){
                        $(".transparent").replaceWith('<img class="transparent" src="images/rock.png"/>');
                    }else
                    if (userInput === "paper"){
                        $(".transparent").replaceWith('<img class="transparent" src="images/paper.png"/>')
                    }else
                    if (userInput === "scissors"){
                        $(".transparent").replaceWith('<img class="transparent" src="images/scissors.png"/>')
                    }
                    document.getElementById("outcome").innerHTML = evaluate(userInput, computerInput);
                    $('.score').text("Player: "+playercounter);
                    $('.score2').text("Computer: "+computercounter);
                }
            }, 1000
        );


    });


});
