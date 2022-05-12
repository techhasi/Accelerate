//gets data from local storage
document.getElementById("result").innerHTML = localStorage.getItem("value1");
document.getElementById("time").innerHTML = localStorage.getItem("value2");
document.getElementById("userChoose").innerHTML = localStorage.getItem("value3");
document.getElementById("rightChoose").innerHTML = localStorage.getItem("value4");
document.getElementById("comment").innerHTML = localStorage.getItem("value5");

var mark = localStorage.getItem("value1");

//changing colours according to marks
if (mark>=10)
    document.body.style.backgroundColor = "#93f783";
else if (mark >=0) 
    document.body.style.backgroundColor = "#d9c45b";
else if (mark >=-10) 
    document.body.style.backgroundColor = "#ff615e";
    

        
   
