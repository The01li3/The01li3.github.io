var arrModNames = [
    ["Introduction","\intro.html"],
    ["Variables, Let, Const & Data Types","\vari_let_cons_type.html"],
    ["Booleans","\bools.html"],
    ["Numbers","\numbers.html"],
    ["Operators, Assignment, Arithmetic & Math","\op_assi_arith_math.html"],
    ["Strings","\strings.html"],
    ["Arrays","\arrays.html"],
    ["Dates","\dates.html"],
    ["Events, Precedence & Conditionals","\event_precedence_condition.html"],
    ["Loops & Iterables","\loops.html"],
    ["Maps & Sets","\map_sets.html"],
    ["Typeof & Type Conversion","\types.html"],
    ["Destructuring","\descruct.html"],
    ["Scope, Hoisting & this Keyword","\scope_hoist_this.html"],
    ["Miscellaneous","\misc.html"],
    ["Errors, Debugging & Codeing Best Practices","\err_debug_bestpractice.html"],
    ["Versions","\versions.html"],
    ["Objects","\objects.html"],
    ["Functions","\functions.html"],
    ["Modules","\modules.html"],
    ["Classes","\classes.html"],
    ["Async","\async.html"],
    ["HTML DOM","\html_dom.html"],
    ["Browser BOM","\browser_bom.html"],
    ["Web APIs","\api.html"],
    ["AJAX","\ajax.html"],
    ["JSON","\json.html"],
    ["JS vs jQuery","\js_vs_jquery.html"],
    ["Graphics","\graphics.html"]
]; 


function fnAddContents() {    
    contents = '<h1>Contents</h1>'
    for (let i = 0; i < arrModNames.length; i++) {
        contents+='<a href="'+ arrModNames[i][1] +'">'+ (i+1) + '. ' + arrModNames[i][0] + '</a><br>'
    }
    document.getElementById("contents").innerHTML = contents;
};

header= '<a href="\contents.html">Home</a>';
for (let i = 0; i < arrModNames.length; i++){
    header+=',<a href="'+ arrModNames[i][1] +'">'+ (i+1) + '</a>'
}

document.getElementById('navHeader').innerHTML = header;

