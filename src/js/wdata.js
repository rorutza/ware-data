$(document).ready(function () {

    //Get selected schema

    var form = $("form");

    //var myObject = printObject();
    //$("#microudata").append(myObject);

    form.on("change", "select#selectschema", function () {//var schema_input = $("#schemainput");
        var selected_schema = $(this).val();
        //console.log("Selected Schema: " + selected_schema);
        $('fieldset:nth-child(2)').remove();
        if ("none" != selected_schema) {
            printForm.call(form, selected_schema);
        }
    });

    //printForm(PARAM)
    //Array - multiple options - input radio - type[] - itemtype
    //not(Array) - input text
    //<label>prop:</label> <input class = PARAM name = prop type = type/><br>
    //name - prop - itemprop
    //class - PARAM - schema/object - selected Shema
    //param - selected Schema
    //testType(schemas[selected_schema]); -- Type of [object Object] is object! Is Array: false

    function printForm(param) {
        var s = schemas[param]; // s - [object Object]
        $(this).append('<fieldset><legend>' + param + '</legend></fieldset>');
        item[param] = {};
        var schema_input = $(this).children().last();
        //console.log("###printForm: " + $(schema_input).prop("tagName"));
        for (var prop in s) {
            item[param][prop] = {};
            var type = s[prop];
            if (type instanceof Array) {
                printInfo.call(schema_input, prop);
                printRadio.call(schema_input, param, prop, "text");
                for (var j = 0; j < type.length; ++j) {
                    printRadio.call(schema_input, param, prop, type[j]);
                }
            } else {
                printInput.call(schema_input, param, prop, type);
            }
        }
        printButton.call(schema_input); // Add/Dell Schemas
        //prop + type can be used directly in form print
        //problems with "text" - remembers last value
    }

    function printInput(param, prop, type) {
        var inputText = '<div><label>' + prop + '</label>' +
            '<input class=\"' + param +
            '\" name=\"' + prop +
            '\" type=\"' + type + '\"/></div>';
        //console.log("###printInput: " + $(this).prop("tagName"));
        $(this).append(inputText);
    }

    function printText(param, prop, type) {
        var inputText = '<fieldset><label>' + prop + '</label>' +
            '<input class=\"' + param +
            '\" name=\"' + prop +
            '\" type=\"' + type + '\"/>' +
            '<button type=\"button\" class=\"button add-parent\">+</button>' +
            '<button type=\"button\" class=\"button delete-parent\">X</button></fieldset>';
        //console.log("###printInput: " + $(this).prop("tagName"));
        $(this).append(inputText);
    }

    function printRadio(param, prop, type) { //param-schema, type-itemtype, prop-itemprop
        var inputRadio = '<div><input class=\"' +
            param + '\" name=\"' + prop + '\" value=\"' +
            type + '\" type=\"radio\"></input><label>- ' + type + '</label></div>';
        //console.log("###printRadio: " + $(this).prop("tagName"));
        $(this).children(":last-child").append(inputRadio);
    }

    function printInfo(param) {
        var inputText = '<div><label>' + param + '</label></div>';
        //console.log("###printInfo: " + $(this).prop("tagName"));
        $(this).append(inputText);
    }

    function printButton() {
        var inputButton = '<button type=\"button\" class=\"button add-parent\">+</button>' +
            '<button type=\"button\" class=\"button delete-parent\">X</button>';
        $(this).append(inputButton);
    }

    form.on("change", "input[type='radio']", function () {
        var selected_radio = $(this).val(); //Selected schema
        $(this).parent().siblings("fieldset").remove();
        //console.log("###Selected Radio: class=" + this.className + " name=" + this.name + " value=" + this.value);
        if ("text" == selected_radio) {
            printText.call($(this).parent().parent(), this.className, this.name, this.value);
        } else {
            printForm.call($(this).parent().parent(), selected_radio);
        }
    });

    //Myclicks - constructor - controlling the number of clicks

    function Myclicks() {
        var clicks = 0;

        this.getClicks = function () {
            return clicks;
        };

        this.newclick = function () {
            clicks++;
        };

        this.delclick = function () {
            clicks--;
        };
    }

    var theclicks = new Myclicks();

    form.on("click", "button.add-parent", function () {
        console.log('addButton parent: ' + $(this).parent().prop("tagName"));
        theclicks.newclick();
        console.log('Clicked + - newclicks = ' + theclicks.getClicks() + ' vegades!');
        $(this).parent().clone().appendTo($(this).parent().parent());
    });

    form.on("click", "button.delete-parent", function () {
        $(this).parent().remove();
        theclicks.delclick();
        console.log('Clicked X - delclicks = ' + theclicks.getClicks() + ' vegades!');
    });
    var onchange = 0;
    form.on("change", "input", function () {
        onchange++;
        var itemscope = this.className;//ok
        var itemprop = this.name;//ok
        var itemtype = this.value; //ok

        console.log('itemscope = ' + itemscope);
        console.log('itemprop = ' + itemprop);
        console.log('itemtype = ' + itemtype);

        console.log('item[' + this.className + '][' + this.name + '] = ' + this.value);
        item[this.className][this.name] = this.value;


        witem[onchange] = this.value;
        console.log('witem[' + onchange + '] = ' + witem[onchange]);


    });

    $("#push1").on("click", function () {
        $("#microudata").children().remove();
        var myItem = printObject(item);
        $("#microudata").append(myItem);
    });

    $("#push2").on("click", function () {
        $("#microudata").children().remove();
        var myObject = printObject(schemas);
        $("#microudata").append(myObject);
    });

    $("#push3").on("click", function () {
        $("#microudata").children().remove();
        var myVector = printVector(witem);
        $("#microudata").append(myVector);

    });

});

/*
 //divdata.append(spanprop(itemprop,itemval));
 var dl = $("#properties");
 var dt = dl.append($('<dt>' + itemprop + '</dt>'));
 //var dt = $("#" + itemprop);
 var dd = dt.next();
 if (dd.is("dd")) {
 dd.remove();
 }
 //divdata.append(divscope(idemprop));
 //    <div itemscope itemtype="http://schema.org/Person">
 dt.append($('<dd itemprop=\"' + itemprop + '\">' + itemval + '</dd>'));
 //   var a = obtenir(udate.uid);
 // dt.append($("<dd itemprop=\"" + itemprop + "\">" + print + "</dd>"));
 var divscope = function (itemprop) {
 var scrie = '<div itemprop=\"' + itemprop + '\" itemscope '
 + 'itemtype=\"http://schema.org/' + udata[itemprop] + '\"></div>';
 if (console.log) {
 console.log('divscope scrie = ' + scrie);
 }
 return scrie;
 };


 var spanprop = function (itemprop,itemval) {
 var scrie = '<span itemprop=\"' + itemprop + '\">' + itemval + '</span>';
 if (console.log) {
 console.log('spanprop scrie = ' + scrie);
 }
 return scrie;
 };

 $("#buton4").click(function () {

 });
 *   <input id = "wabout" name = "wabout" type = "text" value = ""/>
 *   <span id = "about" itemprop = "about" content = "About"></span>
 */