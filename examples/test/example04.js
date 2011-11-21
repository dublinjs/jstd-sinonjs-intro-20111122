TestCase("Examples.Example04", {

  "test Example04() should return value of input#test": function()
  {
    /*:DOC += <div>
        <input id="test" value="testVal">
        </div> */
    
    assertEquals("Input value", "testVal", Examples.Example04());
  }

});
