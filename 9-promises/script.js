//------------------Promises in JavaScript----------------------------------

// ----------------Synchronous vs Asynchronous code-------------------------
// Javascript is single threaded language

// Synchronous --> code runs line by line

/*
console.log("start");
console.log("subscribe to my channel");
console.log("finish");
*/

/*
    output :-
        start
        subscribe to my channel
        finish
*/

// Asynchronous
// Javascript executes synchronous code first and then asynchronous code.
// Here, setTimeout is asynchronous function

/*
console.log("start");
setTimeout(() => {
  console.log("Subscribe to my channel");
}, 1000);
console.log("finish");
*/

/*
    output :-
        start
        finish
        subscribe to my channel
*/

// Example

/*
console.log("start");
function importantAction(username) {
  setTimeout(() => {
    return `Subscribe to ${username}`;
  }, 1000);
}
const message = importantAction("Roadside Coder");
console.log(message);
console.log("stop");
*/

// importantAction is asynchronous function, console.log(message) is simply a synchronous code. Javascript first runs the synchronous code, so it will run console.log(message) first before running the importantAction function(). Due to this reason console.log(message) will show undefined
/* 
    Output :-
        start
        undefined
        stop

*/

//-------------------------------Callbacks-------------------------------------

/*
console.log("start");

function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Subscribe to ${username}`);
  }, 1000);
}

const message = importantAction("Roadside Coder", function (message) {
  console.log(message);
});

console.log("stop");

// To execute console.log(message) function, we put it into a callback function.
*/

/* 
    Output :-
        start
        stop
        Subscribe to roadside coder
*/

//--------------------------Callback Hell---------------------------------------------

/*
console.log("start");

function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Subscribe to ${username}`);
  }, 1000);
}

function likeTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Like the ${video} video`);
  }, 1000);
}

function shareTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Share the ${video} video`);
  }, 1000);
}

const message = importantAction("Roadside Coder", function (message) {
  console.log(message);
  likeTheVideo("Javascript interview questions", (action) => {
    console.log(action);
    shareTheVideo("Javascript interview questions", (action) => {
      console.log(action);
    });
  });
});

console.log("stop");

// The above function has so many callbacks one inside the another (inside message). That's why it is called callback hell.
*/

/*
    Output :- 
        Start
        Stop
        Subscribe to roadside coder
        Like the javascript interview questions video
        Share the Javascript interview questions video

*/

//-----------------------------Promises---------------------------------
// Promises basically represents the upcoming completion or a failure of an asynchronous event and its value.

/*
console.log("start");

const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) {
      resolve("Subscribed to Roadside Coder");
    } else {
      reject(new Error("Why aren't you subscribed to Roadside Coder"));
    }
  }, 2000);
});

// sub
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

console.log(sub);

console.log("stop");

*/

//-------------Promise.resolve and Promise.reject-------------------------------------------

/*
console.log("start");

const sub = Promise.resolve("Subsrcibed to Roadside Coder");
console.log(sub);
sub.then((res) => console.log(res));

console.log("stop");
*/

/*
console.log("start");

const sub = Promise.reject("Subsrcibed to Roadside Coder");
console.log(sub);
sub.then((res) => console.log(res)).catch((err) => console.log(err));

console.log("stop");
*/

//---------------Rewriting callbacks with promises-----------------------

/*
console.log("start");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 1000);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 1000);
  });
}

importantAction("Roadside Coder")
  .then((res) => {
    console.log(res);
    likeTheVideo("Javascript interview questions").then((res) => {
      console.log(res);
      shareTheVideo("Javascript interview questions").then((res) => {
        console.log(res);
      });
    });
  })
  .catch((err) => console.loog(err));

console.log("stop");
*/

//---------------------Promise chaining-----------------------------

/*
console.log("start");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 1000);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 1000);
  });
}

importantAction("Roadside coder")
  .then((res) => {
    console.log(res);
    return likeTheVideo("Javascript interview questions");
  })
  .then((res) => {
    console.log(res);
    return shareTheVideo("Javascript interview questions");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("stop");
*/

//--------------------------Promise combinators-----------------------

