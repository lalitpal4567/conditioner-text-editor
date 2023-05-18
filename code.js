let optionButton = document.querySelectorAll("img");
let textBoard = document.querySelector(".editor-container");
let topNavBar = document.querySelector(".topBar");
let selectionButton = document.querySelectorAll(".selection");

// to set the cursor on the display by default
textBoard.focus();

const fontFamily = [
    "Arial",
    "Times New Roman",
    "Verdana",
    "sans-serif",
    "Tahoma",
    "Garamond",
    "Georgia",
    "Courier New",
    "cursive",
]
for(var index = 0; index < fontFamily.length; index++)
{
    let element = document.createElement("option");
    let textNode = document.createTextNode(fontFamily[index]);
    element.appendChild(textNode);
    document.getElementById("font-family").appendChild(element);
}

selectionButton.forEach((button)=>{
    button.addEventListener("change",()=>{
        modifyText(button.id,false,null);
    })
})

optionButton.forEach((button)=>{
    button.addEventListener("click",()=>{
        modifyText(button.id, false, null);
    })
});

function modifyText(command, defaultUi, value)
{
    document.execCommand(command, defaultUi, value);
}
