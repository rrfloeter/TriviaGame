var timer;
var timerId;
var correct = 0;
var incorrect = 0;

var questions = ["What is the largest continent on earth?", "What country has the most natural lakes?", "In what country can you visit Machu Picchu?", "Which African nation has the most pyramids?", "Which U.S. state has the most active volcanoes?", "Which is the largest country on the Arabian Peninsula?", "What is the largest country in South America?"];

var answers1 = ["North America" , " Asia" , " South America" , "Europe"];
var answers2 = ["United States", "Brazil", "South Sudan", "Canada"];
var answers3 = ["Brazil", "Chile", "Egypt", "Peru"];
var answers4 = ["South Africa", "Egypt", "Sudan","Tanzania"];
var answers5 = ["Hawaii", "Alaska", "California", "Montana"];
var answers6 = ["Saudi Arabia", "Yemen", "Syria", "Qatar"];
var answers7 = ["Chile","Argentina", "Brazil","Columbia"];


$(document).ready(function(){
    $('#img1').hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("#img5").hide();
    $("#img6").hide();
    $("#img7").hide();
    $(".answers").hide();
    $(".answers2").hide();
    $(".answers3").hide();
    $(".answers4").hide();
    $(".answers5").hide();
    $(".answers6").hide();
    $(".answers7").hide();
    $("#Answer1").hide();
    $("#Answer2").hide();
    $("#Answer3").hide();
    $("#Answer4").hide();
    $("#Answer5").hide();
    $("#Answer6").hide();
    $("#Answer7").hide();
    $("#Gif").hide();
    $(".Restart_Button").hide();

    
    $(".Start_Button").click(function() {
        //timer
        function countdown() {
            timer = 30;
            timerId = setInterval(function() {
            timer--;
            console.log(timer);
            $(".timer").html("Timer: " +timer);
            if(timer == 0) {
                console.log("Time is up");
                alert("Time is up!");
                incorrect ++;
                $("#img1").show();
                $("#Answer1").show();
                $(".answers").hide();
                $(".Game").hide();
                $(".timer").hide();
                function NextQ () {
                    setTimeout(function() {
                        function resetcountdown() {
                        clearInterval(timerId);}
                        resetcountdown();
                    $("#img1").hide();
                    $("#Answer1").hide();
                    question2();
                    countdown();
                    }, 3000);
                }
                NextQ();
                countdown();
                
                }        
            }, 1000);
        }
        countdown();

        
    $(".Start_Button").hide();

    //question 1
    function question1 () {
        $(".timer").show();
        $(".answers").show();
        $(".Game").html(questions[0]);
        $(".list-group-item1").html(answers1[0]);
        $(".list-group-item2").html(answers1[1]);
        $(".list-group-item3").html(answers1[2]);
        $(".list-group-item4").html(answers1[3]);

       if($(".list-group-item2").click(function(){
            alert("you got it right!");
            console.log("you got it right");
            correct ++;
            $("#img1").show();
            $("#Answer1").show();
            $(".answers").hide();
            $(".Game").hide();
            $(".timer").hide();
            function NextQ () {
                setTimeout(function() {
                    function resetcountdown() {
                    clearInterval(timerId);}
                    resetcountdown();
                $("#img1").hide();
                $("#Answer1").hide();
                question2();
                countdown();
                }, 3000);
            }
            NextQ();
        })); 
    
      if($(".list-group-item1").click(function(){
           alert("you got it wrong!");
           console.log("you got it wrong");
           incorrect ++;
           $("#img1").show();
           $("#Answer1").show();
           $(".answers").hide();
           $(".Game").hide();
           $(".timer").hide();
           function NextQ () {
            setTimeout(function() {
               function resetcountdown() {
               clearInterval(timerId);}
               resetcountdown();
            $("#img1").hide();
            $("#Answer1").hide();
            question2();
            countdown();
            }, 3000);
        }
        NextQ();
       }));

       if($(".list-group-item3").click(function(){
       alert("you got it wrong!");
       console.log("you got it wrong");
       incorrect ++;
       $("#img1").show();
       $("#Answer1").show();
       $(".answers").hide();
       $(".Game").hide();
       $(".timer").hide();
       function NextQ () {
        setTimeout(function() {
            function resetcountdown() {
            clearInterval(timerId);}
            resetcountdown();
        $("#img1").hide();
        $("#Answer1").hide();
        question2();
        countdown();
        }, 3000);
    }
    NextQ();
    }));

      if($(".list-group-item4").click(function(){
      alert("you got it wrong!");
      incorrect ++;
      $("#img1").show();
      $("#Answer1").hide();
      $(".answers").hide();
      $(".Game").hide();
      $(".timer").hide();
      function NextQ () {
        setTimeout(function() {
            function resetcountdown() {
            clearInterval(timerId);}
            resetcountdown();
        $("#img1").hide();
        $("#Answer1").hide();
        question2();
        countdown();
        }, 3000);
    }
    NextQ();
      }));

    }
question1();

});
});    


