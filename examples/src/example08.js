Example08=
{
  init: function()
  {
    $(document)
      .unbind('keydown.remoteconsole')
      .bind('keydown.remoteconsole',
            function(e)
            {
              if (e.keyCode == 82)
              	Example08.toggle();
            });
  },

  toggle: function(){}
};
