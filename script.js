
function login() { 
    let passpius = 12185697
    let passpaulin = 53225899
    let passhob = 20005483
    let passbruno = 56974420

    let usuario = document.getElementById("usuario").value
    let password = document.getElementById("senha").value
    
    if (usuario == "player" && password == passpius ) {
            alert("BEM VINDO GILDA!!")
            window.location.href = "pags/entrys/Aksuna/aksunaentry.html"
    } 
    
        else if (usuario == "player" && password == passpaulin ) {
            alert("BEM VINDO WILSON!!")
            window.location.href = "pags/entrys/Will/willentry.html"
    } 

        else if (usuario == "player" && password == passhob ) {
            alert("BEM VINDO APRENDIZ DO BRUNO!!")
            window.location.href = "pags/entrys/Drak/drakeentry.html"
    }

        else if (usuario == "player" && password == passbruno ) {
            alert("BEM VINDO NAMORADO DO RODRIGO!!")
            window.location.href = "pags/entrys/yomi/yomientry.html"
        } else{
            alert("usuario incorreto")
            }
}