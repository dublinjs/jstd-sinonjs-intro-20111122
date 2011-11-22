TestCase("Example14.onError()", sinon.testCase({

  "test onError() should update HTML and call load() after 100ms": function()
  {
    /*:DOC += <div id="results">Loading</div> */
    
    var stub = this.stub(Example14, 'load');
    
    Example14.onError();
    
    sinon.assert.notCalled(stub);
    assertEquals('HTML', "Loading.", $('#results').html());
    
    this.clock.tick(101);
    
    sinon.assert.calledOnce(stub);
  },
  
  "test onError() should not call load() if hidden": function()
  {
    /*:DOC += <div id="results" style="display:none">Loading</div> */
  
    var stub = this.stub(Example14, 'load');
    
    Example14.onError();
    
    this.clock.tick(101);
    
    sinon.assert.notCalled(stub);
  }

}));
