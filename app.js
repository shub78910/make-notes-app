let addbtn = document.querySelector(".addbtn")
shownotes()

//event listener for add btn, which will take ip and store it in localStorage.
addbtn.addEventListener("click", function (e) {
    let notes = localStorage.getItem("notes");
    let inptxtarea = document.querySelector(".input");


    if (notes === null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(inptxtarea.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    inptxtarea.value = "";
    // console.log(notesObj);   
    shownotes()
})

//this func, basically displays all the notes stored in local storage.

function shownotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="output_boxes">
        <div class="flex_child">
        <h5>Note ${index + 1}</h5><hr>
        <p>${element}</p>
        <button id="${index}" onClick="dltnote(this.id)" class="dltbtn">Delete</button>
        </div>
        </div>`
    });
    let noteselm = document.getElementById("notes")
    if (notesObj.length != 0) {
        noteselm.innerHTML = html;

        // console.log(html)
    }
    else {
        noteselm.innerHTML = `Please add notes using "Add notes" button!`
    }
}

//func for deleting notes.

function dltnote(index){

    // console.log("delte",index)

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes()
}

//search func

// search = document.querySelector(".inp_ser")
// search.addEventListener("input",search_func)

// search_func(){
//     let inputVal = search.value.toLowerCase()
//     let opbox = document.querySelector(".output_boxes")
//     opbox
// }
// localStorage.clear() 




// for (let i=0;i<100;i++){
//     if (i%3===0){
//         console.log("fizz")
//         if (i%5===0){
//             console.log("fizzbuzz")
//         }
//     }
//     else if(i%5===0){
//         console.log("buzz")
//         if (i%3===0){
//             console.log("fizzbuzz")
//         }
//     }
//     else{
//         console.log(i)
//     }
// }

// for (let i=0;i<6;i++){
//     if (i%2==0){
//         for (let j=0;j<6;j++){
//             process.stdout.write(" #" )
//         }
//     }
//     else{
//         for (let j=0;j<6;j++){
//             process.stdout.write("# " )
//         }
//     }
//     console.log()
// }


