const cardNumberInput = document.querySelector("#cardNumber");
const errorMessage = document.querySelector("#errorMessage");
const form = document.querySelector("#reg_form");

// Posluchač události `input` pro kontrolu délky čísla karty
cardNumberInput.addEventListener("input", () => {
    const cardNumber = cardNumberInput.value;

    // Zkontrolujeme, zda je délka čísla karty přesně 16 číslic
    if (cardNumber.length < 16) {
        const missingDigits = 16 - cardNumber.length;
        errorMessage.textContent = `Číslo karty je příliš krátké. Chybí ${missingDigits} číslic.`;
    } else if (cardNumber.length > 16) {
        const extraDigits = cardNumber.length - 16;
        errorMessage.textContent = `Číslo karty je moc dlouhé. Přebývá ${extraDigits} číslic.`;
    } else {
        errorMessage.textContent = ""; // Vymažeme chybovou zprávu, pokud je délka správná
    }
});

// Posluchač události `submit` pro odeslání formuláře
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Zabráníme odeslání formuláře a obnovení stránky

    const cardNumber = cardNumberInput.value;
    const doprava = document.querySelector("#doprava").value;

    if (cardNumber.length === 16) {
        form.innerHTML = "<p>Objednávka odeslána ke zpracování.</p>";
        console.log(`Číslo karty: ${cardNumber}, Doprava: ${doprava}`);
    } else {
        errorMessage.textContent = "Číslo karty musí mít přesně 16 číslic.";
    }
});
