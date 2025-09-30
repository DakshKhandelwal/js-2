const allCurrencyAPIUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropDowns = document.querySelectorAll(".dropdown select");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");

let msg = document.querySelector(".msg");

const btn = document.querySelector("button");

for(let select of dropDowns) {
    for(currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if(select.name === "from" && currCode === "USD") {
            fromCurr = "USD";
            newOption.selected = "selected";
        }
        else if(select.name === "to" && currCode === "INR") {
            toCurr = "INR";
            newOption.selected = "selected";
        }
        select.append(newOption);

        select.addEventListener("change", (evt) => {
            updateFlag(evt.target);
        })
    }
}

btn.addEventListener("click", async (event) => {
    event.preventDefault();

    let amount = document.querySelector(".amount input").value;
    console.log(amount);
    console.log(typeof amount);

    if(amount === "" || amount < 1) {
        amount = "1";
    }

    const URL =`${allCurrencyAPIUrl}/${fromCurr.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    // console.log(data);
    let myResult = data[fromCurr.toLowerCase()];
    // console.log(myResult);
    let rate = myResult[toCurr.toLowerCase()];
    // console.log(rate);

    let finalAmount = rate * amount;
    // console.log(finalAmount);

    msg.innerText = `${amount} ${fromCurr} = ${finalAmount} ${toCurr}`; 
})

const updateFlag = (ele) => {
    let currCode = ele.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = ele.parentElement.querySelector("img");
    img.src = newSrc;
}