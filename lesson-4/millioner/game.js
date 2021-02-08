var sum; var answerUser; var quit;
//var stepToSumFixed = +prompt("Ведите номер хода с несгораемой суммой");
//sumFixed = 0;

function variantsAnswer() {                 //вывод вариантов ответа
    var str = "\nВарианты ответа:\n" + 
           "1) " + this.answer1 + "\n2) " + this.answer2 +
           "\n3) " + this.answer3 + "\n4) " + this.answer4;
    return str;
}

for(var i= 0; i<15; i++) {
    mas[i].variants = variantsAnswer;
    
    do {
        answerUser = +prompt("Вопрос N" + (i+1) +" \n" +
                            mas[i].question +  mas[i].variants() +  //выводим вопрос и варианты ответа
                            "\n\nВведите номер ответа.");
                                            
        if(isNaN(answerUser) || answerUser < 1 || answerUser > 4) {
           alert ("Нет такого варианта ответа. Введите число от 1 до 4"); 
        } else {
            break;
        }
    } while(1);
                             
    if(answerUser == mas[i].correct) {
        sum = mas[i].gain; 
        if (!(confirm("Вы угадали! Ваш выиграли: " + sum + " рублей. Вы можете играть дальше или забрать деньги. Играем дальше?")))
            { 
                break;
            }
            
        
    } 
    else 
        {
         alert("Ответ не верный! Верный ответ: " +mas[i].correct + //верный ответ, если не угадал
               "\n" + mas[i].variants());
        sum = 0;    
        break;
        }
}
alert ("Игра окончена! Ваш выигрыш: " + sum + " рублей");