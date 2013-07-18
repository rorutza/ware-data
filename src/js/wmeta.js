function printScope(itemtype) {
    var print = '<div itemscope itemtype=\"http://schema.org/' + itemtype + '\">' +
        'Schema: ' + itemtype + '</div>';
    console.log("###printScope: " + print);
    $("#itemschema").append(print);
}

var nodePrint = {};
var index = 0;
function printDom(param) {
    var indexx = 0;
    ++index;
    var print = $(param).children();
    $(print).each(function (i) {
        //console.log('print[' + i + '] = ' + $(print[i]).prop("tagName"));
        var mytag = '<div>______</div>';
        var mytag = mytag + '<div>__' + index + '__' + indexx + '</div>';
        var mytag = mytag + '<div>______</div>';
        mytag = mytag + " Print: " + $(print[i]).prop("tagName") + ' i = ' + i;
        if ($(print[i]).prop("tagName") === "INPUT") {
            nodePrint[$(print[i]).prop("tagName")] = print[i].name;
        }
        //for (var j = 0; j < nodePrint.length; ++j) {
        //    mytag = mytag + '<div>[' + j + '] = ' + $(nodePrint[j]).prop("tagName") + '</div>';
        //}
        ++indexx;
        $("#buttonprint").append(mytag);
        printDom(print[i]);
    });
    consoleVect(nodePrint, "nodePrint");
    var scrie = printObj(nodePrint);
    $("#buttonprint").append(scrie);
}

function consoleVect(param, nume) {
    for (var j = 0; j < param.length; ++j) {
        console.log(nume + '[' + j + '] = ' + $(param[j]).prop("tagName"));
    }
}