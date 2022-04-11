const products = [{
        id: 1,
        title: 'Notebook',
        price: 1000
    },
    {
        id: 2,
        title: 'Mouse',
        price: 100
    },
    {
        id: 3,
        title: 'Keyboard',
        price: 250
    },
    {
        id: 4,
        title: 'Gamepad',
        price: 150
    },
];


//  ВОПРОС 2:   
//     Честно говоря, не совсем понял вопрос. Поставил значение по
// умолчанию как значение аргумента в функции renderProduct (строка 42).
// Для упрощения можно вводить просто константу, которую потом 
// использовать в качестве аргумента, например. Но пока не понимаю, насколько
// это вообще  разумно


const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;
};

const renderProducts = (list) => {
    const productList = list.map((good) => {
        return renderProduct(good.title, good.price = "165");
    });
    document.querySelector('.products').innerHTML = productList;
    console.log(productList);
};
renderProducts(products);

//  ВОПРОС 3:   
//     Запятые возникают, потому что выводится по сути весь массив,
//     все элементы подряд. Запятые отделяют один элемент от другого.
//     Мое решение заключается в том, чтобы содздать новый массив,
//     перебрать существующий массив Products и поочередно
//     к единственному элементу новоого массива добавить HTML каждого элемента 
//     старого массива по отдельности.
//     чтобы показать решение, ввел класс productsNew в index.html


let productsNew = [];

for (let i = 0; i < products.length; i++) {
    productsNew = productsNew + renderProduct(products[i].title, products[i].price);
};

document.querySelector('.productsNew').innerHTML = productsNew;