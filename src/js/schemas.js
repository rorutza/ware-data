/**
 * Created with JetBrains WebStorm.
 * User: joan
 * Date: 11/07/13
 * Time: 20:15
 * To change this template use File | Settings | File Templates.
 */

var types = {

}

var schemas = {

};

function registerSchema(name, schema) {
    schemas[name] = schema;
}

registerSchema("Person", {
    "name": "text",
    "email": "email",
    "telephone": "number",
    "url" : "url"
});

registerSchema("Article", {
    "name": "text",
    "email": "email",
    "telephone": "number",
    "author" : ["Person", "Organization"]
});

registerSchema ("Movie", {
    "name": "text",
    "email": "email",
    "telephone": "number",
    "director": {
        schemas: ["Person", "Organization"]
    },
    "actor": ["Person"]
});

function testType(name) {
    var x = typeof name;
    var array = name instanceof Array;
    console.log("Type of " + name + " is " + x + " " + array);
}

function printSchema(name) {
    var s = schemas[name];
    for(var k in s) {
        var v = s[k];
        if(v instanceof Array) {
            console.log(k + ": [");
            for(var j = 0; j < v.length; ++j) {
                console.log(v[j] + ": {");
                printSchema(v[j]);
                console.log("}");
            }
            console.log("]");
        } else {
            console.log(k + ": " + v);
        }
    }
}

testType([]);
testType("text");
printSchema("Article");

printSchema("Movie");




