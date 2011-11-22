TestCase("Example11.hide()", sinon.testCase({

  "test hide() should hide element": function()
  {
    /*:DOC += <div id="results" style="display:block;">some text</div>*/
    
    Example11.hide();
    
    assertEquals("Visible?", false, $('#results').is(':visible'));
  }

}));
