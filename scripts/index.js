import Curso from "./clases/Curso.js"
import Profesor from "./clases/Profesor.js"
import Alumno from "./clases/Alumno.js"

const elem = document.getElementById("cursos")
// const elempro = document.getElementById("Profesores")
const elema = document.getElementById("Alumnos")



// imprime un curso en el Dom
// Recibe un objeto en tipo Curso.
function mostrarCurso(curso) {
const hijo = document.createElement("div")
hijo.classList.add("card")
hijo.innerHTML =  `
<div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
<img src="${curso.getPoster()}" alt="${curso.getNombre()}"/>
</div>
<div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
 <h3 class="t5 s-mb-0 s-center">${curso.getNombre()}</h3>
 <div class="s-center">
 <span>Cantidad de clases: ${curso.getClases()}</span>
 </div>
</div>
`

elem.appendChild(hijo)
}

const formulario = document.getElementById("formCursos")
formulario.addEventListener("submit", e => {
    e.preventDefault()
    const target = e.target
    const curso = new Curso(target.nombreCurso.value, target.posterCurso.value, target.clasesCurso.value)
    mostrarCurso(curso)

})




// imprime un curso en el Dom
// Recibe un objeto en tipo Curso.
function mostrarA(alumnos) {
    const hijo = document.createElement("div")
    hijo.classList.add("card")
    hijo.innerHTML =   `
    
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
     <h3 class="t5 s-mb-0 s-center">${alumnos.getNombre()}  ${alumnos.getApellido()}</h3>
     <h3 class="t5 s-mb-0 s-center">Correo :  ${alumnos.getCorreo()}</h3>
     <div class="s-center">
     <span>El estudiante esta: ${alumnos.getActivo() ? 'Activo' : 'Inactivo'}</span>
     </div>
    </div>
    `
    
    elema.appendChild(hijo)
    }

    const formu = document.getElementById("formAlumno")
    formu.addEventListener("submit", e => {
    e.preventDefault()
    const target = e.target
    const alu = new Alumno(target.nombreA.value, target.apellidoA.value, target.correoA.value, target.activoA.checked)
    console.log(alu)
    mostrarA(alu)

})