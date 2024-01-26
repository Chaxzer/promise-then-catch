// Create a new Promise that represents an asynchronous operation
let p1 = new Promise((resolve, reject) => {
  // Create a <div> element and set its id to 'pehla'
  let div = document.createElement('div');
  div.id = 'pehla';

  // Prepend the <div> element to the body of the HTML document
  document.body.prepend(div);

  // Set the inner HTML of the <div> to include an <h1> element with the text "here is first pizza"
  div.innerHTML = `<h1>"here is first pizza"</h1>`;

  // Use setTimeout to simulate an asynchronous operation after 2 seconds
  setTimeout(() => {
    // Append an <h1> element inside the element with the ID 'pehla' with the text "pizza finished"
    document.getElementById('pehla').appendChild(document.createElement("h1")).innerHTML = `pizza finished`;

    // Uncomment either 'resolve' or 'reject' to observe different outcomes
    
    resolve(true); // Uncomment to resolve the promise
    
    // reject(new Error("too much of a hungry panda ate pizza in 2s")); // Uncomment to reject the promise
  }, 2000);
});







// same code inside then
p1.then((value) =>{
let p2 = new Promise((resolve, reject) => {
  let div = document.createElement('div');
  div.id = 'dusra';
  document.body.appendChild(div);
  div.innerHTML = `<h1>"here is second pizza"</h1>`;


  setTimeout(() => {
    document.getElementById('dusra').appendChild(document.createElement("h1")).innerHTML = `second pizza finished`;
    // resolve(true);
    reject(new Error("too much of a hungry panda ate pizza in 2s"))
  }, 4000);
});


  //catch t6he error instead of fiving error in console
  //comment this to see the error in console
p2.catch((error) =>{
  console.log("u ate second pizza also?")
})

// Log the promise object to the console
console.log(p1, p2);

    });
