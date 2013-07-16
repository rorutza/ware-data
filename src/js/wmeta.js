//printObject() - prints the onject schema{}
function printObject(param) {
    var schema = '<div>______</div>';
    for (var obj in param) {
        schema = schema + '<div>' + obj + ': {</div>';
        for (var prop in param[obj]) {
            schema = schema + '<div>\"' + prop + '\": \"' + param[obj][prop] + '\",</div>';
        }
        schema = schema + '<div>}</div>';
    }
    return schema;
}

function printVector(param) {
    var schema = '<div>______</div>';
    for (var j = 0; j < param.length; ++j) {
        schema = schema + '<div>' + param[j] + '</div>';
    }
    return schema;
}

//object to save the input data
//has the same structure as the input form
var item = {};

//object for connecting with data()
var witem = [];

