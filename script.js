const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelector('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function(event) {
    event.preventDefault()
    if(count == 1){
        return false
    }
    translateY += -400
    comment.style.transform = `translateY(${translateY}px)`
    count--
})

prev.addEventListener('click', function(event){
    event.preventDefault()
    if(count == 3){
        return false
    }
    translateY += 400
    comment.style.transform = `translateY(${translateY}px)`
    count++
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});