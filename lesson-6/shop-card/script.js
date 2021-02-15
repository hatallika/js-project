var products = [
    {
        art: 1,
        title: "Бомбочки для ванной, 4шт",
        price: 350
    },
    {   
        art: 2,
        title: "Смесь для ванной: Лаванда, морская соль, 400ml",
        price: 320    
    },
    {   
        art: 3,
        title: "Пена для ванной согревающая, мед и липа",
        price: 320,    
    },
    {   
        art: 4,
        title: "Соль для ванной: Лаванда и ромашка",
        price: 320,    
    }
];

var card = [];  // корзина - массив обьектов
var itemCard;

function Card (title, price) {
    this.title = title;
    this.price = price;
}

function addToCard(e) { 
    //создаем массив из выбранных элементов в корзине
    var eventCard = e.target;
    var id = eventCard.id.split("_")[1];
    var x = new Card (products[id-1].title, products[id-1].price);
    card.push(x);
    
    //выводим на экран выбранные товары
    itemCard = document.createElement("li");
    itemCard.setAttribute("class","card__list");
    itemCard.innerHTML =
        "<p class='card__title'>" + x.title + "</p>" +
                "<p class='card__price'>" + x.price + " &#8381;</p>";
    listCard.append(itemCard);
    countTotalPrice(); //считаем общую стоимость
}

//считаем итоговую стоимость товаров.
function countTotalPrice() {
    var total = 0;
    for(var i = 0; i < card.length; i++) {
        total += card[i].price;
    }
   totalPrice.innerHTML = "<p class='total__price'> Итого: " + total + " &#8381; </p>";         
}

//создадим  разметку для списка товаров
var list, item, title; //image, price 
list = document.createElement("ul");
list.setAttribute("class","products");
document.getElementById("product").append(list);

//Заполним карточки из массива 
for(i = 0; i < products.length; i++) {
    item = document.createElement("li");
    item.id = "product_" + (i+1);
    item.setAttribute("class","products__item");
//    способ заполнения    
//    title = document.createElement("p");
//    title.className = "products__title";//  
    
    item.innerHTML =         // рисуем карточку товара   
         "<p class='products__title'>" + products[i].title + "</p>" +
        "<img src='./articuls/" + (i+1)+ ".jpg' alt='product' class='product__img'>" +
               "<p class='product__price'> Цена: " + products[i].price + " &#8381; </p>" +
               "<button class='product__add' id='button_" + (i+1) + "'>Добавить в корзину</button>";
    list.append(item);
    document.getElementById("button_" + (i+1)).onclick = addToCard;    
} 

//создадим разметку корзины
var idCard = document.getElementById("card");
var listCard = document.createElement("ul");
listCard.className = "card__items";
idCard.append(listCard); //создали ul.card__items

//выводим пустую корзину. Будем пеерезаписывать при выборе товара.   
var totalPrice = document.createElement("div");
totalPrice.id = "total";
totalPrice.innerHTML = "<p class='total__price'>В вашей корзине пусто</p>"; 
idCard.append(totalPrice);   
    





   