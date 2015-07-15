describe("myApp.greet", function(){
    
    beforeEach(module("myApp.greet"));
    
    describe("greetController", function(){
       it("Should have the name initialized to empty string", inject(function($controller){
           var dummyScope = {};
           var controller = $controller("greetController" , {$scope : dummyScope});
           
           expect(dummyScope.name).toBe('');
           
       }));
       it("Should have the message initialized to empty string", inject(function($controller){
           var dummyScope = {};
           var controller = $controller("greetController" , {$scope : dummyScope});
           
           expect(dummyScope.message).toBe('');
           
       }));
       it("Should have the message populated from greetService", inject(function($controller){
           var dummyScope = {};
           var dummyService = {
               getMessage : function(){}
           };
           var dummyMessage = "a dummy message";
           spyOn(dummyService, "getMessage").and.returnValue(dummyMessage);
           
           var controller = $controller("greetController" , {
               $scope : dummyScope,
               greetService : dummyService
           });
           
           dummyScope.name = 'Magesh';
           dummyScope.greet();
           
           expect(dummyService.getMessage).toHaveBeenCalledWith(dummyScope.name);
           expect(dummyScope.message).toBe(dummyMessage);
       }));
    });
    
    describe("greetService", function(){
        
        var greetService = null;
        beforeEach(inject(function($injector){
            greetService = $injector.get("greetService")
        }));
        
        it ("greetService", function(){
            var name = 'Magesh',
                expectedMessage = 'Hi Magesh, Have a nice day!';
            //var service = _greetService();
            var service = greetService;
            var result = service.getMessage(name);

            expect(result).toBe(expectedMessage);
        });
    });
    
    describe("trimText Filter", function(){
        it("should return the original for shorter strings", inject(function($filter){
            var trimText = $filter('trimText');
            var shortString = "this is short";
            
            expect(trimText(shortString)).toBe(shortString);
        }));
    })
});