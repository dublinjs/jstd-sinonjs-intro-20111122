TestCase("Example12.load()", sinon.testCase({

  "test load() should make AJAX call (success)": function()
  {
    var stubOk = this.stub(Example12, 'onLoaded');
    var stubErr = this.stub(Example12, 'onError');
    
    this.server.respondWith("GET", "drop-here/results.txt", [200, {"Content-Type":"text/plain"}, "OK"]);
                                   
    Example12.load();
    
    this.server.respond();

    sinon.assert.notCalled(stubErr);
    sinon.assert.calledWith(stubOk, "OK");
  },
  
  "test load() should make AJAX call (failure)": function()
  {
    var stubOk = this.stub(Example12, 'onLoaded');
    var stubErr = this.stub(Example12, 'onError');
    
    this.server.respondWith("GET", "drop-here/results.txt", [404, {"Content-Type":"text/plain"}, "OK"]);
                                   
    Example12.load();
    
    this.server.respond();

    sinon.assert.calledOnce(stubErr);
    sinon.assert.notCalled(stubOk);
  }

}));