//question 2
function question2() {
    $("#img1").hide();
    $(".timer").show();
    $(".answers2").show();
    $(".Game1").text(questions[1]);
    $(".list-group-item5").html(answers2[0]);
    $(".list-group-item6").html(answers2[1]);
    $(".list-group-item7").html(answers2[2]);
    $(".list-group-item8").html(answers2[3]);

    function countdown() {
        timer = 30;
        timerId = setInterval(function() {
        timer--;
        console.log(timer);
        $(".timer").html("Timer: " +timer);
        if(timer == 0) {
            console.log("Time is up");
            alert("Time is up!");
            incorrect ++;
            $(".answers2").hide();
            $(".Game1").hide();
            $(".timer").hide();
            $("#img2").show();
            $("#Answer2").show();
            
            function NextQ () {
                setTimeout(function() {
                function resetcountdown() {
                clearInterval(timerId);}
                resetcountdown();
                $("#img1").hide();
                $("#Answer2").hide();
                question3();
                countdown();
                }, 3000);
            }
            NextQ();
            
            }        
        }, 1000);
    }

    $(".list-group-item8").click(function(){
        alert("you got it right!");
        console.log("You got it right!");
        correct ++;
        $("#img2").show();
        $("#Answer2").show();
        $(".answers2").hide();
        $(".Game1").hide();
        $(".timer").hide();
        function NextQ () {
            setTimeout(function() {
                function resetcountdown() {
                clearInterval(timerId);}
                resetcountdown();
            $("#img1").hide();
            $("#Answer2").hide();
            question3();
           countdown();
            }, 3000);
        }
        NextQ();
        
    }); 

  if($(".list-group-item5").click(function(){
       alert("you got it wrong!");
       console.log("You got it right!")
       incorrect ++;
       $("#img2").show();
       $("#Answer2").show();
       $(".answers2").hide();
       $(".Game1").hide();
       $(".timer").hide();
       function NextQ () {
        setTimeout(function() {
            function resetcountdown() {
                clearInterval(timerId);}
                resetcountdown();
        $("#img1").hide();
        $("#Answer2").hide();
        question3();
        countdown();
        }, 3000);
    }
    NextQ();
   }));

   if($(".list-group-item6").click(function(){
   alert("you got it wrong!");
   incorrect ++;
   $("#img2").show();
   $("#Answer2").show();
   $(".answers2").hide();
   $(".Game1").hide();
   $(".timer").hide();
   function NextQ () {
    setTimeout(function() {
        function resetcountdown() {
            clearInterval(timerId);}
            resetcountdown();
    $("#img1").hide();
    $("#Answer2").hide();
    question3();
    countdown();
    }, 3000);
}
NextQ();
   }));

  if($(".list-group-item7").click(function(){
  alert("you got it wrong!");
  incorrect ++;
  $("#img2").show();
  $("#Answer2").show();
  $(".answers2").hide();
  $(".Game1").hide();
  $(".timer").hide();
  function NextQ () {
    setTimeout(function() {
        function resetcountdown() {
            clearInterval(timerId);}
            resetcountdown();
    $("#img1").hide();
    $("#Answer2").hide();
    question3();
    countdown();
    }, 3000);
}
NextQ();
  }));    

}
question2();


