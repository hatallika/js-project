//Добавить стрелки

//Делаем разметку галлереи. 
var domElement = document.createElement("div"); // создали тег div
domElement.id = "big_picture"; //добавили id
document.getElementsByClassName("wrap")[0].append(domElement); //добавили блок для большой картинки в обертку .wrap
var countImage = 3; //количество изображений в галлерее
var image, gallery, arrow_left, arrow_right;
gallery = document.createElement("div");
gallery.id = "gallery";
document.getElementsByClassName("wrap")[0].append(gallery); //добавили блок для навигации (id = gallery) в обертку .wrap

arrow_left = document.createElement("div");
arrow_left.className = "gallery__arrow";
arrow_left.innerHTML = "<img src='./img/gallery/arrow_left.svg' id='arrow_left' width='20'>";
arrow_left.onclick = arrowNav;
document.getElementById("gallery").append(arrow_left);
for (var i = 1; i<=countImage; i++) {
    image = document.createElement("img");
    image.src = "img/gallery/small/" + i + ".jpg";
    image.id = "image_" + i;
    image.classList.add("gallery__small");
    image.onclick = changeBigPicture; 
    document.getElementById("gallery").append(image);
}
arrow_right = document.createElement("div");
arrow_right.className = "gallery__arrow";
arrow_right.innerHTML = "<img src='./img/gallery/arrow_right.svg' id='arrow_right' width='20' >";
arrow_right.onclick = arrowNav;
document.getElementById("gallery").append(arrow_right);


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
    imageDomElement.id = "image__big__" + imageNameParts[1];
    appDiv.appendChild(imageDomElement);
}

function arrowNav(e) {
    var k = e.target;
        switch(e.target.id) {
            case "arrow_left" :
                var idBig = document.getElementsByClassName("image__big")[0].id.split("__")[2];
                console.log(idBig);
                if (idBig > 1) {
                    idBig -=1;
                    document.getElementById("image_" + idBig).click(); //имитация клика на предыдущую миниатюру 
                }
            break;
            case "arrow_right" :  
                var idBig = document.getElementsByClassName("image__big")[0].id.split("__")[2];
                console.log(idBig);
                if (idBig < 3) {
                    idBig = parseInt(idBig) + 1;
                    document.getElementById("image_" + idBig).click(); //имитация клика на предыдущую миниатюру 
                }
                 break;
    }
        
}




