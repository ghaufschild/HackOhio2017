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
    newDiv.setAttribute("id", courseID+"");
    

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
            document.getElementById("test").innerHTML = courseID+"";

            var parsedCourseNumber = document.getElementById(courseID + "").children[0].innerHTML;
            var parsedCourseNameAndNumber = document.getElementById(courseID + "").children[1].innerHTML + document.getElementById(courseID + "").children[0].innerHTML; //retrieved using courseID
            
            document.getElementById("sem" + semester).children[0].innerHTML += "<div id = '" + parsedCourseNumber + "'><p>" + parsedCourseNameAndNumber + "</p><button type='button' onclick='removeCourse(" + semester + "," + courseID + "," + parsedCourseNumber + ")'>remove</button></div>";

        }
    };
    xmlhttp.open("GET","queryOneClass.php?q="+courseID,true);
    xmlhttp.send();
    
    
    
}

function removeCourse(semester, courseID, courseNumber) {
    var children = document.getElementById("sem" + semester).children[0].children;
    var index;
    for (index=0; index < children.length; ++index) {

        if (children[index].getAttribute("id") == courseNumber) {
            children[index].parentNode.removeChild(children[index]);
        
        }
    }

    document.getElementById(courseID).parentNode.removeChild(document.getElementById(courseID));
    
}

function updateProgress() {

}
