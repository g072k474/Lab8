function changeColor(){
    let redB=document.getElementById("redB").value;
    document.getElementById("red1").innerText="Red Border Value: " + redB;
    let greenB=document.getElementById("greenB").value;
    document.getElementById("green1").innerText="Green Border Value: " + greenB;
    let blueB=document.getElementById("blueB").value;
    let widthB=document.getElementById("widthB").value;
    document.getElementById("width1").innerText="Border Width: " + widthB;
    document.getElementById("blue1").innerText="Blue Border Value: " + blueB;
    let redBG=document.getElementById("redBG").value;
    document.getElementById("red2").innerText="Red Background Value: " + redBG;
    let greenBG=document.getElementById("greenBG").value;
    document.getElementById("green2").innerText="Green Background Value: " + greenBG;
    let blueBG=document.getElementById("blueBG").value;
    document.getElementById("blue2").innerText="Blue Background Value: " + blueBG;

    if(((redB>=0 && redB<=255) && (greenB>=0 && greenB<=255) && (blueB>=0 && blueB<=255)) && ((redBG>=0 && redBG<=255) && (greenBG>=0 && greenBG<=255) && (blueBG>=0 && blueBG<=255))){
        document.getElementById("test").style.backgroundColor='rgb(' + redBG + ',' + greenBG + ',' + blueBG + ')';
        document.getElementById("test").style.border=widthB + 'px solid rgb(' + redB + ',' + greenB + ',' + blueB + ')';
    }
    else{
        alert("One or more values do not fit the parameters");
    }
}