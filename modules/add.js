console.log("inside Add Function");
// process is a global object available b y default
const add = () => {
    console.log("arguments", process.argv);
    console.log("sum is");
    return 200
    // step - 1 - extract required data from process.argv
    // o/p --> ['20','950','60','70']
    // step - 2 --> add all the elements of the array
    // note --> type of el
}

const res = add();
console.log("res", res);

// fetch("https://test.com")
// .then(() => {

// })