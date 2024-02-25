import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_HNqP1kro4JzMsTuxYqJU1cOhqR9fyPxo97PXF5m1');


export const convertCurrency = async (fromCurr, toCurr, units)=>{

   const response = await freecurrencyapi.latest({
        base_currency: fromCurr,
        currencies: toCurr
    });

    const multiplier = response.data[toCurr]
    console.log(multiplier)
    return multiplier * units
}

convertCurrency("GBP", "USD", 3)

