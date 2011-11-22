TestCase("ResultConsole", sinon.testCase({

  "test init() should setup event handler to call toggle()": function()
  {
    var stub = this.stub(ResultConsole, 'toggle');
    
    ResultConsole.init();
    $(document).trigger($.Event('keydown', {keyCode:82}));
    
    sinon.assert.calledOnce(stub);    
  },
  
  "test event handler should only call toggle() for 'r'": function()
  {
    var stub = this.stub(ResultConsole, 'toggle');
    ResultConsole.init();
    $(document).trigger($.Event('keydown', {keyCode:88}));
    
    sinon.assert.notCalled(stub);
  },

  "test toggle() should call display when hidden": function()
  {
    /*:DOC += <div id="results" style="display:none;"></div> */
    var displayStub = this.stub(ResultConsole, 'display');
    var hideStub = this.stub(ResultConsole, 'hide');
    
	ResultConsole.toggle();
    
    sinon.assert.calledOnce(displayStub);
    sinon.assert.notCalled(hideStub);
  },
  
  "test toggle() should call hide when visible": function()
  {
    /*:DOC += <div id="results" style="display:block;"></div> */
    var displayStub = this.stub(ResultConsole, 'display');
    var hideStub = this.stub(ResultConsole, 'hide');
    
    ResultConsole.toggle();
    
    sinon.assert.calledOnce(hideStub);
    sinon.assert.notCalled(displayStub);
  },
  
  "test display() should unhide and clear element, then call load()": function()
  {
    /*:DOC += <div id="results" style="display:none">some text</div>*/
    var stub = this.stub(ResultConsole, 'load');
    
    ResultConsole.display();
    
    assertEquals("Visible?", true, $('#results').is(':visible'));
    assertEquals("Contents", '', $('#results').html());
    sinon.assert.calledOnce(stub);
  },

  "test hide() should hide element": function()
  {
    /*:DOC += <div id="results" style="display:block;">some text</div>*/
    
    ResultConsole.hide();
    
    assertEquals("Visible?", false, $('#results').is(':visible'));
  },

  "test load() should make AJAX call (success)": function()
  {
    var stubOk = this.stub(ResultConsole, 'onLoaded');
    var stubErr = this.stub(ResultConsole, 'onError');
    
    this.server.respondWith("GET", "drop-here/results.txt", [200, {"Content-Type":"text/plain"}, "OK"]);
                                   
    ResultConsole.load();
    
    this.server.respond();

    sinon.assert.notCalled(stubErr);
    sinon.assert.calledWith(stubOk, "OK");
  },
  
  "test load() should make AJAX call (failure)": function()
  {
    var stubOk = this.stub(ResultConsole, 'onLoaded');
    var stubErr = this.stub(ResultConsole, 'onError');
    
    this.server.respondWith("GET", "drop-here/results.txt", [404, {"Content-Type":"text/plain"}, "OK"]);
                                   
    ResultConsole.load();
    
    this.server.respond();

    sinon.assert.calledOnce(stubErr);
    sinon.assert.notCalled(stubOk);
  },

  "test onLoaded() should set HTML": function()
  {
    /*:DOC += <div id="results"></div>*/
    
    ResultConsole.onLoaded("txt");
    
    assertEquals("HTML", "txt", $('#results').html());
  },

  "test onError() should update HTML and call load() after 100ms": function()
  {
    /*:DOC += <div id="results">Loading</div> */
    
    var stub = this.stub(ResultConsole, 'load');
    
    ResultConsole.onError();
    
    sinon.assert.notCalled(stub);
    assertEquals('HTML', "Loading.", $('#results').html());
    
    this.clock.tick(101);
    
    sinon.assert.calledOnce(stub);
  },
  
  "test onError() should not call load() if hidden": function()
  {
    /*:DOC += <div id="results" style="display:none">Loading</div> */
  
    var stub = this.stub(ResultConsole, 'load');
    
    ResultConsole.onError();
    
    this.clock.tick(101);
    
    sinon.assert.notCalled(stub);
  }

}));
