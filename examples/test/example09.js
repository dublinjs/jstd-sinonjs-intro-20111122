TestCase("Example09.toggle()", sinon.testCase({

  "test toggle() should call display when hidden": function()
  {
    /*:DOC += <div id="results" style="display:none;"></div> */
    var displayStub = this.stub(Example09, 'display');
    var hideStub = this.stub(Example09, 'hide');
    
    Example09.toggle();
    
    sinon.assert.calledOnce(displayStub);
    sinon.assert.notCalled(hideStub);
  },
  
  "test toggle() should call hide when visible": function()
  {
    /*:DOC += <div id="results" style="display:block;"></div> */
    var displayStub = this.stub(Example09, 'display');
    var hideStub = this.stub(Example09, 'hide');
    
    Example09.toggle();
    
    sinon.assert.calledOnce(hideStub);
    sinon.assert.notCalled(displayStub);
  }

}));
