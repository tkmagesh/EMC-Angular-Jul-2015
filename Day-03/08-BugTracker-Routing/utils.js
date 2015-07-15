var utils = angular.module("utils", ["ng"]);
utils.value("appDefaults", {
    trimLength : 20
});

utils.filter("trimText", function(appDefaults){
    return function(data, trimLength){
        trimLength = trimLength || appDefaults.trimLength;
        return data.length < trimLength ? data : data.substr(0,trimLength) + "..."
    }
});

utils.value("momentApi", moment);
utils.filter("toMoment", function(momentApi){
    return function(data){
        return momentApi(data).fromNow();
    };
});

