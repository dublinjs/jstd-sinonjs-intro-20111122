TestCase("Example08.init()", sinon.testCase({

  "test init() should setup event handler to call toggle()": function()
  {
    var stub = this.stub(Example08, 'toggle');
    
    Example08.init();
    $(document).trigger($.Event('keydown', {keyCode:82}));
    
    sinon.assert.calledOnce(stub);    
  },
  
  "test event handler should only call toggle() for 'r'": function()
  {
    var stub = this.stub(Example08, 'toggle');
    Example08.init();
    $(document).trigger($.Event('keydown', {keyCode:88}));
    
    sinon.assert.notCalled(stub);
  }

}));
