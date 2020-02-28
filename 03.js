const object = [ 
    { name: 'Xiamoi Redmi 5A',   category: 'Smartphone',  price: 1199000},
    { name: 'Macbook Air',       category: 'Laptop',      price: 13775000},
    { name: 'Samsung Galaxy S7', category: 'Smartphone',  price: 3549000},
    { name: 'DELL XPS 13 ',      category: 'Laptop',      price: 26799000},
    { name: 'Xiamoi Mi 6',       category: 'Smartphone',  price: 5399000},
    { name: 'LG V30 Plus',       category: 'Smartphone',  price: 10499000}
];

object.sort(function (a, b) {
    return b.price - a.price;
});

//console.log(object.sort((a,b) =>  b.price-a.price ))
console.log(object);