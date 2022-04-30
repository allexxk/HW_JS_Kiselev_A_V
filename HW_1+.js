function check_age(age) {

   if (age < 18 && age > -1) {
      console.log("You don’t have access cause your age is ", +age + " It’s less then ")
   }
   else if (age >= 18 && age < 60) {
      console.log("Welcome  !")
   }
   
   else if (age > 60) {
      console.log("Keep calm and look Culture channel")
   }
   
   else {
      console.log("Technical work")
   }
}
check_age()



function check_age_1(age_1) {
   if (typeof age_1 == "number") {
      if (age_1 < 18 && age_1 > -1) {
         console.log("You don’t have access cause your age is ", +age_1 + " It’s less then ")
      }
      else if (age_1 >= 18 && age_1 < 60) {
         console.log("Welcome  !")
      }
   
      else if (age_1 > 60) {
         console.log("Keep calm and look Culture channel")
      }
   
   } else {
      console.log("Technical work")
   }
}
check_age_1(12)



/*function check_age_1(age_1) {
   if (age_1 includes) {
         +age_1
      
         if (age_1 < 18 && age_1 > -1) {
            console.log("You don’t have access cause your age is ", +age_1 + " It’s less then ")
         }
         else if (age_1 >= 18 && age_1 < 60) {
            console.log("Welcome  !")
         }
   
         else if (age_1 > 60) {
            console.log("Keep calm and look Culture channel")
         }
   } else {
      console.log("Technical work")
   }
}
check_age_1("12")*/