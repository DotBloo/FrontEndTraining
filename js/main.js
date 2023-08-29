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

function func2(){
    var math = parseInt(document.getElementById("math").value);
    var sci = parseInt(document.getElementById("sci").value);
    var cvi = parseInt(document.getElementById("cvi").value);
    var totM= math+sci+cvi;
    var avgM = totM/3;
    var maxM=0;
    if(math>sci)
        maxM =math;
    else
        maxM= sci;  
    if(cvi>maxM)
        maxM =cvi;
    else
        maxM= maxM; 
    document.getElementById("tot").value=totM;
    document.getElementById("per").value=avgM;
    document.getElementById("maxM").value=maxM;
}
function func3(){
    window.open("./popupbox.html", "Popup", "width=600,height=400");
}
function func4(){
    prompt("Enter Your Email to Subscribe");
    var x =prompt("Enter Your country")
    x=x.toLowerCase();
    x=x.trim();
    if(x=="india")
        alert("You have 50% discount");
}
function func5(){
    var x = document.getElementById("dropcourse").value;
    if(x=="MERN"){
        window.open("./MERN.html", "Popup", "width=600,height=400");
    }
    else if(x=="MEAN"){
        window.open("./MEAN.html", "Popup", "width=600,height=400");
    }
    else if(x=="MEVN"){
        window.open("./MEVN.html", "Popup", "width=600,height=400");
    }
}
function func6()
{
    var radioButtons = document.getElementsByName("htmlQuestion");
    var score=0;
    // Loop through each radio button and check its data-value attribute
    for (let i = 0; i < radioButtons.length; i++) 
    {
        
        if (radioButtons[i].checked) {
            console.log(radioButtons[i].value);
            let dataValue = radioButtons[i].getAttribute("data-value");
            if(dataValue == "correct")
            {
                document.getElementById(radioButtons[i].getAttribute("id")+"l").style="color:green";
                score+=2;
            }
            else
            document.getElementById(radioButtons[i].getAttribute("id")+"l").style="color:red";

        }
    }
    radioButtons = document.getElementsByName("cssQuestion");

    // Loop through each radio button and check its data-value attribute
    for (let i = 0; i < radioButtons.length; i++) 
    {
        if (radioButtons[i].checked) {
            
            let dataValue = radioButtons[i].getAttribute("data-value");
            console.log(dataValue);
            if(dataValue == "correct")
            {
                document.getElementById(radioButtons[i].getAttribute("id")+"l").style="color:green";
                score+=2;
            } 
            else
                document.getElementById(radioButtons[i].getAttribute("id")+"l").style="color:red";

        }
    }
    alert("You scored "+score);
}
function func7(){
    window.open("./onltest.html", "Popup", "width=600,height=400");
}
