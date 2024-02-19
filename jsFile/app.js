const btnAll = document.getElementsByClassName("btn");

let count = 0;
let counSeat = 0;


for (const btnal of btnAll) {
    btnal.addEventListener("click", function () {
        counSeat = counSeat + 1;
        setText("seat-count", counSeat);
        colorChange(btnal);
        seatLeft("left-seat");
    });
}

function seatLeft(id){
    let remainingSeat = parseInt(document.getElementById(id).innerText);
    remainingSeat = remainingSeat - 1;
    document.getElementById(id).innerText = remainingSeat;
}

function setText(id, value){
    document.getElementById(id).innerText = value;

}

function colorChange(clickedButton) {
    for (const btn of btnAll) {
        btn.classList.remove('bg-stone-100',);
    }
    clickedButton.style.backgroundColor = '#1DD100';
    clickedButton.classList.add('bg-lime-600', 'text-white');

    if (clickedButton.classList.contains('bg-lime-600')) {
        count++;
    } else {
        count--;
    }

    if (count === 4) {
        buttonDisable();
    }
}

function buttonDisable() {
    for (const btn of btnAll) {
        if (!btn.classList.contains('bg-lime-600')) {
            btn.disabled = true;
        }
    }
}
