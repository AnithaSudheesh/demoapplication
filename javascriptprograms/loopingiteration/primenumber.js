//check number is prime or not


var num=7;
var flag=0;
for(let i=2;i<num;i++)
if(num%i==0){
    flag=+1;

}
if(flag!=0){
    console.log("prime number");
}
else{
    console.log("not prime");
}