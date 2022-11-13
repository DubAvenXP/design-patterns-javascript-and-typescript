// Strategy

// It's a pattern that allows you to define a family of algorithms,
// put each of them into a separate class, and make their objects interchangeable.

// Passport js uses the concept of strategies to authenticate requests.

// Main context for strategies

class SaleContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculate(amount) {
        return this.strategy.calculate(amount);
    }
}


// ************************************************************

// Strategies

// Strategy 1

class RegularSaleStrategy {
    constructor(tax) {
        this.tax = tax;
    }

    calculate(amount) {
        return amount + amount * this.tax;
    }
}

// Strategy 2

class DiscountSaleStrategy {
    constructor(tax, discount) {
        this.tax = tax;
        this.discount = discount;
    }

    calculate(amount) {
        return amount + amount * this.tax - this.discount;
    }
}

// Strategy 3

class ForeignSaleStrategy {
    
    getDollarRate() {
        return 7.8;
    }

    calculate(amount) {
        return (amount / this.getDollarRate()).toFixed(2);
    }
}

// ************************************************************

// Examples

const regularSale = new RegularSaleStrategy(0.12);
const discountSale = new DiscountSaleStrategy(0.12, 10);
const foreignSale = new ForeignSaleStrategy();

const sale = new SaleContext(regularSale);

console.log(sale.calculate(100));

sale.setStrategy(discountSale);

console.log(sale.calculate(100));

sale.setStrategy(foreignSale);

console.log(sale.calculate(100));
