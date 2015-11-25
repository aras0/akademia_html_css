var results = [];

function messageHandler(e){
 if(e.data.count > 0){
  calculatefactorial(e.data.count);
 }
}

function factorial(n){
 if(n < 2){
  return 1;
 }
 else
  return n*factorial(n-1);
}

function calculatefactorial(length){
 for(var i = 1; i <= length; i++){
   results.push(factorial(i));
  }; 
 setTimeout(function(){
  postMessage(results);
 }, i*100);
 
}

addEventListener("message", messageHandler, true);