
plusMwSt.addEventListener("change", () => {
    inputFieldLabel.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro<span>*</span>";
    resultBrutNet.innerHTML = "Bruttobetrag (Endpreis)";
})

noMwSt.addEventListener("change", () => {
    inputFieldLabel.innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro<span>*</span>";
    resultBrutNet.innerHTML = "Nettobetrag";
})

button.addEventListener("mousedown", () => {
    button.style.backgroundColor = "darkblue";
})

button.addEventListener("mouseup", () => {
    button.style.backgroundColor = "blue";
})
    
button.addEventListener("click", () => {
    const input = inputField.value;

    if (plusMwSt.checked) {
        if (prozent19.checked) {
            suchBetrag.textContent = (input * 1.19).toFixed(2) + " €";
            MwStBetrag.textContent = (input * 0.19).toFixed(2) + " €";
        } else if (prozent7.checked) {
            suchBetrag.textContent = (input * 1.07).toFixed(2) + " €";
            MwStBetrag.textContent = (input * 0.07).toFixed(2) + " €";
        } else {
            alert("Bittw wähle einen Prozentsatz aus!");
        }
    } else if (noMwSt.checked) {
        if (prozent19.checked) {
            suchBetrag.textContent = (input / 1.19).toFixed(2) + " €";
            MwStBetrag.textContent = (input / 119 * 19).toFixed(2) + " €";
        } else if (prozent7.checked) {
            suchBetrag.textContent = (input / 1.07).toFixed(2) + " €";
            MwStBetrag.textContent = (input / 107 * 7).toFixed(2) + " €";
        } else {
            alert("Bittw wähle einen Prozentsatz aus!");
        }
    } else {
        alert("Bitte eine Umrechnungsform auswählen!")
    }
})