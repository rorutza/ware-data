/**
 * Created with JetBrains WebStorm.
 * User: joan
 * Date: 11/07/13
 * Time: 20:15
 * To change this template use File | Settings | File Templates.
 */

// schemas["Article"] === schemas.Article;

var types = {
    //the type <input> element to display
    "color": "",
    "date": "",
    "datetime": "",
    "email": "",
    "image": "",
    "number": "",
    "range": "",
    "tel": "",
    "text": "",
    "time": "",
    "url": ""

}

//the tree of schema.org
var schemas = {};
var item = {};
var meta = [];

//registerSchema() - registers a new property to schema
function registerSchema(name, schema) {
    schemas[name] = schema;
}

registerSchema("Offer", {
    "price": "text",
    "priceCurrency": "text",
    "acceptedPaymentMethod": "text"
});

registerSchema("Person", {
    "name": "text",
    "email": "email",
    "telephone": "number",
    "url": "url"
});

registerSchema("Place", {
    "name": "text",
    "address": "PostalAddress",
    "telephone": "number",
    "map": "url"
});

registerSchema("PostalAddress", {
    "addressCountry": "text",
    "addressLocality": "text",
    "addressRegion": "text",
    "postalCode": "text",
    "postOfficeBoxNumber": "text",
    "streetAddress": "text"
});

registerSchema("Organization", {
    "name": "text",
    "email": "email",
    "telephone": "number",
    "url": "url",
    "address": ["PostalAddress"]
});

registerSchema("Article", {
    "name": "text",
    "about": "text",
    "dateCreated": "date",
    "wordCount": "number",
    "author": ["Person", "Organization"]
});

registerSchema("Movie", {
    "name": "text",
    "about": "text",
    "dateCreated": "date",
    "genre": "text",
    "duration": "time",
    "director": ["Person", "Organization"],
    "actor": ["Person"]
});

registerSchema("Painting", {
    "name": "text",
    "description": "text",
    "dateCreated": "date",
    "image": "url",
    "offers": ["Offer"],
    "author": ["Person"]
});

registerSchema("Event", {
    "name": "text",
    "description": "text",
    "startDate": "date",
    "endDate": "date",
    "location": ["Place", "PostalAddress"],
    "attendee": ["Person", "Organization"],
    "subEvent": ["Event"]
});

function testType(param) {
    var x = typeof param;
    var array = param instanceof Array;
    console.log("Type of " + param + " is " + x + "! Is Array: " + array);
}

//printSchema() - prints on console recursively a branch of schema
function printSchema(param) {
    var s = schemas[param]; // s - [object Object]
    console.log("printSchema input param: " + param);
    for (var k in s) {
        var v = s[k];
        if (v instanceof Array) {
            console.log("k - " + k + ": [");
            for (var j = 0; j < v.length; ++j) {
                console.log("j - " + j);
                console.log("v[j] - " + v[j] + ": {");
                printSchema(v[j]);
                console.log("}");
            }
            console.log("]");
        } else {
            console.log("k - " + k + ": " + "v - " + v);
        }
    }

}

//printObject() - prints the onject schema{}
function printIt(param) {
    var print;
    if (param instanceof Array) {
        print = printVect(param);
    } else {
        print = printObj(param);
    }
    return print;
}

function printObj(param) {
    var print = '<div>______</div>';
    for (var obj in param) {
        print = print + '<div>' + obj + ': {</div>';
        for (var prop in param[obj]) {
            print = print + '<div>\"' + prop + '\": \"' + param[obj][prop] + '\",</div>';
        }
        print = print + '<div>}</div>';
    }
    return print;
}

function printVect(param) {
    var print = '<div>______</div>';
    for (var j = 0; j < param.length; ++j) {
        print = print + '<div>[' + j + '] = ' + param[j] + '</div>';
    }
    return print;
}

//object to save the input data
//has the same structure as the input form

//printSchema("Article");

//testType(schemas["Article"]["name"]); // text
//testType(schemas["Article"]["author"]); // object
//testType(schemas["Article"]); // object
//testType(schemas[Article]);  - ERROR
//testType(schemas); //object
//testType(schemas.Article);

/*
 var test1 = schemas["Article"];
 var test2 = schemas.Article;
 if (test1 === test2) {console.log("E acelasi lucru!")}
 else {console.log("Nu inteleg!")};
 */

/*
 console.log("## Article ##");
 printSchema("Article");

 console.log("## Movie ##");
 printSchema("Movie");

 console.log("## Painting ##");
 printSchema("Painting");
 */




