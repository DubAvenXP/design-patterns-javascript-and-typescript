// Array of beers

// We want to show the beers in the DOM with different styles
// so, we have different strategies for each beer style

const beers = [
    {
        name: "Erdinger Pikantus",
        country: "Germany",
        img: "https://int.erdinger.de/bundles/erdingerwebsite/assets/int/pikantus/img/s2-produkt-sm-int-2021.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        name: "Corona",
        country: "Mexico",
        img: "https://www.pngitem.com/pimgs/m/61-615797_botellas-de-corona-en-png-imagenes-de-cerveza.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        name: "Budweiser",
        country: "Czech Republic",
        img: "https://dislicoresqa.vtexassets.com/arquivos/ids/242965/BUDWEISER-X24.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

// Main context for strategies

class InfoContext {
    constructor(strategy, data, element) {
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    show() {
        this.strategy.show(this.data, this.element);
    }
}

// ************************************************************

// Strategies

// Strategy 1

class ListStrategy {
    show(data, element) {

        const listItems = data.reduce((html, beer) => {
            return html + `
                <li class="beer">
                    <img src="${beer.img}" alt="${beer.name}">
                </li>
            `;
        }, "");

        element.innerHTML = `
            <ul class="beers">
                ${listItems}
            </ul>
        `;
    }
}

// Strategy 2

class ListStrategyWithDetails {
    show(data, element) {

        const listItems = data.reduce((html, beer) => {
            return html + `
                <li class="beer">
                    <img src="${beer.img}" alt="${beer.name}">
                    <h2>${beer.name}</h2>
                    <p>${beer.country}</p>
                    <p>${beer.info}</p>
                </li>
            `;
        }, "");

        element.innerHTML = `
            <ul class="beers">
                ${listItems}
            </ul>
        `;
    }
}

// Strategy 3

class ListStrategyWithName {
    show(data, element) {

        const listItems = data.reduce((html, beer) => {
            return html + `
                <li class="beer">
                    <h2>${beer.name}</h2>
                </li>
            `;
        }, "");

        element.innerHTML = `
            <ul class="beers">
                ${listItems}
            </ul>
        `;
    }
}

// Array of strategies

const strategies = [
    new ListStrategy(),
    new ListStrategyWithDetails(),
    new ListStrategyWithName(),
]


const infoContext = new InfoContext(strategies[0], beers, content);
infoContext.show();

selection.addEventListener("change", (event) => {

    const option = parseInt(event.target.value);

    infoContext.setStrategy(strategies[option]);

    infoContext.show();
})
