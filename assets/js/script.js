// Clase padre
class Multimedia {
    constructor(url) {    // Constructor
        let _url = url
        this._getUrl = () => _url
    }
    getUrl() {
        return this._getUrl()
    }
    setInicio() {    // Método
        return "Este método es para realizar un cambio en la URL del video"
    }
}
// Clase hija
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url) // accede a los parametros de la clase padre (Multimedia)
        this._id = document.getElementById(id) // atributo agregado
    } 
    // getters y setters (modificar atributos sin alterar los datos iniciales)
    setId(id) {
        this._id = id
    }
    getId() {
        return this._id
    }
    playMultimedia() {    // Método para iniciar video
        this._id.src = this.getUrl()
    }
    setInicio(tiempo) {    // Método para iniciar video en un tiempo específico
        this._id.setAttribute('src', this._id.src + `?start=${tiempo}`)
    }
}
// Instanciar la clase hija y proteger los atributos
const miVideo = (() => {
    const musica = new Reproductor('https://www.youtube.com/embed/DdyJm8TkTSA', 'musica') // Url y id
    const pelicula = new Reproductor('https://www.youtube.com/embed/O3DWc2vefy8', 'pelicula')
    const serie = new Reproductor('https://www.youtube.com/embed/jFSnx7EopcI', 'serie')
        return {
            ejecucionVideo: () => {
                musica.playMultimedia() // Invocar playMultimedia cada instancia
                musica.setInicio(20)
                pelicula.playMultimedia()
                pelicula.setInicio(20)
                serie.playMultimedia()
                serie.setInicio(20)
            },
        }
})()
miVideo.ejecucionVideo()