function showClass(int) {
    if (int == "-1") {
        document.getElementById("classes").innerHTML = "";
        document.getElementById("clickMe").disabled = true;        
        return;
    } else { 
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("classes").innerHTML = this.responseText;
                document.getElementById("test").innerHTML = int;
            }
        };
        xmlhttp.open("GET","showClass.php?q="+int,true);
        xmlhttp.send();
    }
}

function showDepartments(str) {
    document.getElementById("test").innerHTML = "<h1>" + str + "</h1>";
    if(str=="-1") {
        document.getElementById("classes").innerHTML = "";        
        document.getElementById("department").innerHTML = ""; 
        document.getElementById("clickMe").disabled = true;
        return;      
    } else {
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("department").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","showDepartments.php",true);
        xmlhttp.send();
    }
}

function activateButton(str) {
    if(str=="-1") {
        document.getElementById("clickMe").disabled = true;
    } else {
        document.getElementById("clickMe").disabled = false;
    }
}