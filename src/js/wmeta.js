//printObject() - prints the onject schema{}
function printObject() {
    var schema = '<div>___schemas___</div>';
    for (var obj in schemas) {
        schema = schema + '<div>' + obj + ': {</div>';
        for (var prop in schemas[obj]) {
            schema = schema + '<div>\"' + prop + '\": \"' + schemas[obj][prop] + ',\"</div>';
        }
        schema = schema + '<div>}</div>';
    }
    return schema;
}

//object to save the input data
//has the same structure as the input form
var item = {};

function printItem() {
    var schema = '<div>___item___</div>';
    for (var obj in item) {
        schema = schema + '<div>' + obj + ': {</div>';
        for (var prop in item[obj]) {
            schema = schema + '<div>\"' + prop + '\": \"' + item[obj][prop] + '\",</div>';
        }
        schema = schema + '<div>}</div>';
    }
    return schema;
}

