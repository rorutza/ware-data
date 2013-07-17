function printScope(itemtype) {
    var print = '<div itemscope itemtype=\"http://schema.org/' + itemtype + '\">' +
        'Schema: ' + itemtype + '</div>';
    console.log("###printScope: " + print);
    $("#itemschema").append(print);
}
//var nodeNames = [];
//var nodeValues = [];
function printDom(param) {
    var nodeNames = [];
    var nodeValues = [];
    var print = $(param).children();
    $(print).each(function (i) {
        //nodeNames[i] = el.nodeName;
        //nodeValues[i] = el.name;
        nodeNames[i] = this.name
        nodeValues[i] = this.value;
        print = $(print).children();
        printDom(print)
    });
    consoleVect(nodeNames, "nodeNames");
    consoleVect(nodeValues, "nodeValues");
    //return printIt(nodeNames);
    return printIt(nodeValues);
}

function consoleVect(param, nume) {
    for (var j = 0; j < param.length; ++j) {
        console.log(nume + '[' + j + '] = ' + param[j]);
    }
}