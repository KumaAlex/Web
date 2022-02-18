//list
let myList = document.getElementsByTagName("li");
for (let i = 0; i < myList.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}

//add new row
function addRow() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue !== '') {
        document.getElementById("ul").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
        }
    }
}

//delete row
let close = document.getElementsByClassName("close");
    let i;
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

//dash
let list = document.querySelector('ul');
list.addEventListener('click', function(a) {
    if (a.target.tagName === 'LI') {
        a.target.classList.toggle('checked');
    }}, false);