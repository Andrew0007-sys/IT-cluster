////first task
//let year= +prompt('Скільки тобі років?');
//alert("Привіт мені - " + year + " роки");
////second task
//const yearNow = 2020;
//let yearBirth = +prompt('В якому році ти народився?');
//    if(yearBirth>yearNow){
//        alert('Це не можливо!');
//    } else {
//let howOld = yearNow - yearBirth;
//alert("Тобі " + howOld + " роки");
//}
////third task
//let length = +prompt('Вкажіть довжину прямокутники');
//let width = +prompt('Вкажіть ширину прямокутники');
//if (length < 1 || width < 1){
//    alert('Ти жартуєш? Введи коректні дані');
//} else {
//    let area = 2*(length+width);
//    alert("Периметр прямокутника " + area);
//}
////fourth task
//let radius =+prompt('Введіть радіус кола');
//if (radius <= 0){
//    alert('Ти жартуєш? Введи коректні дані');
//} else{
//    let area = Math.round((radius*radius) * Math.PI); 
//    alert("Площа кола " + area );
//}
////five task
//let move = 50;
//let time = confirm('Час вказуєте в годинах?');
//let giveMeYourTime;
//let distance;
//if(time){
//    giveMeYourTime = +prompt('Введіть тривалість їзди в годинах');
//    distance = move*giveMeYourTime;
//} else {
//    giveMeYourTime = +prompt('Введіть тривалість їзди в хвилинах');
//    distance = move*(giveMeYourTime/60);
//}
//alert("Ви проїдете " + distance + " км");
////six task
//let exchange = confirm('Якщо хочете перевести з миль в кілометри - натисніть ОК, а якщо з кілометрів в милі - натисніть СКАСУВАТИ');
//let miles;
//let kilometers;
//if (exchange){
//    miles = +prompt('Введіть кількість миль');
//    kilometers = Math.round(miles/0.62137);
//    alert(miles+ " миль = " +kilometers + " кілометрів");
//} else{
//    kilometers = +prompt('Введіть кількість кілометрів');
//    miles = Math.round(kilometers*0.62137);
//    alert(kilometers+ " кілометрів = " +miles + " миль");
//}
////seven task
//let cardMoney= +prompt('Скільки грошей на карточці');
//let benzPrice= +prompt('Вартість літру бензини?');
//let howMuchBenz;
//let sumBenz;
//let valid;
//let tmp = 1; //ця змінна використовується, як маячок для виходу із циклу while;
//if(cardMoney > benzPrice){
//    while(cardMoney > benzPrice && tmp===1){
//        howMuchBenz= Math.floor(cardMoney/benzPrice);
//        valid = confirm("Ви можете заправити " + howMuchBenz + " літр бензини");
//        if(valid){sumBenz = +prompt('На скільки літр бажаєте заправитись?')
//            if(sumBenz > howMuchBenz){
//                alert("Забагато, Ви можете заправити тільки " + howMuchBenz + " літр");
//            } else if(sumBenz <= howMuchBenz){
//        cardMoney -= benzPrice * sumBenz;
//        howMuchBenz = cardMoney/benzPrice;
//        alert("Залишок грошей на карті " + cardMoney + " грн. Ви можете заправитись іще на " + howMuchBenz + " літр" );
//            } 
//                 } else{ 
//                     tmp=0;
//                     alert('Щасливої дороги')
//                 }
//    }
//} else if(cardMoney <= 0){
//    alert('На Вашому рахунку недостатньо коштів');
//} 