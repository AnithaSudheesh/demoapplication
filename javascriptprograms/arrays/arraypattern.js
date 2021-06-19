var arr = [1, 2, 3, 4]
arr.sort((i,j)=>i-j)
var cnt=0

var elem =6;

var low=0;upp=arr.length-1;

while(low<upp){

    let total=arr[low]+arr[upp];

    if(elem==total){
        console.log(`pairs ${arr[low]}   ${arr[upp]}`);
        low++;
    }
    else if(elem>total){
        low=low+1;
    }
    else if(elem<total){
        upp=upp-1
    }
    cnt++;
}

console.log("counter"+cnt);















//var cnt=1;

//for(let i=0;i<arr.length;i++){

  //  for(let j=i+1;j<arr.length;j++){
    //    let total=arr[i]+arr[j];
     //   if(elem==total){
       //     console.log(arr[i],arr[j]);
        //}
   // }
//}

//console.log(cnt);









//for(let num1 of arr) {

  //  for(let num2 of array) {

  //      let total=num1+num2;

    //    if(elem==total) {

      //      console.log(`pairs are $(num1) $(num2)`);
        //}
    //}
//}