const malla = {
  "Semestre I": [
    { nombre: "Matemática I", prerequisitos: [] },
    { nombre: "Programación", prerequisitos: [] },
    { nombre: "Fundamentos de adm y neg I", prerequisitos: [] },
    { nombre: "Taller de comunicación I", prerequisitos: [] },
    { nombre: "Inglés I", prerequisitos: [] }
  ],
  "Semestre II": [
    { nombre: "Matemática II", prerequisitos: ["Matemática I"] },
    { nombre: "Microeconomía I", prerequisitos: [] },
    { nombre: "Contabilidad I", prerequisitos: [] },
    { nombre: "Fundamentos de adm y neg II", prerequisitos: ["Fundamentos de adm y neg I"] },
    { nombre: "Inglés II", prerequisitos: ["Inglés I"] }
  ],
  "Semestre III": [
    { nombre: "Matemática III", prerequisitos: ["Matemática II"] },
    { nombre: "Estadística I", prerequisitos: ["Programación", "Matemática II"] },
    { nombre: "Macroeconomía I", prerequisitos: ["Matemática I", "Microeconomía I"] },
    { nombre: "Tecnología y empresa", prerequisitos: ["Programación"] },
    { nombre: "Taller de comunicación II", prerequisitos: ["Taller de comunicación I"] },
    { nombre: "Inglés III", prerequisitos: ["Inglés II"] }
  ],
  "Semestre IV": [
    { nombre: "Estadística II", prerequisitos: ["Estadística I"] },
    { nombre: "Microeconomía II", prerequisitos: ["Matemática II", "Microeconomía I"] },
    { nombre: "Contabilidad II", prerequisitos: ["Contabilidad I", "Tecnología y empresa"] },
    { nombre: "Personas y equipos", prerequisitos: ["Fundamentos de adm y neg II"] },
    { nombre: "Taller de lid y trabajo en equi", prerequisitos: ["Fundamentos de adm y neg II", "Taller de comunicación II"] },
    { nombre: "Inglés IV", prerequisitos: ["Inglés III"] }
  ],
  "Semestre V": [
    { nombre: "Econometría I", prerequisitos: ["Matemática III", "Estadística II"] },
    { nombre: "Macroeconomía II", prerequisitos: ["Matemática III", "Macroeconomía I"] },
    { nombre: "Finanzas I", prerequisitos: ["Contabilidad II", "Estadística II"] },
    { nombre: "Estrategia", prerequisitos: ["Personas y equipos", "Tecnología y empresa"] },
    { nombre: "Taller de ética en la toma de decisiones", prerequisitos: ["Personas y equipos", "Taller de lid y trabajo en equi"] },
    { nombre: "Inglés V", prerequisitos: ["Inglés IV"] }
  ],
  "Semestre VI": [
    { nombre: "Ciencia de datos", prerequisitos: ["Econometría I", "Tecnología y empresa"] },
    { nombre: "Globalización y sustentabilidad", prerequisitos: ["Estadística II", "Macroeconomía II", "Estrategia"] },
    { nombre: "Marketing", prerequisitos: ["Estadística II", "Estrategia"] },
    { nombre: "Gestión de operaciones", prerequisitos: ["Estadística II", "Estrategia"] },
    { nombre: "CFG I", prerequisitos: [] }
  ],
  "Semestre VII": [
    { nombre: "Matemáticas para economía", prerequisitos: ["Ciencia de datos"] },
    { nombre: "Econometría II", prerequisitos: ["Ciencia de datos"] },
    { nombre: "Teoría de juego", prerequisitos: ["Microeconomía II", "Globalización y sustentabilidad"] },
    { nombre: "Crecimiento y desarrollo económico", prerequisitos: ["Macroeconomía II"] },
    { nombre: "CFG II", prerequisitos: [] }
  ],
  "Semestre VIII": [
    { nombre: "Ciencia de datos para economía", prerequisitos: ["Econometría II"] },
    { nombre: "Economía de la información y competencia imperfecta", prerequisitos: ["Teoría de juego"] },
    { nombre: "Política económica", prerequisitos: ["Crecimiento y desarrollo económico"] },
    { nombre: "Taller de simulación económica", prerequisitos: ["Matemáticas para economía", "Macroeconomía II"] },
    { nombre: "CFG III", prerequisitos: [] }
  ],
  "Semestre IX": [
    { nombre: "ICO09OPT_EC1", prerequisitos: [] },
    { nombre: "ICO09OPT_EC2", prerequisitos: [] },
    { nombre: "ICO09OPT_EC3", prerequisitos: [] },
    { nombre: "ICO09OPT_EC4", prerequisitos: [] },
    { nombre: "CFG IV", prerequisitos: [] }
  ],
  "Semestre X": [
    { nombre: "Práctica profesional mención economía", prerequisitos: [] },
    { nombre: "Desarrollo de carrera y E-portafolio", prerequisitos: [] }
  ]
};

let aprobados = [];

function crearMalla() {
  const contenedor = document.getElementById("malla");
  for (const semestre in malla) {
    const columna = document.createElement("div");
    columna.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    columna.appendChild(titulo);

    malla[semestre].forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = ramo.nombre;
      div.onclick = () => manejarClick(ramo, div);
      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  }
}

function manejarClick(ramo, div) {
  const info = document.getElementById("info");

  if (div.classList.contains("tachado")) {
    div.classList.remove("tachado");
    aprobados = aprobados.filter(r => r !== ramo.nombre);
    info.textContent = `❌ Quitaste "${ramo.nombre}" de tu lista.`;
    info.style.display = "block";
    return;
  }

  const cumple = ramo.prerequisitos.every(req => aprobados.includes(req));
  if (!cumple && ramo.prerequisitos.length > 0) {
    info.textContent = `⚠️ No puedes cursar "${ramo.nombre}" aún. Prerrequisitos: ${ramo.prerequisitos.join(", ")}`;
    info.style.display = "block";
    return;
  }

  div.classList.add("tachado");
  aprobados.push(ramo.nombre);
  info.textContent = `✅ "${ramo.nombre}" marcado como aprobado.`;
  info.style.display = "block";
}

crearMalla();
