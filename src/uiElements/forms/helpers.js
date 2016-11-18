var Helpers = {};
var Types = {};
var Validators = {};
var Conditions = {};

Helpers.registerType = function(type, view) {
    Types[type] = view;
};

Helpers.getType = function(type) {
    return Types[type];
};

Helpers.registerValidator = function(validator, method) {
    Validators[validator] = method;
};

Helpers.getValidator = function(validator) {
    return Validators[validator];
};

Helpers.registerCondition = function(condition, method) {
    Conditions[condition] = method;
};

Helpers.getCondition = function(condition) {
    return Conditions[condition];
};

Helpers.testConditions = function(conditions, data, callback) {

    evaluateConditions(conditions, (conditionItem, next) => {

        //A condition must be a object and have a type property which is a name of a registered condition
        if(typeof conditionItem !== 'object' || typeof conditionItem.type !== 'string') {
            console.warn('A condition must be expressed as an object with a type property. Received:', conditionItem);
            return next();
        }

        var type = conditionItem.type;
        var isReverseLogic = false;

        /*Check to see if the first character of the type is an '!' which flags that this condition
         should run the reverse logic, if so remove the first '!' from the type string*/
        if(conditionItem.type[0] === '!') {
            type = type.slice(1);
            isReverseLogic = true;
        }

        //Get the registered condition that matches the type
        var condition = this.getCondition(type);

        //If a condition of that type is not registered, then just call next and give a warning
        if(!condition) {
            console.warn('Unregistered condition: ', type);
            return next();
        }

        //If reverse condition is not flagged then just give the next function to the condition to call directly
        if(!isReverseLogic) {
            return condition(data, next);
        }

        //If reverse condition is flagged then call the next function with the reverse of the given value from the condition
        condition(data, function(result) {
            next(!result);
        });

    }, callback);
}

/*This conditions runner works similar to async.detect*/
function evaluateConditions(conditions, iterator, callback) {

    if(!Array.isArray(conditions)) {
        return callback(null);
    }

    var i = 0;

    function next(result) {
       if(result === true) {
           return callback(conditions[i])
       }
       i++;
       nextCondition();
    }

    function nextCondition() {
        if(conditions[i]) {
            return iterator(conditions[i], next);
        }

        callback(null);       
    }

    nextCondition();
}

module.exports = Helpers;