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
// using fetch functionm to call api 
let displayobject = {
    name:"",
    imageurl: "",
    description:"",

};
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
    // .then(data => console.log(data))
    .then(data => {
        displayobject.name= data.results[0].name.first+" "+ data.results[0].name.last;
        // displayobject.name = "Maithili";
        displayobject.imageurl = data.results[0].picture.large;
        displayobject.description = data.results[0].gender;
        document.getElementById("maiimg").src= displayobject.imageurl;
        document.getElementById("maithili").innerHTML = displayobject.name;
        document.getElementById("descri").innerHTML = displayobject.description;

    })

    

}