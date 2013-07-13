$(document).ready(function () {

    //Get selected schema
    //debbug -- selected_schema: "Article"
    //testType(schemas[selected_schema]); -- Type of [object Object] is object! Is Array: false

    var schema_input = $("#schemainput");
    var form = $("form");
    var out_printInput;

    form.on("change", "select#selectschema", function() {
        var selected_schema = $(this).val();
        console.log("Selected Schema: " + selected_schema);
        //printSchema(selected_schema);
        schema_input.children().remove();
        if ("none" != selected_schema) {
            printForm(selected_schema);
        }
    });


    //printForm
    //Array - multiple options
    //not(Array) - input
    //<label>K:</label> <input class = PARAM name = K type = V/><br>
    //name - K - propiedad
    //type - V - type
    //class - PARAM - schema/object

    //printForm()param
    //param - selected Schema
    //k - property - itemprop
    //v - type - itemtype if type object
    //v[] - Schema if type object

    function printForm(param) {
        printInfo(param);
        var s = schemas[param]; // s - [object Object]
        console.log("###printForm - schema:" + param);
        for(var k in s) {
            var v = s[k];
            console.log("type = v = s[k] = " + v)
            if(v instanceof Array) {
                printInfo(k);
                console.log("k - " + k + ": [");
                for(var j = 0; j < v.length; ++j) {
                    console.log("j - " + j);
                    console.log("v[j] - " + v[j] + ": {");
                    printRadio(param,v[j],k);
                    console.log("}");
                }
                printRadio(param,"text",k);
                console.log("]");
            } else {
                console.log("k - " + k + ": " + "v - " + v);
                printInput(param,k,v);
            }
        }

        //prop, type, k, v can be used directly in form print
        //problems with "text" - remembers last value

        function printInput(param, prop, type) {
            var inputText = '<div><label>' + prop + '</label>' +
                '<input class=\"' + param +
                '\" name=\"' + prop +
                '\" type=\"' + type + '\"/></div>';
            console.log("###inputText: " + inputText);
            schema_input.append(inputText);
        }

        function printRadio(param, prop, radio) { //param-schema, prop-itemprop. radio-value
            var inputRadio = '<div><label>- ' + prop + '</label><input class=\"' +
                param + '\" name=\"' + radio + '\" value=\"' +
                prop + '\" type=\"radio\"></input></div>';
            console.log("###inputRadio: " + inputRadio);
            $(schema_input).children(":last-child").append(inputRadio);
        }

        function printInfo(param) {
            var inputText = '<div>' + param + '</div>';
            console.log("###printInfo: " + inputText);
            schema_input.append(inputText);
        }

        out_printInput = printInput;

    };

    form.on("change", "input[type='radio']", function() {
        var selected_radio = $(this).val(); //Selected schema

        console.log("###Selected Radio: " + selected_radio);
        if ("text" != selected_radio) {
            printForm(selected_radio);
        } else {
            console.log("###className of this when text = " + this.className);
            out_printInput(this.className,this.name,this.value);
        }
    });
    /*        function fragmento(html) {
     var inputFrag = $(document.createDocumentFragment());
     console.log("inputFrag: " + inputFrag);
     var newFrag = $(inputFrag).append(html);
     console.log("newFrag: " + newFrag);
     return newFrag;
     };
     */

    /*
    udata - schema
     */

    var divdata = $("#microudata");

    //Myclicks - constructor - controlling the number of clicks

     function Myclicks() {
         var clicks = 0;

         this.getClicks = function() {
             return clicks;
         };

         this.newclick = function() {
             clicks++;
         };

         this.delclick = function() {
             clicks--;
         };
     }

    var theclicks = new Myclicks();

    // dt.append($("<dd itemprop=\"" + itemprop + "\">" + print + "</dd>"));
/*
    var divscope = function (itemprop) {
        var scrie = '<div itemprop=\"' + itemprop + '\" itemscope '
            + 'itemtype=\"http://schema.org/' + udata[itemprop] + '\"></div>';
        if (console.log) {
            console.log('divscope scrie = ' + scrie);
        }
        return scrie;
    };
  */
    /*
    var spanprop = function (itemprop,itemval) {
        var scrie = '<span itemprop=\"' + itemprop + '\">' + itemval + '</span>';
        if (console.log) {
            console.log('spanprop scrie = ' + scrie);
        }
        return scrie;
    };
    */

    $("#makeaut").click(function() {
        //input dupa id
        theclicks.newclick();
        var inpid = $("#makeaut");
        var idemprop = this.name;
        if (console.log) {
            console.log('Clicked ADD - newclicks = ' + theclicks.getClicks() + ' vegades!');
            console.log('New idemscope = ' + idemprop);
        }
        var scrie = '<fieldset id=\"author-' + theclicks.getClicks() + '\"><legend class = \"person\">author:</legend>'
            + '<label>name:</label> <input class = \"person\" name = \"name\" type = \"text\"/><br>'
            + '<label>email:</label> <input class = \"person\" name = \"email\" type = \"text\"/><br>'
            + '<label>telephone:</label> <input class = \"person\" name =  \"telephone\" type = \"number\"/><br>'
            + '<label>url:</label> <input class = \"person\" name = \"url\" type = \"url\"/><br>'
            + '<button type=\"button\" class=\"button delete-parent\">X</button></fieldset>';

        inpid.after(scrie);

        //divdata.append(divscope(idemprop));

        //    <div itemscope itemtype="http://schema.org/Person">
    });

    form.on("click", "button.delete-parent", function() {
       $(this).parent().remove();
       theclicks.delclick();
       if (console.log) {
           console.log('Clicked X - delclicks = ' + theclicks.getClicks() + ' vegades!');
       }
    });
    form.on("change","input",function () {
        var itemtype = this.className;       //ok
        var itemprop = this.name;                //ok
        var itemval = this.value;                    //ok

            if (console.log) {
                console.log('itemtype = ' + itemtype);
                console.log('itemprop = ' + itemprop);
                console.log('itemval = ' + itemval);
                //console.log('meta.itemtype.itemprop = ' + meta.itemtype.itemprop);
            }

        //divdata.append(spanprop(itemprop,itemval));

/*            var dl = $("#properties");
            var dt = dl.append($('<dt>' + itemprop + '</dt>'));
            //var dt = $("#" + itemprop);
            var dd = dt.next();
            if (dd.is("dd")) {
                dd.remove();
            }
            dt.append($('<dd itemprop=\"' + itemprop + '\">' + itemval + '</dd>'));
            //   var a = obtenir(udate.uid);
 */
    });

    /*
     $("#buton4").click(function () {

     });
     */
    /*
     *   <input id = "wabout" name = "wabout" type = "text" value = ""/>
     *   <span id = "about" itemprop = "about" content = "About"></span>
     */
});
