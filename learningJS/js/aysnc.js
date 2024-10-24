function fnMakeMyPromise(P_value){
    return new Promise(function(myResolve, myReject) {
        let x = P_value;

        if (x == 0) {
            myResolve("0K");
        } else if (x == 1){
            myReject("1K");
        } else if (x == 2){
            myReject("Not OK! 2k");
        }
    });
}

function fnSuccessHandler(result) {
    console.log("Success " + result);
}

function fnFailHandler(error) {
    if(error == "1K"){
        console.log("Handled by fail function: " + error);
    } else {
        throw new Error("Throw " + error);
    }
}

function fnPromiseStart() {
    for(i=0; i<=3; i++) {
        fnMakeMyPromise(i).then(fnSuccessHandler,fnFailHandler).catch(function (err) {
            console.log("Im in the catch with error: " + err);
        });       
    }
}

/*----Another example */

function fnMakeMyPromise2(P_value) {
    return new Promise(function(myResolve, myReject) {
        let x = P_value;

        if (x == 0) {
            myResolve("0K");
        } else if (x == 1) {
            myReject("1K");
        } else if (x == 2) {
            myReject("Not OK! 2k");
        }
    });
}

function fnSuccessHandler2(result) {
    console.log("Success Handler: " + result);
    return "Success " + result; // Pass result to next .then() in the chain
}

function fnFailHandler2(error) {
    console.log("Fail Handler: " + error);
    return "Handled " + error; // Still pass a value to the next .then() in the chain
}

function fnStartChainedPromises() {
    fnMakeMyPromise2(0)
        .then(fnSuccessHandler2, fnFailHandler2)  // For value 0
        .then(function(result) {
            console.log("Next step after first promise: " + result);
            return fnMakeMyPromise2(1);
        })
        .then(fnSuccessHandler2, fnFailHandler2)  // For value 1
        .then(function(result) {
            console.log("Next step after second promise: " + result);
            return fnMakeMyPromise2(2);
        })
        .then(fnSuccessHandler2, fnFailHandler2)  // For value 2
        .then(function(result) {
            console.log("Final step after all promises: " + result);
        })
        .catch(function(err) {
            console.log("Caught error in final catch block: " + err);
        });
}

//fnStartChainedPromises();