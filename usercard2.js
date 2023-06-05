let maheshbabu = {
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHsCqSJQZ7FeKG9zr6KHJB36TJ4JyTCsfTQ&usqp=CAU", 
    name: "Mahesh Babu",
    Description: "Actor"
}
let maheshyounginfo = {
    imgurl: "",
    name: "maithili",
    Description: "Actor"



}
let ismahesh = true;
let displayobject;
let flipdata = function(){
    if (ismahesh == true){
        displayobject = maheshyounginfo;
        ismahesh = false;
    }
    else{
        displayobject = maheshbabu;
        ismahesh = true;
    }
    document.getElementById("maiimg").src= displayobject.imgurl;
    document.getElementById("maithili").innerHTML = displayobject.name;
    document.getElementById("descri").innerHTML = displayobject.Description;

}