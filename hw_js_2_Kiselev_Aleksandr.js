/*JS. HW_2

Напишите валидационный скрипт используя функции 

1. Скрипт должен на вход принимать строку.
2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
3. Минимум 5 символов в строке
4. Максимум 64 символа в строке
5. В строке должны быть буквы
6. Должна быть хотя бы одна буква в верхнем регистре
7. Должна быть хотя бы одна цифра
8. Должна быть хотя бы одна @
9. Строка не должна быть пустой*/

let string = "*";     // строка на вход
console.log(string)
function check_string(string) {
   if (typeof string !== "string" || (!string)) {// проверяет строка или нет
      console.log("not a string")
   } else if (/^\s*$/.test(string)) {//Строка не должна быть пустой
      console.log("Error! String is empty")
   } else {
      if (string.length < 5) {// минимум 5 символов в строке
         console.log("Error! String_length < 5", "length = ", string.length)
      } if (string.length > 64) {// максимум 64 символа в строке
         console.log("Error! String_length > 64", "length = ", string.length)
      } if (!/[a-zA-Z]+/.test(string)) {// проверка на наличие букв
         console.log("Error! No letters in the string")
      } if (!/[A-Z]+/.test(string)) {// проверка на наличие заглавных букв
         console.log("Error! There are no uppercase letters in the string")
      } if (!/\d/.test(string)) {// проверка на наличие цифр
         console.log("Error! No number")
      } if (!string.includes("@")) {// наличие собаки
         console.log("Error! No @")
      }  
   } 
}

check_string(string)