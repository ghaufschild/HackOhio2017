function showUser(str) {
    if (str == "") {
        document.getElementById("sick").innerHTML = "why";
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
        xmlhttp.open("GET","script2.php?q="+str,true);
        xmlhttp.send();
    }
}

function fuckMe() {
    document.getElementById("sick").innerHTML = "fuck";
}