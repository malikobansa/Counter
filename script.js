let count = 0

let countEl = document.getElementById('counter');

function add(){
    count = count + 1;
    countEl.innerText = count;
}

function subtract(){
    count = count - 1;
    countEl.innerText = count;
}