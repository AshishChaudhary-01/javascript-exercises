const repeatString = function(word, times) {
    let result = "";
    if(times>=0){
        for(let i=0; i<times; i++){
            result = result + word;
        }
    }
    else
        result = "ERROR";
    return result;
};

// Do not edit below this line
module.exports = repeatString;