//question 3
function question3() {
    function countdown() {
        timer = 30;
        timerId = setInterval(function() {
        timer--;
        console.log(timer);
        $(".timer").html("Timer: " +timer);
        if(timer == 0) {
            console.log("Time is up");
            alert("Time is up!");
            incorrect ++;
            countdown();
            question4();
            }        
        }, 1000);
    }
    $("#img1").hide();
    $(".timer").show();
    $("#img2").hide();
    $(".answers3").show();
    $(".Game2").text(questions[2]);
    $(".list-group-item9").html(answers3[0]);
    $(".list-group-item10").html(answers3[1]);
    $(".list-group-item11").html(answers3[2]);
    $(".list-group-item12").html(answers3[3]);


    $(".list-group-item12").click(function(){
        alert("you got it right!");
        correct ++;
        $("#img3").show();
        $("#Answer3").show();
        $(".answers3").hide();
        $(".Game2").hide();
        $(".timer").hide();
        function NextQ () {
            setTimeout(function() {
                function resetcountdown() {
                    clearInterval(timerId);}
                    resetcountdown();
            $("#img1").hide();
            $("#img2").hide();
            $("#Answer3").hide();
            question4();
            countdown();
            }, 3000);
        }
        NextQ();
        
    }); 

  if($(".list-group-item10").click(function(){
       alert("you got it wrong!");
       incorrect ++;
       $("#img3").show();
       $("#Answer3").show();
       $(".answers3").hide();
       $(".Game2").hide();
       $(".timer").hide();
       function NextQ () {
        setTimeout(function() {
            function resetcountdown() {
                clearInterval(timerId);}
                resetcountdown();
        $("#img1").hide();
        $("#img2").hide();
        $("#Answer3").hide();
        question4();
        countdown();
        }, 3000);
    }
    NextQ();
   }));

   if($(".list-group-item11").click(function(){
   alert("you got it wrong!");
   incorrect ++;
   $("#img3").show();
   $("#Answer3").show();
   $(".answers3").hide();
   $(".Game2").hide();
   $(".timer").hide();
   function NextQ () {
    setTimeout(function() {
        function resetcountdown() {
            clearInterval(timerId);}
            resetcountdown();
    $("#img1").hide();
    $("#img2").hide();
    $("#Answer3").hide();
    question4();
    countdown();
    }, 3000);
}
NextQ();
   }));

  if($(".list-group-item9").click(function(){
  alert("you got it wrong!");
  incorrect ++;
  $("#img3").show();
  $("#Answer3").show();
  $(".answers3").hide();
  $(".Game2").hide();
  $(".timer").hide();
  function NextQ () {
    setTimeout(function() {
        function resetcountdown() {
            clearInterval(timerId);}
            resetcountdown();
    $("#img1").hide();
    $("img2").hide();
    $("#Answer3").hide();
    question4();
    countdown();
    }, 3000);
}
NextQ();
  }));    

}
question3();

//question 4
function question4() {
    function countdown() {
        timer = 30;
        timerId = setInterval(function() {
        timer--;
        console.log(timer);
        $(".timer").html("Timer: " +timer);
        if(timer == 0) {
            console.log("Time is up");
            alert("Time is up!");
            incorrect ++;
            countdown();
            question5();
            }        
        }, 1000);
    }
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
    $(".timer").show(1000);
    $(".answers4").show();
    $(".Game3").text(questions[3]);
    $(".list-group-item13").html(answers4[0]);
    $(".list-group-item14").html(answers4[1]);
    $(".list-group-item15").html(answers4[2]);
    $(".list-group-item16").html(answers4[3]);


    $(".list-group-item15").click(function(){
        alert("you got it right!");
        correct ++;
        $("#img4").show();
        $("#Answer4").show();
        $(".answers4").hide();
        $(".Game3").hide();
        $(".timer").hide();
        function NextQ () {
            setTimeout(function() {
                function resetcountdown() {
                clearInterval(timerId);}
                resetcountdown();
            $("#img1").hide();
            $("#img2").hide();
            $("#img3").hide();
            $("#Answer4").hide();
            question5();
            countdown();
            }, 3000);
        }
        NextQ();
        
    }); 

  if($(".list-group-item14").click(function(){
       alert("you got it wrong!");
       incorrect ++;
       $("#img4").show();
       $("#Answer4").show();
       $(".answers4").hide();
       $(".Game3").hide();
       $(".timer").hide();
       function NextQ () {
        setTimeout(function() {
            function resetcountdown() {
                clearInterval(timerId);}
                resetcountdown();
        $("#img1").hide();
        $("#img2").hide();
        $("#img3").hide();
        $("#Answer4").hide();
        question5();
        countdown();
        }, 3000);
    }
    NextQ();
   }));

   if($(".list-group-item13").click(function(){
   alert("you got it wrong!");
   incorrect ++;
   $("#img4").show();
   $("#Answer4").show();
   $(".answers4").hide();
   $(".Game3").hide();
   $(".timer").hide();
   function NextQ () {
    setTimeout(function() {
        function resetcountdown() {
            clearInterval(timerId);}
            resetcountdown();
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#Answer4").hide();
    question5();
    countdown();
    }, 3000);
}
NextQ();
   }));

  if($(".list-group-item16").click(function(){
  alert("you got it wrong!");
  incorrect ++;
  $("#img4").show();
  $("#Answer4").show();
  $(".answers4").hide();
  $(".Game3").hide();
  $(".timer").hide();
  function NextQ () {
    setTimeout(function() {
        function resetcountdown() {
            clearInterval(timerId);}
            resetcountdown();
    $("#img1").hide();
    $("img2").hide();
    $("img3").hide();
    $("#Answer4").hide();
    question5();
    countdown();
    }, 3000);
}
NextQ();
  }));    

}
question4();

