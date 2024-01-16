const getConvertedValue = (value: number, currency: string) => {
  const exchangeRateCZKtoUSD = 0.044;
  const exchangeRatePLNtoUSD = 0.242;
  const exchangeRateEURtoUSD = 0.85;

  switch (currency) {
    case "czk":
      return ((value / 100) * exchangeRateCZKtoUSD).toFixed(1);
    case "pln":
      return ((value / 100) * exchangeRatePLNtoUSD).toFixed(1);
    case "eur":
      return ((value / 100) * exchangeRateEURtoUSD).toFixed(1);
    default:
      return (value / 100).toFixed(1);
  }
};

export default getConvertedValue;
