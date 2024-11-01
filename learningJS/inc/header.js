var arrModNames = [
    ["Introduction","intro.html"],
    ["Variables, Let, Const & Data Types","vari_let_cons_type.html"],
    ["Booleans","booleans.html"],
    ["Numbers","numbers.html"],
    ["Operators, Assignment, Arithmetic & Math","op_assi_arith_math.html"],
    ["Strings","strings.html"],
    ["Arrays","arrays.html"],
    ["Dates","dates.html"],
    ["Events, Precedence & Conditionals","event_precedence_condition.html"],
    ["Loops & Iterables","loops.html"],
    ["Maps & Sets","map_sets.html"],
    ["Typeof & Type Conversion","types.html"],
    ["Destructuring","destruct.html"],
    ["Scope, Hoisting & this Keyword","scope_hoist_this.html"],
    ["Miscellaneous","misc.html"],
    ["Errors, Debugging & Coding Best Practices","err_debug_bestpractice.html"],
    ["Versions","versions.html"],
    ["Objects","objects.html"],
    ["Functions","functions.html"],
    ["Modules","modules.html"],
    ["Classes","classes.html"],
    ["Async","async.html"],
    ["HTML DOM","html_dom.html"],
    ["Browser BOM","browser_bom.html"],
    ["Web APIs","api.html"],
    ["AJAX","ajax.html"],
    ["JSON","json.html"],
    ["JS vs jQuery","js_vs_jquery.html"],
    ["Graphics","graphics.html"]
]; 

function fnAddContents() {    
    contents = '<h1>Contents</h1>'
    for (let i = 0; i < arrModNames.length; i++) {
        contents+='<a href="'+ arrModNames[i][1] +'">'+ (i+1) + '. ' + arrModNames[i][0] + '</a><br>'
    }
    document.getElementById("contents").innerHTML = contents;
};

function fnAddHeader() {
    var objModNames = {
        modules: arrModNames
    };

    var vNavList = Handlebars.compile(`
    <a href="contents.html">Home</a><hr class="m-0">
    {{#each modules}}
    <a href="{{this.[1]}}" class="left-list">{{inc @index}}. {{this.[0]}}</a><hr class="m-0">
    {{/each}}`);

    Handlebars.registerHelper("inc", function(value, options)
        {
        return parseInt(value) + 1;
    });
    
    document.getElementById('navHeader').innerHTML = vNavList(objModNames);
};

function widget_addLoadEvent(pFunction)
{
    var vfnOldOnLoad = window.onload;
    if (typeof window.onload != 'function')
    {
        window.onload = pFunction;
    }
    else
    {
        window.onload = function()
        {
            vfnOldOnLoad();
            pFunction();
        }
    }
};

widget_addLoadEvent(fnAddHeader);