//question 5
function question5() {
    function countdown() {
        timer = 30;
        timerId = setInterval(function() {
        timer--;
        console.log(timer);
        $(".timer").html("Timer: " +timer);
        if(timer == 0) {
            console.log("Time is up");
            alert("Time is up!");
            incorrect ++;
            countdown();
            question6();

            }        
        }, 1000);
    }
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();
    $(".timer").show(1000);
    $(".answers5").show();
    $(".Game4").text(questions[4]);
    $(".list-group-item17").html(answers5[0]);
    $(".list-group-item18").html(answers5[1]);
    $(".list-group-item19").html(answers5[2]);
    $(".list-group-item20").html(answers5[3]);


    $(".list-group-item18").click(function(){
        alert("you got it right!");
        correct ++;
        console.log(correct);
        $("#img5").show();
        $("#Answer5").show();
        $(".answers5").hide();
        $(".Game4").hide();
        $(".timer").hide();
        function NextQ () {
            setTimeout(function() {
                function resetcountdown() {
                clearInterval(timerId);}
                resetcountdown();
            $("#img1").hide();
            $("#img2").hide();
            $("#img3").hide();
            $("#img4").hide();
            $("#Answer5").hide();
            question6();
            countdown();
            }, 3000);
        }
        NextQ();
        
    }); 

  if($(".list-group-item17").click(function(){
       alert("you got it wrong!");
       incorrect ++;
       $("#img5").show();
       $("#Answer5").show();
       $(".answers5").hide();
       $(".Game4").hide();
       $(".timer").hide();
       function NextQ () {
        setTimeout(function() {
            function resetcountdown() {
                clearInterval(timerId);}
                resetcountdown();
        $("#img1").hide();
        $("#img2").hide();
        $("#img3").hide();
        $("#img4").hide();
        $("#Answer5").hide();
        question6();
        countdown();
        }, 3000);
    }
    NextQ();
   }));

   if($(".list-group-item19").click(function(){
   alert("you got it wrong!");
   incorrect ++;
   $("#img5").show();
   $("#Answer5").show();
   $(".answers5").hide();
   $(".Game4").hide();
   $(".timer").hide();
   function NextQ () {
    setTimeout(function() {
        function resetcountdown() {
            clearInterval(timerId);}
            resetcountdown();
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("#Answer5").hide();
    question6();
    countdown();
    }, 3000);
}
NextQ();
   }));

  if($(".list-group-item20").click(function(){
  alert("you got it wrong!");
  incorrect ++;
  $("#img5").show();
  $("#Answer5").show();
  $(".answers5").hide();
  $(".Game4").hide();
  $(".timer").hide();
  function NextQ () {
    setTimeout(function() {
        function resetcountdown() {
            clearInterval(timerId);}
            resetcountdown();
    $("#img1").hide();
    $("img2").hide();
    $("img3").hide();
    $("img4").hide();
    $("#Answer5").hide();
    question6();
    countdown();
    }, 3000);
}
NextQ();
  }));    

}
question5();

