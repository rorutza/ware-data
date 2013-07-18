function printScope(itemtype) {
    var print = '<div itemscope itemtype=\"http://schema.org/' + itemtype + '\">' +
        'Schema: ' + itemtype + '</div>';
    console.log("###printScope: " + print);
    $("#itemschema").append(print);
}

var Itemprop = function () {
    this.itemtag = string;
    this.itemname = string;
    this.itemclass = string;
    this.itemtype = string;
    this.itemvalue = string;
    this.itemparents = string;
};

Itemprop.prototype.get_itemtag = function () {
    return this.itemtag;
};

Itemprop.prototype.get_itemname = function () {
    return this.itemname;
};

Itemprop.prototype.get_itemclass = function () {
    return this.itemclass;
};

Itemprop.prototype.get_itemtype = function () {
    return this.itemtype;
};

Itemprop.prototype.get_itemvalue = function () {
    return this.itemvalue;
};

Itemprop.prototype.get_itemparents = function () {
    return this.itemparents;
};

var nodePrint = {};
var index = 0;
function printDom(param) {
    var indexx = 0;
    ++index;
    var print = $(param).children();
    $(print).each(function (i) {
        //var mytag = '<div>______</div>';
        //var mytag = mytag + '<div>__' + index + '__' + indexx + '</div>';
        //var mytag = mytag + '<div>______</div>';
        //mytag = mytag + " Print: " + $(print[i]).prop("tagName") + ' i = ' + i;
        if ($(print[i]).prop("tagName") === "INPUT") {
            //if (print[i].type !== "radio") {
            var scrie = '<div>_____</div>';
            scrie = scrie + '<div> _tag:' + $(print[i]).prop("tagName") + '</div>';
            scrie = scrie + '<div> _name:' + print[i].name + '</div>';
            scrie = scrie + '<div> _class:' + print[i].className + '</div>';
            scrie = scrie + '<div> _type:' + print[i].type + '</div>';
            scrie = scrie + '<div> _value:' + print[i].value + '</div>';
            var the_parents = $(print[i]).parents("fieldset").first()
                .map(function () {
                    return this.className;
                })
                .get().join(", ");
            scrie = scrie + '<div> _parents:' + the_parents + '</div>';
            $("#buttonprint").append(scrie);
            //}
            //nodePrint[$(print[i]).prop("tagName")] = print[i].name;
        }
        ++indexx;
        //$("#buttonprint").append(mytag);
        printDom(print[i]);
    });
    consoleVect(nodePrint, "nodePrint");
    //var scrie = printObj(nodePrint);
    //$("#buttonprint").append(scrie);
}

function consoleVect(param, nume) {
    for (var j = 0; j < param.length; ++j) {
        console.log(nume + '[' + j + '] = ' + $(param[j]).prop("tagName"));
    }
}