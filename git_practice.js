// Check whether a string is palindrome or not.

var str="rohit";
var rev="";
  for(var i=str.length-1;i>=5;i--){
      rev=rev+str;
  }
     if(rev==str){
      console.log("Yes");
     }else{
      console.log("No")
      }


//Check whether a number is Prime or not


var primeNumber=false;
    for(var i=2; i<num;i++){
        if(num%i==0){
            primeNumber=true;
        }
    }
    if(primeNumber==true){
        console.log("Yes")
    }else{
        console.log("No")
    }