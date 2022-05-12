
        timeLeft = 60;

        //sets the timer
        function countdown() {
	        timeLeft--;
	        document.getElementById("timer").innerHTML = timeLeft; 

	        if (timeLeft == 0) {
                alert("Time's up");
                check(); 
                }
            else
                setTimeout(countdown,1000);

        displayContent();
                
        }            

        function check() {
            
            
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var marks = 0;
            
            var rightAnswers = new Array ("Ray Harroun", "Caution", "Indianapolis 500", "Kenny Brack", "7th place", "Green", "France", "Max Verstappen", "Germany", "Renault");
            var userAnswers = [];
            var answerDescription = [];
            
            //get user input answers
            userAnswers[0] = document.quiz.Q1.value;
            userAnswers[1] = document.quiz.Q2.value;
            userAnswers[2] = document.quiz.Q3.value;
            userAnswers[3] = document.quiz.Q4.value;
            userAnswers[4] = document.quiz.Q5.value;
            userAnswers[5] = document.quiz.Q6.value;
            userAnswers[6] = document.quiz.Q7.value;
            userAnswers[7] = document.quiz.Q8.value;
            userAnswers[8] = document.quiz.Q9.value;
            userAnswers[9] = document.quiz.Q10.value;

           //checks user answers 
            for (let i=0; i<rightAnswers.length; i++) {
                if (userAnswers[i] == rightAnswers[i]) {
                    correctAnswers++;
                    answerDescription[i] = ("Question "+(i+1) +" is correct <br>"); }
                else if (userAnswers[i] == "") {
                    alert("Please complete all the questions");
                    return;}
                else {
                    wrongAnswers++; 
                    answerDescription[i] = ("Question "+(i+1) +" is incorrect. Correct answer is " +rightAnswers[i]+"<br>"); }
                    
            }
            
            let description = answerDescription.join(""); //removes the commas in the array
        
            //calculate marks and time taken
            marks = (correctAnswers*2 - wrongAnswers);
            duration = (60 - timeLeft);
        
            //sends data to local storage
            localStorage.setItem("value1", marks);
            localStorage.setItem("value2", duration);
            localStorage.setItem("value3", userAnswers);
            localStorage.setItem("value4", rightAnswers);
            localStorage.setItem("value5", description);

            //opens a new page
            location.href="result.html";
            
        }
        
        function displayContent() {
            document.getElementById("quiz").style.display="block";
        }