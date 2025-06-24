type Currency = "USD" | "EUR" | "UAH";

interface ObjParams{
    amount: number;
    currency: Currency;
}

function convertCurrency({amount, currency}: ObjParams): void {
  console.log(`Converting ${amount} to ${currency}`);
}

