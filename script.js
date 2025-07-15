let datos = {};
let estado = JSON.parse(localStorage.getItem('estadoRamos')) || {};

function cargarMalla() {
  fetch('data/ramos.json')
    .then(res => res.json())
    .then(data => {
      datos = data;
      renderMalla();
    });
}

function renderMalla() {
  const container = document.getElementById('malla');
  container.innerHTML = '';

  datos.semestres.forEach(semestre => {
    const col = document.createElement('div');
    col.className = 'semestre';

    const titulo = document.createElement('h3');
    titulo.textContent = `Semestre ${semestre.numero}`;
    col.appendChild(titulo);

    semestre.ramos.forEach(ramo => {
      const div = document.createElement('div');
      div.textContent = ramo.nombre;
      div.className = 'ramo';
      div.dataset.id = ramo.id;

      const esCursado = estado[ramo.id] === 'cursado';
      const habilitado = ramo.prerrequisitos.every(p => estado[p] === 'cursado');

      if (esCursado) div.classList.add('cursado');
      else if (habilitado) div.classList.add('disponible');
      else div.classList.add('bloqueado');

      div.addEventListener('click', () => marcarRamo(ramo.id));
      col.appendChild(div);
    });

    container.appendChild(col);
  });
}

function marcarRamo(id) {
  if (estado[id] === 'cursado') {
    delete estado[id];
  } else {
    estado[id] = 'cursado';
  }
  localStorage.setItem('estadoRamos', JSON.stringify(estado));
  renderMalla();
}

function resetearMalla() {
  if (confirm('¿Estás seguro de que deseas resetear tu progreso?')) {
    estado = {};
    localStorage.removeItem('estadoRamos');
    renderMalla();
  }
}

document.getElementById('resetBtn').addEventListener('click', resetearMalla);

cargarMalla();
