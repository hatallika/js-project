//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;
var massLog = [],
    numStep = 0;

function Logs(question, answer) { //для массива вопросов и ответов пользователя
    this.question = question;
    this.answer = answer;
}
works1.event = windowEvent;
works2.event = windowEvent;
works3.event = windowEvent;
works4.event = windowEvent;
works5.event = windowEvent;

function windowEvent() {
    do { //выводим окно с вопросом и ответами
        ok = false;
        event = +prompt(this.q + this.a1 + this.a2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        } else {
            ok = isAnswer(this.k, event);
        }
    } while (!ok);
}

works1.event(); // выводим первое окно с вопросами
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем окно 2
        massLog.push(new Logs(works1.q, works1.a1)); //запись лога в массив объектов
        works2.event(); //выводим 2 окно

        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                massLog.push(new Logs(works2.q, works2.a1)); // запись ответа пользователя в массив лога
                works3.event();
                switch (event) {
                    case 1:
                        massLog.push(new Logs(works3.q, works3.a1));
                        works4.event();
                        switch (event) {
                            case 1:
                                massLog.push(new Logs(works4.q, works4.a1));
                                break;
                            case 2:
                                massLog.push(new Logs(works4.q, works4.a2));
                                break;
                            case -1:
                                break;
                            default:
                                alert('Ошибка');    
                        }
                        break;
                    case 2:
                        massLog.push(new Logs(works3.q, works3.a2));
                        works5.event();
                        switch (event) {
                            case 1:
                                massLog.push(new Logs(works5.q, works5.a1));
                                break;
                            case 2:
                                massLog.push(new Logs(works5.q, works5.a2));
                                break;
                            case -1:
                                break;
                            default:
                                alert('Ошибка');    
                        }
                        break;
                    case -1:
                        break;
                    default:
                        alert('Ошибка');
                }
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                massLog.push(new Logs(works2.q, works2.a2));
                works4.event();
                switch (event) {
                    case 1:
                        massLog.push(new Logs(works4.q, works4.a1));
                        break;
                    case 2:
                        massLog.push(new Logs(works4.q, works4.a2));                        
                        break;
                    case -1:
                        break;
                    default:
                        alert('Ошибка');
                }
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }

        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        massLog.push(new Logs(works1.q, works1.a2));
        works3.event();
        switch (event) {
            case 1: // Второе действие
                massLog.push(new Logs(works3.q, works3.a1));
                works4.event();
                switch (event) {
                    case 1:
                        massLog.push(new Logs(works4.q, works4.a1));
                        break;
                    case 2:
                        massLog.push(new Logs(works4.q, works4.a2));
                        break;
                    case -1:
                        break;
                    default:
                        alert('Ошибка');
                }
                break;
            case 2: // Второе действие
                massLog.push(new Logs(works3.q, works3.a2));
                works5.event();
                switch (event) {
                    case 1:
                        massLog.push(new Logs(works5.q, works5.a1));
                        break;
                    case 2:
                        massLog.push(new Logs(works5.q, works5.a2));
                        break;
                    case -1:
                        break;
                    default:
                        alert('Ошибка');
                }
                break;
            case -1: // Второе действие
            break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
if (massLog.length == 0) {
    alert("Вы не делали ход. Запись ходов отсутствует")
} else {
    
    var step = +prompt("Количество ходов " + massLog.length + " Введите номер хода");
    while (1){
        if ( step > 0 && step <= massLog.length) {
            break;
        } else { 
            step = +prompt("Нет такого хода. Введите номер от 1 до " + massLog.length);
        }
    }
    alert("Ваш ход №" + step + " . \nВопрос:" + massLog[step - 1].question + "Ваш ответ: " + massLog[step - 1].answer);
}


//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}