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
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200) {

            newDiv.innerHTML = this.responseText;

            document.getElementById("currentClasses").append(newDiv);
            document.getElementById("test").innerHTML = courseID+"";

            document.getElementById("currentClasses").append(newDiv);

            var parsedCourseNumber = document.getElementById(courseID + "").children[0].innerHTML;
            var parsedCourseNameAndNumber = document.getElementById(courseID + "").children[1].innerHTML + " " + document.getElementById(courseID + "").children[0].innerHTML; //retrieved using courseID

            document.getElementById(semester).children[1].innerHTML += "<div id='" + parsedCourseNumber + "'><p>" + parsedCourseNameAndNumber + "</p><button type='button' onclick=\"removeCourse(\'" + semester + "\'," + courseID + "," + parsedCourseNumber + ")\">remove</button></div>";
            updateProgress();
        }
    };
    xmlhttp.open("GET","queryOneClass.php?q="+courseID,true);
    xmlhttp.send();



}

function removeCourse(semester, courseID, courseNumber) {
    var children = document.getElementById(semester).children[1].children;
    var index;
    for (index = 0; index < children.length; ++index) {
        if (children[index].getAttribute("id") == courseNumber) {
            children[index].parentNode.removeChild(children[index]);
        }
    }
    document.getElementById(courseID).parentNode.removeChild(document.getElementById(courseID));
    updateProgress();
}

