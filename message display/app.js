let inputTxt = document.getElementById("input_txt");
let enterBtn = document.getElementById("enter_btn");
let msgOut = document.getElementById("msg_out");
let clearBtn = document.querySelector("#clear_btn");

function show() {
    if(inputTxt.value == ""){
        alert("Enter a message!")
    }else{
        msgOut.innerHTML = inputTxt.value;
        inputTxt.value = "";
  }
}

function clear() {
    if(inputTxt.value == "" && msgOut.innerHTML == ""){
        alert("fields already empty!")
    }else{
        inputTxt.value = "";
        msgOut.innerHTML = "";
}
}

enterBtn.addEventListener("click", (event) => {
    show()
});

inputTxt.addEventListener("keydown", function (ev) {
  if (ev.key == "Enter") {
    show();
  }
});

clearBtn.addEventListener("click", (event) => {
    clear()
});

document.addEventListener("keydown", (ev) =>{
    if(ev.key == "Delete"){
        clear()
    }
})
