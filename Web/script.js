function showUser(int) {
    if (int == -1) {
        document.getElementById("sick").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("sick").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","scripts.php?q="+int,true);
        xmlhttp.send();
    }
}

$(window).on("load", startUp);

function startUp() {
    // put Ajax here.
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("department").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","startUp.php",true);
        xmlhttp.send();
}

function addClassToSemester(semester, courseID) {

    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", courseID);
    

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200) {

            newDiv.innerHTML = this.responseText;
            document.getElementById("currentClasses").append(newDiv);

            

        }
    };
    xmlhttp.open("GET","queryOneClass.php?q="+courseID,true);
    xmlhttp.send();
    
    var parsedCourseName = "FUCKIG SHIT TITTIES"; //retrieved using courseID
    document.getElementById("sem" + semester).children[0].innerHTML += "<div id = '" + courseID + "'><p>" + parsedCourseName + "</p><button type='button' onclick='removeCourse(" + semester + "," + courseID + ")'>remove</button></div>";
    
}

function removeCourse(semester, courseID) {
    var children = document.getElementById("sem" + semester).children[0].children;
    var index;
    for (index=0; index < children.length; ++index) {

        if (children[index].getAttribute("id") == courseID) {
            children[index].parentNode.removeChild(children[index]);
        
        }
    }

    
}

function updateProgress() {

}
