//is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject
const myPromise = new Promise((resolve, reject) => {
    //code
});

//three states: pending, fulfilled, and rejected

const myPromise = new Promise((resolve, reject) => {
    if (condition here) {
        resolve("Promise was fulfilled");
    } else {
    reject("Promise was rejected");
}
});

// Handle a Fulfilled Promise with then
myPromise.then(result => {

}); //result comes from the argument given to the resolve method

// Handle a Rejected Promise with catch
myPromise.catch(error => {

}); //error is the argument passed in to the reject method



const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result);
});

makeServerRequest.catch(error => {
    console.log(error);
});