import "./menu.css"

function menuPage(){
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');


    const section1 = document.createElement('div');
    section1.classList.add('menu-section');
    const title1 = document.createElement('p');
    title1.classList.add('title');
    title1.textContent = 'Coffee';
    
    const coffeesOptions = document.createElement('div');
    coffeesOptions.classList.add('options')

    const coffee1 = document.createElement('div');
    coffee1.classList.add('menu-line')
    const coffee1Name = document.createElement('p');
    coffee1Name.textContent = 'Espresso'
    const coffee1Price = document.createElement('p');
    coffee1Price.textContent = '2.00€'
    coffee1.append(coffee1Name, coffee1Price);
    coffeesOptions.append(coffee1)

    const coffee2 = document.createElement('div');
    coffee2.classList.add('menu-line')
    const coffee2Name = document.createElement('p');
    coffee2Name.textContent = 'Latte'
    const coffee2Price = document.createElement('p');
    coffee2Price.textContent = '3.00€'
    coffee2.append(coffee2Name, coffee2Price);
    coffeesOptions.append(coffee2)

    const coffee3 = document.createElement('div');
    coffee3.classList.add('menu-line')
    const coffee3Name = document.createElement('p');
    coffee3Name.textContent = 'Iced Coffee'
    const coffee3Price = document.createElement('p');
    coffee3Price.textContent = '3.20€'
    coffee3.append(coffee3Name, coffee3Price);
    coffeesOptions.append(coffee3)

    section1.append(title1, coffeesOptions)



    const section2 = document.createElement('div');
    section2.classList.add('menu-section');
    const title2 = document.createElement('p');
    title2.classList.add('title');
    title2.textContent = 'Tea';
    
    const teasOptions = document.createElement('div');
    teasOptions.classList.add('options')

    const tea1 = document.createElement('div');
    tea1.classList.add('menu-line')
    const tea1Name = document.createElement('p');
    tea1Name.textContent = 'English Breakfast'
    const tea1Price = document.createElement('p');
    tea1Price.textContent = '2.50€'
    tea1.append(tea1Name, tea1Price);
    teasOptions.append(tea1)

    const tea2 = document.createElement('div');
    tea2.classList.add('menu-line')
    const tea2Name = document.createElement('p');
    tea2Name.textContent = 'Green Tea'
    const tea2Price = document.createElement('p');
    tea2Price.textContent = '2.50€'
    tea2.append(tea2Name, tea2Price);
    teasOptions.append(tea2)

    const tea3 = document.createElement('div');
    tea3.classList.add('menu-line')
    const tea3Name = document.createElement('p');
    tea3Name.textContent = 'Earl Grey'
    const tea3Price = document.createElement('p');
    tea3Price.textContent = '2.50€'
    tea3.append(tea3Name, tea3Price);
    teasOptions.append(tea3)

    section2.append(title2, teasOptions)



    const section3 = document.createElement('div');
    section3.classList.add('menu-section');
    const title3 = document.createElement('p');
    title3.classList.add('title');
    title3.textContent = 'Bakes';
    
    const bakesOptions = document.createElement('div');
    bakesOptions.classList.add('options')

    const bakes1 = document.createElement('div');
    bakes1.classList.add('menu-line')
    const bakes1Name = document.createElement('p');
    bakes1Name.textContent = 'Butter Croissant'
    const bakes1Price = document.createElement('p');
    bakes1Price.textContent = '2.00€'
    bakes1.append(bakes1Name, bakes1Price);
    bakesOptions.append(bakes1);

    const bakes2 = document.createElement('div');
    bakes2.classList.add('menu-line')
    const bakes2Name = document.createElement('p');
    bakes2Name.textContent = 'Banana Bread'
    const bakes2Price = document.createElement('p');
    bakes2Price.textContent = '2.50€'
    bakes2.append(bakes2Name, bakes2Price);
    bakesOptions.append(bakes2);

    const bakes3 = document.createElement('div');
    bakes3.classList.add('menu-line')
    const bakes3Name = document.createElement('p');
    bakes3Name.textContent = 'Chocolate Cookie'
    const bakes3Price = document.createElement('p');
    bakes3Price.textContent = '1.80€'
    bakes3.append(bakes3Name, bakes3Price);
    bakesOptions.append(bakes3)

    section3.append(title3, bakesOptions)


    
    const section4 = document.createElement('div');
    section4.classList.add('menu-section');
    const title4 = document.createElement('p')
    title4.classList.add('title');
    title4.textContent = 'Extras';
    
    const extrasOptions = document.createElement('div');
    extrasOptions.classList.add('options')

    const extras1 = document.createElement('div');
    extras1.classList.add('menu-line')
    const extras1Name = document.createElement('p');
    extras1Name.textContent = 'Oat / Almond Milk '
    const extras1Price = document.createElement('p');
    extras1Price.textContent = '+0.40€'
    extras1.append(extras1Name, extras1Price);
    extrasOptions.append(extras1);

    const extras2 = document.createElement('div');
    extras2.classList.add('menu-line')
    const extras2Name = document.createElement('p');
    extras2Name.textContent = 'Extra Espresso Shot'
    const extras2Price = document.createElement('p');
    extras2Price.textContent = '+0.50€'
    extras2.append(extras2Name, extras2Price);
    extrasOptions.append(extras2);

    const extras3 = document.createElement('div');
    extras3.classList.add('menu-line')
    const extras3Name = document.createElement('p');
    extras3Name.textContent = 'Syrup (Vanilla / Caramel)'
    const extras3Price = document.createElement('p');
    extras3Price.textContent = '+0.30€'
    extras3.append(extras3Name, extras3Price);
    extrasOptions.append(extras3)

    section4.append(title4, extrasOptions)



    menuDiv.append(section1, section2, section3, section4)
    const content = document.getElementById('content');
    content.append(menuDiv)
}

export {menuPage}