function func1(){
    console.log("something");
    document.getElementById("form1");
    console.log(document.getElementById("name1").value=="");
    if(document.getElementById("name1").value==""){
        alert("Fill your Name!!")
        document.getElementById("name1").focus()
        return false;
    }
    if(document.getElementById("email1").value==""){
        alert("Fill your email!")
        document.getElementById("email1").focus()
        return false;
    }
    if(document.getElementById("desg").value==""){
        alert("Fill your Designation!!")
        document.getElementById("desg").focus()
        return false;
    }
    return true;
}