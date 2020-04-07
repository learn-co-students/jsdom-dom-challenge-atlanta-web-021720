//Global variable for Second Counter and Time 
let secCounter = document.querySelector("#counter")
let time = parseInt(document.querySelector("#counter").innerText)
let counterRun = true
let heartArray = []

//DOM Event Listener
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded....")
        //Start counter from abstract function 
    startCounter(time)
    renderHearts()
})

//Function to start counter 
function startCounter(time) {
    let submitBtn = document.querySelector("#submit")

    //Heart Button Functionality
    let heartBtn = document.querySelector("#heart")
    heartBtn.addEventListener("click", function(e) {
        e.preventDefault()
        if (heartArray.includes(time)) {
            console.log("time taken")
            let selectedHeart = document.getElementById(time)
            let likeAmount = parseInt(selectedHeart.querySelector("p").innerText.split(" ")[1]) + 1
            selectedHeart.querySelector("p").innerText = `Likes: ${likeAmount}`
        } else {
            heartArray.push(time)
            renderHeart(time)
        }
    })

    //Plus Button Functionality
    let plusBtn = document.querySelector("#plus")
    plusBtn.addEventListener("click", function(e) {
        time = time + 1
        console.log(time)
    })

    //Minus Button Functionality
    let minusBtn = document.querySelector("#minus")
    minusBtn.addEventListener("click", function(e) {
        time = time - 1
        console.log(time)
    })

    //Pause Button Functionality
    let pausebtn = document.querySelector("#pause")
    pausebtn.addEventListener("click", function(e) {
        if (counterRun === true) {
            pausebtn.innerText = "resume"
            minusBtn.disabled = true
            plusBtn.disabled = true
            heartBtn.disabled = true
            submitBtn.disabled = true
            console.log(`Time paused at: ${time - 1}`)
            counterRun = false
        } else {
            pausebtn.innerText = "pause"
            minusBtn.disabled = false
            plusBtn.disabled = false
            heartBtn.disabled = false
            submitBtn.disabled = false
            console.log(`Time resumed at: ${time - 1}`)
            counterRun = true
        }
    })
    setInterval(function() {
        if (time == 100) clearInterval(this);
        if (counterRun === true) {
            secCounter.innerText = (time++);
        }
    }, 1000);
}

//Comment Button Functionality
let commentForm = document.querySelector("#comment-form")
commentForm.addEventListener("submit", function(e) {
        e.preventDefault()
        let newComment = e.target.comment.value
        let newCommentSpan = document.createElement("span")
        newCommentSpan.style.display = "block"
        newCommentSpan.innerText = newComment
        let commentParent = document.querySelector("#list")
        commentParent.appendChild(newCommentSpan)
        commentForm.reset()
    })
    //Renders All Heart Likes
function renderHearts() {
    heartArray.forEach(heart => {
        renderHeart(heart)
    })
}

//Renders a single Heart Like
function renderHeart(heart) {
    let heartParent = document.querySelector(".likes")
    let newHeartLike = document.createElement("li")
    newHeartLike.innerText = `❤️ ${heart} ❤️`
    newHeartLike.id = heart
    let heartLikeAmount = document.createElement("p")
    heartLikeAmount.innerText = `Likes: 1`
    newHeartLike.appendChild(heartLikeAmount)
    heartParent.appendChild(newHeartLike)
}