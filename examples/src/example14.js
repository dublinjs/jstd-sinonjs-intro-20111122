Example14=
{
  onError: function()
  {
    if (!$('#results').is(':visible')) return;
      
    $('#results').append('.');
    setTimeout(function(){ Example14.load(); }, 100);
  },
  load:function(){}
};
