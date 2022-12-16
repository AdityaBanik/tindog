// Remember to import the data and Dog class!

import dogsData from './data.js'
import Dog from './Dog.js'

const profileEl =  document.getElementById('current-profile')

const likeBtn = document.querySelector('#like')
const dislikeBtn = document.querySelector('#dislike')

likeBtn.addEventListener('click',liked)
dislikeBtn.addEventListener('click',disliked)


function liked(){
    dog.liked()
    getNewDog()
}


function disliked(){
    dog.disliked()
    getNewDog()
}


function toggleButtons(){
    likeBtn.disabled = !likeBtn.disabled
    dislikeBtn.disabled = !dislikeBtn.disabled
}



let dog = new Dog(fetchDog)



// Setting state of the app
function fetchDog(){
    const data = dogsData.filter(function(current){
        return current.hasBeenSwiped == false
    })[0]
    return data
}


function getNewDog(){
    toggleButtons()
    render() 
    
    setTimeout(function(){
        dog = new Dog(fetchDog)
        render() 
        toggleButtons()
    },1000)
}


function render(){
    const htmlDogEl = dog.getDogElement
   
    profileEl.textContent = ''
    profileEl.appendChild(htmlDogEl)
}

render()






