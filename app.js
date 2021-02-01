let addbtn = document.querySelector(".addbtn")
let inptxtarea = document.querySelector(".input");

shownotes()

//event listener for add btn, which will take ip and store it in localStorage.
addbtn.addEventListener("click", function (e) {
    let notes = localStorage.getItem("notes");
    let inptxtarea = document.querySelector(".input");
    if (inptxtarea.value.trim()!=0){
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
    }  
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

    // notessub.innerHTML = localStorage.getItem("notes")

    // notessub.addEventListener("blur", function () {
    //     localStorage.setItem("notes", this.innerHTML);
    // })

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="output_boxes">
        <div class="flex_child">
        <h5 style="font-size:1.5rem">Note ${index + 1}</h5>
        <p class="pbox">${element}</p>
        <button class="dltbtn tooltip" id="edit" onClick="edit(${index})">Edit Note
        <span class="tooltiptext">Scroll above to edit and save.</span>
        </button>
        <button id="${index}" onClick="dltnote(this.id)" class="dltbtn">Delete</button>
        </div>
        </div>`
    });
    // let notessub = document.getElementById("notes")
    let notessub = document.querySelector(".notessub")

    if (notesObj.length != 0) {
        notessub.innerHTML = html;

        // console.log(html)
    }
    else {
        notessub.innerHTML = `Please add notes using "Add notes" button!`
    }
}

// edit a note


function edit(index){
    let savebtn = document.querySelector("#savebtn")
    let saveind = document.querySelector("#saveind")

    let notes = localStorage.getItem("notes");
    notesObj = JSON.parse(notes);
    inptxtarea.value = notesObj[index]
    addbtn.style.display = "none"
    savebtn.style.display = "block"
    saveind.value = index;
    // console.log(pbox)
}

//save the edited note.

savebtn.addEventListener("click",function(){
    

    let notes = localStorage.getItem("notes");
    notesObj = JSON.parse(notes);

    let saveind = document.querySelector("#saveind").value;
    notesObj[saveind] = inptxtarea.value
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
    inptxtarea.value="";

    savebtn.style.display = "none"
    addbtn.style.display = "block"
})

//func for deleting notes.

function dltnote(index) {
    f = confirm("Do you really want to delete this note?")
    if (f === true) {

        // console.log("delte",index)

        let notes = localStorage.getItem("notes");

        if (notes == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);
        }
        notesObj.splice(index, 1)
        localStorage.setItem("notes", JSON.stringify(notesObj));
        shownotes()
    }
    }