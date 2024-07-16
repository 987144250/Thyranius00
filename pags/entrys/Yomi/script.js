

cont = 1

function gatilho() {
    let music = document.getElementById('musica')
    
    if(cont < 2) {
        
        cont++
    }
    if(music.paused) {
        music.play()
    }
}

