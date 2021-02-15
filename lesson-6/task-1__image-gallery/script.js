//Первый вариант. Делаем разметку. Удаляем большую картинку. Парсим данные нажатой миниатюры. Создаем новую большую картинку с новым путем. 
//Второй вариант. Делаем разметку. Размещаем большую картинку в разметке. При нажатие на миниатюру  парсим ее данные и переписываем путь у большой картинки. 

//Здесь Первый вариант
//Делаем разметку галлереи. 
var domElement = document.createElement("div"); // создали тег div
domElement.id = "big_picture"; //добавили id
document.getElementsByClassName("wrap")[0].append(domElement); //добавили блок для большой картинки в обертку .wrap

var image, gallery
gallery = document.createElement("div");
gallery.id = "gallery";
document.getElementsByClassName("wrap")[0].append(gallery); //добавили блок для миниатюр (id = gallery) в обертку .wrap
for (var i = 1; i<=3; i++) {
    image = document.createElement("img");
    image.src = "img/gallery/small/" + i + ".jpg";
    image.id = "image_" + i;
    image.classList.add("gallery__small");
    image.onclick = changeBigPicture; 
    document.getElementById("gallery").append(image);
}

function errorSrc() {  // Ошибка загрузки - выводим изображение-заглушку.
  this.src = "img/gallery/big/505.jpg";    
};

document.getElementById("image_1").click(); // Прогружаем первое изображение по умолчанию. здесь имитируем клик на 1-ю миниатюру. Можно было просто загрузить из адреса.
 
function changeBigPicture(e){
    var appDiv = document.getElementById("big_picture"); // получили div с id="big_picture"
    appDiv.innerHTML = ""; // очистили содержание
    var eventElement = e.target; // получаем обьект, который вызвал событие
    
    var imageNameParts = eventElement.id.split("_"); // получили массив ["image", 1]
    var src = "img/gallery/big/" + imageNameParts[1]+".jpg"; // путь соответствующей картинки, вызвавшей событие.
    var imageDomElement = document.createElement("img"); // создали тег img
    imageDomElement.src = src;
    imageDomElement.onerror = errorSrc; // проверка на ошибку загрузки
    imageDomElement.classList.add("image__big");
    appDiv.appendChild(imageDomElement);
}




