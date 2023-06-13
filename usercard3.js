let maheshbabu = {
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHsCqSJQZ7FeKG9zr6KHJB36TJ4JyTCsfTQ&usqp=CAU", 
    name: "Maithili Thakur",
    Description: "Indian playback singer"
}
// let maheshyounginfo = {
//     imgurl: "https://wikibio.in/wp-content/uploads/2019/03/Maithili-Thakur.jpg",
//     name: "maithili",
//     Description: "Indian Playback Singer"
// }



let ismahesh = true;
let displayobject;
let getRandomUser = function(){
    // if (ismahesh == true){
    //     displayobject = maheshyounginfo;
    //     ismahesh = false;
    // }
    // else{
    //     displayobject = maheshbabu;
    //     ismahesh = true;
    // }
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => console.log(data))
    document.getElementById("maiimg").src= displayobject.imgurl;
    document.getElementById("maithili").innerHTML = displayobject.name;
    document.getElementById("descri").innerHTML = displayobject.Description;

}