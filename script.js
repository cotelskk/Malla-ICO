const malla = {
  "Semestre I": [
    { nombre: "Matemática I", prerrequisitos: "", color: "azul" },
    { nombre: "Programación", prerrequisitos: "", color: "verde" },
    { nombre: "Fundamentos de adm y neg I", prerrequisitos: "", color: "rosado" },
    { nombre: "Taller de comunicación I", prerrequisitos: "", color: "rosado" },
    { nombre: "Inglés I", prerrequisitos: "", color: "azul" }
  ],
  "Semestre II": [
    { nombre: "Matemática II", prerrequisitos: "Matemática I", color: "azul" },
    { nombre: "Microeconomía I", prerrequisitos: "", color: "verde" },
    { nombre: "Contabilidad I", prerrequisitos: "", color: "verde" },
    { nombre: "Fundamentos de adm y neg II", prerrequisitos: "Fundamentos de adm y neg I", color: "rosado" },
    { nombre: "Inglés II", prerrequisitos: "Inglés I", color: "azul" }
  ],
  "Semestre III": [
    { nombre: "Matemática III", prerrequisitos: "Matemática II", color: "azul" },
    { nombre: "Estadística I", prerrequisitos: "Programación, Matemática II", color: "verde" },
    { nombre: "Macroeconomía I", prerrequisitos: "Matemática I, Microeconomía I", color: "verde" },
    { nombre: "Tecnología y empresa", prerrequisitos: "Programación", color: "rosado" },
    { nombre: "Taller de comunicación II", prerrequisitos: "Taller de comunicación I", color: "rosado" },
    { nombre: "Inglés III", prerrequisitos: "Inglés II", color: "azul" }
  ],
  "Semestre IV": [
    { nombre: "Estadística II", prerrequisitos: "Estadística I", color: "verde" },
    { nombre: "Microeconomía II", prerrequisitos: "Matemática II, Microeconomía I", color: "verde" },
    { nombre: "Contabilidad II", prerrequisitos: "Contabilidad I, Tecnología y empresa", color: "verde" },
    { nombre: "Personas y equipos", prerrequisitos: "Fundamentos de adm y neg II", color: "rosado" },
    { nombre: "Taller de lid y trabajo en equi", prerrequisitos: "Fundamentos de adm y neg II, Taller de comunicación II", color: "rosado" },
    { nombre: "Inglés IV", prerrequisitos: "Inglés III", color: "azul" }
  ],
  "Semestre V": [
    { nombre: "Econometría I", prerrequisitos: "Matemática III, Estadística II", color: "azul" },
    { nombre: "Macroeconomía II", prerrequisitos: "Matemática III, Macroeconomía I", color: "verde" },
    { nombre: "Finanzas I", prerrequisitos: "Contabilidad II, Estadística II", color: "verde" },
    { nombre: "Estrategia", prerrequisitos: "Personas y equipos, Tecnología y empresa", color: "rosado" },
    { nombre: "Taller de ética en la toma de decisiones", prerrequisitos: "Personas y equipos, Taller de lid y trabajo en equi", color: "rosado" },
    { nombre: "Inglés V", prerrequisitos: "Inglés IV", color: "azul" }
  ],
  "Semestre VI": [
    { nombre: "Ciencia de datos", prerrequisitos: "Econometría I, Tecnología y empresa", color: "azul" },
    { nombre: "Globalización y sustentabilidad", prerrequisitos: "Estadística II, Macroeconomía II, Estrategia", color: "rosado" },
    { nombre: "Marketing", prerrequisitos: "Estadística II, Estrategia", color: "rosado" },
    { nombre: "Gestión de operaciones", prerrequisitos: "Estadística II, Estrategia", color: "rosado" },
    { nombre: "CFG I", prerrequisitos: "", color: "verde" }
  ],
  "Semestre VII": [
    { nombre: "Matemáticas para economía", prerrequisitos: "Ciencia de datos", color: "azul" },
    { nombre: "Econometría II", prerrequisitos: "Ciencia de datos", color: "azul" },
    { nombre: "Teoría de juego", prerrequisitos: "Microeconomía II, Globalización y sustentabilidad", color: "verde" },
    { nombre: "Crecimiento y desarrollo económico", prerrequisitos: "Macroeconomía II", color: "verde" },
    { nombre: "CFG II", prerrequisitos: "", color: "verde" }
  ],
  "Semestre VIII": [
    { nombre: "Ciencia de datos para economía", prerrequisitos: "Econometría II", color: "azul" },
    { nombre: "Economía de la información y competencia imperfecta", prerrequisitos: "Teoría de juego", color: "verde" },
    { nombre: "Política económica", prerrequisitos: "Crecimiento y desarrollo económico", color: "verde" },
    { nombre: "Taller de simulación económica", prerrequisitos: "Matemáticas para economía, Macroeconomía II", color: "rosado" },
    { nombre: "CFG III", prerrequisitos: "", color: "verde" }
  ],
  "Semestre IX": [
    { nombre: "ICO09OPT_EC1", prerrequisitos: "", color: "verde" },
    { nombre: "ICO09OPT_EC2", prerrequisitos: "", color: "verde" },
    { nombre: "ICO09OPT_EC3", prerrequisitos: "", color: "verde" },
    { nombre: "ICO09OPT_EC4", prerrequisitos: "", color: "verde" },
    { nombre: "CFG IV", prerrequisitos: "", color: "verde" }
  ],
  "Semestre X": [
    { nombre: "Práctica profesional mención economía", prerrequisitos: "", color: "rosado" },
    { nombre: "Desarrollo de carrera y E-portafolio", prerrequisitos: "", color: "rosado" }
  ]
};

const contenedor = document.getElementById('malla');
const infoBox = document.getElementById('info');

for (let semestre in malla) {
  let divSem = document.createElement('div');
  divSem.className = 'semestre';
  divSem.innerHTML = `<h2>${semestre}</h2>`;

  let divRamos = document.createElement('div');
  divRamos.className = 'ramos';

  malla[semestre].forEach(ramo => {
    let div = document.createElement('div');
    div.className = `ramo ${ramo.color}`;
    div.textContent = ramo.nombre;
    div.onclick = () => {
      infoBox.style.display = 'block';
      infoBox.innerHTML = `<strong>${ramo.nombre}</strong><br>Prerrequisitos: ${ramo.prerrequisitos || 'Ninguno'}`;
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };
    divRamos.appendChild(div);
  });

  divSem.appendChild(divRamos);
  contenedor.appendChild(divSem);
}

