//First we need a random number to start the game
//Now we need a random number for our four elements
//Now we need to store those values on top of each other. 


var win =0;
var lost =0;
var previous =0;
var randomScore = Math.floor(Math.random() * ((120-19)+1) + 19);


  
      //Will reset and start game 
   var resetAndStart = function() {
      randomScore=0;
      previous=0;
      //Reseting Variables
      randomScore = Math.floor(Math.random() * ((120-19)+1) + 19);

     
      $('#user-score').html(previous)
      $('#random-score').html(randomScore);

      //Will put our score in our html element

    
       for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * ((12-1)+1) + 1);
       
       $(".choice").attr({
        
       "data-random": () => Math.floor(Math.random() * ((12-1)+1) + 1)
        

        });//End of choice attr
       }//End of for loop :)

    } //End of resetAndStart()

    //Starting Game
    resetAndStart();

       $(".choice").on('click', function () {

        var num = parseInt($(this).attr('data-random'));

        previous += num;

        console.log(previous);
        $('#user-score').text(previous);

          if(previous > randomScore){
           
            lost++;
           
            $("#loss").html(lost);

            resetAndStart();
        }
        
          else if(previous === randomScore) {
            
            win++; 
            
            $("#win").html(win);

            resetAndStart();

           
        
        }


        
        
       });
 