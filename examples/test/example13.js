TestCase("Example13.onLoaded()", sinon.testCase({

  "test onLoaded() should set HTML": function()
  {
    /*:DOC += <div id="results"></div>*/
    
    Example13.onLoaded("txt");
    
    assertEquals("HTML", "txt", $('#results').html());
  }

}));
