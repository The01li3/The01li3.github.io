function fnObjectFillIn(){
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColour: "blue",
        fullname: function() {
            return this.firstName + " " + this.lastName
        }
    };
    document.getElementById("3ObjectAccess").innerHTML = '<pre>(person.firstName + " " + person["age"]) = '+ (person.firstName + " " + person["age"])+'</pre>';
    document.getElementById("3ObjectFunction").innerHTML = '<pre>person.fullname() = ' + person.fullname() + '</pre>';
}