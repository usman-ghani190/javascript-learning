function applySalesTax(taxRate, price) {
    return price + price * taxRate;
}

// General syntax:

// func.bind(thisArg, arg1, arg2, ...)

// So we ignored this because applySalesTax is a regular function, not a method in an object — it doesn't rely on this.

const applyCASalesTax = applySalesTax.bind(null, 0.0725); // for California tax calculations
const applyMSalesTax = applyCASalesTax.bind(null, 0)  // for Montana tax calculations