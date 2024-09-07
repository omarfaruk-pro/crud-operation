

let subjectForm = document.querySelector("#addSubject");
let addinput = document.querySelector("#addInput");
let addsubmit = document.querySelector("#addSubmit");
let subjectlist = document.querySelector("#subjectList");

subjectForm.addEventListener("submit", (event)=> {
    event.preventDefault();
    if(!addinput.value){
        alert("Please! Input your subject");
        return;
    }
    let subject=document.createElement("div");
    subject.classList.add("subject");
    subjectlist.appendChild(subject);

    let subjectinput= document.createElement("input");
    subjectinput.setAttribute("type", "text");
    subjectinput.setAttribute("readonly", "readonly");
    subjectinput.setAttribute("value", addinput.value);
    subject.appendChild(subjectinput);

    let deleteBtn= document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerText="delete";
    subject.appendChild(deleteBtn);

    let editBtn= document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.innerText="Edit";
    subject.appendChild(editBtn);

    deleteBtn.addEventListener("click", (event)=>{
        event.target.parentNode.remove();
    })

    editBtn.addEventListener("click", (event)=> {
        if(event.target.innerText==="Edit"){
            subjectinput.removeAttribute("readonly");
            editBtn.innerText="save";
            subjectinput.focus();
        }else{
            subjectinput.setAttribute("readonly", "readonly");
            editBtn.innerText="edit";
        }
        
        console.log(subject);
    })
    
    addinput.value="";
})
