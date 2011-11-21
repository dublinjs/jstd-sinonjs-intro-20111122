TestCase("Examples.Example02", {

  "test Example02() should call first arg with true": function()
  {
    expectAsserts(1);
    Examples.Example02(function(param){
      assertTrue("Param should be true", param);
    });
  }

});
