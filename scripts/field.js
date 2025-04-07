// logo
var field1;
var bakgroundField1 = new Image();
bakgroundField1.src = "images/field.svg";

function docReady() {

    // logo
    field1 = document.createElement("div");
    field1.id = "field-1";
    field1.style.width = "2000px";
    field1.style.height = "770px";
    field1.style.background = "url(" + bakgroundField1.src + ")";
    field1.style.backgroundRepeat = "no-repeat";
    field1.style.position = "absolute";
    field1.style.top = "-10%";
    field1.style.left = "110%";
    document.getElementById("container-btm").appendChild(field1);

    setTimeout(function(){ insert() }, 2000); 
    function insert() {
        document.getElementById("field-1").style.animation = "insert_field 300ms 1 ease-in";
        document.getElementById("field-1").style.left = "-155px";
    }    
}

window.addEventListener("load", docReady);