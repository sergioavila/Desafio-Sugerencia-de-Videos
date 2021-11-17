//Clase Multimedia
class Multimedia{
    constructor(url){
        this._url = url
    }
    get url(){
        return this._url
    }
    setInicio(){
        console.log('Este método es para realizar un cambio en la URL del video')
    }
}

//Clase Reproductor
class Reproductor extends Multimedia{
    constructor(id, url){
        super(url)
        this._id = id 
    }

    playMultimedia(){
        Player(this._url, this._id);
        console.log(this._id, this._url)
    }

    setInicio(time) {
        Player(`${this._url}?start=${time}`,this._id)
    }
}

//Player
const Player = (() => {
    const loadVideo = (url, id) => {
                var iframe = document.getElementById( id )
                console.log(iframe)
                iframe.setAttribute = ('src' , url)
            }
            const call = (url, id) => {
                loadVideo(url, id)
            }
        return call
    })()

document.addEventListener("DOMContentLoaded", function(event) {
    //Música
    let musica = new Reproductor("https://www.youtube.com/embed/qgaRVvAKoqQ", "musica")
    musica.playMultimedia()
    musica.setInicio(200)

    //Película
    let pelicula = new Reproductor("https://www.youtube.com/embed/ovcaSUhcC1s", "peliculas")
    pelicula.playMultimedia()

    //Serie
    let serie = new Reproductor("https://www.youtube.com/embed/eW7Twd85m2g", "series")
    serie.playMultimedia()
})