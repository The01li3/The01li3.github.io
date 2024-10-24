function fnArrSearch() {
    x = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0];
    console.log(x.indexOf(4));
    console.log(x.indexOf(4,7));
    console.log(x.lastIndexOf(4));
    console.log(x.find(myFunction));
    console.log(x.findIndex(myFunction));
}

function myFunction(value, index, array) {
    return value > 7;
} 