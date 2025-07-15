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
  ]
  // Puedes continuar agregando más semestres aquí si quieres
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
