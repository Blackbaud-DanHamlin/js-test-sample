var jquerySample = (function () {

    function updateImportantDiv(newValue) {
        $('#importantDiv').text(newValue);
    }

    function countSomeClassOfElements() {
        return $('.someClass').length;
    }

    return  {
        updateImportantDiv: updateImportantDiv,
        countSomeClassOfElements: countSomeClassOfElements
    }

})();