const urlTodosPersonaje="https://thesimpsonsapi.com/api/characters";
const urlDetallePersonaje="https://thesimpsonsapi.com/api/characters/1";

let personajes=[];

const contenedor=document.querySelector("#contenedor")
const buscacador=document.querySelector("#buscador")

window.addEventListener("DOMContentLoaded", cargarPersonajes);

async function cargarPersonajes(){
    try{
        const respuesta=await fetch(urlTodosPersonaje);
        personajes= await respuesta.json();
        console.log(personajes)

        console.log("----------------------------")



        contenedor.innerHTML="";
        console.log(personajes.results)
        personajes.results.forEach(personaje=>{
            console.log(personaje)
            contenedor.innerHTML+=`
            <div class="card col-lg-3 m-2">
                <img
                src="https://cdn.thesimpsonsapi.com/500${personaje.portrait_path}"
                alt="${personaje.name}"
                style="object-fit: cover"
                 class="card-img-top"
            >
                <h3>${personaje.name}</h3>
                <p><strong>Ocupación:</strong> ${personaje.occupation}</p>
                <p><strong>Estado:</strong> ${personaje.status}</p>
                <button data-id="${personaje.id}">
                Ver detalle
                </button>
            </div>
            `;
        })

    }catch (error){
        
        
    }
    
    buscacador.addEventListener("input", ()=>{
        const texto=buscacador.value.toLowerCase();
        const filtro=personajes.filter(personaje=>
            personaje.name.toLowerCase().includes(texto)
        );       
    
    mostrarPersonajes(filtro)
    })
};