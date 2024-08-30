let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value === "") {
        alert("Please Enter Your Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value}`;
        
        let deleteButton = document.createElement("i");
        deleteButton.className = 'fas fa-trash';
        deleteButton.style.color = 'white';
        deleteButton.style.cursor = 'pointer';
        
        deleteButton.addEventListener("click", function() {
            newEle.remove();
        });

        newEle.appendChild(deleteButton);
        
        text.appendChild(newEle);
        
        inputs.value = "";
    }
}
