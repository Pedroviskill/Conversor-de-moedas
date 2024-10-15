 const form = document.getElementById('form');
 form.addEventListener('submit',handleSubmit)

 const inputValue = document.getElementById('value-real');
 const selectedCurrency = document.getElementById('currency');
 const result = document.getElementById('result');
 let valueConverted=0;

 function handleSubmit(e){
    e.preventDefault();
    if (!inputValue.value || inputValue.value < 0){
        alert ('Informe um valor');
        return;
    } else if (! selectedCurrency.value) {
        alert('escolha uma moeda');
        return;
    }

converter();

 };

 function converter() {
    if (selectedCurrency.value === "eur") {
      valueConverted = inputValue.value / 5.5;
      result.innerHTML = valueFormater("pt-BR", "EUR");
  
      animateResult();
    } else if (selectedCurrency.value === "dol") {
      valueConverted = inputValue.value / 5.1;
      result.innerHTML = valueFormater("en-US", "USD");
  
      animateResult();
    }
  
    inputValue.value = "";
    selectedCurrency.value = "";
  }
  function valueFormater (Locale, currency) {
    const value = valueConverted.toLocaleString(Locale, {
        style: 'currency',
        currency: currency
    });
    return value;
}
