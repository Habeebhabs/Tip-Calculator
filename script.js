function solve(){
    let a=document.getElementById("f1").value;
    let x=document.getElementById("people").value;
    y=a/x;
    if(document.getElementById("f1").value==''){
        display1.value='';
        document.getElementById("sec1").style.border="2px solid red"
    }else{
        document.getElementById("display2").value="$"+y;
    }
}
function common(){
    if(document.getElementById("f1").value==''){
        document.getElementById("display1").value='';
        document.getElementById("sec1").style.border="2px solid red"
        alert("Enter a valid amount")
    }
    else{
        document.getElementById("sec1").style.border="2px solid #33cc33"
    }
}
function common2(){
    if(document.getElementById("people").value==''){
    document.getElementById("display2").value='';
    document.getElementById("sec2").style.border="2px solid red"
    alert("Enter a valid number")
    }
    else{
        document.getElementById("sec2").style.border="2px solid #33cc33"
    }
}
function calculation(val){
    let a=document.getElementById("f1").value;
    let x=document.getElementById("people").value;
    res=a*val/100;
    c=res/x;
    if(document.getElementById("f1").value==''){
        display1.value='';
        document.getElementById("sec1").style.border="2px solid red"
    }
    if(document.getElementById("people").value==''){
        display1.value='';
        document.getElementById("sec2").style.border="2px solid red"
    }
    if(document.getElementById("f1").value!=''){
        document.getElementById("display1").value="$"+c;
    }
}
function custom(){
    a=document.getElementById("f1").value;
    x=document.getElementById("people").value;
    e=document.getElementById("custom").value;
    b=a*e/100;
    c=b/x;
    if(document.getElementById("f1").value==''){
        document.getElementById("display1").value='';
        document.getElementById("sec1").style.border="2px solid red"
    }
    if(document.getElementById("people").value==''){
        document.getElementById("display1").value='';
        document.getElementById("sec2").style.border="2px solid red"
    }
    if(document.getElementById("f1").value!=''){
    document.getElementById("display1").value="$"+c;
    }
    if(document.getElementById("custom").value==''){
     document.getElementById("display1").value='';
     document.getElementById("custom").style.border="2px solid red"
     alert("Enter a valid number")
     }
     else{
         document.getElementById("custom").style.border="2px solid #33cc33"
     }
}
function reset(){
    document.getElementById("display1").value='';
    document.getElementById("display2").value='';
    document.getElementById("f1").value='';
    document.getElementById("people").value='';
    document.getElementById("custom").value='';
    document.getElementById("sec2").style.borderColor="hsl(172, 67%, 45%)"
    document.getElementById("sec1").style.borderColor="hsl(172, 67%, 45%)"
    document.getElementById("custom").style.borderColor="hsl(172, 67%, 45%)"
}
