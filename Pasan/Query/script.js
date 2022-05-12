function check() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.querySelector('input[name="subject"]:checked').value; 
    var details = document.getElementById("details").value;

    localStorage.setItem("value1", name);
    localStorage.setItem("value2", email);
    localStorage.setItem("value3", subject);
    localStorage.setItem("value4", details);

    if (name==""){alert("Please enter name") }
    else if (email==""){alert("Please enter email") }
    else if (document.getElementById('noResponce').checked == true){alert("Please enter subject") }
    else if (details==""){alert("Please enter details") }

    else 
    location.href="display_data.html";
        
}

