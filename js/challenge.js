document.addEventListener('DOMContentLoaded', () => {
const counter = document.querySelector('#counter');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const heart = document.querySelector('#heart');
const likeCountObj = {}
const likesContainer = document.querySelector('.likes')
const commentsContainer = document.querySelector('#list')
const commentForm = document.querySelector('#comment-form')

window.setInterval((()=> counter.innerText++), 1000)
minus.addEventListener('click', () => {counter.innerText--});
plus.addEventListener('click', () => {counter.innerText++});

heart.addEventListener('click', () => {
    if (likeCountObj[counter.innerText]) {
        //increment counter p
        const pToEdit = document.querySelector(`#like${counter.innerText}`)
        likeCountObj[counter.innerText]++;
        pToEdit.innerText = `${counter.innerText} has been liked ${likeCountObj[counter.innerText]} times`;
    } else {
        likeCountObj[counter.innerText] = 1
        newP = document.createElement('p');
        newP.innerText = `${counter.innerText} has been liked 1 time.`
        newP.id = `like${counter.innerText}`
        likesContainer.appendChild(newP)
    }
})
    //get help on pause button.
    //comments enabler go here.
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const newP = document.createElement('p');
        newP.innerText = e.target.comment.value;
        commentsContainer.appendChild(newP);
        e.target.reset()
    })




});