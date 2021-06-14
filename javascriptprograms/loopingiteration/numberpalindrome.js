//123;
//321;

var num=123;
var res="";
while(num!=0){ //123!=0 12!=0
    let digit=num%10; //digit=123%10=3 12%10=2 1%10=1
    
    //console.log(digit);//321
    res+=digit
    num=Math.floor(num/10)//num=123.10=12 12/10=1 1/10=0
}
console.log(res);

//factorial of a given number 5(1*2*3*4*5)
//check given number 123(1**3+2**3+3**3)amstrong number
//sum of odd numbers between given low limit and upperlimit
//fibonacci seies 0,1,1,2,3,5,8,13,21,34