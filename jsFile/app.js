const btnAll = document.getElementsByClassName("btn");

let count = 0;
let countSeat = 0;


for (const btnal of btnAll) {
    btnal.addEventListener("click", function (e) {
        countSeat = countSeat + 1;
        
        
        if (!btnal.classList.contains('selected')) {
            btnal.classList.add('selected');
            btnal.disabled = true; 
            colorChange(btnal);
            seatLeft("left-seat");
            
        //console.log(e.target.innerText);
        const seatName = e.target.innerText;
        const className = "Economoy";
        const price = 550;
        const selectedContainer = document.getElementById("seat-container");
        const li = document.createElement("li");

        const p = document.createElement("p")
        p.innerText = seatName;
        const p2 = document.createElement("p")
        p2.innerText = className;
        const p3 = document.createElement("p")
        p3.innerText = price;

        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        selectedContainer.appendChild(li);

        setText("seat-count", countSeat);
        totalCost("total-cost", parseInt(price));
        grandTotal("grand-total", parseInt(price));



        }

    });
}

function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + parseInt(value);
    setText(id, sum);
}

function grandTotal(id, value) {
    const grandCost = document.getElementById(id).innerText;
    const convertedGrandCost = parseInt(grandCost);
    const sum2 = convertedGrandCost + parseInt(value);
    setText(id, sum2);
}

function seatLeft(id) {
    let remainingSeat = parseInt(document.getElementById(id).innerText);
    remainingSeat = remainingSeat - 1;
    document.getElementById(id).innerText = remainingSeat;
}

function setText(id, value) {
    document.getElementById(id).innerText = value;

}

//after pressed 4 button rest of the button disabled
function colorChange(buttonPressed) {
    for (const btn of btnAll) {
        btn.classList.remove('bg-stone-100',);
    }
    buttonPressed.style.backgroundColor = '#1DD100';
    buttonPressed.style.color = '#FFFFFF';
    buttonPressed.classList.add('bg-lime-600', 'text-white');

    if (buttonPressed.classList.contains('bg-lime-600')) {
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


//initaly apply button
const cuponInput = document.getElementById("input-cupon");
const buttonApply = document.getElementById("apply-button");

cuponInput.addEventListener("input", function () {

    if (this.value.trim() !== "") {
        buttonApply.disabled = false;
        buttonApply.classList.add("bg-lime-500");
    }
    else {
        buttonApply.disabled = true;
    }
})
//discount available or not apply button
buttonApply.addEventListener("click", function () {
    const couponCode = cuponInput.value;
    if (couponCode === "NEW15" && count === 4) {

        const grandTotalElement = document.getElementById("grand-total");
        const grandTotal = parseInt(grandTotalElement.innerText);
        const discountAmount = grandTotal * 0.15;

        const discountedTotal = grandTotal - discountAmount;
        setText("grand-total", discountedTotal);
        
        cuponInput.style.display = "none";
        buttonApply.style.display = "none";
        
    } else if (couponCode === "Couple 20" && count === 4) {

        const grandTotalElement = document.getElementById("grand-total");
        const grandTotal = parseInt(grandTotalElement.innerText);
        const discountAmount = grandTotal * 0.25;

        const discountedTotal = grandTotal - discountAmount;
        setText("grand-total", discountedTotal);
        

        cuponInput.style.display = "none";
        buttonApply.style.display = "none";
    }
});
//next button enable
const phoneNumberInput = document.getElementById("numberInput");
const nextButton = document.getElementById("next-button");

phoneNumberInput.addEventListener("input", function () {
    const phoneNumber = this.value.trim();

    if (/^\d+$/.test(phoneNumber) && count >=1) {

        nextButton.disabled = false;
        nextButton.classList.remove("bg-gray-400");
        nextButton.classList.add("bg-lime-500");
    } else {
        nextButton.disabled = true;
        nextButton.classList.remove("bg-lime-500");
        nextButton.classList.add("bg-gray-400");
    }
});



