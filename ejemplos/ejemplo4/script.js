// Se incluyen logo y contenedor
const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.jpg';

const container = document.createElement('div');
container.setAttribute('class','container');
console.log(container);

app.appendChild(logo);
app.appendChild(container);

// Se comienzan a pedir datos
var request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    var data = JSON.parse(this.response);

    data.forEach(movie => {
        // console.log(movie.title);
        let titulo = document.createElement('h4');
        titulo.setAttribute('class','card');
        titulo.textContent = movie.title;
        let descripcion = document.createElement('p');
        descripcion.innerHTML = movie.description;
        container.appendChild(titulo);
        container.appendChild(descripcion);
    })
}

request.send();


