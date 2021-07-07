
    class CurrencyUI {
        constructor() {
            this.currency = document.getElementById('currency')
            this.dictionary = {
                RUB: '₽',
                USD: '$',
                EUR: '€'
            }
        }


        get currencyValue() {
            return this.currency.value
        }

        getCurrencySymbol() {
            return this.dictionary[this.currencyValue]
        }
    }

    const currencyUI = new CurrencyUI();


    export default currencyUI;