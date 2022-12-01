// Check whether a string is palindrome or not.

var str="naman";
var rev="";
  for(var i=str.length-1;i>=0;i--){
      rev=rev+str;
  }
     if(rev==str){
      console.log("Yes");
     }else{
      console.log("No")
      }


//Check whether a number is Prime or not

let num=13;
var primeNumber=false;
    for(var i=2; i<num;i++){
        if(num%i==0){
            primeNumber=true;
        }
    }
    if(primeNumber==true){
        console.log("No")
    }else{
        console.log("Yes")
    }