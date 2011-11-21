TestCase("Examples.Example07", sinon.testCase({

  "test Example07() should call first arg's method": function()
  {
    var myObj = {
      method: function(){ alert('here'); }
    };
    var mock = this.mock(myObj);
    mock.expects("method").once();
    
    Examples.Example07(myObj);
  }

}));
