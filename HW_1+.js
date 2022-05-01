/*HW_1* 
Задания с разным количеством звездочек:)
1*:
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Пример: const checkAge = function(age) {
Ваши преобразования
}
Вывести в консоль результат работы функции с возрастами 17, 18, 61

2*:
Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

3**:
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

4***:
Преобразовать задание 3* таким образом, чтобы возраст вводился используя функцию prompt в привязанной верстке*/


const age_1 = 10;
const age_2 = 18;
const age_3 = 60;

/*const check_age = function(age) {

   if (age < age_2) {
      console.log("You don’t have access cause your age is ", +age + " It’s less then ")
   } else if (age >= age_2 && age < age_3) {
      console.log("Welcome  !")
   } else if (age > age_3) {
      console.log("Keep calm and look Culture channel")
   } else {
      console.log("Technical work")
   }
}*/




/*const check_age = function(age) {
   if (typeof age == "number") {
      
      if (age < age_2) {
         console.log("You don’t have access cause your age is ", +age + " It’s less then ")
      } else if (age >= age_2 && age < age_3) {
         console.log("Welcome  !")
      } else if (age > age_3) {
         console.log("Keep calm and look Culture channel")
      } else {
         console.log("Technical work")
      }
} else {console.log("it's not a number")}
}
check_age("jhg")
check_age(17)*/



const check_age = function(age) {
   age = +age
   
   if (!isNaN(age)) {    
      
         if (age < age_2) {
            console.log("You don’t have access cause your age is ", + age + " It’s less then ")
         } else if (age >= age_2 && age < age_3) {
            console.log("Welcome  !")
         } else if (age > age_3) {
            console.log("Keep calm and look Culture channel")
         } else {
            console.log("Technical work")
         }
   } else {console.log("it's not a number")}
}
check_age("15lk")