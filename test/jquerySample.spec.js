describe('jquery sample', function() {

    it('should call jquery', function() {
        spyOn($.fn, 'init').and.callThrough();

        var count = jquerySample.countSomeClassOfElements();

        expect(count).toBe(0);
        expect($.fn.init.calls.first().args[0]).toBe('.someClass');
    });

    it('should call jquery text', function() {
        spyOn(document, 'getElementById');
        spyOn($.fn, 'text');

        jquerySample.updateImportantDiv('test');

        expect(document.getElementById).toHaveBeenCalledWith('importantDiv');
        expect($.fn.text).toHaveBeenCalledWith('test');
    });

});