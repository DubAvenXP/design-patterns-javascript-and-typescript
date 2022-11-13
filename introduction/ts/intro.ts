(function () {
    interface Product {
        price: number;
        getPrice(): string;
    }

    class Drink {
        name: string;
        price: number;

        constructor(name: string, price: number) {
            this.name = name;
            this.price = price;
        }

        info() {
            return `The drink ${this.name} costs ${this.price}`;
        }
    }

    class Beer extends Drink implements Product {
        constructor(name: string, price: number, private alcohol: number) {
            super(name, price);
            this.alcohol = alcohol;
        }

        info() {
            return `${super.info()} and contains ${this.alcohol}% alcohol`;
        }

        getPrice(): string {
            return `The price is ${this.price}`;
        }
    }

    const products: Product[] = [
        new Beer("Heineken", 3.5, 5.2),
        new Beer("Grolsch", 1.5, 5.4),
        new Beer("Amstel", 5.5, 6),
    ];

    function getPrices(items: Product[]) {
        for (const item of items) {
            console.log(item.getPrice());
        }
    }

    
})();
