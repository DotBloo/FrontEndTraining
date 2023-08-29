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