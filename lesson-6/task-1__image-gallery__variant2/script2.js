//Первый вариант. Делаем разметку. Удаляем большую картинку. Парсим данные нажатой миниатюры. Создаем новую большую картинку с новым путем. 
//Второй вариант. Делаем разметку. Размещаем большую картинку в разметке. При нажатие на миниатюру  парсим ее данные и переписываем путь у большой картинки. 

//Здесь Второй вариант

//Делаем разметку галлереи. 
var visited;
var domElement = document.createElement("div"); // создали тег div
domElement.id = "big_picture"; //добавили id
document.getElementsByClassName("wrap")[0].append(domElement); //добавили блок для большой картинки в обертку .wrap

//создаем большое изображение по умолчанию
var bigImage = document.createElement("img"); 
bigImage.src ="img/gallery/big/1.jpg";
bigImage.classList.add("image__big");
document.getElementById("big_picture").append(bigImage);

//создаем миниатюры
var image, gallery
gallery = document.createElement("div");
gallery.id = "gallery";
document.getElementsByClassName("wrap")[0].append(gallery); //добавили блок для миниатюр (id = gallery) в обертку .wrap
for (var i = 1; i<=3; i++) {
    image = document.createElement("img");
    image.src = "img/gallery/small/" + i + ".jpg";
    image.id = "image_" + i; //присваиваем id
    image.classList.add("gallery__small");
    image.onclick = changeBigPicture; 
    document.getElementById("gallery").append(image);
}


function errorSrc() {  // Ошибка загрузки - выводим изображение-заглушку.
  this.src = "img/gallery/big/505.jpg";    
};

function changeBigPicture(e){
    var appDiv = document.getElementById("big_picture"); // получили div с id="big_picture"
    var eventElement = e.target; // получаем обьект, который вызвал событие
    //меняем стиль старой и новой отжатой миниатюры
    if(document.getElementsByClassName("gallery__small--visited")[0]) {
        document.getElementsByClassName("gallery__small--visited")[0].classList.remove("gallery__small--visited")
    }    
    eventElement.classList.add("gallery__small--visited");    
    var imageNameParts = eventElement.id.split("_"); // получили массив ["image", 1]
    var src = "img/gallery/big/" + imageNameParts[1]+".jpg"; // путь соответствующей картинки, вызвавшей событие.
    bigImage.src = src;
    bigImage.onerror = errorSrc; // проверка на ошибку загрузки    
}




