function calculatePrice(n, period) {
    const taxiStartFee = 0.70;
    const taxiDayRate = 0.79;
    const taxiNightRate = 0.90;
    const busRate = 0.09;
    const trainRate = 0.06;
  
    let taxiPrice = taxiStartFee;
    if (period === "day") {
      taxiPrice += n * taxiDayRate;
    } else {
      taxiPrice += n * taxiNightRate;
    }
  
    let busPrice = n * busRate;
    if (n >= 20) {
      busPrice = busPrice;
    } else {
      busPrice = Number.POSITIVE_INFINITY;
    }
  
    let trainPrice = n * trainRate;
    if (n >= 100) {
      trainPrice = trainPrice;
    } else {
      trainPrice = Number.POSITIVE_INFINITY;
    }
  
    const cheapestPrice = Math.min(taxiPrice, busPrice, trainPrice);
    return cheapestPrice.toFixed(2);
  }
  
  const n = parseInt(prompt("Enter the number of kilometers:"));
  const period = prompt("Enter the period of the day (day or night):");
  console.log("The cheapest price is: " + calculatePrice(n, period) + " EUR");
  