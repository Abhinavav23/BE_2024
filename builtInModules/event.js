const EventEmitter = require("events");

// events
// Login Scenario

const Login = new EventEmitter();
// console.log("inside event module");
/*
const startLoginHandler1 = (username, filename) => {
    // console.log("user started login---", username);
    // console.log("filename---", filename);
    // save this info in a file along with username and time
    console.log("from handler 1---");

}

const startLoginHandler2 = () => {
    console.log("from handler 2---");
    // save this info in a file along with username and time
}

const startLoginHandler3 = () => {
    console.log("from handler 3---");
    // save this info in a file along with username and time
}


// event name --> start_login
Login.addListener("start_login", startLoginHandler1);
Login.addListener("start_login", startLoginHandler2);

Login.emit("start_login", "Abhinav", "stepOne");

Login.addListener("start_login", startLoginHandler3);

Login.emit("start_login", "Aryan", "stepOne");




Login.addListener("validating", (username) => {
    console.log("user getting validated");
})

Login.addListener("login_success", (username) => {
    console.log("user getting validated");
})



// Login.emit("start_login", "Abhinav", "startLogin");
// Login.emit("validating");
// Login.emit("login_success");

// Login.emit("start_login", "Gurpret", "startLogin");
// Login.emit("validating", "Gurpret");
// Login.emit("login_success", "Gurpret");

*/

const handler1 = () => {
    console.log("from handler 1");
} 
const handler2 = () => {
    console.log("from handler 2");
} 

const handler3 = () => {
    console.log("runs only once");
} 


/*
// Login.addListener()
Login.on("login_failed", handler1);
Login.on("login_failed", handler2);


Login.emit("login_failed");
Login.off("login_failed", handler2);
// Login.removeListener("login_failed", handler2);
Login.emit("login_failed");
// removeAllListener --> to remove all listener
console.log("count---",Login.listenerCount("login_failed"));
*/

Login.on("login_failed", handler1);
Login.once("login_failed", handler3);

Login.emit("login_failed");
Login.emit("login_failed");




// 1.0.0
// 1.9.4 ---> minor update --> 1.10.0
// 1.10.8---> patch update --> 1.10.9
// 1.10.9---> major update --> 2.0.0