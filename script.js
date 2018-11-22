var i = 0;
var heart = document.querySelector('#heartbounce')
    heart.currentTime = 0;
    heart.pause()
document.querySelector('#heart').addEventListener('mousedown',function(){
    if(i < 14 ){
        this.style.cssText='transform:scale(2)'
        var heart = document.querySelector('#heartbounce')
        heart.volume=1.0
        heart.play()
        setTimeout(function(){
            var heart = document.querySelector('#heartbounce')
            heart.currentTime = 0;
            heart.pause()
        },500)
        i++
        console.log(i)
    }
    else{
        this.style.cssText='animation: pulse 1.5s ease-out;animation-iteration-count: infinite;'
    }
})
document.querySelector('#heart').addEventListener('mouseup',function(){
    if(i< 14)
        this.style.cssText='transform:scale(1)'
    else{
        document.querySelector('.battements')
        var heart = document.querySelector('#heartbounce')
        heart.volume=1.0
        heart.play()
    }
})