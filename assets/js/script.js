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
    }

    setInicio(time) {
        Player(`${this._url}?start=${time}`,this._id)
    }
}

//Player
const Player = (() => {
    const loadVideo = (url, id) => {
                var iframe = document.getElementById( id )
                console.log('URL: ',url)
                iframe.setAttribute = ('src' , url)
                console.log('IFRAME: ',iframe)
            }
            const call = (url, id) => {
                loadVideo(url, id)
            }
        return call
    })()


    //Música
    let musica = new Reproductor("musica", "https://www.youtube.com/embed/qgaRVvAKoqQ")
    musica.playMultimedia()
    musica.setInicio(200)

    //Película
    let pelicula = new Reproductor("peliculas", "https://www.youtube.com/embed/ovcaSUhcC1s")
    pelicula.playMultimedia()

    //Serie
    let serie = new Reproductor("series", "https://www.youtube.com/embed/eW7Twd85m2g")
    serie.playMultimedia()
