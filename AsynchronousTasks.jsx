//CALLBACK FUNCTION

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 2000);
}

function processData() {
    console.log("Data processed");
}

fetchData(processData); // Output: Data fetched (after 2 seconds), Data processed


//PROMISES

let promise = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
        if (success) {
            resolve("Data fetched");
        } else {
            reject("Error fetching data");
        }
    }, 2000);
});

promise.then((message) => {
    console.log(message); // Output: Data fetched (after 2 seconds)
}).catch((error) => {
    console.log(error);
});

//PROMISE CHAINING

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Step 1 complete");
    }, 1000);
});

promise
    .then((message) => {
        console.log(message); // Output: Step 1 complete
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Step 2 complete");
            }, 1000);
        });
    })
    .then((message) => {
        console.log(message); // Output: Step 2 complete
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Step 3 complete");
            }, 1000);
        });
    })
    .then((message) => {
        console.log(message); // Output: Step 3 complete
    })
    .catch((error) => {
        console.log(error);
    });


    //AXIOS

    const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });
    

    //ASYNC AWAIT

    async function fetchData() {
    try {
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

fetchData(); // Output: Data from the API
