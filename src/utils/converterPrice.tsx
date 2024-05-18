export const covertePrice = (price: string, currencyType: string) => {
  const coverteStringNumber = parseFloat(price).toLocaleString(currencyType === 'U$' ? 'en-US' : 'pt-BR', {
    style: 'currency',
    currency: currencyType === 'U$' ? 'USD' : 'BRL'
  });

  return coverteStringNumber;
}