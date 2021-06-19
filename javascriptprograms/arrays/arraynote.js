//array
//define?[]
//we can store more than one object
//we can store same and different types of object
//no length limit
// possible to update
//insertion order is preserved or not
//elements are stored in consequtive memmory loction 

 var expenses=[2000,30000,40000,50000,60000,30000]

 //for(let amount of expenses){
 //    console.log(amount);
 //}



 //expenses[1]=40000;
 //console.log(expenses);
 //for(let i=0;i<expenses.length;i++){
   //  console.log(expenses[i]);
 //}
 //expenses[3]+=500;
 //console.log(expenses);



 //printvall expenses>25000

for(let exp of expenses){
    if(exp>25000){
        console.log(exp);
    }
}


