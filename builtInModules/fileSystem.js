// const fs = require("fs");
const { writeFile, appendFile, readFile } = require("fs");

const fsPromise = require("fs/promises");

// create a dir
// async way
// sync way

// error first callbacks
console.log("start"); //1
/*
fs.mkdir("./new", (err) => {
    console.log("Inside callback", err);
    if(err){
        // error handling code
        console.log("Error: ", err.message)
    }else{
        console.log("directory created successfully");
    }
})

// sync way
try{
    fs.mkdirSync("./newSync");
    console.log("created successfully");
}catch(err){
    console.log(err.message);
}
console.log("end");

// fsPromise.mkdir("/new")

fs.readdir("./new", (err, dirs) => {
    if (err) {
      // error handling code
      console.log("Error: ", err.message);
    } else {
      console.log("directory -->", dirs);
    }
})

// delete a dir
fs.rmdir("./new", {recursive: true}, (err) => {
    if (err) {
        // error handling code
        console.log("Error: ", err.message);
      } else {
        console.log("directory deleted");
      }
});


// operations on file
// 1 --> file path
// 2 --> content
// 3 ---> callback
writeFile("./names.txt", "Rohit", (err) => {
    if (err) {
        // error handling code
        console.log("Error: ", err.message);
      } else {
        console.log("created");
      }
})


appendFile("./nameList.txt", " Sachin", (err) => {
  if (err) {
    // error handling code
    console.log("Error: ", err.message);
  } else {
    console.log("created");
  }
});


readFile("./nameList.txt", "utf-8", (err, content) => {
  if (err) {
    // error handling code
    console.log("Error: ", err.message);
  } else {
    // console.log("content", content.toString());
    console.log("content", content);
  }
});
*/

// using promises

const readFilePromise = async() => {
    try{
        const content = await fsPromise.readFile("./nameList.txt");
        console.log("content", content.toString());
    }catch(err){
        console.log("Error", err.message);
    }
}

readFilePromise();



