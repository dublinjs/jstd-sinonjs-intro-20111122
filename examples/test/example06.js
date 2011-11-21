TestCase("Examples.Example06", sinon.testCase({

  "test Example06() should alert": function()
  {
    var stub = this.stub(window, 'alert');
    Examples.Example06();
    assertEquals("alert() called", 1, stub.callCount);
  }

}));
