describe('Controllers', function(){
    var scope;

    // load the controller's module
    beforeEach(module('starter.controllers'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('AccountCtrl', {$scope: scope});
    }));

    // tests start here
    it('should have enabled friends to be true', function(){
        expect(scope.settings.enableFriends).toEqual(true);
    });

    it('should have enabled boy to be false',function(){
    	expect(scope.settings.enableBoy).toEqual(false);
    });
});
