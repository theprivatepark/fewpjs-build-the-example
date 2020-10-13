// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//does not appear when the page first loads ---> before DOMCONTENTLOADED
//think about where you are locating certain objects
// does one need to create the object the event listener is triggered on?
//if it already exists, wait until it's created
//always make sure event listeners are called after the DOM is loaded****************!!!!!
// read yo error in the console !!!!!!!!!!!!!!!!!!!!!!!!
// add event listener takes in string and function
// fetch takes in string and hash
// after fetch, .then


//add class .hidden to error modal. 
document.querySelector("#modal").classList.add("hidden") 

//DCL is an event listener on the document
document.addEventListener("DOMContentLoaded", ()=>{
  likeButtonListener()
})


function likeButtonListener() {
  let allButtons = document.querySelectorAll(".like-glyph")
  allButtons.forEach(oneButton => oneButton.addEventListener("click", () => {
    //if heart is empty, do mimicservercall
    //if heart is full, change to empty heart
    if (oneButton.innerText == EMPTY_HEART) {
      mimicServerCall()
       .then(response => {
         oneButton.innerText = FULL_HEART
         oneButton.classList.add("activated-heart")
       })
       .catch(response => {
         document.querySelector("#modal").classList.remove("hidden")
         document.querySelector("#modal").innerText = response
         setTimeout(() => {document.querySelector("#modal").classList.add("hidden")}, 5000);
       })
    }
    else {
      oneButton.innerText = EMPTY_HEART
      oneButton.classList.remove("activated-heart")
    }
      

  }))
}

// params => console.log(params)
// () => {}
// function name() {}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
