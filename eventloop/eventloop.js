console.log("start"); //1
const {writeFile} = require("fs");

setTimeout(() => {
    console.log("inside timer 1"); //5
}, 2);

setImmediate(() => {
    console.log("inside immidiate"); //6
});

writeFile("./test.txt", "test", (err) => {
    if(err){
        console.log("error");
    } else{
        console.log("write successful");
        setTimeout(() => {
            console.log("inside write file timer");
        }, 0);
    }
})

Promise.resolve()
.then(() => {
    console.log("inside promise 1"); //4
    setTimeout(() => {
        console.log("inside write file timer");
    }, 0);
})
process.nextTick(() => {
    console.log("inside next tick"); //3
})

console.log("end"); //2

// CB QUEUE---->
// 1. nothing
// 2. depends on system performance
// 3. CB
// 4. nothing


// 1. nothing
// 2. cb
