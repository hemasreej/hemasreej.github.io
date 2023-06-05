let maheshbabu = {
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbZpRNiXIlAEtQCXDJ3ehxXhjdGiAWKM2IKt_OTlHALA&usqp=CAU&ec=48665701", 
    name: "Mahesh Babu",
    Description: "Actor"
}
let maheshyounginfo = {
    imgurl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbZpRNiXIlAEtQCXDJ3ehxXhjdGiAWKM2IKt_OTlHALA&usqp=CAU&ec=48665701",
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