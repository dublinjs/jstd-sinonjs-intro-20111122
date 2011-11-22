Example12=
{
  load: function()
  {
    $.ajax("drop-here/results.txt", 
           {
             success:Example12.onLoaded,
             error:Example12.onError
           });
  },
  onLoaded:function(){},
  onError:function(){}
}
