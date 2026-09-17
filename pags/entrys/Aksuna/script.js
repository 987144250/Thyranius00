

cont = 1

function play() {
    let music = document.getElementById('musica')
    
    if(cont < 2) {
        
        cont++
    }
    if(music.paused) {
        music.play()
    }
}

