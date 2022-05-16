
// ham valid
function Validator(options) {

    var formElement = document.querySelector(options,form);
    console.log(options.rules);

    if (formElement){

        options.reles.forEach(function (rele) {
            var inputElement = formElement.querySelector(rele.selector);

            if (inputElement) {
                inputElement.onblur = function () {
                    var errorMessage = rule.test(inputElement.value);

                    if (errorMessage) {

                    }
                    console.log(in)

                }
            }
        });

    }

}



//dinh nghia reles

Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Please enter this field'

        }

    };

}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function () {

        }
    };

}