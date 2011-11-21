TestCase("Examples.Example05", {

  "test Example05() should call first arg with true": function()
  {
    var spy = sinon.spy();
    spy.withArgs(true);
    
    Examples.Example05(spy);
    
    sinon.assert.calledWith(spy, true);
    assertTrue("Called with 'true'", spy.withArgs(true).calledOnce); // alternative
  }

});
