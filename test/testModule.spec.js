describe('sample module', function() {

    it('should return default name', function() {
        expect(testModule.getName()).toBe('defaultName');
    });

    it('should setName', function() {
        testModule.setName('Mafi');

        var name = testModule.getName()

        expect(name).toBe('Mafi');
    });

});