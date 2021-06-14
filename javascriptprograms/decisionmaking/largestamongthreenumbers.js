//largest among three  numbers
//var num1,num2,num3

 var num1=10,num2=10,num3=45;
 if(num1> num2 & num1>num3){
     console.log(`${num1}largest`);
 }
 else if(num2>num1 & num2>num3){
     console.log(`${num2}largest`);
 }
 else if(num3>num1 & num3>num2){
     console.log(`${num3}largest`);
 }
 else if(num1==num2 & num1==num3){
     console.log("all three are equal");
 }