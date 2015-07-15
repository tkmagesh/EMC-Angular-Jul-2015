function addSync(x,y){
    console.log("[SP] adding numbers");
    var result = x + y;
    console.log("[SP] returning numbers");
    return result;
}

function addSyncClient(x,y){
    console.log("[SC] triggering add Operation");
    var result = addSync(x,y);
    console.log("[SC] result = ", result);
}

function addAsync(x,y, onResult){
    console.log("[SP] adding numbers");
    setTimeout(function(){
        var result = x + y;
        console.log("[SP] returning numbers");
        if (typeof onResult === "function")
            onResult(result);
    }, 3000)
}

function addAsyncClient(x,y){
    console.log("[SC] triggering add Operation");
    var result = addAsync(x,y, function(result){
        console.log("[SC] result = ", result);
    });
}

function addAsyncUsingPromise(x,y){
    console.log("[SP] adding numbers");
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            var result = x + y;
            console.log("[SP] returning numbers");
            resolve(result);
        }, 3000)
    })
    return promise;
}


