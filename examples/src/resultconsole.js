ResultConsole=
{
  init: function()
  {
    $(document)
      .unbind('keydown.remoteconsole')
      .bind('keydown.remoteconsole',
            function(e)
            {
              if (e.keyCode == 82)
              	ResultConsole.toggle();
            });
  },

  toggle: function()
  {
    if ($('#results').is(':visible'))
    {
      ResultConsole.hide();
    }
    else
    {
      ResultConsole.display();
    }
  },
  
  display: function()
  {
    $('#results').html('').show();
    ResultConsole.load();
  },
  
  hide: function()
  {
    $('#results').hide();
  },
  
  load: function()
  {
    $.ajax("drop-here/results.txt", 
           {
             success:ResultConsole.onLoaded,
             error:ResultConsole.onError
           });
  },
  
  onLoaded: function(val)
  {
    $('#results').html(val);
  },
  
  onError: function()
  {
    if (!$('#results').is(':visible')) return;
      
    $('#results').append('.');
    setTimeout(function(){ ResultConsole.load(); }, 100);
  }
};
