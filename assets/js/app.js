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
        mostrarPersonajes(personajes);

    }catch (error){
        contenedor.innerHTML="";

        lista.forEach(personaje=>{
            tarjeta.classList.add("card");
            tarjeta.innerHTML=`
            <img
                src="https://cdn.thesimpsonsapi.com/500${personaje.image}"
                alt="${personaje.name}"
            >

            <h3>${personaje.name}</h3>

            <p><strong>Ocupación:</strong> ${personaje.occupation}</p>

            <p><strong>Estado:</strong> ${personaje.status}</p>

            <button data-id="${personaje.id}">
                Ver detalle
            </button>
            `;
            contenedor.appendChild(tarjeta)
        })
        
    }
    buscacador.addEventListener("input", ()=>{
        const texto=buscacador.value.toLowerCase();
        const filtro=personajes.filter(personaje=>
            personaje.name.toLowerCase().includes(texto)
        );       
    
    mostrarPersonajes(filtro)});