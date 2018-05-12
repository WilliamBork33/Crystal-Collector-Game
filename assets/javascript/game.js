$(document).ready(function() {

//Define variables.
var power_needed = (Math.floor(Math.random() * (11 - 7)) + 7);
var power_gained = 0;
var wins = 0;
var losses = 0;

//Prints the random starting crystal power to screen.
document.getElementById("crystal-needed").innerHTML = power_needed;
        
//Responds to user clicks on crystal images.
$(".crystal-image").on("click", function() {
    
    //takes the gained crystal power on each click and adds it to the previous crystal power.
    power_gained = power_gained + (Math.floor(Math.random() * (5 - 1)) + 1);
    
    //Prints the random gained crystal power to screen.
    document.getElementById("crystal-gained").innerHTML = power_gained;
    
    //Checks if starting power is = < > than added_power.
    if (power_gained < power_needed)
    {
        //Changes row color to selected crystal color so user notes their own selection.
        $("#black-crystal-image").on("click", function() {
            $(".row").css("background-color", "black");  
        });

        //Changes row color to selected crystal color so user notes their own selection.
        $("#purple-crystal-image").on("click", function() {
            $(".row").css("background-color", "purple");  
        });

        //Changes row color to selected crystal color so user notes their own selection.
        $("#red-crystal-image").on("click", function() {
            $(".row").css("background-color", "red");  
        });

        //Changes row color to selected crystal color so user notes their own selection.
        $("#green-crystal-image").on("click", function() {
            $(".row").css("background-color", "#12E09C");  
        });
    }

    else if (power_gained == power_needed)
    {
        alert("Win! Exactly the right amount of crystal power!");
        //Updates game wins.
        wins++;
        //Prints the game wins to screen.
        document.getElementById("wins").innerHTML = wins;
        //Resets crystal powers to a random integer and "0".
        power_needed = (Math.floor(Math.random() * (11 - 7)) + 7);
        power_gained = 0;
        //Prints reset crystal powers to the screen.
        document.getElementById("crystal-needed").innerHTML = power_needed;
        document.getElementById("crystal-gained").innerHTML = power_gained;
    }

    else if (power_gained > power_needed)
    {
        alert("Lose! Too...much...crystal powerrrr...ahhh!!!");
        //Updates game losses.
        losses++;
        //Prints the game losses to screen.
        document.getElementById("losses").innerHTML = losses;
        //Resets crystal powers to a random integer and "0".
        power_needed = (Math.floor(Math.random() * (11 - 7)) + 7);
        power_gained = 0;
        //Prints reset crystal powers to the screen.
        document.getElementById("crystal-needed").innerHTML = power_needed;
        document.getElementById("crystal-gained").innerHTML = power_gained;
    }
});

});