function updateProgress() {
    var BMSHours = 0.0;
    var GenEngClasses = 0.0;
    var CSCClasses = 0.0;
    var MSEHours = 0.0;
    var WARSClasses = 0;
    var LitClasses = 0;
    var VPAClasses = 0;
    var SSIAGClasses = 0;
    var SSOAPClasses = 0;
    var SSHNERClasses = 0;
    var HSClasses = 0;
    var CAIClasses = 0;
    var PEClasses = 0;
    var SDClasses = 0;

    var requiredBMSHours = 32;
    var requiredGenEngClasses = 7;
    var requiredCSCClasses = 12;
    var requiredMSEHours = 8;
    var requiredWARSClasses = 2;
    var requiredLitClasses = 1;
    var requiredVPAClasses = 1;
    var requiredSSIAGClasses = 1;
    var requiredSSOAPClasses = 1;
    var requiredSSHNERClasses = 1;
    var requiredHSClasses = 1;
    var requiredCAIClasses = 1;
    var requiredPEClasses = 1;
    var requiredSDClasses = 1;

    var courses = document.getElementById("currentClasses").children;
    for (var i = 0; i < courses.length; i++) {
        var reqIds = courses[i].children[3].innerHTML.split(",");
        for (var j = 0; j < reqIds.length; j++) {
            if (reqIds[j] == 1) {
                BMSHours += parseInt(courses[i].children[4].innerHTML); //Make sure its an int
            }
            if (reqIds[j] == 2) {
                GenEngClasses++; //Make sure its an int
            }
            if (reqIds[j] == 3) {
                CSCClasses++; //Make sure its an int
            }
            if (reqIds[j] == 4) {
                MSEHours += parseInt(courses[i].children[4].innerHTML); //Make sure its an int
            }
            if (reqIds[j] == 5) {
                WARSClasses++; //Make sure its an int
            }
            if (reqIds[j] == 6) {
                LitClasses++; //Make sure its an int
            }
            if (reqIds[j] == 7) {
                VPAClasses++; //Make sure its an int
            }
            if (reqIds[j] == 8) {
                SSIAGClasses++; //Make sure its an int
            }
            if (reqIds[j] == 9) {
                SSOAPClasses++; //Make sure its an int
            }
            if (reqIds[j] == 10) {
                SSHNERClasses++; //Make sure its an int
            }
            if (reqIds[j] == 11) {
                HSClasses++; //Make sure its an int
            }
            if (reqIds[j] == 12) {
                CAIClasses++; //Make sure its an int
            }
            if (reqIds[j] == 13) {
                PEClasses++; //Make sure its an int
            }
            if (reqIds[j] == 14) {
                SDClasses++; //Make sure its an int
            }
        }

    }
    //Change bars
    var BMSPercent = BMSHours / requiredBMSHours * 100 + "%"
    if(BMSHours/requiredBMSHours * 100 > 100) {
        BMSPercent = 100 + "%";
    }
    var GenEngPercent = GenEngClasses / requiredGenEngClasses * 100 + "%"
    if(GenEngClasses/requiredGenEngClasses * 100 > 100) {
        GenEngPercent = 100 + "%";
    }
    var CSCPercent = CSCClasses / requiredCSCClasses * 100 + "%"
    if(CSCClasses/requiredCSCClasses * 100 > 100) {
        CSCPercent = 100 + "%";
    }
    var MSEPercent = MSEHours / requiredMSEHours * 100 + "%"
    if(MSEHours/requiredMSEHours * 100 > 100) {
        MSEPercent = 100 + "%";
    }

    document.getElementById("BMS").children[1].children[0].style.width = BMSPercent;
    document.getElementById("test").innerHTML = BMSHours;          
    document.getElementById("GenEng").children[1].children[0].style.width = GenEngPercent;
    document.getElementById("CSC").children[1].children[0].style.width = CSCPercent;
    document.getElementById("MSE").children[1].children[0].style.width = MSEPercent;

    //Change Photos
    if (WARSClasses >= requiredWARSClasses) {
        document.getElementById("WARS").children[1].children[0].style.backgroundImage = "url('check.png')";
    } else {
        document.getElementById("WARS").children[1].children[0].style.backgroundImage = "url('X.png')";
    }

    if (LitClasses >= requiredLitClasses) {
        document.getElementById("Lit").children[1].children[0].style.backgroundImage = "url('check.png')";
    } else {
        document.getElementById("Lit").children[1].children[0].style.backgroundImage = "url('X.png')";
    }

    if (VPAClasses >= requiredVPAClasses) {
        document.getElementById("VPA").children[1].children[0].style.backgroundImage = "url('check.png')";
    } else {
        document.getElementById("VPA").children[1].children[0].style.backgroundImage = "url('X.png')";
    }

    var one = false;
    var two = false;
    var three = false;
    if (SSIAGClasses >= requiredSSIAGClasses) {
        document.getElementById("SSIAG").children[1].children[0].style.backgroundImage = "url('check.png')";
        one = true;
    } else {
        document.getElementById("SSIAG").children[1].children[0].style.backgroundImage = "url('X.png')";
    }

    if (SSOAPClasses >= requiredSSOAPClasses) {
        document.getElementById("SSOAP").children[1].children[0].style.backgroundImage = "url('check.png')";
        two = true;
    } else {
        document.getElementById("SSOAP").children[1].children[0].style.backgroundImage = "url('X.png')";
    }

    if (SSHNERClasses >= requiredSSHNERClasses) {
        document.getElementById("SSHNER").children[1].children[0].style.backgroundImage = "url('check.png')";
        three = true;
    } else {
        document.getElementById("SSHNER").children[1].children[0].style.backgroundImage = "url('X.png')";
    }

    if (one && two || two && three || one && three) {
        document.getElementById("SSIAG").children[1].children[0].style.backgroundImage = "url('check.png')";
        document.getElementById("SSOAP").children[1].children[0].style.backgroundImage = "url('check.png')";
        document.getElementById("SSHNER").children[1].children[0].style.backgroundImage = "url('check.png')";
    }

    if (HSClasses >= requiredHSClasses) {
        document.getElementById("HS").children[1].children[0].style.backgroundImage = "url('check.png')";
    } else {
        document.getElementById("HS").children[1].children[0].style.backgroundImage = "url('X.png')";
    }

    if (CAIClasses >= requiredCAIClasses || HSClasses > requiredHSClasses) {
        document.getElementById("CAI").children[1].children[0].style.backgroundImage = "url('check.png')";
    } else {
        document.getElementById("CAI").children[1].children[0].style.backgroundImage = "url('X.png')";
    }

    if (PEClasses >= requiredPEClasses) {
        document.getElementById("PE").children[1].children[0].style.backgroundImage = "url('check.png')";
    } else {
        document.getElementById("PE").children[1].children[0].style.backgroundImage = "url('X.png')";
    }

    if (SDClasses >= requiredSDClasses) {
        document.getElementById("SD").children[1].children[0].style.backgroundImage = "url('check.png')";
    } else {
        document.getElementById("SD").children[1].children[0].style.backgroundImage = "url('X.png')";
    }
}
