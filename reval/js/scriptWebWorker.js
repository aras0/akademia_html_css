var worker;

$(function(){
 $('#start').click(function(){
  $('#list').html("");
  var count = $('#count').val();
  var settings = {};
  settings.count = parseInt(count);
  worker = new Worker('js/factorial.js');
  worker.onmessage = function(event){
   var list = event.data;
   $.each(list, function(){
    printNumber(this);
   })
  };
  worker.postMessage(settings);
 });

 $('#terminate').click(function(){
  if(worker){
   worker.terminate();
  }
 });
});

function printNumber(number){
 $('#list').append('<li>'+number+'</li>');
}
function sFact(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

function runSta(number) {
    alert(sFact(number));
}