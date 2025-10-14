var secret = Math.floor(Math.random() * 20) + 1;


// Convert the string guess to an integer so that we can compare
var guess = parseInt(prompt("Please guess the secret number (1-20)"));


  

        while ((guess !== secret))

    {
        if (isNaN(guess)) 
        {
            alert("Game cancelled.");
            break;
        }
        
       
         else if( guess > secret)
        {
            alert("Incorrect, too high");
             guess = parseInt(prompt("Please guess the secret number (1-20)"));
        }
        else if ( guess < secret)
        {
            alert("Incorrect, too low");
             guess = parseInt(prompt("Please guess the secret number (1-20)"));
        }
    };
        

  if (guess === secret)

        {
            alert("Correct guess");
        };


