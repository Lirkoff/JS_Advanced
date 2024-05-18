function solve(fruit, weightInGrams, priceInKilograms) {
    let weightInKg = (weightInGrams / 1000);
    let money = weightInKg * priceInKilograms; 

    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

solve('apple', 1563, 2.35);