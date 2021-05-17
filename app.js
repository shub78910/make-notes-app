let addbtn = document.querySelector(".addbtn")
let inptxtarea = document.querySelector(".input");
let title = document.getElementById("title");
shownotes()

//event listener for add btn, which will take ip and store it in localStorage.
addbtn.addEventListener("click", function (e) {
    let notes = localStorage.getItem("notes");

    let inptxtarea = document.querySelector(".input");
    if (inptxtarea.value!=0){
        if (notes === null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);
        }
        let dict ={
            title:title.value,
            text:inptxtarea.value
        } 
        notesObj.push(dict);
        localStorage.setItem("notes", JSON.stringify(notesObj));
    
        inptxtarea.value = "";
        title.value="";
        // console.log(notesObj); 
    }  
    else{
        alert("Add your text first")
    }
    shownotes()
})

//this func, basically displays all the notes stored in local storage.

function shownotes(lis) {
    let notes = localStorage.getItem("notes");


    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
//     console.log(notes)
// console.log(notesObj)


    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="output_boxes">
        <div class="flex_child">
        <h5 class="titlebox" style="font-size:1.5rem">${element.title}</h5>
        <p class="pbox">${element.text}</p>
        <button class="dltbtn tooltip" id="edit" onClick="edit(${index})">Edit Note
        <span class="tooltiptext">Scroll above to edit and save.</span>
        </button>
        <button id="${index}" onClick="dltnote(this.id)" class="dltbtn">Delete</button>

        </div>
        </div>`
    });

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
    // console.log(notesObj[index].text)
    inptxtarea.value =notesObj[index].text;
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
    notesObj[saveind].text = inptxtarea.value
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
    inptxtarea.value="";

    savebtn.style.display = "none"
    addbtn.style.display = "block"
})


//function to download as txt

function downloadtxt(index){
    if (inptxtarea.value == ""){
        alert("Please enter text before downloading.")
    }
    else{
    let a1 = document.querySelector(".a1");
    let blob1 = new Blob([inptxtarea.value],{type:"text/plain"})
    a1.href = URL.createObjectURL(blob1);
    }
}


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



    //Search notes feature:

    let searchRes = document.querySelector(".searchRes")
    let searchInp = document.querySelector(".searchInp")
    let searchop = document.querySelector(".searchop")
    let searchtitle = document.querySelector(".searchtitle")
    let searchtext = document.querySelector(".searchtext")


    function searchInpfunc(e){
        notesObj.map((elem)=>{
            if (elem.title===e || elem.text===e){
                console.log("sddddd")
                searchop.style.display="block"
                searchtitle.innerHTML = elem.title;
                searchtext.innerHTML = elem.text;
            }
            else if(e===""){
                searchop.style.display="none"

            }
        })
        // console.log(notesObj[0].title)
    }
// localStorage.setItem("dix1",JSON.stringify({"name":"shubham","roll":"1"}))
// // console.log(JSON.parse(dix1))
// console.log(JSON.parse(localStorage.getItem("dix1")))


// function setItemBetter(key,value)
// {
//     localStorage.setItem(key,JSON.stringify(value))
// }

// function getItemBetter(key)
// {
//     return JSON.parse(localStorage.getItem(key))
// }


// obj = {
//     "name":"shub",
//     "numb":"23322",
//     "place":"mumbai"
// }



// setItemBetter("dix1",obj)
// console.log(getItemBetter("dix1"))