/*
console.log("start");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 100);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 500);
  });
}
*/

// Promise.all()
// It runs all of the promises in parallel and in the end it returns the array with all of the fullfilled promises. If any of the promise failed, then its gonna fail the whole Promise.all()

/*
Promise.all([importantAction("Roadside Coder"), likeTheVideo("Javascript interview questions"), shareTheVideo("Javascript interview questions")])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

console.log("stop");
*/

// Promise.race()
// It returns the first promise that gets fullfilled or rejected.

/*
Promise.race([importantAction("Roadside Coder"), likeTheVideo("Javascript interview questions"), shareTheVideo("Javascript interview questions")])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

console.log("stop");
*/

// Promise.allSettled()
// Its function is same as that of Promise.all(). But in this, if any of the promises fails, it returns the resolved promises as well as failed promises.

/*
Promise.allSettled([
  importantAction("Roadside Coder"),
  likeTheVideo("Javascript interview questions"),
  shareTheVideo("Javascript interview questions"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error("Error: Promises failed", err);
  });

console.log("stop");
*/

// Promise.any()
// It returns the first fullfilled and ignores all the reject ones. If all of the promises gets rejected then it fails the whole promise.

/*
Promise.any([importantAction("Roadside Coder"), likeTheVideo("Javascript interview questions"), shareTheVideo("Javascript interview questions")])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error("Error: Promises failed", err);
  });

console.log("stop");
*/

//-----------------Async/await------------------------------------------------------------------------------

/*
console.log("start");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 100);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 500);
  });
}

const result = async () => {
  try {
    const message1 = await importantAction("Roadside Coder");
    console.log(message1);
    const message2 = await likeTheVideo("Javascript Interview Questions");
    console.log(message2);
    const message3 = await shareTheVideo("Javascript Interview Questions");
    console.log(message3);
  } catch (error) {
    console.error("Promises Failed", error);
  }
};

result();

console.log("stop");
*/

//---------------------------------------------Questions------------------------------------------

// Q1 - What's the output?

/*
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");
*/

/*
  Output :-
      start 
      1
      end
      2
*/

// Q2 - What's the output?

/*
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");
*/

/*
  Output :-
      start 
      1
      3
      end
      2
*/

// Q3 - What's the output?

/*
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  console.log(3);
});

promise1.then((res) => {
  console.log("Result:" + res);
});

console.log("end");
*/

/*
  Output :-
      start 
      1
      3
      end
*/

// Q4 - What's the output?

/*
console.log("start");

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

console.log("middle");

fn().then((res) => {
  console.log(res);
});

console.log("end");
*/

/*
  Output :-
      start
      middle
      1
      end
      success
*/

// Q5 - What's the output?

/*
function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise = job();

promise
  .then(function () {
    console.log("Success 1");
  })
  .then(function () {
    console.log("Success 2");
  })
  .then(function () {
    console.log("Success 3");
  })
  .catch(function () {
    console.log("Error 1");
  })
  .then(function () {
    console.log("Success 4");
  });
*/

/*
  Output :-
      Error 1
      Success 4
*/

// Q6 - What's the output?

/*
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise
  .then(function (data) {
    console.log(data);

    return job(false);
  })
  .catch(function (error) {
    console.log(error);

    return "Error caught";
  })
  .then(function (data) {
    console.log(data);

    return job(true);
  })
  .catch(function (error) {
    console.log(error);
  });
*/

/*
  Output :-
      
      success
      error
      Error caught
      
*/

// Q7 - What's the output?

/*
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true); // resolve("success")

promise
  .then(function (data) {
    console.log(data); // success

    return job(true);
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat";
    }
    return job(true);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error); // Defeat
    return job(false);
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch(function (error) {
    console.log(error);
    return "Error caught";
  })
  .then(function (data) {
    console.log(data);
    return new Error("test");
  })
  .then(function (data) {
    console.log("Success:", data.message);
  })
  .catch(function (data) {
    console.log("Error:", data.message);
  });
*/

/*
  Output :-
      success
      Defeat
      error
      Error caught
      Success: test
*/

//------------------------------------Promise Polyfill Implementation
