import "./menu.css"

const titles = ['Coffee', 'Tea', 'Bakes', 'Extras']
const coffeeTypes = ['Espresso', 'Latte', 'Iced Coffee'];
const coffeePrices = ['2.00€', '3.00€','3.20€']
const teaTypes = ['English Breakfast', 'Green Tea', 'Earl Grey']
const teaPrices = ['2.50€', '2.50€', '2.50€']
const bakeTypes = ['Butter Croissant', 'Banana Bread', 'Chocolate Cookie']
const bakePrices = ['2.00€', '2.50€', '1.80€']
const extraTypes = ['Oat / Almond Milk', 'Extra Espresso Shot', 'Syrup (Vanilla / Caramel)']
const extraPrices = ['+0.40€', '+0.50€', '+0.30€']


function menuPage(){
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');
    const content = document.getElementById('content');

    for (let i=0; i<4; i++) {
        const section = document.createElement('div');
        section.classList.add('menu-section');
        const title = document.createElement('p');
        title.classList.add('title');
        title.textContent = titles[i];
        const options = document.createElement('div');
        options.classList.add('options')

        for (let j=0; j<3; j++){
            const product = document.createElement('div');
            product.classList.add('menu-line')
            let products;
            let prices;

            if (i===0){
                products = coffeeTypes;
                prices = coffeePrices;
            } else if (i===1){
                products = teaTypes;
                prices = teaPrices;
            } else if (i===2){
                products = bakeTypes;
                prices = bakePrices;
            } else if (i===3){
                products = extraTypes;
                prices = extraPrices;
            }

            const productName = document.createElement('p');
            productName.textContent = products[j];
            const productPrice = document.createElement('p');
            productPrice.textContent = prices[j];
            product.append(productName, productPrice);
            options.append(product)
        }
        
        section.append(title, options)
        menuDiv.append(section)
    }

    content.append(menuDiv)
}

export {menuPage}