function fnBobSearch() {
    let x = "bob likes to bob in the sea";
    console.log(x.indexOf("bob"));
    console.log(x.lastIndexOf("bob"));
    console.log(x.search("bob"));
    console.log(x.match("bob"));
    console.log(x.matchAll("bob"));
    console.log(x.includes("bob"));
    console.log(x.startsWith("bob"));
    console.log(x.endsWith("bob"));
}