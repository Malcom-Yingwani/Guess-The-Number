var secret = Math.floor(Math.random() * 20) + 1; 
var response;
var guess;

document.getElementById("play").addEventListener("click", startGame);

// function to prompt user repeatedly
function getAnswer()
{
    response = (prompt("Please guess the secret number (1-20)"));
    guess = parseInt(response);
};

// executes game
function startGame()
{
    
   
    getAnswer();
    

        while ((guess !== secret))

    {
        if(response === null)
        {
            alert("Game cancelled.");
            break;
        }
        else if (isNaN(guess)) 
        {
            alert("That won't do. Please enter a NUMBER (1-20)");
            getAnswer();
        }
        else if( guess > secret)
        {
            alert("Incorrect, too high");
            getAnswer();
        }
        else if ( guess < secret)
        {
            alert("Incorrect, too low");
            getAnswer();
        }
    };
        

  if (guess === secret)

        {
            alert("Correct guess");
        };
        return;
};






