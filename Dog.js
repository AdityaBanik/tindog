// Create the Dog class here

class Dog{
    constructor(dogCallback){
        this.dogData = dogCallback()
        this.getDogElement = this.createDogCard()
    }
    
    createDogCard(){
        if(!this.dogData){
            const div = document.createElement('div')
            div.classList.add('card')
           
            div.textContent = 'No more dogs to show in your area'
            return div
        }
        
        const {avatar,name,age,bio} = this.dogData
        
        const div = document.createElement('div')
        div.classList.add('card')
        div.style.backgroundImage= `url(${avatar})`
      
            const dogInfo = document.createElement('h1')
            dogInfo.textContent = `${name}, ${age}`
            
            
            const aboutMe = document.createElement('p')
            aboutMe.classList.add('bio')
            aboutMe.textContent = bio 
            
            div.appendChild(dogInfo)
            div.appendChild(aboutMe)
        return div
    }
    
    liked(){
        if(!this.dogData){
            return undefined
        }
        this.dogData.hasBeenLiked = true
        this.dogData.hasBeenSwiped = true
        
        const like = document.createElement('p')
        like.classList.add('choice','like')
        like.textContent = 'Like'
        
        this.getDogElement.appendChild(like)
    }
    
    disliked(){
         if(!this.dogData){
            return undefined
        }
        
        this.dogData.hasBeenSwiped = true
        
        const dislike = document.createElement('p')
        dislike.classList.add('choice','dislike')
        dislike.textContent = 'nope'
        
        this.getDogElement.appendChild(dislike)
    }
    
}


export default Dog

// <div class="card">
//     <p class="choice like">Like</p>
//     <p class="choice dislike">Nope</p>
//     <h1>Name Age</h1>
//     <p class="bio">Hello i am cute</p>   
// </div>





