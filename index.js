const container = document.querySelector('#container');


document.addEventListener( 'DOMContentLoaded', () => {
        consultarApi();
} );

function consultarApi() {

    const key = '1nzTg2IdXlU3Rz951RwsbLnG3dWED7ybazYtF8KI';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&count=16`;
    

    fetch( url )
        .then(response => response.json() )
        .then( result => mostrarApi(result) )
        .catch( error => console.log(error, '¡Ha ocurrido un error!'))

}

function mostrarApi(resultado) {
    console.log(resultado)
    resultado.forEach( result => {
        

        const { date, hdurl, title, url,explanation } = result;

        container.innerHTML += /*html*/`
            
                <div class="col-md-3">
                    <div class="card h-100">
                    <img src=${hdurl} class="card-img-top img-fluid">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${explanation.substring(0,100)} ...</p>
                        <p class="card-text">${date}</p>
                        <a href=${url} class="btn btn-outline-warning ">See picture</a>
                    </div>
                    </div>
                </div>
        `
    } )
 
    
}

