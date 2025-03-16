const apiKey = "a12bc3a32c54d5b6407e7678";
// const baseURL=("https://v6.exchangerate-api.com/v6/a12bc3a32c54d5b6407e7678/latest/USD");

window.addEventListener("DOMContentLoaded", () => {
  fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`)
    .then((res) => res.json())
    .then((data) => {
      const currencies = data.supported_codes;
      currencies.forEach((currency) => {
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        option1.value = option2.value = currency[0];
        option1.textContent = `${currency[0]} — ${currency[1]}`;
        option2.textContent = `${currency[0]} — ${currency[1]}`;
        fromCurrency.appendChild(option1);
        toCurrency.appendChild(option2);
      });
      fromCurrency.value = "USD";
      toCurrency.value = "EUR";
    })
    .catch((err) => console.error("download error:", err));
});
const convertBtn = document.getElementById("convertBtn");
const amountInput = document.getElementById("amount");
const resultEl = document.getElementById("result");

convertBtn.addEventListener('click', () => {
        const amount = parseFloat(amountInput.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (isNaN(amount) || amount <= 0) {
            resultEl.textContent = 'Enter the correct amount';
            return;
        }
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`)
            .then(res => res.json())
            .then(data => {
                if (data.result === "success") {
                    const rate = data.conversion_rates[to];
                    const convertedAmount = (amount * rate).toFixed(2);
                    resultEl.textContent = `${convertedAmount} ${to}`;
                } else {
                    resultEl.textContent = 'Error API';
                }
            })
            .catch(err => {
                console.error('Responce err:', err);
                resultEl.textContent = 'Gatway error';
            });
    });
