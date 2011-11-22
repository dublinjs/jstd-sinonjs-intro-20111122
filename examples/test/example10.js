TestCase("Example10.display()", sinon.testCase({

  "test display() should unhide and clear element, then call load()": function()
  {
    /*:DOC += <div id="results" style="display:none">some text</div>*/
    var stub = this.stub(Example10, 'load');
    Example10.display();
    
    assertEquals("Visible?", true, $('#results').is(':visible'));
    assertEquals("Contents", '', $('#results').html());
    sinon.assert.calledOnce(stub);
  }

}));