//question 6
function question6() {
    function countdown() {
        timer = 30;
        timerId = setInterval(function() {
        timer--;
        console.log(timer);
        $(".timer").html("Timer: " +timer);
        if(timer == 0) {
            console.log("Time is up");
            alert("Time is up!");
            incorrect ++;
            countdown();
            question7();
            }        
        }, 1000);
    }
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("#img5").hide();
    $(".timer").show(1000);
    $(".answers6").show();
    $(".Game5").text(questions[5]);
    $(".list-group-item21").html(answers6[0]);
    $(".list-group-item22").html(answers6[1]);
    $(".list-group-item23").html(answers6[2]);
    $(".list-group-item24").html(answers6[3]);


    $(".list-group-item21").click(function(){
        alert("you got it right!");
        correct ++;
        $("#img6").show();
        $("#Answer6").show();
        $(".answers6").hide();
        $(".Game5").hide();
        $(".timer").hide();
        function NextQ () {
            setTimeout(function() {
                function resetcountdown() {
                clearInterval(timerId);}
                resetcountdown();
            $("#img1").hide();
            $("#img2").hide();
            $("#img3").hide();
            $("#img4").hide();
            $("#img5").hide();
            $("#Answer6").hide();
            question7();
            countdown();
            }, 3000);
        }
        NextQ();
        
    }); 

  if($(".list-group-item22").click(function(){
       alert("you got it wrong!");
       incorrect ++;
       $("#img6").show();
       $("#Answer6").show();
       $(".answers6").hide();
       $(".Game5").hide();
       $(".timer").hide();
       function NextQ () {
        setTimeout(function() {
            function resetcountdown() {
                clearInterval(timerId);}
                resetcountdown();
        $("#img1").hide();
        $("#img2").hide();
        $("#img3").hide();
        $("#img4").hide();
        $("img5").hide();
        $("#Answer6").hide();
        question7();
        countdown();
        }, 3000);
    }
    NextQ();
   }));

   if($(".list-group-item23").click(function(){
   alert("you got it wrong!");
   incorrect ++;
   $("#img6").show();
   $("#Answer6").show();
   $(".answers6").hide();
   $(".Game5").hide();
   $(".timer").hide();
   function NextQ () {
    setTimeout(function() {
        function resetcountdown() {
            clearInterval(timerId);}
            resetcountdown();
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("#img5").hide();
    $("#Answer6").hide();
    question7();
    countdown();
    }, 3000);
}
NextQ();
   }));

  if($(".list-group-item24").click(function(){
  alert("you got it wrong!");
  incorrect ++;
  $("#img6").show();
  $("#Answer6").show();
  $(".answers6").hide();
  $(".Game5").hide();
  $(".timer").hide();
  function NextQ () {
    setTimeout(function() {
        function resetcountdown() {
            clearInterval(timerId);}
            resetcountdown();
    $("#img1").hide();
    $("img2").hide();
    $("img3").hide();
    $("img4").hide();
    $("img5").hide();
    $("#Answer6").hide();
    question7();
    countdown();
    }, 3000);
}
NextQ();
  }));    

}
question6();

//question 7
function question7() {
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("#img5").hide();
    $("#img6").hide();
    $(".timer").show(1000);
    $(".answers7").show();
    $(".Game6").text(questions[6]);
    $(".list-group-item25").html(answers7[0]);
    $(".list-group-item26").html(answers7[1]);
    $(".list-group-item27").html(answers7[2]);
    $(".list-group-item28").html(answers7[3]);


    $(".list-group-item27").click(function(){
        alert("you got it right!");
        correct ++;
        $("#img7").show();
        $("#Answer7").show();
        $(".answers7").hide();
        $(".Game6").hide();
        $(".timer").hide();
        function NextQ () {
            setTimeout(function() {
            $("#img1").hide();
            $("#img2").hide();
            $("#img3").hide();
            $("#img4").hide();
            $("#img5").hide();
            $("#img6").hide();
            $("#img7").hide();
            $("#Answer7").hide();
            scoreboard();
            }, 3000);
        }
        NextQ();
        
    }); 

  if($(".list-group-item25").click(function(){
       alert("you got it wrong!");
       incorrect ++;
       $("#img7").show();
       $("#Answer7").show();
       $(".answers7").hide();
       $(".Game6").hide();
       $(".timer").hide();
       function NextQ () {
        setTimeout(function() {
        $("#img1").hide();
        $("#img2").hide();
        $("#img3").hide();
        $("#img4").hide();
        $("#img5").hide();
        $("#img6").hide();
        $("#img7").hide();
        $("#Answer7").hide();
        scoreboard();
        }, 3000);
    }
    NextQ();
   }));

   if($(".list-group-item26").click(function(){
   alert("you got it wrong!");
   incorrect ++;
   $("#img7").show();
   $("#Answer7").show();
   $(".answers7").hide();
   $(".Game6").hide();
   $(".timer").hide();
   function NextQ () {
    setTimeout(function() {
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("#img5").hide();
    $("#img6").hide();
    $("#img7").hide();
    $("#Answer7").hide();
    scoreboard();
    }, 3000);
}
NextQ();
   }));

  if($(".list-group-item28").click(function(){
  alert("you got it wrong!");
  incorrect ++;
  $("#img7").show();
  $("#Answer7").show();
  $(".answers7").hide();
  $(".Game6").hide();
  $(".timer").hide();
  function NextQ () {
    setTimeout(function() {
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("#img5").hide();
    $("#img6").hide();
    $("#img7").hide();
    $("#Answer7").hide();
    scoreboard();
    }, 3000);
}
NextQ();
  }));    

}
question7();

function scoreboard() {

    $("#Correct").html('Correct: ' + correct);
    console.log(correct);
    $("#Incorrect").html('Incorrect: ' + incorrect);
    console.log(incorrect);
    $("#Gif").show();
    
    $(".Restart_Button").show();
    $(".Restart_Button").click(function() {
        location.reload();
    })

}