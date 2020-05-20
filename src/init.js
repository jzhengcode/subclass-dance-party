$(document).ready(function() {
  window.dancers = [];

  // $('img').on("mouseover", function(){
  //   $('img').css("border-color: blue")
  // })

  //define lineup function
  $('.lineUp').on('click', function(event) {
    window.lineUp();
  });

  window.lineUp = function() {
    window.dancers.forEach(dancer => {
      dancer.lineUp();
    });
  };

  // declare a global joinUp
  window.joinUp = function() {
    // iterate through the global dancers
    for (var i = 0; i < window.dancers.length; i += 2) {
      //if next dancer is undefined
      if (window.dancers[i + 1] === undefined) {
        //return
        return;
      }
      // alter the setPostition of the next dancer in the array horiPos + 100
      window.dancers[i].horiLoc = window.dancers[i + 1].horiLoc;
      window.dancers[i].vertLoc = window.dancers[i + 1].vertLoc + 100;
      //make them dance at the same rhythm
      window.dancers[i].timeBetweenSteps = window.dancers[i + 1].timeBetweenSteps;
    }
  };

  $('.joinUp').on('click', function(event) {
    window.joinUp();
  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    //push dancer to array at window.dancers
    window.dancers.push(dancer);
  });
});

