//write a class to calculate the uber price

class UberCalculator {
    constructor(baseFareINR, costPerKilometerINR, costPerMinuteINR, surgeMultiplier) {
      this.baseFareINR = baseFareINR;
      this.costPerKilometerINR = costPerKilometerINR;
      this.costPerMinuteINR = costPerMinuteINR;
      this.surgeMultiplier = surgeMultiplier;
    }
  
    calculateFare(distanceInKilometers, durationInMinutes, isSurge) {
      let fareINR = this.baseFareINR;
      fareINR += this.costPerKilometerINR * distanceInKilometers;
      fareINR += this.costPerMinuteINR * durationInMinutes;
  
      if (isSurge) {
        fareINR *= this.surgeMultiplier;
      }
  
      return fareINR;
    }
  }
  
  // Example usage:
  const baseFareINR = 100; // Base fare in Indian Rupees
  const costPerKilometerINR = 10; // Cost per kilometer in Indian Rupees
  const costPerMinuteINR = 2; // Cost per minute in Indian Rupees
  const surgeMultiplier = 1.5; // Surge pricing multiplier (1.0 means no surge)
  
  const uberCalculator = new UberCalculator(baseFareINR, costPerKilometerINR, costPerMinuteINR, surgeMultiplier);
  
  const distanceInKilometers = 10; // Example distance of 10 kilometers
  const durationInMinutes = 20; // Example duration of 20 minutes
  const isSurge = true; // Whether surge pricing is applied or not
  
  const totalFareINR = uberCalculator.calculateFare(distanceInKilometers, durationInMinutes, isSurge);
  console.log(`The total Uber fare in Indian Rupees is ₹${totalFareINR.toFixed(2)}`); // Output: ₹360.00
  