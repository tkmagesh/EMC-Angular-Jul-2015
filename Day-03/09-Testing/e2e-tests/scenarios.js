'use strict';
//http://angular.github.io/protractor/#/api

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
    
  describe('greet', function(){
     beforeEach(function() {
        browser.get('index.html#/greet');
     });
      
    it("should greet the user", function(){
        var txtName = element(by.model("name"));
        txtName.sendKeys("Magesh");
        
        var btn = element(by.buttonText("Greet"));
        btn.click();
        
        var div = element(by.binding("message"));
        
        var expectedResult = "Hi Magesh, Have a nice day!";
        expect(div.getText()).toBe(expectedResult);
    })
  });
});
