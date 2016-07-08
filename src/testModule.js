var testModule = (function () {

    var username = "defaultName";

    function setName(name) {
        username = name;
    }

    function getName() {
        return username;
    }

    return {
        setName: setName,
        getName: getName,
    }

})();